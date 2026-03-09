const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

// Cria a conexão com o WhatsApp
const client = new Client();

// Mostra o QR Code no terminal
client.on("qr", (qr) => {
    console.log("Escaneie o QR Code para conectar o bot:");
    qrcode.generate(qr, { small: true });
});

// Mensagem quando o bot conecta
client.on("ready", () => {
    console.log("Bot conectado com sucesso!");
});

// Evento que escuta as mensagens recebidas
client.on("message", (message) => {
    // Pega a mensagem e transforma em minúscula
    const texto = message.body.toLowerCase().trim();

    // Mostra no terminal o que o usuário enviou
    console.log("Mensagem recebida:", texto);

    // Respostas do bot
    if (texto === "oi") {
        message.reply("Oi! Eu sou o Agro Bot, digite menu que eu te mostro as opções dísponiveis.");
    } 
    else if (texto === "menu") {
        message.reply(
            "Comandos disponíveis:\n" +
            "- oi\n" +
            "- menu\n" +
            "- soja\n" +
            "- milho\n" +
            "- ajuda"
        );
    } 
    else if (texto === "soja") {
        message.reply("A soja é uma das culturas mais importantes do agronegócio brasileiro.");
    } 
    else if (texto === "milho") {
        message.reply("O milho é um dos grãos mais importantes do nosso país.");
    } 
    else if (texto === "ajuda") {
        message.reply("Digite 'menu' para ver os comandos disponíveis.");
    } 
    else {
        message.reply("Comando não encontrado. Digite 'menu' para ver as opções.");
    }
});

// Inicia o bot
client.initialize();