let crypto = require('crypto');

const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';

let algorithms = ['aes192', 'aes-256-cbc', 'aes-256-ecb'];
let algorithm = algorithms[2];

let password = 'PysęjkkyDw';

let decipher = crypto.createDecipher(algorithm, password);
let decrypted = decipher.update(ENCRYPTED_TEXT, 'hex', 'utf-8');
decrypted += decipher.final();
console.log(decrypted);

let cipher = crypto.createCipher(algorithm, password);
let encrypted = cipher.update(decrypted, 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

// hidden message: Gratulacje, to się nazywa hakowanie ;) To wszystko na dziś, do zobaczenia jutro :)
