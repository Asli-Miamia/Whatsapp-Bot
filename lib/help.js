const garis = ""
const prefix = '#'
const ubah = "```"
function help() {
    return `
████  *AMADEUS BOT*  ████

${ubah}OWNER : https://wa.me/6281289096745${ubah}

${ubah}SEBELUM MENGGUNAKAN BOT BACA 
SYARAT DAN KETENTUAN BOT !${ubah}

 

  _☠PENGGUNAAN_
 #snk
 #peraturan
 #readme

   _🤖ABOUT_
 #creator
 #info
 #premium
 #limit

   _✨PESAN OWNER_
 #pesan [texs]
 #bug [texs]
 
   _💳DONASI_
 #donasi

   _🖥️MENU_
 #cmd ✨
 
\n\n
 `
}
exports.help = help()

function iklan() {
  return `
*IKLAN DI AMADEUS BOT*

NGAK ADA JASA IKLAN LAGI`
}
exports.iklan = iklan()

function menumenu() {
  return `╔══✪ *MENU*
║
╠➥_FUN MENU => ${prefix}MENU FN
╠➥_GAME MENU => ${prefix}MENU GM
╠➥_ANIME MENU => ${prefix}MENU AN
╠➥_OTHER MENU => ${prefix}MENU OT
╠➥_OWNER MENU => ${prefix}MENU OR
╠➥_ADMIN MENU => ${prefix}MENU AD
╠➥_GROUP MENU => ${prefix}MENU GP
╠➥_MEDIA MENU => ${prefix}MENU MD
╠➥_MAKER MENU => ${prefix}MENU MK
╠➥_ASUPAN MENU => ${prefix}MENU AS
╠➥_SEARCH MENU => ${prefix}MENU SH
╠➥_KERANG MENU => ${prefix}MENU KR
╠➥_DOWNLOADER MENU => ${prefix}MENU DN
║
╚═✪〘 AMADEUS BOT 〙
  `
}
exports.menumenu = menumenu()

function ADMENU() {
  return `╔══✪ *ADMIN MENU*
║
╠➥ #setgroupname
╠➥ #setgroupicon
╠➥ #ban 62812xxxx
╠➥ #unban 62812xxxx
╠➥ #mute
╠➥ #unmute
╠➥ #nsfw [enable/disable]
╠➥ #left [enable/disable]
╠➥ #welcome [enable/disable]
╠➥ #tagall
╠➥ #add 6281289xxxx
╠➥ #kick @tag
╠➥ #delete [replyChatBot]
╠➥ #leave [bot out]
╠➥ #promote @tag
╠➥ #demote @tag
║
╚═✪〘 AMADEUS BOT 〙`
}
exports.ADMENU = ADMENU()

function ORMENUm() {
  return `
╔══✪ *OWNER MENU*
║
╠➥ #creategroup [nama]
╠➥ #culik @tag [nama]
╠➥ #addlimit @tag
╠➥ #addprem 62812xxxx
╠➥ #delprem 62812xxxx
╠➥ #upprem @tag
╠➥ #dowprem @tag
╠➥ #block @tag
╠➥ #unblock @tag
╠➥ #setprofilepic
╠➥ #setname
╠➥ #setstatus
╠➥ #privat
╠➥ #bc [teks] 
╠➥ #leaveall
╠➥ #clearall
╠➥ #reg 6281289xxxx
╠➥ #listdaftar
╠➥ #listblock 
╠➥ #join
╠➥ #getses 
╠➥ #mute 
╠➥ #unmute 
║
╚═✪〘 AMADEUS BOT 〙`
}
exports.ORMENUm = ORMENUm()

