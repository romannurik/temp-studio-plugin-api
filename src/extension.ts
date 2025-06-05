import * as vscode from "vscode";
import { Export as MonospacePluginExport, defineMonospacePlugin } from '@firebase-studio/plugin-sdk';
import ExampleAgent from "./example-agent";
import LiveProxyAgent from "./live-proxy-agent";
import path from 'path';

/**
 * VS Code extension entrypoint. All this VS Code extension does is expose an IDX plugin.
 */
export function activate(
  context: vscode.ExtensionContext
): MonospacePluginExport {
  const exampleAgentBundlePath = path.resolve(vscode.workspace.workspaceFolders![0].uri.fsPath, 'dist/example-agent.js');
  return {
    monospacePlugin: defineMonospacePlugin({
      loadAgents: () => [
        new ExampleAgent(),
        new LiveProxyAgent(exampleAgentBundlePath),
      ],
    }),
  };
}
