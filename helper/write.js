const fs = require('fs')

const DB_NAME = './helper/db.json'
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const EN = 'en'
const ZH = 'zh'

/**
 * get file head content
 * @param {String} letter 
 * @param {String} lang 
 */
function getHead(letter, lang) {
  let head = ''
  if(lang === EN) {
    head = 
`
# ${letter}

| Word  | Pronunciation | Reference |
| :-- | :-- | :-- |
`
  } else if(lang === ZH) {
    head = 
`
# ${letter}

| 单词  | 发音 | 参考资料 |
| :-- | :-- | :-- |
`
  }
  return head
}

function getRow(word) {
  const filepath = `./audio/${word.word}.mp3`
  let content = ''
  if(isFileExist(filepath)) {
    content =
  `| ${word.word} [:speaker:](http://pronunciation.oss-cn-beijing.aliyuncs.com/${word.word}.mp3) | ${word.pron} | ${word.reference} |\n`
  } else {
    content =
  `| ${word.word} | ${word.pron} | ${word.reference} | `
  }
  return content
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

// 保存文件
function saveFile(filename, content) {
  fs.writeFile(filename, content, err => {  
    if (err) throw err
    console.log(`${filename} saved!`)
  })
}

// 
function write() {
  const data = JSON.parse(fs.readFileSync(DB_NAME))
  const enDir = './docs/content/'
  writeAll(data, enDir, EN)
  const zhDir = './docs/zh/content/'
  writeAll(data, zhDir, ZH)
}

function writeAll(data, dir, lang) {
  for(const i of ALPHABET) {
    const wordList = data[i]
    const path = `${dir}${i}.md`
    writeLetter(i, wordList, path, lang)
  }
}

function writeLetter(letter, wordList, path, lang) {
  let content = getHead(letter, lang)
  for(const j of wordList) {
    content += getRow(j)
  }
  saveFile(path, content)
}

write()
