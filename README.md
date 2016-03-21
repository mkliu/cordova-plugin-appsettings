## Purpose
A plugin to access the preference tags (settings) in config.xml via Javascript

## NPM
https://www.npmjs.com/package/cordova-plugin-appsettings

## Usage
    cordova plugin add cordova-plugin-appsettings

    AppSettings.get(
        ["Preference1", "Preference2"],
    	function(value) {
    		alert("Value: " + JSON.stringify(value));
    	},
    	function(error) {
        	alert("Error! " + JSON.stringify(error));
    });

## Credits
https://github.com/apache/cordova-labs/tree/cdvtest
