/* eslint-disable react/prop-types */


const Coffee = ({ coffe }) => {

    const { name, chef, suplier, photo } = coffe;

    return (
        <div className="card card-side gap-10 bg-base-100 shadow-2xl p-2">
            <figure><img  src={photo} alt="Movie" /></figure>
            <div className="flex justify-around items-center w-full gap-5">
                <div className=" w-2/3">
                    <h2 className="font-bold text-2xl">{name}</h2>
                    <p> Chefs: {chef} </p>
                    <p> Suplier: {suplier} </p>
                </div>
                <div className="btn-group btn-group-vertical space-y-1 w-1/3">
                    <button className="btn btn-active">View</button>
                    <button className="btn">Update</button>
                    <button className="btn btn-warning"> X </button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;