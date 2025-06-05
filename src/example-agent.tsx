/** @jsxImportSource @firebase-studio/plugin-sdk/ai */
import * as MonospaceAI from '@firebase-studio/plugin-sdk/ai';
import { UI } from '@firebase-studio/plugin-sdk/ai';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default class ExampleAgent implements MonospaceAI.Agent {
  id = "ExampleAgent";
  handle = "@Example" as const;
  displayName = "Example Agent";
  description = "An agent loaded from a VSCode extension";
  icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzgzMF83OTIxKSIvPgo8cGF0aCBkPSJNOS4wODc1MiAxMi45NjIxVjExLjQxMjFMMTEuNzM3NSA4Ljc3NDYxQzExLjgxMjUgOC42OTk2MSAxMS44OTE3IDguNjQ5NjEgMTEuOTc1IDguNjI0NjFDMTIuMDU4NCA4LjU5MTI4IDEyLjE0MTcgOC41NzQ2MSAxMi4yMjUgOC41NzQ2MUMxMi4zMTY3IDguNTc0NjEgMTIuNDA0MiA4LjU5MTI4IDEyLjQ4NzUgOC42MjQ2MUMxMi41NzkyIDguNjU3OTQgMTIuNjU4NCA4LjcwNzk0IDEyLjcyNSA4Ljc3NDYxTDEzLjI3NSA5LjMzNzExQzEzLjMzMzQgOS40MDM3OCAxMy4zNzkyIDkuNDgyOTQgMTMuNDEyNSA5LjU3NDYxQzEzLjQ1NDIgOS42NTc5NCAxMy40NzUgOS43NDEyOCAxMy40NzUgOS44MjQ2MUMxMy40NzUgOS45MTYyOCAxMy40NTg0IDEwLjAwMzggMTMuNDI1IDEwLjA4NzFDMTMuMzkxNyAxMC4xNzA0IDEzLjM0MTcgMTAuMjQ5NiAxMy4yNzUgMTAuMzI0NkwxMC42Mzc1IDEyLjk2MjFIOS4wODc1MlpNMTIuNzc1IDkuODI0NjFMMTIuMjEyNSA5LjI2MjExTDEyLjc3NSA5LjgyNDYxWk05Ljc3NTAyIDEyLjI2MjFIMTAuMzM3NUwxMS43NjI1IDEwLjg0OTZMMTEuNDg3NSAxMC41NjIxTDExLjIxMjUgMTAuMjg3MUw5Ljc3NTAyIDExLjY5OTZWMTIuMjYyMVpNNS4yNjI1MiAxMi45NjIxQzQuOTQ1ODYgMTIuOTYyMSA0LjY3OTE5IDEyLjg1MzggNC40NjI1MiAxMi42MzcxQzQuMjU0MTkgMTIuNDIwNCA0LjE1MDAyIDEyLjE1MzggNC4xNTAwMiAxMS44MzcxVjQuMTYyMTFDNC4xNTAwMiAzLjg0NTQ0IDQuMjU4MzYgMy41Nzg3OCA0LjQ3NTAyIDMuMzYyMTFDNC42OTE2OSAzLjE0NTQ0IDQuOTU0MTkgMy4wMzcxMSA1LjI2MjUyIDMuMDM3MTFIOS4xNzUwMkwxMS42NjI1IDUuNTM3MTFWNy4zNjIxMUgxMC41NVY2LjI2MjExSDguNDUwMDJWNC4xNjIxMUg1LjI2MjUyVjExLjgzNzFIOC4xODc1MlYxMi45NjIxSDUuMjYyNTJaTTExLjQ4NzUgMTAuNTYyMUwxMS4yMTI1IDEwLjI4NzFMMTEuNzYyNSAxMC44NDk2TDExLjQ4NzUgMTAuNTYyMVoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfODMwXzc5MjEiIHgxPSIwLjY2NjY2NyIgeTE9Ii0zIiB4Mj0iMjIuMzMzMyIgeTI9IjE4LjMzMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzg5NjRFOCIvPgo8c3RvcCBvZmZzZXQ9IjAuMzMzMyIgc3RvcC1jb2xvcj0iIzI4QTRFOSIvPgo8c3RvcCBvZmZzZXQ9IjAuNjY2NjYiIHN0b3AtY29sb3I9IiMxN0I4NzciLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZBMjNFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";

  async prompt({ thread, reason, response, host }: MonospaceAI.PromptRequest) {
    const simpleHistory = MonospaceAI.flattenThread(MonospaceAI.rootThread(thread))
      .map((m) => ({ speaker: m.speaker.type, content: MonospaceAI.messageText(m) }));
    response.markdown(`Being prompted because: ${Object.keys(reason).join(', ')}. `);
    response.markdown(`This should be message #${simpleHistory.length + 1} in the thread!\n\n`);
    response.markdown(`Also, these are the tools available:\n`
      + host.queryTools(['*']).map(t => `- \`${t.id}\``).join('\n'))
    response.citation({
      webUrl: 'https://www.google.com'
    });
    response.ui(<RunnerUI step={1} />);
    await sleep(1000);
    response.ui(<RunnerUI step={2} />);
    await sleep(1000);
    response.ui(<RunnerUI step={3} />);
    await sleep(1000);
    response.ui(<RunnerUI step='done' />);
    // response.finishThread("All done!");
  }

  onAction({ response }: MonospaceAI.PromptRequest, action: string, args: any) {
    if (action === 'makechanges') {
      response.markdown('OK making changes to the file');
      response.ui(<UI.StepProgressLabel status='success' label='Made changes' />);
    }
  }

  getAvailableCommands(): MonospaceAI.AgentCommand[] {
    return [{ prompt: "Say hello" }, { command: '/foo', description: 'Hello world' }];
  }
}

function RunnerUI({ step }: { step: number | 'done' }) {
  console.log('rendering step' + step);
  step = step || Infinity;
  let statusForStep = (step: number, currentStep: number | 'done') => {
    if (currentStep === 'done' || step < currentStep) return "success";
    else if (step === currentStep) return "running";
    return "pending";
  };

  return <UI.VStack>
    <UI.FileLabel filePath='package.json' op="modify" />
    <UI.Expandable summary={<UI.Label label="Details" secondary level={3} />}>
      <UI.Markdown markdown='Lorem ipsum dolor sit `amet`' />
    </UI.Expandable>
    <UI.StepProgressLabel
      status={statusForStep(1, step)}
      label="Reticulating splines"
    />
    <UI.StepProgressLabel
      status={statusForStep(2, step)}
      label="Calibrating potentials"
    />
    <UI.StepProgressLabel
      status={statusForStep(3, step)}
      label="Bisecting hyperplanes"
    />
    {step === 'done' && <UI.Button
      primary
      shortcut='default'
      onclick={{ action: 'makechanges' }}
      label="Do Thing" />}
  </UI.VStack>;
}
