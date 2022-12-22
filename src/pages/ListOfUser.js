import ListCard from "../components/ListCard";
import { getUserFromApi } from "../utils/Api";

const ListOfUser = async (firstParam, secondParam) => {
  const res = await getUserFromApi();
  // console.log(res);
  const data = res.results.map((element) => ({
    text: `${element.name} ${element.gender}`,
    image: element.image,
  }));
  // const ListCard = await getCardFromApi();
  // document.getElementById("p").innerHTML = "Hello World";

  return ListCard(data);
};

export default ListOfUser;

// recuperer listcard puis renvoyer element avec data dedans
