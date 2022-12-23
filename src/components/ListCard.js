import { tabManager } from "../../main";
import Card from "./Card";

export default function ListCard(arrayOfElement) {
  const template = document.querySelector("#listOfElement");
  const element = template.content.cloneNode(true);

  arrayOfElement.forEach((e) => {
    const card = Card(e)
    element.querySelector("div").appendChild(card);
    card.querySelector("button").addEventListener("click", (event) => {
      event.preventDefault();
      tabManager.openTabById("characterPage", event.target.id);
    });
  });
  return element;
}
