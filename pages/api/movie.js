import { connectToDatabase } from "../../util/mongodb";

const movie = () => {

  getData = async (req, res) => {
    const { db } = await connectToDatabase();
  
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
  
    res.json(movies);
  };

  return (
    <div>
      Movie List
    </div>
  )
}

export default movie
