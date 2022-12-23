import ListCard from "../components/ListCard";
import { getUserFromApi } from "../utils/Api";

const ListOfUser = async (firstParam, secondParam, treeParam) => {
  const res = await getUserFromApi();

  // console.log(res);
  const data = res.results.map((element) => ({
    text: `${element.name} ${element.gender}`,
    image: element.image,
    id: element.id,
  }));

  // const ListCard = async () => {
  //   const res = await getUserFromApi();

  //   console.log(res);
  // ListCard.document
  //   .getElementById("button")
  //   .addEventListener("click", (event) => {
  //     console.log("click");

  //     function event() {
  //       event.preventDefault();
  //     }
  //   });

  return ListCard(data);
};
export default ListOfUser;

// recuperer listcard puis renvoyer element avec data dedans
