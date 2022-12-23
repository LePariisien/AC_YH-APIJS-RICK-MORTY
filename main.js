import ListOfPost from "./src/pages/ListOfPost";
import ListOfUser from "./src/pages/ListOfUser";
import ListOfID from "./src/pages/ListOfID";
import TabManager from "./src/utils/TabManager";
import "./style.css";

const rootElement = document.querySelector("#app");

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfUser,
    params: [1, "hello"],
  },
  page2: {
    component: ListOfPost,
    params: ["https://jsonplaceholder.typicode.com/posts"],
  },
  page3: {
    component: ListOfID,
    params: ["https://rickandmortyapi.com/api/character/"],
  },
});

document.querySelectorAll("[data-tabId]").forEach((element) => {
  element.addEventListener("click", () => {
    tabManager.openTabById(element.getAttribute("data-tabId"));
    element.querySelector("button").addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event);
      PointerEvent(event);
      return ListOfID(event);
    });
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
