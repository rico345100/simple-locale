"use strict";
function simpleLocale(locales) {
	if(typeof locales !== 'object') 
		throw new Error('Locale object must be specified.');

	for(var key in locales) {
		if(locales.hasOwnProperty(key)) {
			this[key] = locales[key];
		}
	}

	this.currentLocale = '';
	this.localeString = {};
}
simpleLocale.prototype.hasLocale = function(loc) {
	return loc in this;
};
simpleLocale.prototype.load = function(countryCode, lObj) {
	if(!this.hasLocale(countryCode)) {
		throw new Error('Unknown locale ' + countryCode);
	}

	this.localeString[countryCode] = lObj;
};
simpleLocale.prototype.set = function(newLocale) {
	if(!this.hasLocale(newLocale)) {
		throw new Error('Unknown locale ' + newLocale);
	}

	this.currentLocale = newLocale;
};
simpleLocale.prototype.get = function(key, bindStr) {
	let pos = this.localeString[this.currentLocale];
	let splittedKey = key.split(".");

	if(!pos) {
		throw new Error('Locale is not selected.');
	}

	for(let i = 0; i < splittedKey.length; i++ ) {
		pos = pos[splittedKey[i]];

		// if no string found, just returns key
		if(!pos) {
			return key;
		}
	}

	// let's match template strings.
	for(var word in bindStr) {
		pos = pos.replace(new RegExp('<%=\\s{0,}' + word + '\\s{0,}%>', "g"), bindStr[word]);
	}

	return pos;
};

module.exports = simpleLocale;