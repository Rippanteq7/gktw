"use strict";

module.exports = {
    Baileys: {
        ...require("baileys"),
        G_US: "@g.us",
        uploadFile: async (buffer) => {
            const file = buffer.toString("base64")
            const json = await (await fetch(
                "https://ochinpo-up.hf.space/upload",
                {
                    method: "POST",
                    body: JSON.stringify({ file }),
                    headers: { "Content-Type": "application/json" }
                }
            )).json()
            return json.url
        }
    },
    Client: require("./Classes/Client.js"),
    CommandHandler: require("./Classes/CommandHandler.js"),
    Cooldown: require("./Classes/Cooldown.js"),
    VCardBuilder: require("./Classes/Builder/VCard.js"),
    Events: require("./Constant/Events.js"),
    MessageType: require("./Constant/MessageType.js"),
    Formatter: require("./Helper/Formatter.js")
};
