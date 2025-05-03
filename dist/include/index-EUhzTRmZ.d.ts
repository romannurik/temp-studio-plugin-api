/// <reference types="node" />

//#endregion
//#region src/ai/ui/core.d.ts
/**
 * Type representing extensions to the system, i.e. non-core UI node types and action types.
 */
type Ext = {
  action: unknown;
  node: unknown;
};
type Action = Readonly<{
  action: string;
  args?: any;
  stateUpdates?: Record<string, any>;
} | {
  command: string;
  args?: any[];
} | {
  builtinAction: 'regenerate';
} | {
  href: string;
}>;
interface BaseNode {
  readonly key?: string;
}
interface ChildrenMixin$1<C> {
  readonly children: C[];
}
interface StatefulMixin {
  readonly key: string;
}
interface Fragment<C> extends BaseNode, ChildrenMixin$1<C> {
  readonly type: 'fragment';
} //#endregion
//#region src/ai/ui/icons.d.ts
type IconName = CodiconName;
type CodiconName = 'account' | 'activate-breakpoints' | 'add' | 'archive' | 'arrow-both' | 'arrow-circle-down' | 'arrow-circle-left' | 'arrow-circle-right' | 'arrow-circle-up' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-small-down' | 'arrow-small-left' | 'arrow-small-right' | 'arrow-small-up' | 'arrow-swap' | 'arrow-up' | 'azure-devops' | 'azure' | 'beaker-stop' | 'beaker' | 'bell-dot' | 'bell-slash-dot' | 'bell-slash' | 'bell' | 'blank' | 'bold' | 'book' | 'bookmark' | 'bracket-dot' | 'bracket-error' | 'briefcase' | 'broadcast' | 'browser' | 'bug' | 'calendar' | 'call-incoming' | 'call-outgoing' | 'case-sensitive' | 'check-all' | 'check' | 'checklist' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chip' | 'chrome-close' | 'chrome-maximize' | 'chrome-minimize' | 'chrome-restore' | 'circle-filled' | 'circle-large-filled' | 'circle-large' | 'circle-slash' | 'circle-small-filled' | 'circle-small' | 'circle' | 'circuit-board' | 'clear-all' | 'clippy' | 'close-all' | 'close' | 'cloud-download' | 'cloud-upload' | 'cloud' | 'code' | 'coffee' | 'collapse-all' | 'color-mode' | 'combine' | 'comment-discussion' | 'comment-draft' | 'comment-unresolved' | 'comment' | 'compass-active' | 'compass-dot' | 'compass' | 'copilot' | 'copy' | 'credit-card' | 'dash' | 'dashboard' | 'database' | 'debug-all' | 'debug-alt-small' | 'debug-alt' | 'debug-breakpoint-conditional-unverified' | 'debug-breakpoint-conditional' | 'debug-breakpoint-data-unverified' | 'debug-breakpoint-data' | 'debug-breakpoint-function-unverified' | 'debug-breakpoint-function' | 'debug-breakpoint-log-unverified' | 'debug-breakpoint-log' | 'debug-breakpoint-unsupported' | 'debug-console' | 'debug-continue-small' | 'debug-continue' | 'debug-coverage' | 'debug-disconnect' | 'debug-line-by-line' | 'debug-pause' | 'debug-rerun' | 'debug-restart-frame' | 'debug-restart' | 'debug-reverse-continue' | 'debug-stackframe-active' | 'debug-stackframe' | 'debug-start' | 'debug-step-back' | 'debug-step-into' | 'debug-step-out' | 'debug-step-over' | 'debug-stop' | 'debug' | 'desktop-download' | 'device-camera-video' | 'device-camera' | 'device-mobile' | 'diff-added' | 'diff-ignored' | 'diff-modified' | 'diff-removed' | 'diff-renamed' | 'diff' | 'discard' | 'edit' | 'editor-layout' | 'ellipsis' | 'empty-window' | 'error-small' | 'error' | 'exclude' | 'expand-all' | 'export' | 'extensions' | 'eye-closed' | 'eye' | 'feedback' | 'file-binary' | 'file-code' | 'file-media' | 'file-pdf' | 'file-submodule' | 'file-symlink-directory' | 'file-symlink-file' | 'file-zip' | 'file' | 'files' | 'filter-filled' | 'filter' | 'flame' | 'fold-down' | 'fold-up' | 'fold' | 'folder-active' | 'folder-library' | 'folder-opened' | 'folder' | 'game' | 'gear' | 'gift' | 'gist-secret' | 'git-commit' | 'git-compare' | 'git-fetch' | 'git-merge' | 'git-pull-request-closed' | 'git-pull-request-create' | 'git-pull-request-draft' | 'git-pull-request-go-to-changes' | 'git-pull-request-new-changes' | 'git-pull-request' | 'github-action' | 'github-alt' | 'github-inverted' | 'github' | 'globe' | 'go-to-file' | 'grabber' | 'graph-left' | 'graph-line' | 'graph-scatter' | 'graph' | 'gripper' | 'group-by-ref-type' | 'heart-filled' | 'heart' | 'history' | 'home' | 'horizontal-rule' | 'hubot' | 'inbox' | 'indent' | 'info' | 'insert' | 'inspect' | 'issue-draft' | 'issue-reopened' | 'issues' | 'italic' | 'jersey' | 'json' | 'kebab-vertical' | 'key' | 'law' | 'layers-active' | 'layers-dot' | 'layers' | 'layout-activitybar-left' | 'layout-activitybar-right' | 'layout-centered' | 'layout-menubar' | 'layout-panel-center' | 'layout-panel-justify' | 'layout-panel-left' | 'layout-panel-off' | 'layout-panel-right' | 'layout-panel' | 'layout-sidebar-left-off' | 'layout-sidebar-left' | 'layout-sidebar-right-off' | 'layout-sidebar-right' | 'layout-statusbar' | 'layout' | 'library' | 'lightbulb-autofix' | 'lightbulb' | 'link-external' | 'link' | 'list-filter' | 'list-flat' | 'list-ordered' | 'list-selection' | 'list-tree' | 'list-unordered' | 'live-share' | 'loading' | 'location' | 'lock-small' | 'lock' | 'magnet' | 'mail-read' | 'mail' | 'map-filled' | 'map' | 'markdown' | 'megaphone' | 'mention' | 'menu' | 'merge' | 'mic-filled' | 'mic' | 'milestone' | 'mirror' | 'mortar-board' | 'move' | 'multiple-windows' | 'music' | 'mute' | 'new-file' | 'new-folder' | 'newline' | 'no-newline' | 'note' | 'notebook-template' | 'notebook' | 'octoface' | 'open-preview' | 'organization' | 'output' | 'package' | 'paintcan' | 'pass-filled' | 'pass' | 'person-add' | 'person' | 'piano' | 'pie-chart' | 'pin' | 'pinned-dirty' | 'pinned' | 'play-circle' | 'play' | 'plug' | 'preserve-case' | 'preview' | 'primitive-square' | 'project' | 'pulse' | 'question' | 'quote' | 'radio-tower' | 'reactions' | 'record-keys' | 'record-small' | 'record' | 'redo' | 'references' | 'refresh' | 'regex' | 'remote-explorer' | 'remote' | 'remove' | 'replace-all' | 'replace' | 'reply' | 'repo-clone' | 'repo-force-push' | 'repo-forked' | 'repo-pull' | 'repo-push' | 'repo' | 'report' | 'request-changes' | 'rocket' | 'root-folder-opened' | 'root-folder' | 'rss' | 'ruby' | 'run-above' | 'run-all' | 'run-below' | 'run-errors' | 'save-all' | 'save-as' | 'save' | 'screen-full' | 'screen-normal' | 'search-fuzzy' | 'search-stop' | 'search' | 'send' | 'server-environment' | 'server-process' | 'server' | 'settings-gear' | 'settings' | 'shield' | 'sign-in' | 'sign-out' | 'smiley' | 'snake' | 'sort-precedence' | 'source-control' | 'sparkle' | 'split-horizontal' | 'split-vertical' | 'squirrel' | 'star-empty' | 'star-full' | 'star-half' | 'stop-circle' | 'symbol-array' | 'symbol-boolean' | 'symbol-class' | 'symbol-color' | 'symbol-constant' | 'symbol-enum-member' | 'symbol-enum' | 'symbol-event' | 'symbol-field' | 'symbol-file' | 'symbol-interface' | 'symbol-key' | 'symbol-keyword' | 'symbol-method' | 'symbol-misc' | 'symbol-namespace' | 'symbol-numeric' | 'symbol-operator' | 'symbol-parameter' | 'symbol-property' | 'symbol-ruler' | 'symbol-snippet' | 'symbol-string' | 'symbol-structure' | 'symbol-variable' | 'sync-ignored' | 'sync' | 'table' | 'tag' | 'target' | 'tasklist' | 'telescope' | 'terminal-bash' | 'terminal-cmd' | 'terminal-debian' | 'terminal-linux' | 'terminal-powershell' | 'terminal-tmux' | 'terminal-ubuntu' | 'terminal' | 'text-size' | 'three-bars' | 'thumbsdown-filled' | 'thumbsdown' | 'thumbsup-filled' | 'thumbsup' | 'tools' | 'trash' | 'triangle-down' | 'triangle-left' | 'triangle-right' | 'triangle-up' | 'twitter' | 'type-hierarchy-sub' | 'type-hierarchy-super' | 'type-hierarchy' | 'unfold' | 'ungroup-by-ref-type' | 'unlock' | 'unmute' | 'unverified' | 'variable-group' | 'verified-filled' | 'verified' | 'versions' | 'vm-active' | 'vm-connect' | 'vm-outline' | 'vm-running' | 'vm' | 'vr' | 'wand' | 'warning' | 'watch' | 'whitespace' | 'whole-word' | 'window' | 'word-wrap' | 'workspace-trusted' | 'workspace-unknown' | 'workspace-untrusted' | 'zoom-in' | 'zoom-out';

