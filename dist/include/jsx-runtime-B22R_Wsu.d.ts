//#endregion
//#region src/ai/ui/core.d.ts
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
interface Fragment$1<C> extends BaseNode, ChildrenMixin$1<C> {
  readonly type: 'fragment';
} //#endregion
//#region src/ai/ui/icons.d.ts
type IconName = CodiconName;
type CodiconName = 'account' | 'activate-breakpoints' | 'add' | 'archive' | 'arrow-both' | 'arrow-circle-down' | 'arrow-circle-left' | 'arrow-circle-right' | 'arrow-circle-up' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-small-down' | 'arrow-small-left' | 'arrow-small-right' | 'arrow-small-up' | 'arrow-swap' | 'arrow-up' | 'azure-devops' | 'azure' | 'beaker-stop' | 'beaker' | 'bell-dot' | 'bell-slash-dot' | 'bell-slash' | 'bell' | 'blank' | 'bold' | 'book' | 'bookmark' | 'bracket-dot' | 'bracket-error' | 'briefcase' | 'broadcast' | 'browser' | 'bug' | 'calendar' | 'call-incoming' | 'call-outgoing' | 'case-sensitive' | 'check-all' | 'check' | 'checklist' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chip' | 'chrome-close' | 'chrome-maximize' | 'chrome-minimize' | 'chrome-restore' | 'circle-filled' | 'circle-large-filled' | 'circle-large' | 'circle-slash' | 'circle-small-filled' | 'circle-small' | 'circle' | 'circuit-board' | 'clear-all' | 'clippy' | 'close-all' | 'close' | 'cloud-download' | 'cloud-upload' | 'cloud' | 'code' | 'coffee' | 'collapse-all' | 'color-mode' | 'combine' | 'comment-discussion' | 'comment-draft' | 'comment-unresolved' | 'comment' | 'compass-active' | 'compass-dot' | 'compass' | 'copilot' | 'copy' | 'credit-card' | 'dash' | 'dashboard' | 'database' | 'debug-all' | 'debug-alt-small' | 'debug-alt' | 'debug-breakpoint-conditional-unverified' | 'debug-breakpoint-conditional' | 'debug-breakpoint-data-unverified' | 'debug-breakpoint-data' | 'debug-breakpoint-function-unverified' | 'debug-breakpoint-function' | 'debug-breakpoint-log-unverified' | 'debug-breakpoint-log' | 'debug-breakpoint-unsupported' | 'debug-console' | 'debug-continue-small' | 'debug-continue' | 'debug-coverage' | 'debug-disconnect' | 'debug-line-by-line' | 'debug-pause' | 'debug-rerun' | 'debug-restart-frame' | 'debug-restart' | 'debug-reverse-continue' | 'debug-stackframe-active' | 'debug-stackframe' | 'debug-start' | 'debug-step-back' | 'debug-step-into' | 'debug-step-out' | 'debug-step-over' | 'debug-stop' | 'debug' | 'desktop-download' | 'device-camera-video' | 'device-camera' | 'device-mobile' | 'diff-added' | 'diff-ignored' | 'diff-modified' | 'diff-removed' | 'diff-renamed' | 'diff' | 'discard' | 'edit' | 'editor-layout' | 'ellipsis' | 'empty-window' | 'error-small' | 'error' | 'exclude' | 'expand-all' | 'export' | 'extensions' | 'eye-closed' | 'eye' | 'feedback' | 'file-binary' | 'file-code' | 'file-media' | 'file-pdf' | 'file-submodule' | 'file-symlink-directory' | 'file-symlink-file' | 'file-zip' | 'file' | 'files' | 'filter-filled' | 'filter' | 'flame' | 'fold-down' | 'fold-up' | 'fold' | 'folder-active' | 'folder-library' | 'folder-opened' | 'folder' | 'game' | 'gear' | 'gift' | 'gist-secret' | 'git-commit' | 'git-compare' | 'git-fetch' | 'git-merge' | 'git-pull-request-closed' | 'git-pull-request-create' | 'git-pull-request-draft' | 'git-pull-request-go-to-changes' | 'git-pull-request-new-changes' | 'git-pull-request' | 'github-action' | 'github-alt' | 'github-inverted' | 'github' | 'globe' | 'go-to-file' | 'grabber' | 'graph-left' | 'graph-line' | 'graph-scatter' | 'graph' | 'gripper' | 'group-by-ref-type' | 'heart-filled' | 'heart' | 'history' | 'home' | 'horizontal-rule' | 'hubot' | 'inbox' | 'indent' | 'info' | 'insert' | 'inspect' | 'issue-draft' | 'issue-reopened' | 'issues' | 'italic' | 'jersey' | 'json' | 'kebab-vertical' | 'key' | 'law' | 'layers-active' | 'layers-dot' | 'layers' | 'layout-activitybar-left' | 'layout-activitybar-right' | 'layout-centered' | 'layout-menubar' | 'layout-panel-center' | 'layout-panel-justify' | 'layout-panel-left' | 'layout-panel-off' | 'layout-panel-right' | 'layout-panel' | 'layout-sidebar-left-off' | 'layout-sidebar-left' | 'layout-sidebar-right-off' | 'layout-sidebar-right' | 'layout-statusbar' | 'layout' | 'library' | 'lightbulb-autofix' | 'lightbulb' | 'link-external' | 'link' | 'list-filter' | 'list-flat' | 'list-ordered' | 'list-selection' | 'list-tree' | 'list-unordered' | 'live-share' | 'loading' | 'location' | 'lock-small' | 'lock' | 'magnet' | 'mail-read' | 'mail' | 'map-filled' | 'map' | 'markdown' | 'megaphone' | 'mention' | 'menu' | 'merge' | 'mic-filled' | 'mic' | 'milestone' | 'mirror' | 'mortar-board' | 'move' | 'multiple-windows' | 'music' | 'mute' | 'new-file' | 'new-folder' | 'newline' | 'no-newline' | 'note' | 'notebook-template' | 'notebook' | 'octoface' | 'open-preview' | 'organization' | 'output' | 'package' | 'paintcan' | 'pass-filled' | 'pass' | 'person-add' | 'person' | 'piano' | 'pie-chart' | 'pin' | 'pinned-dirty' | 'pinned' | 'play-circle' | 'play' | 'plug' | 'preserve-case' | 'preview' | 'primitive-square' | 'project' | 'pulse' | 'question' | 'quote' | 'radio-tower' | 'reactions' | 'record-keys' | 'record-small' | 'record' | 'redo' | 'references' | 'refresh' | 'regex' | 'remote-explorer' | 'remote' | 'remove' | 'replace-all' | 'replace' | 'reply' | 'repo-clone' | 'repo-force-push' | 'repo-forked' | 'repo-pull' | 'repo-push' | 'repo' | 'report' | 'request-changes' | 'rocket' | 'root-folder-opened' | 'root-folder' | 'rss' | 'ruby' | 'run-above' | 'run-all' | 'run-below' | 'run-errors' | 'save-all' | 'save-as' | 'save' | 'screen-full' | 'screen-normal' | 'search-fuzzy' | 'search-stop' | 'search' | 'send' | 'server-environment' | 'server-process' | 'server' | 'settings-gear' | 'settings' | 'shield' | 'sign-in' | 'sign-out' | 'smiley' | 'snake' | 'sort-precedence' | 'source-control' | 'sparkle' | 'split-horizontal' | 'split-vertical' | 'squirrel' | 'star-empty' | 'star-full' | 'star-half' | 'stop-circle' | 'symbol-array' | 'symbol-boolean' | 'symbol-class' | 'symbol-color' | 'symbol-constant' | 'symbol-enum-member' | 'symbol-enum' | 'symbol-event' | 'symbol-field' | 'symbol-file' | 'symbol-interface' | 'symbol-key' | 'symbol-keyword' | 'symbol-method' | 'symbol-misc' | 'symbol-namespace' | 'symbol-numeric' | 'symbol-operator' | 'symbol-parameter' | 'symbol-property' | 'symbol-ruler' | 'symbol-snippet' | 'symbol-string' | 'symbol-structure' | 'symbol-variable' | 'sync-ignored' | 'sync' | 'table' | 'tag' | 'target' | 'tasklist' | 'telescope' | 'terminal-bash' | 'terminal-cmd' | 'terminal-debian' | 'terminal-linux' | 'terminal-powershell' | 'terminal-tmux' | 'terminal-ubuntu' | 'terminal' | 'text-size' | 'three-bars' | 'thumbsdown-filled' | 'thumbsdown' | 'thumbsup-filled' | 'thumbsup' | 'tools' | 'trash' | 'triangle-down' | 'triangle-left' | 'triangle-right' | 'triangle-up' | 'twitter' | 'type-hierarchy-sub' | 'type-hierarchy-super' | 'type-hierarchy' | 'unfold' | 'ungroup-by-ref-type' | 'unlock' | 'unmute' | 'unverified' | 'variable-group' | 'verified-filled' | 'verified' | 'versions' | 'vm-active' | 'vm-connect' | 'vm-outline' | 'vm-running' | 'vm' | 'vr' | 'wand' | 'warning' | 'watch' | 'whitespace' | 'whole-word' | 'window' | 'word-wrap' | 'workspace-trusted' | 'workspace-unknown' | 'workspace-untrusted' | 'zoom-in' | 'zoom-out';

