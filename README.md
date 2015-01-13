## Purpose
A plugin to access the preference tags (settings) in config.xml via Javascript

## Usage
    cordova plugin add com.wizky.cordova.appsettings

    AppSettings.get(
    	function(value) {
    		alert("Value: " + JSON.stringify(value));
    	},
    	function(error) {
        	alert("Error! " + JSON.stringify(error));
    }, ["Preference1", "Preference2"]);

## Credits
https://github.com/apache/cordova-labs/tree/cdvtest