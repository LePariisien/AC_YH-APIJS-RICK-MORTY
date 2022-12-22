import ListCard from "../components/ListCard"
import { getUserFromApi } from "../utils/Api"

const ListOfUser = async (firstParam, secondParam) => {
  const res = await getUserFromApi()
  console.log(res)
  const data = res.results.map((element) => ({
    text: `${element.name} ${element.gender}`,
    image: element.image
  }))
  return ListCard(data)
}

export default ListOfUser