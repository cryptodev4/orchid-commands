import Common from '../../Common';

export default class Presenter extends Common {
    public static async run() {
        let presenterName = await this.getInput('e.g. PresenterName || Folder/PresenterName');
        if (presenterName.length == 0) {
            this.showError('A presenter name is required')
            return;
        }
        if (presenterName) {
            this.execCmd(`orchid:presenter ${presenterName}`)
        }
    }
}