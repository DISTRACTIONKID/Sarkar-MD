// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlMYTJnUEhjK1pIZGxtdjBLMUVvOEhXT3pXc29wQVd3NjhKRFlIOHhuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUng5NEJ5Rk1OMnY5aXN3WnpRTHZ2dFFtY2Q0S0dDdWdVRlJWMDVhdHNGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR2JhYTBpTlV0aE9NOUh6dTR5c2docmgxRzNYMjJYa2NwR0FBRGhNaFdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0VklFeW8rYU9vWlZRcmsyelZWOWNUUis1SFRUMmRleFZFRGx3YjNrQlJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNT1ZmNFFvR01nTmVGbjFZZEM1WWhXTUVLTWtzdHg5MEdBVlpzOFBtMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBncmYvTFBGYVNVcjV0aDQ1QmVIcENNMXJsNmpDWWR2Vk0xdzZVNnVaak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBiRkhaT0tjeUVTZkZNaU5JaFUrRUxIUGVqSEU3YnBEYXJnWkZTWEhWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhLMWJjUThqVU1XY0tiN0pNbjg3eXBNSlY0TjhRN3lyRGZBOEFUUzExVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdhdFllckNPVjFGSzJSU2tZdTFudGtOQVk4RGJFMlh1R25PajNnTkVVTHVlcUwyeGF2S1NjRExpSXJYdXI3Rys5OW9EZkNwNE9FQ0w2QU0vRmZXY2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiIwYW41emJkeG1ucXNYYUVLUEE0VjBZczBGOEhPc0ova0o4QUxCQTN6WWZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc1OTExMjAxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNDdEN0Q3Nzc1QkEwQjRDRkFEQzczMEY1NDY5QTNFMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3NzYzMDc1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiMjU1NzU5MTEyMDEwOjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImtpZGkiLCJsaWQiOiI2OTk0NDA0NTc0MDI0MDo2NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0piZThaNERFUDMrc3NFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpsSkpDWlBWVk5EY3M5STNCYkFXRW9Xb21KNUdiNUdrQUIzTTNEL09QUjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InB6K3p3dUJ1d2h4bGlKcVZNMWdNQzBTT0VCc01ZZDRiTmpKNEY3Z2ZpeGxLYko3TjJYVTBuaGJWaW5iSjYyYUx5OHZGdUVxNmpKZTdsNmpXZWh2QkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEOHVXenhpMzhLaUVYcU9IYU1xQTVxcGVpRkhSU0dOZ0NyczZ3c3h0WDNjTlpsMGtNcU81aGxaeDJKV0w2VlZ1VFgvQ21qamIza09UdEh2Wk5JYWNqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc1OTExMjAxMDo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTWlNTUW1UMVZUUTNMUFNOd1d3RmhLRnFKaWVSbStScEFBZHpOdy96ajBkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDc3NjMwNzMsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0tpIn0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'false' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255759112010",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