//#endregion
//#region src/ai/ui/components.d.ts
type Node = Fragment<Node> | HStack | VStack | Label | Button | StepProgressLabel | StepPlan | TextField | FileLabel | CodeSnippet;
type ChildrenMixin = ChildrenMixin$1<Node>;
interface Label extends BaseNode {
  readonly type: 'label';
  readonly label: string;
  readonly secondary?: boolean;
  readonly level?: 1 | 2 | 3;
}
interface Icon extends BaseNode {
  readonly type: 'icon';
  readonly icon: IconName;
}
interface Button extends BaseNode {
  readonly type: 'button';
  readonly label: string;
  readonly primary?: boolean;
  readonly small?: boolean;
  readonly disabled?: boolean;
  readonly onclick: Action;
  readonly shortcut?: 'default' | 'secondary';
  readonly alwaysAvailable?: boolean;
}
interface ProgressRing extends BaseNode {
  readonly type: 'progressRing';
}
interface HStack extends BaseNode, ChildrenMixin {
  readonly type: 'hStack';
}
interface VStack extends BaseNode, ChildrenMixin {
  readonly type: 'vStack';
}
type StepPlan = BaseNode & StatefulMixin & {
  readonly type: 'stepPlan';
  readonly defaultSelected?: string[];
  readonly steps: string[];
  readonly onchange?: Action;
  readonly threadStateKey?: string;
};
type TextField = BaseNode & StatefulMixin & {
  readonly type: 'textField';
  readonly placeholder?: string;
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onchange?: Action;
  readonly threadStateKey?: string;
};
interface StepProgressLabel extends BaseNode {
  readonly type: 'stepProgressLabel';
  readonly status: 'done' | 'running' | 'pending' | 'blocked' | 'error';
  readonly label: string;
  readonly detail?: string;
}
interface CodeSnippet extends BaseNode {
  readonly type: 'codeSnippet';
  readonly code: string;
  readonly lang?: string;
  readonly filePath?: string;
  readonly terminal?: boolean;
  readonly diffAgainstCode?: string;
  readonly showLineNumbers?: boolean;
  readonly startCollapsed?: boolean;
}
interface FileLabel extends BaseNode {
  readonly type: 'fileLabel';
  readonly filePath: string;
  readonly showPath?: boolean;
}

