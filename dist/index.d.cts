import { Agent, MaybePromise, Tool } from "./include/index-BgO06zA6.js";

//#region src/plugin-api.d.ts
/**
* API to be implemented by plugins
*/
/**
 * API to be implemented by plugins
 */
interface Plugin {
  loadAgents?(): MaybePromise<Agent[]>;
  loadTools?(): MaybePromise<Tool[]>;
}
type SupportedFeature = 'ai';
type PackageJSONAddons = {
  monospacePlugin: {
    /**
     * Semver
     */
    apiVersion: string;
    features: SupportedFeature[];
  };
};
/**
 * The interface an IDX plugin is expected to return (return an object of this shape from its
 * `activate()` function.
 */
interface Export {
  monospacePlugin: Plugin;
}
/**
 * Helper method for IDX plugins to export the right object shape from its `activate()` function.
 */
declare function defineMonospacePlugin(plugin: Plugin): Plugin; //#endregion
export { Export, PackageJSONAddons, Plugin, SupportedFeature, defineMonospacePlugin };