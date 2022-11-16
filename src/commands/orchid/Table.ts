import Common from '../../Common';

export default class Table extends Common {
    public static async run() {
        let tableName = await this.getInput('e.g. TableName || Folder/TableName');
        if (tableName.length == 0) {
            this.showError('A table name is required')
            return;
        }
        if (tableName) {
            this.execCmd(`orchid:table ${tableName}`)
        }
    }
}