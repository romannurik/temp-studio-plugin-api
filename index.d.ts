/// <reference types="node" />
import { __export } from "./include/chunk-CNd5NyFM.js";
import { Action, Button, ChildrenMixin, CodeSnippet, FileLabel, HStack, Icon, Label, Node, ProgressRing, StepPlan, StepProgressLabel, TextField, VStack } from "./include/components-BI8nW9ij.js";

//#region src/aiui/index.d.ts
declare namespace index_d_exports$1 {
  export { Action, Button, ChildrenMixin, CodeSnippet, FileLabel, HStack, Icon, Label, Node, ProgressRing, StepPlan, StepProgressLabel, TextField, VStack };
}
//#endregion
//#region src/internal/util.d.ts
type MaybePromise<T> = T | Promise<T>;
type MaybeDisposable = {
  dispose?(): any;
};
type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };

//#endregion
//#region src/ai/json-schema.d.ts
interface BaseSchema {
  type: 'number' | 'integer' | 'string' | 'boolean' | 'array' | 'object';
  description?: string;
  nullable?: boolean;
}
interface NumberSchema extends BaseSchema {
  type: 'number';
  format?: 'float' | 'double';
}
interface IntegerSchema extends BaseSchema {
  type: 'integer';
  format?: 'int32' | 'int64';
}
interface StringSchema extends BaseSchema {
  type: 'string';
}
interface EnumSchema extends BaseSchema {
  type: 'string';
  format: 'enum';
  enum: string[];
}
interface BooleanSchema extends BaseSchema {
  type: 'boolean';
}
interface ArraySchema extends BaseSchema {
  type: 'array';
  items?: ValueSchema;
}
interface ObjectSchema extends BaseSchema {
  type: 'object';
  properties?: Record<string, ValueSchema>;
  required?: readonly string[];
}
type ValueSchema = NumberSchema | IntegerSchema | StringSchema | EnumSchema | BooleanSchema | ArraySchema | ObjectSchema;