function fnmenuAA() {
    return `
╔══✪ *FUN MENU*
║
╠➥ #artinama [nama]
╠➥ # [pesanmu]
╠➥ #toxic
╠➥ #reader
╠➥ #yourpic @tag
╠➥ #mypic 
╠➥ #getpic @tag
╠➥ #chat 62812xxxx text
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.fnmenuAA = fnmenuAA()

function GMMENU() {
    return `
╔══✪ *GAME MENU*
║ 
╠➥ #caklontong
╠➥ #nomorhoki 62812xxxx
╠➥ #family100
╠➥ #artimimpi
╠➥ #tebakgambar
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.GMMENU = GMMENU()

function OTMENU() {
    return `
╔══✪ *OTHER MENU*
║ 
╠➥ #runtime
╠➥ #ping
╠➥ #speed
╠➥ #sosmed
╠➥ #akun
╠➥ #owner
╠➥ #neko
╠➥ #inu
╠➥ #meme
╠➥ #dadu
╠➥ #koin
╠➥ #cat
╠➥ #pokemon
╠➥ #creator
╠➥ #slap
╠➥ #hug
╠➥ #nye
╠➥ #pat
╠➥ #math 
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.OTMENU = OTMENU()

function GPMENU() {
    return `
╔══✪ *GROUP MENU*
║ 
╠➥ #groupinfo
╠➥ #group [open/close]
╠➥ #setgroupname [text]
╠➥ #setgroupicon
╠➥ #linkgroup
╠➥ #add 62858xxxxx
╠➥ #kick @tagmember
╠➥ #promote @tagmember
╠➥ #demote @tagadmin
╠➥ #tagall
╠➥ #adminList
╠➥ #ownerGroup
╠➥ #leave
╠➥ #delete [replyChatBot]
╠➥ #kickAll
╠➥ #NSFW [enable|disable]
╠➥ #welcome [enable|disable]
╠➥ #intro [enable/disable]
╠➥ #left [enable|disable]
╠➥ #listblock
╠➥ #amadeusadmin
╠➥ #ban 62812xxxx
╠➥ #unban 62812xxxx
╠➥ #afk [alasan]
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.GPMENU = GPMENU()

function MDMENU() {
    return `
╔══✪ *MEDIA MENU*
║ 
╠➥ #upload [image/reply image]
╠➥ #profile
╠➥ #listgroup
╠➥ #covid [negara]
╠➥ #covidindo
╠➥ #maps [lokasi]
╠➥ #nyanyi1 [judul]
╠➥ #pantun
╠➥ #pantun1
╠➥ #quotes
╠➥ #fakta
╠➥ #katabijak
╠➥ #Quran [Nomor ayat]
╠➥ #cuaca [tempat]
╠➥ #kpop [query]
╠➥ #tts [kode bhs] [teks]
╠➥ #igstalk [@username]
╠➥ #tiktokstalk [@username]
╠➥ #smulestalk [@username]
╠➥ #toimg
╠➥ #music
╠➥ #video [judul]
╠➥ #getmusik [id download]
╠➥ #getvideo [Id Download]
╠➥ #berita
╠➥ #stiker
╠➥ #stiker nobg
╠➥ #stickergif
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.MDMENU = MDMENU()

function MKMENU() {
    return `
╔══✪ *MAKER MENU*
║ 
╠➥ #mememaker [teks | teks]
╠➥ #quotemaker [teks|teks|random]
╠➥ #alay [teks]
╠➥ #nulis [teks]
╠➥ #magernulis [text]
╠➥ #cooltext [text]
╠➥ #qrcode [optional]
╠➥ #ttp [teks]
╠➥ #ttps [text]
╠➥ #ttp2 [text]
╠➥ #ttg [text]
╠➥ #tosticker
╠➥ #lovemessage [text]
╠➥ #silk [text]
╠➥ #romance [text]
╠➥ #party [text]
╠➥ #pink [text]
╠➥ #thunder [text]
╠➥ #graffity [text]
╠➥ #tahta [text]
╠➥ #pornhub
╠➥ #esticker
╠➥ #sticker3d [text]
╠➥ #stickerpetir [text]
╠➥ #sticker2 [search]
╠➥ #ise [text]
╠➥ #ift [text]
╠➥ #iph [text|textt]
╠➥ #ims [text|textt]
╠➥ #imr [text|textt]
╠➥ #img [text|textt]
╠➥ #irg [text|textt]
╠➥ #inl [text|textt]
╠➥ #icg [text]
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.MKMENU = MKMENU()

function ASMENU() {
    return `
╔══✪ *ASUPAN MENU*
║
╠➥ #cewe
╠➥ #cowo
╠➥ #ptl
╠➥ #ptlvid
╠➥ #indohot
╠➥ #nekopoi
╠➥ #subreddit
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.ASMENU = ASMENU()

function KRMENU() {
    return `
╔══✪ *KERANG MENU*
║
╠➥ #kapankah
╠➥ #apakah
╠➥ #rate
╠➥ #nilai
╠➥ #bisakah
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.KRMENU = KRMENU()

function SHMENU() {
    return `
╔══✪ *SEARCH MENU*
║
╠➥ #movie [judul]
╠➥ #images [query]
╠➥ #sreddit [query]
╠➥ #kbbi [texs]
╠➥ #wiki [query]
╠➥ #translate [bahasa] [teks]
╠➥ #brainly [pertanyaan] [.jumlah]
╠➥ #lirik [optional]
╠➥ #chord [optional]
╠➥ #resepmasakan [optional]
╠➥ #resep1 [masakkan]
╠➥ #ytsearch
╠➥ #playstore [Nama apk]
╠➥ #pinterest 
╠➥ #google [ [teks] [website]
╠➥ #search [query]
╠➥ #cekzodiak
╠➥ #zodiak
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.SHMENU = SHMENU()

function DNMENU() {
    return `
╔══✪ *DOWNLOADER MENU*
║ 
╠➥ #ytmp3 [linkYt]
╠➥ #ytmp4 [linkYt]
╠➥ #twitter [linkTwitter]
╠➥ #smule [linkSmule]
╠➥ #tiktok [linkTiktok]
╠➥ #starmaker [linkStarmaker]
╠➥ #joox [lagu]
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.DNMENU = DNMENU()

function ANMENU() {
    return `
╔══✪ *ANIME MENU*
║ 
╠➥ #loli
╠➥ #shota
╠➥ #husbu
╠➥ #anime
╠➥ #quotesnime
╠➥ #wallpaperanime
╠➥ #malanime [name]
║
╚═✪〘 AMADEUS BOT 〙
`
}
exports.ANMENU = ANMENU()

function peraturan() {
  return `
*PERATURAN PENGGUNAKAN BOT*

!DILARANG
${ubah}1. DILARANG MENELPON ATAU VIDEO CALL BOT !
JIKA KAMU TELPON ATAU VIDEO CALL BOT, OTOMATIS BOT AKAN MEMBLOCK NOMOR KAMU SECARA PERMANEN
2. JIKA KAMU INGIN BUKA BLOKIR KAMU BISA HUBUNGI OWNER DENGAN SYARAT HARUS DONASI !
JANGAN SPAM BOT, JIKA BOT TIDAK RESPON BISA TANYAKAN KE OWNER
3. GUNAKAN COMMAND ATAU PERINTAH JEDA 3 DETIK AGAR BOT STABIL...

UNTUK KETENTUAN LAINNYA KAMU BISA CEK DI #snk${ubah}\n\n\n\n`
}
exports.peraturan = peraturan()

function info() {
    return `
██████████████████████
BOT TYPE : NODEJS
NAME : AMADEUS BOT
TEAM : SanKyu-Bot
YOUTUBE : https://www.youtube.com/channel/UCj7wt3nNMmlaJfxs1MODRLg
INSTAGRAM : https://instagram.com/sankyu.bot
WHATSAPP : https://wa.me/628119001453
██████████████████████`
}

exports.info = info()

function akun() {
  return `
██████████████████████
AKUN SOSIAL MEDIA YANG DAPAT DIIKUTI
YOUTUBE : https://www.youtube.com/channel/UCj7wt3nNMmlaJfxs1MODRLg
INSTAGRAM : https://instagram.com/sankyu.bot
WHATSAPP : https://wa.me/628119001453

TERIMA KASIH
██████████████████████`
}

exports.akun = akun()

function snk() {
    return `Syarat dan Ketentuan *AMADEUS BOT*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB
7. Bot ini juga menggunakan fitur berbayar atau premium !

Thanks !`
}
exports.snk = snk()

function donasi() {
    return `
╔══✪〘 DONATE 〙✪══
║
╠➥ *DONASI BISA MELALUI :*
╠➥ *PULSA : 08979952151*
╠➥ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
║
║ _NB : DONASI DARI KALIAN UNTUK PERKEMBANGAN BOT
║ INI KEDEPANNYA_
║
╚═〘 AMADEUS BOT 〙`
}
exports.donasi = donasi()

function rdp() {
    return `

`
}
exports.rdp = rdp()

function jasa() {
    return `
DAH NGAK BIKIN JASA`
}
exports.jasa = jasa()

function privat() {
    return ` 
╔══✪〘 MENU 〙✪══
║
╠➥ #playf
╠➥ #sth [text] (harta tahta)
╠➥ #bp [text] (blackpink)
║
╚═〘 AMADEUS BOT 〙`
}
exports.privat = privat()

function freemusic() {
    return `LAGU SUDAH DI HAPUS`

}
exports.freemusic = freemusic()

function diamond() {
  return ``
}
exports.diamond = diamond()

function readme() {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *#tiktokstalk @sankyu.bot*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *#igstalk @sankyu.bot*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *#smulestalk @sankyu.bot*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *#video Amadeus*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *#music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : #getmusic Iv32bS1*
Contoh : *Jika reply pesan : #getmusic 1*
Contoh : *Jika tidak reply pesan : #getvideo Iv32bS1*
Contoh : *Jika reply pesan : #getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *#starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *#twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *#xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *#nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *#ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *#ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *#tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *#smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *#ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *#fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *#tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *#jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *#jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *#googlesearch siapa itu AYAM*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *#cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *#tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *#quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *#lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *#checkip 182.0.144.145*`
}
exports.readme = readme()

function preminfo() {
  return `
╭───「 𝙋𝙧𝙚𝙢𝙞𝙪𝙢👑 」───
│➸ HAI SAYANG🙀
│ Gw mau jelaasih -"kok bayar 
│  anj🤬?" 
│ -"Kok premium💵?"
│ *JADI KALO GA SENENG YAUDAH
│  *BODO AMAT*
│ 
│
│➸ KOK MENU NYA BAYAR
│ W ngidupin bot juga pake 
│  modal😑
│ Ga kek lu pada yang mintak
│  free😤
│
│➸ Yg seharus ny premium
│   tp w freein 
│ -Menu Random nime dll
│ -Brainly
│ -Igstalk 
│ -Lirik lagu 
│ -Nulis :v
│ -Chord
│ -Arti nama
│ -nyanyi
│ -Dll🥴
│
│➸ 
│
│➸ "KOK NGIDUPIN BOT?"
│  YA UNTK BLJR LA GBLk🤬
│   
╰──────────────`
}
exports.preminfo = preminfo()
