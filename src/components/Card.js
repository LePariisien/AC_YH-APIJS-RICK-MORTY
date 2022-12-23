import createElement from "../utils/createElement";

const Card = ({ text = "Bonjour", image, tagName = "div", button } = {}) =>
  createElement({
    tagName,
    classList: ["card"],
    children: [
      {
        tagName: "p",
        text,
        button,
      },
      {
        tagName: "img",
        attributes: {
          src:
            image ||
            "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
        },
      },
    ],
    button: {
      tagName: "button",
      text: "button",
      attributes: {
        id: "button",
      },
    },
    button: {
      tagName: "button",
      text: "button",
      attributes: {
        id: "button",
      },
    },
  });
export default Card;