//#endregion
//#region src/ai/ui/index.d.ts
declare namespace index_d_exports {
  export { Action, Button, ChildrenMixin, CodeSnippet, Ext, FileLabel, HStack, Icon, Label, Node, ProgressRing, StepPlan, StepProgressLabel, TextField, VStack };
}
//#endregion
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
//#region src/ai/jsx.d.ts
type PropsWithChildren = {
  children?: jsx.JSXNode | jsx.JSXNode[];
};
/**
 * A replacement for `React.createElement` that builds AI tool UI trees.
 */
declare function jsx(type: jsx.JSXComponent, props: Record<string, any>, ...children: jsx.JSXNode[]): jsx.JSXElement;
declare namespace jsx {
  var Fragment: ({
    children,
    ...props
  }: PropsWithChildren) => {
    children: Node[];
    type: "fragment";
  };
}
/**
 * A dictionary of all available Integrations UI components for use in JSX
 */
declare const UI: {
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
  readonly CodeSnippet: (props: Omit<CodeSnippet, 'type'>) => {
    key?: string;
    code: string;
    lang?: string;
    filePath?: string;
    terminal?: boolean;
    diffAgainstCode?: string;
    showLineNumbers?: boolean;
    startCollapsed?: boolean;
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
    status: "done" | "running" | "pending" | "blocked" | "error";
    detail?: string;
    type: "stepProgressLabel";
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
  readonly Fragment: ({
    children,
    ...props
  }: PropsWithChildren) => {
    children: Node[];
    type: "fragment";
  };
};
declare namespace jsx {
  type JSXElement = Node;
  type JSXNode = string | Node | Node[] | JSXElement;
  type JSXComponent = (...args: any[]) => jsx.JSXNode;
}

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
export { Agent, AgentCommand, AgentHost, AgentMetadata, AgentSpeaker, Attachment, ChatMessage, ChatMessageFeedback, ChatMessagePart, ChatSpeaker, ChatThread, ChatThreadMetadata, Citation, DrawingAttachment, ExternalContextEvent, FileAttachment, GetAvailableCommandsRequest, ImageAttachment, MaybePromise, PromptReason, PromptRequest, PromptResponseStream, PromptResponseStreamMark, StateStore, StoredChatThread, SuggestedPrompt, Tool, ToolMessagePart, ToolMetadata, ToolRunRequest, ToolRunResponse, UI, UserSpeaker, flattenThread, index_d_exports, jsx, messageText, parseUserPrompt, rootThread };