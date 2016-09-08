"use strict";
const Locale = require('./index');
const locale = new Locale({
	us_EN: 'us_EN',
	ko_KR: 'ko_KR'
});

locale.load(locale.us_EN, require('./i18n/us_EN.json'));
locale.load(locale.ko_KR, require('./i18n/ko_KR.json'));
locale.set(locale.us_EN);

console.log(locale.get('hello'));
console.log(locale.get('helloWithParam', { user: '.modernator' }));
console.log(locale.get('nested.hello'));

console.log(locale.hasLocale('zh-CN'));