import Common from '../../Common';

export default class TabMenu extends Common {
    public static async run() {
        let tabMenuName = await this.getInput('e.g. TabMenuName || Folder/TabMenuName');
        if (tabMenuName.length == 0) {
            this.showError('A tab menu name is required')
            return;
        }
        if (tabMenuName) {
            this.execCmd(`orchid:tab-menu ${tabMenuName}`)
        }
    }
}