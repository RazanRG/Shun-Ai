const chalk = require('chalk')
const fs = require('fs')

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
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.menushun = (prefix) => {
return ctext(`━─────「 *M E N U* 」─────━
- ${prefix}menu ai
- ${prefix}menu anime
- ${prefix}menu database
- ${prefix}menu download
- ${prefix}menu game
- ${prefix}menu group
- ${prefix}menu other
- ${prefix}menu owner
- ${prefix}menu search
- ${prefix}menu tools
━─────「 *M E N U* 」─────━`)}

global.menuai = (prefix) => {
return ctext(`━──────「 *A I* 」──────━
- ${prefix}ai
- ${prefix}shun
- ${prefix}openai
- ${prefix}gpt4
- ${prefix}simi
- ${prefix}text2img
- ${prefix}blackbox
- ${prefix}gemini
━──────「 *A I* 」──────━`)}

global.menuanime = (prefix) => {
return ctext(`━────「 *A N I M E* 」────━
- ${prefix}waifu
- ${prefix}neko
━────「 *A N I M E* 」────━`)}

global.menudatabase = (prefix) => {
return ctext(`━──「 *D A T A B A S E* 」──━
- ${prefix}
━──「 *D A T A B A S E* 」──━`)}

global.menudownload = (prefix) => {
return ctext(`━──「 *D O W N L O A D* 」──━
- ${prefix}ytmp4
- ${prefix}ytmp3
- ${prefix}tiktok
- ${prefix}instagram
- ${prefix}spotify
━──「 *D O W N L O A D* 」──━`)}

global.menugame = (prefix) => {
return ctext(`━─────「 *G A M E* 」─────━
- ${prefix}apakah
- ${prefix}kapankah
- ${prefix}bisakah
- ${prefix}bagaimanakah
- ${prefix}rate
- ${prefix}gantengcek
- ${prefix}cantikcek
- ${prefix}gaycek
- ${prefix}lesbycek
- ${prefix}sangecek
━─────「 *G A M E* 」─────━`)}

global.menugroup = (prefix) => {
return ctext(`━────「 *G R O U P* 」────━
- ${prefix}getcontact
- ${prefix}totag
- ${prefix}linkgroup
- ${prefix}linkgc
- ${prefix}resetlinkgc
- ${prefix}sendlinkgc
- ${prefix}kick
- ${prefix}add
- ${prefix}promote
- ${prefix}demote
- ${prefix}hidetag
- ${prefix}h
- ${prefix}tagall
━────「 *G R O U P* 」────━`)}

global.menuother = (prefix) => {
return ctext(`━────「 *O T H E R* 」────━
- ${prefix}sc
- ${prefix}owner
- ${prefix}afk
- ${prefix}limit
- ${prefix}carbon
━────「 *O T H E R* 」────━`)}

global.menuowner = (prefix) => {
return ctext(`━────「 *O W N E R* 」────━
- ${prefix}resetlimit
- ${prefix}addlimit
- ${prefix}pushkontak2
- ${prefix}pushkontak
- ${prefix}getidgc
- ${prefix}join
- ${prefix}addgc
- ${prefix}delgc
- ${prefix}backup
- ${prefix}getcase
- ${prefix}biochange
- ${prefix}autobio
- ${prefix}readchange
- ${prefix}autoread
- ${prefix}public
- ${prefix}self
- ${prefix}addprem
- ${prefix}delprem
- ${prefix}listpremium
- ${prefix}listprem
- ${prefix}bcgc
- ${prefix}bcgroup
- ${prefix}restart
- ${prefix}delcase
- ${prefix}addcase
- ${prefix}addcase
━────「 *O W N E R* 」────━`)}

global.menusearch = (prefix) => {
return ctext(`━────「 *S E A R C H* 」────━
- ${prefix}pinterest
- ${prefix}spotify
- ${prefix}play
━────「 *S E A R C H* 」────━`)}

global.menustickanim = (prefix) => {
return ctext(`━─────「 *S T I C K* 」─────━
- ${prefix}kill
- ${prefix}pat
- ${prefix}lick
- ${prefix}bite
- ${prefix}yeet
- ${prefix}bonk
- ${prefix}wink
- ${prefix}poke
- ${prefix}nom
- ${prefix}slap
- ${prefix}smile
- ${prefix}wave
- ${prefix}blush
- ${prefix}smugh
- ${prefix}glomp
- ${prefix}happy
- ${prefix}dance
- ${prefix}cringe
- ${prefix}highfive
- ${prefix}handhold
━─────「 *S T I C K* 」─────━`)}

global.menutools = (prefix) => {
return ctext(`━────「 *T O O L S* 」────━
- ${prefix}clonebot
- ${prefix}hd
- ${prefix}toimg
- ${prefix}toaud
- ${prefix}tomp3
- ${prefix}tovn
- ${prefix}tourl
- ${prefix}shortlink
- ${prefix}sticker
- ${prefix}qc
- ${prefix}smeme
- ${prefix}wm
- ${prefix}lirik
- ${prefix}gitclone
━────「 *T O O L S* 」────━`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})