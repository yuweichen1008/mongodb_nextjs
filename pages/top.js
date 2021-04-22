import { connectToDatabase } from "../util/mongodb";

export default function Top({ movies }) {
  return (
    <div>
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <table class="table-auto">
            <thead>
                <tr>
                <th>Title</th>
                <th>Metacritic</th>
                <th>Plot</th>
                </tr>
                {movies.map((movie) => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.metacritic}</td>
                        <td>{movie.plot}</td>
                    </tr>
                ))}
            </thead>
        </table>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}