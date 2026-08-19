const input = document.getElementById("messageInput");

const button = document.getElementById("sendButton");

const chat = document.getElementById("chat");


function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("message");

    if (type === "user") {

        message.classList.add("user-message");

    } else {

        message.classList.add("alpha-message");

    }

    message.textContent = text;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}


function sendMessage() {

    const text = input.value.trim();

    if (!text) {

        return;

    }


    addMessage(text, "user");

    input.value = "";


    setTimeout(() => {

        addMessage(
            "Estoy lista. Mi cerebro de inteligencia artificial será conectado en el siguiente paso.",
            "alpha"
        );

    }, 500);

}


button.addEventListener(
    "click",
    sendMessage
);


input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);
