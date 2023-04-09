let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*▪𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀𝐀𝐜𝐭𝐢𝐯𝐞𝐧𝐬𝐞 𝐁𝐨𝐭𝐬 -  𝐁𝐨𝐭𝐉𝐨𝐭𝐚𝐱𝐏𝐚𝐜𝐨⺀*\n\n▪ ${oi}\n\n▪ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣⚡ @${mem.id.split('@')[0]}\n`}
teks += `└𝐁𝐨𝐭 𝐑𝐮𝐬𝐡`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
