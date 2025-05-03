import { Action$1 as Action, Button, CodeSnippet, FileLabel, Label, Node, StepPlan, StepProgressLabel, TextField } from "./include/components-BI8nW9ij.js";

//#region src/aijsx.d.ts
type PropsWithChildren = {
  children?: jsx.JSX.Node | jsx.JSX.Node[];
};
/**
 * A replacement for `React.createElement` that builds AI tool UI trees.
 */
declare function jsx(type: jsx.JSX.Component, props: Record<string, any>, ...children: jsx.JSX.Node[]): jsx.JSX.Element;
declare namespace jsx {
  var Fragment: ({
    children,
    ...props
  }: PropsWithChildren) => {
    children: Node<never>[];
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
    children: Node<never>[];
    type: "hStack";
  };
  readonly VStack: ({
    children,
    ...props
  }: PropsWithChildren) => {
    children: Node<never>[];
    type: "vStack";
  };
  readonly Fragment: ({
    children,
    ...props
  }: PropsWithChildren) => {
    children: Node<never>[];
    type: "fragment";
  };
};
declare namespace jsx.JSX {
  type Element = Node;
  type Node = string | Node | Node[] | Element;
  type Component = (...args: any[]) => jsx.JSX.Node;
} //#endregion
export { UI, jsx };