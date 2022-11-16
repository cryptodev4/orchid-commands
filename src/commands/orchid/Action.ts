import Common from "../../Common";

export default class Action extends Common {
    public static async run() {
        let actionName = await this.getInput('e.g ActionName || Folder/ActionName')
        if (actionName.length == 0) {
            this.showError('A action name is required');
            return;
        }
        if (actionName) {
            this.execCmd(`orchid:action ${actionName}`)
        }
    }
}