//#endregion
//#region src/ai/ui/components.d.ts
type Node$1 = Fragment$1<Node$1> | HStack | VStack | Label | Button | Icon | CodeSnippet | StepPlan | StepProgressLabel | StatusIcon | TextField | FileLabel | FileChanges | Markdown | Expandable;
type ChildrenMixin = ChildrenMixin$1<Node$1>;
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
  readonly spacing?: 0 | 1 | 2 | 3 | 4;
}
interface VStack extends BaseNode, ChildrenMixin {
  readonly type: 'vStack';
  readonly spacing?: 0 | 1 | 2 | 3 | 4;
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
interface StatusIcon extends BaseNode {
  readonly type: 'statusIcon';
  readonly status: 'success' | 'running' | 'blocked' | 'error';
}
interface StepProgressLabel extends BaseNode {
  readonly type: 'stepProgressLabel';
  readonly status: 'success' | 'running' | 'pending' | 'blocked' | 'error';
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
  readonly streaming?: boolean;
}
interface FileLabel extends BaseNode {
  readonly type: 'fileLabel';
  readonly filePath: string;
  readonly showPath?: boolean;
  readonly op: 'delete' | 'modify' | 'info';
}
interface FileChanges extends BaseNode {
  readonly type: 'fileChanges';
  readonly files: {
    readonly filePath: string;
    readonly status: 'working' | 'done';
    readonly op: 'delete' | 'modify' | 'info';
    readonly diffAdded?: number;
    readonly diffRemoved?: number;
  }[];
}
interface Expandable extends BaseNode, ChildrenMixin {
  readonly type: 'expandable';
  readonly summary: Node$1;
}
interface Markdown extends BaseNode {
  readonly type: 'markdown';
  readonly markdown: string;
}

//#endregion
//#region src/ai/ui/index.d.ts
declare namespace index_d_exports {
  export { Action, Button, ChildrenMixin, CodeSnippet, Expandable, FileChanges, FileLabel, HStack, Icon, Label, Markdown, Node$1 as Node, ProgressRing, StatusIcon, StepPlan, StepProgressLabel, TextField, VStack };
}
//#endregion
//#region src/ai/jsx-runtime.d.ts
type PropsWithChildren = {
  children?: JSX.Node | JSX.Node[];
};
/**
 * A replacement for `React.createElement` that builds AI tool UI trees.
 */
declare function jsx(type: JSX.Component, props: Record<string, any>,
// includes children
key?: string | number | bigint): JSX.Element;
declare const jsxs: typeof jsx;
/**
 * Converts a JSX node to one or more AIToolUI components.
 */
declare function jsxNodeToNodes(node?: JSX.Node | JSX.Node[]): Node$1[];
declare namespace JSX {
  type Element = Node$1;
  type Node = Element | Element[] | string | boolean | null | undefined;
  type Component = (...args: any[]) => Node;
}
declare const Fragment: ({
  children,
  ...props
}: PropsWithChildren) => {
  children: Node$1[];
  type: string;
};

//#endregion
export { Action, Button, CodeSnippet, CodiconName, Expandable, FileChanges, FileLabel, Fragment, Icon, JSX, Label, Markdown, Node$1 as Node, PropsWithChildren, StatusIcon, StepPlan, StepProgressLabel, TextField, index_d_exports, jsx, jsxNodeToNodes, jsxs };