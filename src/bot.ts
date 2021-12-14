import { Client, Intents, TextChannel } from "discord.js";

export class Bot {
    readonly #credentials: string;
    readonly #client: Client;

    constructor(token: string) {
        this.#credentials = token;
        this.#client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

        this.#client.login(token)
    }

    public async init(clientId: string, guildId: string): Promise<void> {
        this.#client.on('ready', () => {
            console.log('ready');

            const channel = this.#client.channels.cache.get('665738948970283061');

            (channel as TextChannel).send('OH...MY...GOD')
        })
    }
}