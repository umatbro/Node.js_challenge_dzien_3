const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

let crypto = require('crypto');

let hashAlgorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

let passwords = [
    '??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'
];

for (let password of passwords) {
    for (let hashAlgorithm of hashAlgorithms) {
        if (crypto.createHmac(hashAlgorithm, password).digest('hex') === MY_PWD_HASH) {
            console.log(`Password '${password}' was encrypted with ${hashAlgorithm} algorithm.`);
        }
    }
}

// Password 'Moje Haslo 1@3!' was encrypted with rmd160 algorithm.
