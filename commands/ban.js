const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {


    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(! bUser) return message.channel.send("Can't find user!");
    let breason = args.join(" ").slice(22);
    if(! message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You think you can fool me, you're not admin, nothing goes over my head, my reflexes are too fast, I would catch it");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned, for now...");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("cc202c")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banned By", `<${message.author}> with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", breason);

    let bChannel = message.guild.channels.find(`name`, "bans");
    if(! bChannel) return message.channel.send("Couldn't find bans channel");

    message.guild.member(bUser).kick(breason);
    bChannel.send(banEmbed);
    return;
  }


  module.exports.help = {
    name: "ban"
  }
