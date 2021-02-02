function encode(strs) {
        let array = strs.map((str) => encrypt(str));
        return array.join(' ');
}

function encrypt(word) {
        let array = word.split('');

        for (let i = 0; i < array.length; i++) {
                array[i] = String.fromCharCode(array[i].charCodeAt(0) + 3);
        }
        return array.join('');
}

function decrypt(word) {
        let array = word.split('');

        for (let i = 0; i < array.length; i++) {
                array[i] = String.fromCharCode(array[i].charCodeAt(0) - 3);
        }
        return array.join('');
}

function decode(str) {
        let array = str.split(' ');

        return array.map((encrypted) => decrypt(encrypted));
}

console.log(encode(['hello', 'world']));
console.log(decode('khoor zruog'));
