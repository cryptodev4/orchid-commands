import Common from '../../Common';

export default class Screen extends Common {
    public static async run() {
        let screenName = await this.getInput('e.g. ScreenName || Folder/ScreenName');
        if (screenName.length == 0) {
            this.showError('A screen name is required')
            return;
        }
        if (screenName) {
            this.execCmd(`orchid:screen ${screenName}`)
        }
    }
}