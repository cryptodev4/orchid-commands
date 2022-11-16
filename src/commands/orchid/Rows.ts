import Common from '../../Common';

export default class Rows extends Common {
    public static async run() {
        let rowsName = await this.getInput('e.g. RowsName || Folder/RowsName');
        if (rowsName.length == 0) {
            this.showError('A rows name is required')
            return;
        }
        if (rowsName) {
            this.execCmd(`orchid:rows ${rowsName}`)
        }
    }
}