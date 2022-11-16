import * as vscode from 'vscode';
import Action from './commands/orchid/Action';
import Chart from './commands/orchid/Chart';
import Filter from './commands/orchid/Filter';
import Listener from './commands/orchid/Listener';
import Presenter from './commands/orchid/Presenter';
import Resource from './commands/orchid/Resource';
import Rows from './commands/orchid/Rows';
import Screen from './commands/orchid/Screen';
import Selection from './commands/orchid/Selection';
import Table from './commands/orchid/Table';
import TabMenu from './commands/orchid/TabMenu';

export async function activate(context: vscode.ExtensionContext) {
    console.log('Orchid Commands extension activated')
    
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.action', () => { Action.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.chart', () => { Chart.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.filter', () => { Filter.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.listener', () => { Listener.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.presenter', () => { Presenter.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.resource', () => { Resource.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.rows', () => { Rows.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.screen', () => { Screen.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.selection', () => { Selection.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.table', () => { Table.run() }));
    context.subscriptions.push(vscode.commands.registerCommand('orchid-commands.tab-menu', () => { TabMenu.run() }));
}

export function deactivate() {
    vscode.window.showInformationMessage('Orchid Commands extension deactivated')
}
