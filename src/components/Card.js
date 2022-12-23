import createElement from "../utils/createElement";

const Card = ({ text = "Bonjour", image, tagName = "div", id} = {}) =>
  createElement({
    tagName,
    classList: ["card"],
    children: [
      {
        tagName: "p",
        text,
        // button,
      },
      {
        tagName: "img",
        attributes: {
          src:
            image ||
            "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
        },
      },
      {
        tagName: 'button',
        text: text,
        classList: ["button"],
        attributes: {
          id,
        }
      }
    ],
  });
export default Card;
