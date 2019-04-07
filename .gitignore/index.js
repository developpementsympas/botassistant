const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NTY0MzcxMTg4NjM4NDE2OTI3.XKm5pQ.d-TnzK4AYd9r5LbqAnqqlBmGplQ");

client.on("message", message => {
    if(message.content === "!Monteur"){
        message.channel.sendMessage("Nath__ et un monteur de qualité");
        console.log("répond a Monteur");
    }
});

client.on("guildMemberAdd", member => {
    member.guild.channels.get("563830665465036820").send("Bienvenue " + member.user + " dans le serveur MONTEUR/GFX :wink: on espère que tu trouvera ton bonheur pour passer commande go sur https://docs.google.com/forms/d/e/1FAIpQLScOh4dbA_AhNKRdjdLsnAop0W9pQwa1tUGO7_iREgzEskwRPw/viewform?usp=sf_link")
});

client.on("message", message => {
    if(message.content === "!Assistant"){
        message.channel.sendMessage("Que puis-je faire pour vous ?");
        console.log("répond a sont appel");
    }
});

client.on("message", message => {
    if(message.content === "Assistant va ramasser les poubelle"){
        message.channel.sendMessage("nick ta mère :middle_finger: !")
        console.log("répond a va ramasser les poubelle")
    }
});

client.on("message",message => {
    if(message.content === "!montage"){
        message.channel.sendMessage("tiens fait ta commande :wink: : https://docs.google.com/forms/d/e/1FAIpQLScOh4dbA_AhNKRdjdLsnAop0W9pQwa1tUGO7_iREgzEskwRPw/viewform?usp=sf_link");
        console.log("répond a !montage");
    }
});
