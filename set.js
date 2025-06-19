
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUa4+iSBT9L/UVMyIgKEkny1NREEGwkc1+KKB4KC+hEOmJ/32DPT092WRne/lU3Lq599xzzq3voKyyFm3RAPjvoG6yG8RoPOKhRoAHYhfHqAETEEEMAQ9a/WBefLmoo1aBHnXcl2/hPvAWlKFfBFd+tRVresxcQZ/1L+AxAXUX5Fn4m4Lbaxkwi5MpEaK07k4ol45eYQ/nlll5KzY70PqS5IxuyijtC3iMFWHWZGWi1CkqUAPzLRr2MGu+Bj/R7nLSclOrTmXhwnGq1+NTLnBWV1dsiN6u7evUp/XV5dX6Gvz7OusD2E9NR1XkA3a03T51HBZf9yqxstyrKwUbIr8Ut4vxDr/NkhJFWoRKnOHhy7wLOpeUqbh1N7M6D7ozo7tE3AzwbcfNdc+YupFzZvz4ohbV14CbtC/0LGFtQj9ZxG9pY3VTat0mA02sHBeSmtJHAxWVB0H4Ffi++fDK5f/wrhiUeCejFGpTh+mmvd74mlpL4iInCUcS+sHe9HixhRkVfg1+dSVT9SoemKUwd4y1esTQcBnqzagNYWZq8SoP8571Uv8QfsKHuGt+h5J4O5vB3hehfQ8o2msSe1emKj5Y0kw+hasdd7NFPwx0S4xvvukVTlzL0fIkx14x7wjL02/Zbjixr6VyQvK1Gea2Y4vCy3OiCxq0CPCzxwQ0KMla3ECcVeUYWywmAEa3AwobhJ/sgn53WZr7a7HdIFqi40axV+m2446URd+59bZQg3gnbXLfWJxewATUTRWitkXROmtx1QwGaluYoBbwf/41ASW643fdxm70bALirGmxW3Z1XsHoQ9SPSxiGVVfiw1CG0nhADeDJzzDCOCuTdqSxK2ETptkNSSnELeBjmLfo54CoQRHgcdOhn0srVdHIu7t2DkuVJsEEFE89sgjwgGJpjmNJmqTnS55Z/tF+68eysK6/lQiDCcifaXOWZGYUzbKz2Yx+Jo7xx0+AY70IYZjlLeCBZMoe0SaqsiVsMtRWKzFMBCkRwOdAH8Z4Z/5aqGpu5meL1gdVxRFzWTq9CykzuihRZ5wUZioTzSGB9JP5fxYBPNjkr5cNS7f9oOCTId2PKEpZvZc4OiiVJeMRvkREpmK28mCzVAB106LJjRxKGnvW/L06tdb6mqnso5XPGzejuB5SkvUydovQLQvRr82m61O8Zgx/1i0zRgrOusRV9DY2hXnhHbIwFPJrLUlvG/1VqbZQgX3nCM7WjyjC0pjifoKGvQ2Xd7lpT7fjwtisgpwSflj2uTL5j6cqe7pplGr8jTP03PwSjgL+t3TvwEeHkY/JLzV+vCX/so8irFPbd+oTuRsWqR14aLN3F+oKn0tfXAfnlWju++mVrFaYAo/HXxNQ5xDHVVMAHsAyaqosAhPQVN1oWa2Mq980k0RNk633yXPYYuFzDZysQC2GRQ34GTcn6TkzI5n3rH1T1WvYpoAHdLJ3N5fR04NQ1wcM8cdWAWH8jP4CHn8Dk/rwc3AHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "263776030359", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "ZAIN", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
