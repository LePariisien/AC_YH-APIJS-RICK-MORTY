import Card from "./Card";

export default function ListCard(arrayOfElement) {
  const template = document.querySelector("#listOfElement");
  const element = template.content.cloneNode(true);

  arrayOfElement.forEach((e) => {
    element.querySelector("div").appendChild(Card(e));
    element.querySelector("div").appendChild(document.createElement("button"));
    element.querySelector("button").innerHTML = "button";
    element.querySelector("button").addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event);
      return ListCard();
    });
  });

  return element;
}
