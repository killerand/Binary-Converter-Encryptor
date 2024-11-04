function convertToBinary() {
    const plaintext = document.getElementById('plaintext').value;
    const binary = plaintext.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
    document.getElementById('binaryOutput').innerText = binary;
}

function encryptText() {
    const plaintext = document.getElementById('plaintext').value;
    const shift = 3; // Simple Caesar Cipher
    const encrypted = plaintext.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char; // Non-alphabetical characters are not encrypted
    }).join('');
    document.getElementById('encryptedOutput').innerText = encrypted;
}

function decryptText() {
    const encryptedText = document.getElementById('encryptedOutput').innerText;
    const shift = 3; // Same shift used for encryption
    const decrypted = encryptedText.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        return char; // Non-alphabetical characters are not decrypted
    }).join('');
    document.getElementById('decryptedOutput').innerText = decrypted;
}