import Common from '../../Common';

export default class Listener extends Common {
    public static async run() {
        let listenerName = await this.getInput('e.g. ListenerName || Folder/ListenerName');
        if (listenerName.length == 0) {
            this.showError('A listener name is required')
            return;
        }
        if (listenerName) {
            this.execCmd(`orchid:listener ${listenerName}`)
        }
    }
}