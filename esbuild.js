const esbuild = require("esbuild");
const { pushExtensionToIdx } = require("./idx-push");

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

const customEnv = {};

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
  name: 'esbuild-problem-matcher',

  setup(build) {
    build.onStart(() => {
      console.log('[watch] build started');
    });
    build.onEnd((result) => {
      result.errors.forEach(({ text, location }) => {
        console.error(`✘ [ERROR] ${text}`);
        console.error(`    ${location.file}:${location.line}:${location.column}:`);
      });
      console.log('[watch] build finished');
      pushExtensionToIdx();
    });
  },
};

async function main() {
  const ctx = await esbuild.context({
    entryPoints: [
      'src/extension.ts',
      'src/example-agent.tsx'
    ],
    bundle: true,
    format: 'cjs',
    minify: production,
    sourcemap: !production,
    sourcesContent: false,
    platform: 'node',
    chunkNames: 'chunks/[name]-[hash]',
    outdir: 'dist',
    external: ['vscode'],
    logLevel: 'silent',
    define: Object.fromEntries(Object.entries(customEnv).map(
      ([k, v]) => [`process.env.${k}`, JSON.stringify(v)])),
    plugins: [
      /* add to the end of plugins array */
      esbuildProblemMatcherPlugin,
    ],
  });
  if (watch) {
    await ctx.watch();
  } else {
    await ctx.rebuild();
    await ctx.dispose();
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
