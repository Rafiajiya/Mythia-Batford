let fs = require('fs')
let image1 = fs.readFileSync('./media/logo4.jpg')
let image2 = fs.readFileSync('./media/logo2.jpg')
let image3 = fs.readFileSync('./media/logo5.jpg')
let image4 = fs.readFileSync('./media/logo3.jpg')
let image5 = fs.readFileSync('./media/logo.jpg')
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/DYbwxUvMEzTEsOuYQnBDm2']
global.owner = ['6288233481992'] // Letakan nomor kamu disini
global.kontak = ['62882007331744'] //entah lahðŸ—¿
global.mods = ['19726880502', '6288233481992', '62882007331744', '6281222314374', '6285814839139'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  amel: 'https://melcanz.net',
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://rikka-api.herokuapp.com': 'beta',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.net': 'DUHqfyQF',
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'ASJJMOFsjrVE8eZq1jgtGL4rGVE',
  'https://velgrynd.herokuapp.com': '79lJ9HEA'
}

//*****************STICKER WM*********************
global.packname = 'Sticker'
global.author = 'By Wabot'
//*****************BAGIAN IMAGE*********************
global.image = image1
global.image2 = image2
global.image3 = image3
global.image4 = image4
global.image5 = image5
//*****************BAGIAN GLOBAL CHAT*********************
global.wm = '©Mythia Batford'
global.rpg = 'Fitur Rpg Tidak Aktif\nKetik *!on* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/DYbwxUvMEzTEsOuYQnBDm2'
global.nsfw = 'Fitur NSFW Tidak Aktif\nKetik *!on* *nsfw* untuk menggunakan fitur ini!'
global.eror = 'Error 404'
global.wait = '_tunggu_'
//*****************BAGIAN LEVEL*********************
global.multiplier = 69 // Semakin tinggi, semakin sulit naik level
//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
