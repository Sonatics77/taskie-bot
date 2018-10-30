const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(! kUser) return message.channel.send("Can't find user!");
    let kreason = args.join(" ").slice(22);
    if(! message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You think you can fool me, you're not admin, nothing goes over my head, my reflexes are too fast, I would catch it");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked, for now...");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("cc202c")
    .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicked By", `<${message.author}> with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kreason);

    let kChannel = message.guild.channels.find(`name`, "kicks");
    if(! kChannel) return message.channel.send("Couldn't find kicks channel");

    message.guild.member(kUser).kick(kreason);
    kChannel.send(kickEmbed);
    return;
  }


  module.exports.help = {
    name: "kick"
  }
