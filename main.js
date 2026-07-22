import * as chat from "./chat/chat.js"

fetch("./chat/chat.html")
	.then(res => res.text())
	.then(html => {
		document.querySelector(".page").innerHTML = html
		chat.subcontent()
		chat.subnavactive()
		document.querySelector(".chat .content .subnav .all").click()
	})