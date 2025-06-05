import * as fsai from '@firebase-studio/plugin-sdk/ai';

export default class LiveProxyAgent implements fsai.Agent {
  id = "LiveProxy";
  handle = "@Live" as const;
  displayName = "Live Proxy";
  description = "An agent that proxies to another without requiring browser refresh";
  icon = "codicon:symbol-event";

  constructor(private modulePath: string) { }

  prompt(...args: any) {
    // currently a stub implementation
    delete require.cache[require.resolve(this.modulePath)]
    let { default: agentClass } = require(this.modulePath);
    let agent = new agentClass();
    return agent.prompt(...args);
  }

  onAction(...args: any) {
    // currently a stub implementation
    delete require.cache[require.resolve(this.modulePath)]
    let { default: agentClass } = require(this.modulePath);
    let agent = new agentClass();
    return agent.onAction?.(...args);
  }

  getAvailableCommands(...args: any) {
    // currently a stub implementation
    delete require.cache[require.resolve(this.modulePath)]
    let { default: agentClass } = require(this.modulePath);
    let agent = new agentClass();
    return agent.getAvailableCommands?.(...args);
  }
}
