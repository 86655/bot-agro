const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Bot conectado!");
});

client.on("message", (message) => {

    if (message.body === "oi") {
        message.reply("Fala comigo! ");
    }

    if (message.body === "menu") {
        message.reply("Comandos disponíveis: oi, soja, milho");
    }

    if (message.body === "soja") {
        message.reply("A soja é uma das culturas mais importantes do Brasil.");
    }
    if (message.body === "milho") {     
        message.reply("O milho é um dos grãos mais importantes do nosso pais.")
    }

});

client.initialize();