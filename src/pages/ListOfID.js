import PlaceHolder from "../components/PlaceHolder";
import { getIDFromApi } from "../utils/Api";

const ListOfID = async (firstParam, secondParam) => {
  const res = await getIDFromApi();
  console.log(res);
  const data = res.results.map((element) => ({
    text: `${element.id} ${element.name}    ${element.status}   ${element.species}    `,
  }));
  return PlaceHolder(data);
};
export default ListOfID;
