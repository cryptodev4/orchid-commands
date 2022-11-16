import Common from '../../Common';

export default class Selection extends Common {
    public static async run() {
        let selectionName = await this.getInput('e.g. SelectionName || Folder/SelectionName');
        if (selectionName.length == 0) {
            this.showError('A selection name is required')
            return;
        }
        if (selectionName) {
            this.execCmd(`orchid:selection ${selectionName}`)
        }
    }
}