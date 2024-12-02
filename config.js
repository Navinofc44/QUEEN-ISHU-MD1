const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "nVRA0JiI#Oeqn4q6gWjm7SiO0Z76HdKm2FsyQKoG4jD_fHgnDu8U",  // ADD Your Session Id 
MODE: process.env.MODE || "public",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //add true or false
BOT_NAME: process.env.BOT_NAME || "Pahasara Tm",
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!CUSTOM-SETTING-CONFIG=====================
AUTO_VOICE: process.env.AUTO_VOICE || "true", //add true or false
AUTO_STICKER: process.env.AUTO_STICKER || "true", //add true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", //add true or false
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", //add true or false
AUTO_REACT: process.env.AUTO_REACT || "true", //add true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //add true or false
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!API-CONFIG=================================
///===============================================DONT-CHANGE-API=========================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!ALIVE-CONFIG================================
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/vzDwkjg.jpeg", //add alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "𝗦𝗣𝗘𝗘𝗗 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗕𝗢𝗧 𝗰𝗿𝗲𝘁𝗲𝗱 𝗯𝘆 𝗟𝗔𝗞𝗦𝗜𝗡𝗗𝗨 🌝♥️🎀", //add alive msg
};
