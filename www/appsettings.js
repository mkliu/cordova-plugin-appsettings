
var argscheck = require('cordova/argscheck'),
  exec = require('cordova/exec');

function AppSettings () {

}
/**
 * Get a config.xml settings (preference) value
 *
 * @param {String} keyArray Key
 * @param {Function} successCallback The function to call when the value is available
 * @param {Function} errorCallback The function to call when value is unavailable
 */
AppSettings.prototype.get = function (keyArray, successCallback, errorCallback) {
    try {
        argscheck.checkArgs('AFF', 'AppSettings.get', arguments);
    } catch (exception) {
        argscheck.checkArgs('AF', 'AppSettings.get', arguments);
    }

    exec(successCallback, errorCallback, "AppSettings", "get", keyArray);
};

module.exports = new AppSettings();
