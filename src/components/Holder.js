import createElement from "../utils/createElement";

const Holder = ({ text = "Bonjour", tagName = "div" } = {}) =>
  createElement({
    tagName,
    children: [
      {
        tagName: "p",
        text,
      },
    ],
  });

export default Holder;
