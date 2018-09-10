'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.toggleFormatOnSave', () => {
        const config = vscode.workspace.getConfiguration('editor');
        const isEnabled = !config.get('formatOnSave');
        config.update('formatOnSave', isEnabled, true);

        vscode.window.showInformationMessage(
            'Format on save is ' + (isEnabled ? 'Active' : 'Inactive')
        );
    });

    context.subscriptions.push(disposable);
}

// nothing need to be done on deactivation
export function deactivate() {
}