import { Bot } from "./bot";
import * as path from 'path';

console.log("hello Farha");

(async () => {
    try {
        const credentials = require(path.join(__dirname, "../credentials.json"));

        const bot = new Bot(credentials.token);

        await bot.init(credentials.clientId, credentials.guildId);
    } catch (e) {
        console.error(e);
    }
})();