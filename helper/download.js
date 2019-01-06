const fs = require('fs')
const http = require('http')

const DB_NAME = './helper/db.json'
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const YOUDAO = 'youdao'

/**
 * download audios
 * @param {string} letter all or a letter
 */
function download(letter = 'all') {
  const data = JSON.parse(fs.readFileSync(DB_NAME))
  if(letter === 'all') {
    for(const i of ALPHABET) {
      const wordList = data[i]
      downloadLetter(wordList)
    }
  } else {
    const wordList = data[letter]
    downloadLetter(wordList)
  }
}

/**
 * download single letter audios
 * @param {List} wordList 
 */
function downloadLetter(wordList) {
  for(const j of wordList) {
    const filepath = `./audio/${j.word}.mp3`
    if(!isFileExist(filepath)) {
      if(j.origin === YOUDAO) {
        const file = fs.createWriteStream(`./audio/${j.word}.mp3`)
        http.get(`http://dict.youdao.com/dictvoice?audio=${j.word}&type=${j.type}`, function(response) {
          response.pipe(file);
        })
      }
    }
  }
}

/**
 * whether the file exists
 * @param {String} path 
 */
function isFileExist(path) {
  try{
    fs.accessSync(path, fs.F_OK);
  }catch(e){
    return false;
  }
  return true;
}

const options = process.argv
download(options[2])
