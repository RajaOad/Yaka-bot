/*▓██   ██▓ ▄▄▄       ██ ▄█▀▄▄▄      
 ▒██  ██▒▒████▄     ██▄█▒▒████▄    
  ▒██ ██░▒██  ▀█▄  ▓███▄░▒██  ▀█▄  
  ░ ▐██▓░░██▄▄▄▄██ ▓██ █▄░██▄▄▄▄██ 
  ░ ██▒▓░ ▓█   ▓██▒▒██▒ █▄▓█   ▓██▒
   ██▒▒▒  ▒▒   ▓▒█░▒ ▒▒ ▓▒▒▒   ▓▒█░
 ▓██ ░▒░   ▒   ▒▒ ░░ ░▒ ▒░ ▒   ▒▒ ░
 ▒ ▒ ░░    ░   ▒   ░ ░░ ░  ░   ▒   
 ░ ░           ░  ░░  ░        ░  ░
 ░ ░                               

Hello,
Thanks for using Yaka bot.
I am,

██╗   ██╗ █████╗ ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗
╚██╗ ██╔╝██╔══██╗██║ ██╔╝██╔══██╗██╔════╝██║  ██║██║
 ╚████╔╝ ███████║█████╔╝ ███████║███████╗███████║██║
  ╚██╔╝  ██╔══██║██╔═██╗ ██╔══██║╚════██║██╔══██║██║
   ██║   ██║  ██║██║  ██╗██║  ██║███████║██║  ██║██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝
                                                    */
                                                   
require("dotenv").config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

let gg = process.env.MODS;
if (!gg) {
  gg = "923063080758";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb://pokemonmaster:Rajacluster1234@ac-brtkfzb-shard-00-00.emp0npb.mongodb.net:27017,ac-brtkfzb-shard-00-01.emp0npb.mongodb.net:27017,ac-brtkfzb-shard-00-02.emp0npb.mongodb.net:27017/whatsappbot?ssl=true&replicaSet=atlas-yr8avl-shard-0&authSource=admin&retryWrites=true&w=majority"; // paste your own MongoDB url..
global.sessionId = process.env.SESSION_ID || "dlfhdsfhdsfh";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCAYZ930Rq1EFiRNRJuSeGGrKljCnOb8-U"; // paste Your own Api Key..
global.packname = process.env.PACKNAME || `👹 𝕐𝕒𝕜𝕒ᵐᵈ`;
global.author = process.env.AUTHOR || "by: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

