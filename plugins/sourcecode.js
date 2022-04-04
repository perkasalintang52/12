let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'SCRIPT')).buffer(), `
Lagi Cari Script ya ??
Nih script botnya..\nhttps://bit.ly/3J7jP1M\nPasscode : 36011
`.trim(), '❖ One', 'Cara Lewatin-nya gimana ??', 'yntkts')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
