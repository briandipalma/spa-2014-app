import {HeaderElement} from "spa-2014-header";

document.registerElement("spa2014-header", HeaderElement);

export function insertApplicationElements() {
	document.body.innerHTML = "<spa2014-header></spa2014-header>";
}