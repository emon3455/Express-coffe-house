/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffee = ({ coffe , coffes, setCoffes }) => {

    const { _id, name, chef, suplier, photo } = coffe;

    const handleDelete = (id)=>{
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

            if (result.isConfirmed) {
            
                fetch(`http://localhost:5000/coffes/${id}`,{
                    method:"DELETE"
                })
                .then(res=> res.json())
                .then(data=> {
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your coffe has been deleted.',
                            'success'
                        );
                        const remaining = coffes.filter(cf=> cf._id !== _id);
                        setCoffes(remaining);
                    }
                    else{
                        Swal.fire({
                            title: 'Error!',
                            text: 'Something went wrong',
                            icon: 'error',
                            confirmButtonText: 'ok'
                          }) 
                    }
                })
            }
          })

       
    }

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
                    <Link to={`/updateCoffe/${_id}`}>
                        <button className="btn w-full">Update</button>
                    </Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-warning"> X </button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;