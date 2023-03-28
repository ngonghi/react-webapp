import appConfig from "../configs/app.json"
import * as _ from 'lodash';
class Configuration {
    static get(name: string, defaultValue = null) {
        return _.get(appConfig, name, defaultValue);
    }
}

export function config(name: string, defaultValue = null) {
    return Configuration.get(name, defaultValue)
}
