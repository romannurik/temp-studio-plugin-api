const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);
const packageJson = require('./package.json');

const DEBOUNCE_MS = 1000;
let pushTimeout = 0;
let pushAbort = new AbortController();

exports.pushExtensionToIdx = async () => {
  pushTimeout && clearTimeout(pushTimeout);
  pushTimeout = setTimeout(() => {
    pushAbort?.abort();
    pushAbort = new AbortController();
    _pushExtensionToIdx(pushAbort.signal);
  }, DEBOUNCE_MS);
}

async function _pushExtensionToIdx(signal) {
  try {
    console.log('Repackaging extension...');
    const fqExtensionId = `${packageJson.publisher || 'undefined_publisher'}.${packageJson.name}`;
    await execPromise(`npx @vscode/vsce package --allow-missing-repository --skip-license 0.0.0`, {signal});
    await execPromise(`code --uninstall-extension ${fqExtensionId}`, {signal});
    await execPromise(`code --install-extension ${packageJson.name}-0.0.0.vsix --force`, {signal});
    console.log('Reinstalled extension (refresh the browser to try it)');
    process.stdout.write('\u0007'); // sound the terminal bell
  } catch (e) {
    if (e.constructor.name === 'AbortError') {
      // no-op
    } else {
      console.error(e);
    }
  }
};