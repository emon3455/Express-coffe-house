import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffe = () => {

    const coffe = useLoaderData();
    console.log(coffe);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name  = form.name.value;
        const chef  = form.chef.value;
        const suplier  = form.suplier.value;
        const taste  = form.taste.value;
        const category  = form.category.value;
        const details  = form.details.value;
        const photo  = form.photo.value;

        const newCoffe = {name,chef,suplier,taste,category,details,photo};
        console.log(newCoffe);

        fetch(`http://localhost:5000/coffes/${coffe._id}`,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newCoffe)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffe Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                form.reset();
            }
        })
        .catch(er=>{
            console.log(er.message);
        })

    }

    return (
        <div className="p-4 bg-[F4F3F0]">
            <h2 className="text-4xl text-center font-semibold">Update Coffe: {coffe.name}</h2>
            <form onSubmit={handleSubmit} className="">

                <div className="flex gap-5">

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text"> Enter Coffe name</span>
                        </label>
                        <label className="">
                            <input defaultValue={coffe.name} type="text" name="name" placeholder="name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter Coffe chef</span>
                        </label>
                        <label className="">
                            <input defaultValue={coffe.chef} type="text" name="chef" placeholder="chef" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className="flex gap-5">

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text"> Enter Coffe suplier</span>
                        </label>
                        <label className="">
                            <input type="text" defaultValue={coffe.suplier}  name="suplier" placeholder="suplier" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter Coffe taste</span>
                        </label>
                        <label className="">
                            <input type="text" defaultValue={coffe.taste} name="taste" placeholder="taste" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className="flex gap-5">

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text"> Enter Coffe catagory</span>
                        </label>
                        <label className="">
                            <input type="text" defaultValue={coffe.category} name="category" placeholder="category" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter Coffe details</span>
                        </label>
                        <label className="">
                            <input type="text" defaultValue={coffe.details} name="details" placeholder="details" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className="">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Enter Coffe photo</span>
                        </label>
                        <label className="">
                            <input type="text" defaultValue={coffe.photo} name="photo" placeholder="photo url" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <input type="submit" className="my-2 w-full btn btn-warning" value="Update Coffe" />

            </form>
        </div>
    );
};

export default UpdateCoffe;