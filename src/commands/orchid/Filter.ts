import Common from '../../Common';

export default class Filter extends Common {
    public static async run() {
        let filterName = await this.getInput('e.g. FilterName || Folder/FilterName');
        if (filterName.length == 0) {
            this.showError('A filter name is required')
            return;
        }
        if (filterName) {
            this.execCmd(`orchid:filter ${filterName}`)
        }
    }
}