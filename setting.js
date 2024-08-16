//—————「 EL ATMIN 」—————//

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const version = require("@whiskeysockets/baileys/package.json").version 
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const shun = packageJson.version

const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};



//—————「 SYSTEM 」—————//
global.baileysVersion = `${version}`
global.baileys = require('@whiskeysockets/baileys') // Jangan di ubah
global.usePairingCode = true // false = qrCode, true = pairingCode
global.sessionName = 'shun' // Jangan di ubah
global.sp = '⭔' // Jangan di ubah
global.gris = '`' // Jangan di ubah
global.hiasan = `	◦  ` // Jangan di ubah
global.wlcm = [] // Jangan di ubah
global.wlcmm = [] // Jangan di ubah
global.wm = `Shun Ai` // footer text
global.autobio = false // false = off, true = on
global.autoread = false // false = off, true = on
global.chatgpt = true // false = off, true = on
//—————「 SYSTEM 」—————//



//—————「 BOT 」—————//
global.saluran = 'WELCOME' // Opsional 
global.idsal = "1234543@newsletter" // Opsional
global.botname = 'Shun Ai' // Ini nama bot
global.bottz = '6282131454993' // Ganti dengan nomor bot untuk mendapatkan code pairing 
global.packname = 'Shun Ai' // wm sticker
global.author = `Created By Razan` // wm sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.versions = `${shun}`
//—————「 BOT 」—————//



//—————「 OWNER 」—————//
global.ownername = 'Razan' // Ubah jadi nama lu
global.owner = ['6282131454993'] // Ubah pake nomor lu
global.ownermail = ['razan.smuler@gmail.com'] // Opsional
//—————「 OWNER 」—————//



//—————「 MESSAGE 」—————//
global.mess = {
    ban: ctext('*[ System Access Failed ]* you are banned by the owner'),
    badm: ctext('*[ System Notice ]* please add bot *admin*'),
    regis: ctext(`*[ System Access Failed ]*\n\nKamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama.umur*`),
    premium: ctext('*[ System Notice ]* this only premium user'),
    search: ctext('🔍 *Search for server. . .*'),
    done: ctext('Done Ga Bang?? Done...'),
    success: ctext('*[ Loaded Success ]*'),
    admin: ctext('*[ System Notice ]* for *admin!* not *npc*'),
    owner: ctext('*[ System Access Failed ]* Access Denied'),
    group: ctext('*[ System Notice ]* Use this in group chat!'),
    private: ctext('*[ System Notice ]* Use this in private chat!'),
    bot: ctext('*[ System Notice ]* Only Bot user'),
    wait: ctext('*[ Loading ]* Please Wait'),
    getdata: ctext('Scraping metadata . . .'),
    fail: ctext('Can\'t get metadata!'),
    error: ctext('*[ System Failed ]* Error, please contact the owner'),
    errorF: ctext('*[ System Failed ]* Sorry this feature is in error.'),
}
//—————「 MESSAGE 」—————//



//—————「 LIMIT 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100
}//—————「 LIMIT 」—————//



//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})