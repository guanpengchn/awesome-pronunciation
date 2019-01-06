## How to use it?

Add new words in `db.json`

Execute code as below:

```
// install
npm install

// local development docs
npm run dev

// local build docs
npm run build

// github page deploy
npm run deploy

// download all audio files or one letter audio files
node helper/download.js all
node helper/download.js A

// write docs files or one letter files
node helper/write.js

// audio files upload to AliOSS, but now this file doesn't exist here because of SECURITY. 
node helper/upload.js
```