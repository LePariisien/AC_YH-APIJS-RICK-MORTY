import Holder from "./Holder";

export default function ListID(arrayOfElement) {
  const template = document.querySelector("#listOfElement");
  const element = template.content.cloneNode(true);

  arrayOfElement.forEach((e) => {
    element.querySelector("div").appendChild(Holder(e));
  });

  return element;
}
