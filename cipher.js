const crypto = require('crypto');

const chipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = chipher.update('암호화 할 문장', 'utf8', 'base64');
result += chipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);
