import CharacterPage from "./src/pages/CharacterPage";
import ListOfPost from "./src/pages/ListOfPost";
import ListOfUser from "./src/pages/ListOfUser";
import TabManager from "./src/utils/TabManager";
import "./style.css";

const rootElement = document.querySelector("#app");

export const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfUser,
    params: [1, "hello"],
  },
  page2: {
    component: ListOfPost,
    params: ["https://jsonplaceholder.typicode.com/posts"],
  },
  characterPage: {
    component: CharacterPage,
  }
});

document.querySelectorAll("[data-tabId]").forEach((element) => {
  element.addEventListener("click", () => {
    tabManager.openTabById(element.getAttribute("data-tabId"));
  });
});

// const ListCard = async () => {
//   const res = await getIDFromApi();
//   element.querySelector("button").innerHTML = "button";
//   element.querySelector("button").addEventListener("click", (event) => {
//     // console.log("click");
//     event.preventDefault();

//     return ListCard();
//   });
// };
// ListCard.filter(function (element) {
//   console.log(element);
// });
tabManager.openTabById("page1", "page2", "page3");
// document.querySelectorAll("[p]").forEach((element) => {
//   element.addEventListener("click", () => {
//     tabManager.openTabById(element.getAttribute("p"));
//   });
// });

// tabManager.openTabById("page3");
