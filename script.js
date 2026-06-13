function formatarParaNegritoUnicode(texto) {
    const de = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const para = "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗";

    return texto.split('').map(caractere => 
        {
            const index = de.indexOf(caractere);
            return index !== -1 ? Array.from(para)[index] : caractere;
        }
    ).join('');
}

console.log("Olá, mundo! O JavaScript está rodando perfeitamente.");
console.log(formatarParaNegritoUnicode("Teste 123"));