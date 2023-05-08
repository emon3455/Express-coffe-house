import { useLoaderData } from "react-router-dom";
import Coffee from "../../components/Coffee";
import { useState } from "react";


const Home = () => {

    const loadedCoffes = useLoaderData();
    const [coffes, setCoffes] = useState(loadedCoffes);

    return (
        <div>

            <h2 className="text-5xl text-center font-bold my-5 ">View All Coffes</h2>

            <div className="grid grid-cols-2 gap-5 my-10 p-4">
                {
                    coffes.map(coffe=> <Coffee key={coffe._id} coffe={coffe} coffes={coffes} setCoffes={setCoffes}></Coffee> )
                }
            </div>
        </div>
    );
};

export default Home;