import * as vscode from "vscode";
import RunCode from "../run/runCode";

export default class Facade {
    constructor(private context: vscode.ExtensionContext) {
        this.collectSubscriptions();
    }

    private collectSubscriptions() {
        this.context.subscriptions.push(
            vscode.commands.registerCommand("language-demo.runCode", () => {
                const sourceCode =
                    vscode.window.activeTextEditor?.document.getText();
                const runCode = new RunCode();
                if (sourceCode) {
                    const result = runCode.run(sourceCode);
                    vscode.window.showInformationMessage(result.join(" "));
                }
            })
        );
    }
}
