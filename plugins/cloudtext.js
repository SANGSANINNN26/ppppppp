let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `http://lolhuman.herokuapp.com/api/textprome/cloud?apikey=31caf10e4a64e86c1a92bcba&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['cloudtext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(cloudtext)$/i
handler.limit = true
handler.register = true

module.exports = handler

