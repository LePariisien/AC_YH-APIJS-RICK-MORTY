import createElement from "../utils/createElement";

const Card = ({ text = "Bonjour", image, tagName = "div" } = {}) =>
  createElement({
    tagName,
    classList: ["card"],
    children: [
      {
        tagName: "img",
        attributes: {
          src:
            image ||
            "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
        },
      },
      {
        tagName: "p",
        text,
      },
    ],
  });

export default Card;
