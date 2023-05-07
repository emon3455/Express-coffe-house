import { useLoaderData } from "react-router-dom";
import Coffee from "../../components/Coffee";


const Home = () => {

    const coffes = useLoaderData();

    return (
        <div>

            <h2 className="text-5xl text-center font-bold my-5 ">View All Coffes</h2>

            <div className="grid grid-cols-2 gap-5 my-10 p-4">
                {
                    coffes.map(coffe=> <Coffee key={coffe._id} coffe={coffe}></Coffee> )
                }
            </div>
        </div>
    );
};

export default Home;