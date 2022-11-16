import Common from '../../Common';

export default class Chart extends Common {
    public static async run() {
        let chartName = await this.getInput('e.g. ChartName || Folder/ChartName');
        if (chartName.length == 0) {
            this.showError('A chart name is required')
            return;
        }
        if (chartName) {
            this.execCmd(`orchid:chart ${chartName}`);
        }
    }
}