//#endregion
//#region src/ai/ai-api.d.ts
type JSONValue = any;
type UINode = Node;
type UIAction = Action;
interface StateStore<StateDict extends Record<string, JSONValue> = Record<string, JSONValue>> {
  toDict(): Partial<StateDict>;
  get<K extends keyof StateDict>(key: K): StateDict[K] | undefined;
  set<K extends keyof StateDict>(key: K, value: StateDict[K]): void;
  delete<K extends keyof StateDict>(key: K): void;
  update(updates: Partial<StateDict>): void;
  clear(): void;
  serialize(): Record<string, JSONValue>;
}
interface ChatThreadMetadata {
  readonly uuid: string;
  readonly agentId: string;
  readonly status: 'ready' | 'thinking' | 'complete';
  readonly title: string;
  readonly lastEditTimestamp: number;
  readonly agentInput?: JSONValue;
  readonly completionOutput?: JSONValue;
}
type SuggestedPrompt = string | Readonly<{
  prompt: string;
  label: string;
  type: 'default' | 'fix';
}>;
interface ChatThread extends ChatThreadMetadata {
  readonly history: (ChatMessage | (ChatThread & {
    readonly type: 'subthread';
  }))[];
  readonly state: StateStore;
  readonly suggestedPrompts: SuggestedPrompt[];
  readonly parentThread?: ChatThread;
}
type StoredChatThread = Omit<ChatThread, 'state' | 'parentThread' | 'history'> & {
  readonly state: Record<string, JSONValue>;
  readonly history: (ChatMessage | (StoredChatThread & {
    readonly type: 'subthread';
  }))[];
};
interface UserSpeaker {
  readonly type: 'user';
  readonly shortName?: string;
  readonly displayName: string;
  readonly icon?: string;
}
interface AgentSpeaker {
  readonly type: 'agent';
  readonly displayName: string;
  readonly icon: string;
  readonly agentId: string;
  readonly handle: string;
}
type ChatSpeaker = UserSpeaker | AgentSpeaker;
interface DrawingAttachment {
  readonly type: 'drawing';
  readonly pngBase64: string;
  readonly excalidrawData?: any;
}
interface ImageAttachment {
  readonly type: 'image';
  readonly pngBase64: string;
}
interface FileAttachment {
  readonly type: 'file';
  readonly filePath: string;
}
type Attachment = DrawingAttachment | ImageAttachment | FileAttachment;
interface ChatMessage {
  readonly type: 'message';
  readonly uuid: string;
  readonly speaker: ChatSpeaker;
  readonly body: ChatMessagePart[];
  readonly debugInfo?: string;
  readonly uiData?: Record<string, JSONValue>;
  readonly agentData: Record<string, JSONValue>;
  readonly attachments?: Attachment[];
}
type ChatMessagePart = Readonly<{
  type: 'markdown';
  markdown: string;
  userVisibleMarkdown?: string;
} | {
  type: 'error';
  error: string;
  details?: string;
  retryAction?: UIAction;
} | {
  type: 'progress';
  label: string;
} | {
  type: 'task';
  taskId: string;
} | {
  type: 'ui';
  ui: UINode;
} | {
  type: 'citation';
  citation: Citation;
} | ToolMessagePart>;
type ToolMessagePart = {
  readonly type: 'tool';
  readonly toolId: string;
  readonly toolData: Record<string, JSONValue>;
  readonly state: 'running' | 'waiting' | 'accepted' | 'rejected' | 'failed';
  readonly input?: JSONValue;
  readonly ui?: UINode;
  readonly result?: JSONValue;
};
type PromptReasonBase = {
  readonly newUserMessage?: undefined;
  readonly toolCompleted?: undefined;
  readonly action?: undefined;
  readonly startSubthreadWithInput?: undefined;
  readonly subthreadCompleted?: undefined;
};
type PromptReason = Readonly<({
  newUserMessage: ChatMessage;
  alsoRejectTool?: ToolMessagePart;
} & Omit<PromptReasonBase, 'newUserMessage'>) | ({
  toolCompleted: ToolMessagePart;
} & Omit<PromptReasonBase, 'toolCompleted'>) | ({
  subthreadCompleted: ChatThread;
} & Omit<PromptReasonBase, 'subthreadCompleted'>) | ({
  action: string;
  actionArgs?: JSONValue;
} & Omit<PromptReasonBase, 'action'>) | ({
  startSubthreadWithInput: JSONValue;
} & Omit<PromptReasonBase, 'startSubthreadWithInput'>)>;
interface PromptRequest {
  readonly thread: ChatThread;
  readonly reason: PromptReason;
  readonly response: PromptResponseStream;
  readonly host: AgentHost;
  readonly signal?: AbortSignal;
}
type PromptResponseStreamMark = number;
interface PromptResponseStream {
  readonly agentData: StateStore;
  mark(): PromptResponseStreamMark;
  reset(): void;
  resetToMark(mark: PromptResponseStreamMark): void;
  progress(label: string): void;
  markdown(markdown: string): void;
  error(error: any, details?: string, retryAction?: UIAction): void;
  finishThread(output?: JSONValue): void;
  subthread(agentId: string, agentInput?: JSONValue): void;
  tool(toolId: string, input?: JSONValue): void;
  suggestNextPrompts(...prompts: string[]): void;
  citation(citation: Citation): void;
  ui(ui: UINode | null): void;
}
interface AgentMetadata {
  readonly id: string;
  readonly handle: string;
  readonly displayName: string;
  readonly description: string;
  readonly icon: string;
  /**
   * Optional input (e.g. a specification of what to do) that the agent would accept.
   */
  readonly input?: ValueSchema;
  /**
   * Optional output (e.g. a specification of what to do) that the agent would accept.
   */
  readonly output?: ValueSchema;
}
interface ToolMetadata {
  readonly id: string;
  readonly description: string;
  readonly inputSchema?: ValueSchema;
}
interface ToolRunRequest {
  readonly input?: JSONValue;
  readonly response: ToolRunResponse;
  readonly signal?: AbortSignal;
}
interface ToolRunResponse {
  readonly toolData: StateStore;
  progress(label: string): void;
  ui(ui: UINode | null): void;
  accept(result?: JSONValue): void;
  reject(result?: JSONValue): void;
  fail(error?: JSONValue): void;
  citation(citation: Citation): void;
}
interface ChatMessageFeedback {
  readonly type: 'good' | 'bad';
  readonly reasonCodes?: string[];
  readonly freeformText?: string;
}
type Citation = Readonly<{
  filePath: string;
  folder?: true;
  lineStart?: number;
  lineEnd?: number;
} | {
  webUrl: string;
  license?: string;
}>;
type AgentCommand = Readonly<{
  command: string;
  description: string;
} | {
  prompt: string;
}>;
interface GetAvailableCommandsRequest {
  readonly thread?: ChatThread;
  readonly host: AgentHost;
}
type ExternalContextEvent = {
  readonly type: 'app-error';
  readonly errorMessage: string;
};
interface Agent extends AgentMetadata, MaybeDisposable {
  prompt(request: PromptRequest): MaybePromise<void>;
  getAvailableCommands?(request: GetAvailableCommandsRequest): MaybePromise<AgentCommand[]>;
  onLoad?(host: AgentHost): void;
  onAction?(request: PromptRequest, action: string, args: JSONValue): MaybePromise<void>;
  onThumbFeedback?(message: ChatMessage, feedback: ChatMessageFeedback): void;
  onExternalContextEvent?(event: ExternalContextEvent): MaybePromise<SuggestedPrompt[]>;
}
interface Tool extends ToolMetadata, MaybeDisposable {
  initialProgressText(request: ToolRunRequest): string;
  run(request: ToolRunRequest): MaybePromise<void>;
  onLoad?(host: AgentHost): void;
  onAction?(request: ToolRunRequest, action: string, args: JSONValue): MaybePromise<void>;
}
interface AgentHost {
  queryTools(idPatterns: string[]): ToolMetadata[];
  queryAgents(idPatterns: string[]): AgentMetadata[];
  getTool(id: string): Tool | undefined;
  getAgent(id: string): Agent | undefined;
}

//#endregion
//#region src/ai/util.d.ts
interface ParsedPrompt {
  agentHandle?: string;
  slashCommand?: string;
  prompt: string;
  empty: boolean;
}
declare function parseUserPrompt(prompt: DeepReadonly<ChatMessage> | string | undefined): ParsedPrompt;

//#endregion
//#region src/ai/index.d.ts
declare namespace index_d_exports {
  export { Agent, AgentCommand, AgentHost, AgentMetadata, AgentSpeaker, Attachment, ChatMessage, ChatMessageFeedback, ChatMessagePart, ChatSpeaker, ChatThread, ChatThreadMetadata, Citation, DrawingAttachment, ExternalContextEvent, FileAttachment, GetAvailableCommandsRequest, ImageAttachment, PromptReason, PromptRequest, PromptResponseStream, PromptResponseStreamMark, StateStore, StoredChatThread, SuggestedPrompt, Tool, ToolMessagePart, ToolMetadata, ToolRunRequest, ToolRunResponse, UserSpeaker, parseUserPrompt };
}
//#endregion
//#region src/plugin-api.d.ts
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
declare function defineMonospacePlugin(plugin: Plugin): Plugin;

//#endregion
export { Export, PackageJSONAddons, Plugin, SupportedFeature, index_d_exports as ai, index_d_exports$1 as aiui, defineMonospacePlugin };