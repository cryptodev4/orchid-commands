import { window, workspace, Uri } from "vscode";
import * as cp from "child_process";
import process = require("process");

export default class Common {
    protected static workspacePath = workspace.workspaceFolders?.map((workspaceFolder) => {
        return workspaceFolder.uri.fsPath;
    });
    
    protected static async validate(err: any, stdout: any, stderr: any) {
        console.log('stdout' + stdout);
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
        window.showInformationMessage(`${stdout}`);
    }

    protected static async getInput(placeHolder: string) {
        let name = await window.showInputBox({ placeHolder: placeHolder.replace(/\s\s+/g, ' ').trim() });
        name = name == undefined ? '' : name;
        return name;
    }

    protected static async showError(message: string) {
        // if (consoleErr !== null) {
        //     message += ' (See output console for more details)'
        //     console.error(consoleErr + ' (See output console for more details)')
        // }
        window.showErrorMessage(message);
        return false;
    }

    protected static async execCmd(command: string) {
        let config = workspace.getConfiguration('artisan');
        let phpLocation = config.get<string | null>('php.location', 'php')
        if (process.platform == 'win32') {
            cp.exec(`cd /d ${this.workspacePath} && ${phpLocation} artisan ${command}`, this.validate)
        } else {
            cp.exec(`cd ${this.workspacePath} && ${phpLocation} artisan ${command}`, this.validate)
        }   
    }
}