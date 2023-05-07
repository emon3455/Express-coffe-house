import Swal from 'sweetalert2'

const AddCoffe = () => {

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

        const coffe = {name,chef,suplier,taste,category,details,photo};
        console.log(coffe);

        // hiting post:
        fetch("http://localhost:5000/coffes",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(coffe)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffe added successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            form.reset();
        })
        .catch(er=>{
            console.log(er.message);
        })

    }

    return (
        <div className="p-4 bg-[F4F3F0]">
            <h2 className="text-4xl text-center font-semibold">Add New Coffe</h2>
            <form onSubmit={handleSubmit} className="">

                <div className="flex gap-5">

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text"> Enter Coffe name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter Coffe chef</span>
                        </label>
                        <label className="">
                            <input type="text" name="chef" placeholder="chef" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className="flex gap-5">

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text"> Enter Coffe suplier</span>
                        </label>
                        <label className="">
                            <input type="text" name="suplier" placeholder="suplier" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter Coffe taste</span>
                        </label>
                        <label className="">
                            <input type="text" name="taste" placeholder="taste" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className="flex gap-5">

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text"> Enter Coffe catagory</span>
                        </label>
                        <label className="">
                            <input type="text" name="category" placeholder="category" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter Coffe details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" placeholder="details" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className="">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Enter Coffe photo</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" placeholder="photo url" className="w-full input input-bordered" />
                        </label>
                    </div>

                </div>

                <input type="submit" className="my-2 w-full btn btn-warning" value="Add Coffe" />

            </form>
        </div>
    );
};

export default AddCoffe;