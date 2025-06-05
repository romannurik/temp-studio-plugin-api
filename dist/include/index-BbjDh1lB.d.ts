/// <reference types="node" />
import { Action, Button, CodeSnippet, CodiconName, Expandable, FileChanges, FileLabel, Icon, Label, Markdown, Node, PropsWithChildren, StatusIcon, StepPlan, StepProgressLabel, TextField } from "./jsx-runtime-B22R_Wsu.js";

//#region src/internal/util.d.ts
type MaybePromise<T> = T | Promise<T>;
type MaybeDisposable = {
  dispose?(): any;
};

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
//#region src/ai/api.d.ts
type JSONValue = any;
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
  type: 'progress';
  label: string;
} | {
  type: 'task';
  taskId: string;
} | {
  type: 'ui';
  ui: Node;
} | {
  type: 'citation';
  citation: Citation;
} | ToolMessagePart | ErrorMessagePart>;
type ErrorMessagePart = {
  readonly type: 'error';
  readonly message: string;
  readonly details?: string;
  readonly actions?: [string, Action][];
  readonly severity?: 'error' | 'warning' | 'info';
};
type ToolMessagePart = {
  readonly type: 'tool';
  readonly toolId: string;
  readonly toolData: Record<string, JSONValue>;
  readonly state: 'running' | 'waiting' | 'accepted' | 'rejected' | 'failed';
  readonly input?: JSONValue;
  readonly ui?: Node;
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
type AutoApplyConfig = undefined | true;
interface PromptRequest {
  readonly thread: ChatThread;
  readonly reason: PromptReason;
  readonly response: PromptResponseStream;
  readonly host: AgentHost;
  readonly signal?: AbortSignal;
  readonly autoApply?: AutoApplyConfig;
}
type PromptResponseStreamMark = number;
type ErrorInfo = Omit<ErrorMessagePart, 'type'>;
interface PromptResponseStream {
  readonly agentData: StateStore;
  mark(): PromptResponseStreamMark;
  reset(): void;
  resetToMark(mark: PromptResponseStreamMark): void;
  progress(label: string): void;
  thinking(label: string): void;
  markdown(markdown: string): void;
  error(error: string | ErrorInfo): void;
  finishThread(output?: JSONValue): void;
  subthread(agentId: string, agentInput?: JSONValue): void;
  tool(toolId: string, input?: JSONValue): void;
  suggestNextPrompts(...prompts: string[]): void;
  citation(citation: Citation): void;
  ui(ui: Node | null): void;
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
  thinking(label: string): void;
  ui(ui: Node | null): void;
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
  onUnload?(host: AgentHost): void;
  onAction?(request: PromptRequest, action: string, args: any): MaybePromise<void>;
  onThumbFeedback?(message: ChatMessage, feedback: ChatMessageFeedback): void;
  onExternalContextEvent?(event: ExternalContextEvent): MaybePromise<SuggestedPrompt[]>;
}
interface Tool extends ToolMetadata, MaybeDisposable {
  initialThinkingText: string | ((request: ToolRunRequest) => string);
  run(request: ToolRunRequest): MaybePromise<void>;
  onLoad?(host: AgentHost): void;
  onUnload?(host: AgentHost): void;
  onAction?(request: ToolRunRequest, action: string, args: any): MaybePromise<void>;
}
interface AgentHost {
  queryTools(idPatterns: string[]): ToolMetadata[];
  queryAgents(idPatterns: string[]): AgentMetadata[];
  getTool(id: string): Tool | undefined;
  getAgent(id: string): Agent | undefined;
}

//#endregion
//#region src/ai/jsx.d.ts
/**
 * A dictionary of all available Integrations UI components for use in JSX
 */
declare const UI: {
  readonly Fragment: any;
  readonly Label: (props: Omit<Label, 'type'>) => {
    label: string;
    secondary?: boolean;
    level?: 1 | 2 | 3;
    key?: string;
    type: "label";
  };
  readonly Button: (props: Omit<Button, 'type'>) => {
    label: string;
    key?: string;
    primary?: boolean;
    small?: boolean;
    disabled?: boolean;
    onclick: Action;
    shortcut?: "secondary" | "default";
    alwaysAvailable?: boolean;
    type: "button";
  };
  readonly Icon: (props: Omit<Icon, 'type'>) => {
    icon: CodiconName;
    key?: string;
    type: "icon";
  };
  readonly CodeSnippet: (props: Omit<CodeSnippet, 'type'>) => {
    key?: string;
    code: string;
    terminal?: boolean;
    lang?: string;
    filePath?: string;
    diffAgainstCode?: string;
    showLineNumbers?: boolean;
    startCollapsed?: boolean;
    streaming?: boolean;
    type: "codeSnippet";
  };
  readonly StepPlan: (props: Omit<StepPlan, 'type'>) => {
    key: string;
    defaultSelected?: string[];
    steps: string[];
    onchange?: Action;
    threadStateKey?: string;
    type: "stepPlan";
  };
  readonly StepProgressLabel: (props: Omit<StepProgressLabel, 'type'>) => {
    label: string;
    key?: string;
    status: "error" | "success" | "running" | "pending" | "blocked";
    detail?: string;
    type: "stepProgressLabel";
  };
  readonly StatusIcon: (props: Omit<StatusIcon, 'type'>) => {
    key?: string;
    status: "error" | "success" | "running" | "blocked";
    type: "statusIcon";
  };
  readonly TextField: (props: Omit<TextField, 'type'>) => {
    key: string;
    onchange?: Action;
    threadStateKey?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    type: "textField";
  };
  readonly FileLabel: (props: Omit<FileLabel, 'type'>) => {
    key?: string;
    filePath: string;
    showPath?: boolean;
    op: "info" | "delete" | "modify";
    type: "fileLabel";
  };
  readonly HStack: ({
    children,
    ...props
  }: PropsWithChildren) => {
    children: Node[];
    type: "hStack";
  };
  readonly VStack: ({
    children,
    ...props
  }: PropsWithChildren) => {
    children: Node[];
    type: "vStack";
  };
  readonly FileChanges: (props: Omit<FileChanges, 'type'>) => {
    key?: string;
    files: {
      readonly filePath: string;
      readonly status: "working" | "done";
      readonly op: "info" | "delete" | "modify";
      readonly diffAdded?: number;
      readonly diffRemoved?: number;
    }[];
    type: "fileChanges";
  };
  readonly Markdown: (props: Omit<Markdown, 'type'>) => {
    markdown: string;
    key?: string;
    type: "markdown";
  };
  readonly Expandable: ({
    children,
    ...props
  }: Omit<Expandable, 'type' | 'children'> & PropsWithChildren) => {
    children: Node[];
    key?: string;
    summary: Node;
    type: "expandable";
  };
};

//#endregion
//#region src/ai/util.d.ts
interface ParsedPrompt {
  agentHandle?: string;
  slashCommand?: string;
  prompt: string;
  empty: boolean;
}
/**
 * Extracts leading slash commands and agent handles from a user ChatMessage or string.
 */
declare function parseUserPrompt(prompt: ChatMessage | string | undefined): ParsedPrompt;
/**
 * Extracts the text from a `ChatMessage`, ignoring any non-markdown/text parts in the message,
 * attachments, etc.
 */
declare function messageText(message: ChatMessage): string;
/**
 * Flattens a `ChatThread` tree into an array of `ChatMessage` objects. If a `ChatThread`'s history
 * includes subthreads, the messages in those subthreads will be recursively flattened into the
 * array. This discards any thread start inputs or thread completion outputs.
 */
declare function flattenThread(thread: ChatThread): ChatMessage[];
/**
 * Finds the root thread of a `ChatThread`, which is typically either its direct parent or the
 * provided thread itself.
 */
declare function rootThread(thread: ChatThread): ChatThread;

//#endregion
export { Agent, AgentCommand, AgentHost, AgentMetadata, AgentSpeaker, Attachment, AutoApplyConfig, ChatMessage, ChatMessageFeedback, ChatMessagePart, ChatSpeaker, ChatThread, ChatThreadMetadata, Citation, DrawingAttachment, ErrorInfo, ErrorMessagePart, ExternalContextEvent, FileAttachment, GetAvailableCommandsRequest, ImageAttachment, MaybePromise, PromptReason, PromptRequest, PromptResponseStream, PromptResponseStreamMark, StateStore, StoredChatThread, SuggestedPrompt, Tool, ToolMessagePart, ToolMetadata, ToolRunRequest, ToolRunResponse, UI, UserSpeaker, flattenThread, messageText, parseUserPrompt, rootThread };