import Common from "../../Common";

export default class Resource extends Common {
    public static async run() {
        let resourceName = await this.getInput('e.g ResourceName || Folder/ResourceName')
        if (resourceName.length == 0) {
            this.showError('A resource name is required');
            return;
        }
        if (resourceName) {
            this.execCmd(`orchid:resource ${resourceName}`)
        }
    }
}