<p align="center">
<img src="https://static.wikia.nocookie.net/steins-gate/images/0/07/Amadeuslogo.png" width="729,17" height="500"/>
</p>
<div align="center">
<details>
 <summary>AMADEUS BOT</summary>
</div>

## Getting Started

This project require NodeJS v12.

### Install
Clone this project

```bash
> git clone https://github.com/ArugaZ/whatsapp-bot.git
> cd whatsapp-bot
```

Install the dependencies:

```bash
> npm install 
> npm install gify-cli -g
```

### Usage
Run the Whatsapp bot

```bash
> npm start
```

after running it you need to scan the qr

### if qr does not appear

```bash
> npm i @open-wa/wa-automate@latest
```
or
```bash
> npm install @open-wa/wa-automate@latest
```
and start again!
```bash
npm start
```
### Information
- Change ownerNumber on [this section](https://github.com/ArugaZ/whatsapp-bot/blob/master/settings/setting.json#L2)
- Change groupLimit on [this section](https://github.com/ArugaZ/whatsapp-bot/blob/master/settings/setting.json#L3)
- Change memberLimit on [this section](https://github.com/ArugaZ/whatsapp-bot/blob/master/settings/setting.json#L4)
- Change prefix on [this section](https://github.com/ArugaZ/whatsapp-bot/blob/master/settings/setting.json#L5)
- Change menu on [this section](https://github.com/ArugaZ/whatsapp-bot/blob/master/lib/menu.js#L32)
- Add kata kasar on [this section](https://github.com/ArugaZ/whatsapp-bot/blob/master/lib/kataKotor.js#L8)
- Change all apiKey on [this section](https://github.com/ArugaZ/whatsapp-bot/blob/master/settings/api.json)
- Get Api NoBackground on [this website](https://www.remove.bg/)
- Get Api ScreenShot on [this website](https://apiflash.com/)
- Get Api Simi-simi on [this website](https://workshop.simsimi.com/en/), masih limit api simi-siminya? [cek ini](https://github.com/ArugaZ/whatsapp-bot/issues/38#issuecomment-726981060)

---



## To-Do
 - Add Media Downloader
 - Add More Feature
 - More refactoring
 
---

## Troubleshooting
Make sure all the necessary dependencies are installed: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md

Fix Stuck on linux, install google chrome stable: 
```bash
> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
> sudo apt install ./google-chrome-stable_current_amd64.deb
```

## Thanks to
- [WA-Automate](https://github.com/open-wa/wa-automate-nodejs)
- [YogaSakti](https://github.com/YogaSakti/imageToSticker)
- [MhankBarBar](https://github.com/MhankBarBar/whatsapp-bot)
- [dandyraka](https://github.com/dandyraka/NoBadWord)
- [ArugaZ](https://github.com/ArugaZ/whatsapp-bot)