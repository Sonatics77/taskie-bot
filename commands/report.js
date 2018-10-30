const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let failUser = ["Couldnt find user. They might be hiding under the couch.","Couldnt find user. Check your spelling dumbo.","Couldnt find user. Looks like they ran away from their problems","Couldn't find user. Did they steal the invisibility cloak?"];
    let rand = failUser[Math.floor(Math.random() * failUser.length)];
    if(!rUser) return message.channel.send(rand);
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportvalEmbed = new Discord.RichEmbed()
    .setDescription("Report Validated")
    .setColor("cc202c")
    .addField("Reported User", `${rUser} successfully!`)
    .addField("For Reason:", reason);
    let reportschannel = message.guild.channels.find(`name`,"reports");
    if(! reportschannel) return message.channel.send("Couldn't find reports channel");
    if(reportschannel) {
    reportschannel.send(reportEmbed);
    return message.channel.send(reportvalEmbed);

  }
}

module.exports.help = {
  name: "report"
}
