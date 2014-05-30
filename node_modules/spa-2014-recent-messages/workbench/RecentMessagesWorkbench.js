import {RecentMessagesElement} from "../src/RecentMessagesElement";

document.registerElement("spa2014-recent-messages", RecentMessagesElement);

export function initializeWorkbench() {
    var sendButton = document.querySelector("#sendButton");
    var recentMessagesElement = document.querySelector("spa2014-recent-messages");

    var messages = new Map();

    messages.set("username", {status: "online", messageOutstanding: "message-outstanding"});
    messages.set("username2", {status: "offline", messageOutstanding: ""});

    sendButton.addEventListener("click", (mouseEvent) => {
        recentMessagesElement.recentMessagesActions.messageListArrived(messages);
    });
}