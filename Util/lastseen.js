const {RichEmbed} = require('discord.js');
const ms = require('ms');
const moment = require('moment');
require('moment-duration-format');

module.exports = async (client, user, avatarURL, displayName) => {
    const warnTime = ms(client.config.inactivityWarning) || null;
    let lastseen = 'Unknown (Not enough information gathered)';
    const embed = new RichEmbed()
        .setColor(client.config.colorOffline)
        // .setTitle(`${user.tag} was last seen`)
        .setAuthor(user.tag, avatarURL)
    //.setTimestamp();
    const onlineStatus = ['dnd', 'idle', 'online'];
    if (onlineStatus.includes(user.presence.status)) {
        lastseen = 'is online';
		embed.setColor(client.config.colorOnline)
    } else {
        lastseen = await client.db.get(user.id);
        if (lastseen) {
            lastseen = `${moment.duration(Date.now() - lastseen).format('[was last seen] D [days], H [hours], m [minutes] [and] s [seconds]')} ago`;
            if (!warnTime) return;
            if ((Date.now() - (await client.db.get(user.id))) > warnTime) {
                embed.addField('⚠ Inactivity Warning', `This user has not been online for more then ${ms(warnTime, {long: true})}!`);
                embed.setColor(0xed2939);
            }
        } else {
            lastseen = 'Unknown (Not enough information gathered)';
        }
    }
    embed.setDescription(lastseen);
    return embed;

};
