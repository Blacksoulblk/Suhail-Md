const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Brazzaville,Congo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "242055617560";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_41_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiczZkTjFhWUdYVjhROGVrSFBPWTI4TlA2S1N0cUh2anlreVp4c0dpRnozVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUGNIbm9zWExUNS1GOGd0VWl4bHVyUVwiLFxuICBcInBob25lSWRcIjogXCI5Y2YyODExNy01MmJkLTRlZTUtYjRjNi03Yzg4YmYxMzcxYWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTY5LFxuICAgICAgMTY1LFxuICAgICAgMTcwLFxuICAgICAgMTQ3LFxuICAgICAgMTM0LFxuICAgICAgMTYzLFxuICAgICAgMTQsXG4gICAgICA5NixcbiAgICAgIDMwLFxuICAgICAgMTEyLFxuICAgICAgMTEzLFxuICAgICAgMTExLFxuICAgICAgMTMzLFxuICAgICAgMTM0LFxuICAgICAgNzYsXG4gICAgICAxNzksXG4gICAgICAxODEsXG4gICAgICAyMjYsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMTEsXG4gICAgICAxMyxcbiAgICAgIDc0LFxuICAgICAgMTE1LFxuICAgICAgMjIwLFxuICAgICAgMjUxLFxuICAgICAgMTkxLFxuICAgICAgMjIsXG4gICAgICAxODAsXG4gICAgICAxODEsXG4gICAgICAzOCxcbiAgICAgIDIzNixcbiAgICAgIDAsXG4gICAgICAxNzMsXG4gICAgICAxOTIsXG4gICAgICA5MSxcbiAgICAgIDE1LFxuICAgICAgMTgxLFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldIMlRDVk1SXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDIwNTU2MTc1NjA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMDQ1Njc1MzU2MzUwOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xENzg4SUhFTVd1NnJRR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmpVckZMSEZoOWdNZ1NsREJkRmxxZnd4cGRTbkwrdndFNGtsREdiczczTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2ZnR4TFFWbEpod2NzbDJiQ0J4a2hnQ20veXRrVEdSWVJKb1hOK2N2OVhIU3l3WDlLRkhRSDRrcTdJUnZyTHlDTElYdENEL3VEa1JWNnQ4cGMzQlBEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCajlzSXJoSUhneGRHTURxTWRseUVqdUFDSXk2NG9tVVd3Q0k5YUFyTndSSVkwWjFDUXBFNm1UZlVYTHI0aXo3dDQzbDEyQUE1cmVORUxMNUpPdGtBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDIwNTU2MTc1NjA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQwNzMwNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
