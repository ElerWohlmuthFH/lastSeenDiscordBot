
# LastSeenDiscordBot

Discord Bot that shows when a user was last seen online.



## Installation

1. Download files.
2. Install all NodeJS modules required:
```
npm i
```
3. Fill out `config.example` and rename it to `config.json`.
* `token` is your Discord token.
* `prefix` is your Bot prefix.
* `owners` is an array of bot owner IDs.
* `colorOffline` is the color of embeds when the seen user is offline
* `colorOnline` is the color of embeds when the seen user is online
* `clientOptions` is the Discord.js Client options. Don't touch if you don't know what you're doing.
* `inactivityWarning` is the time it takes before a warning will be shown when you run the `seen` command on a user (inactivity warning).
4. Run the bot:
```
node index.js
```
If the bot does not start, `npm rebuild` might fix the problem.
## Commands

* `<prefix>seen @name` or `<prefix>lastseen @name` to see when a user was last online

## Images
![alt text](https://github.com/ElerWohlmuthFH/lastSeenDiscordBot/blob/master/online.png?raw=true)
![alt text](https://github.com/ElerWohlmuthFH/lastSeenDiscordBot/blob/master/offline.png?raw=true)
