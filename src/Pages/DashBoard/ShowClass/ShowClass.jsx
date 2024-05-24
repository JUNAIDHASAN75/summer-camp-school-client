

const ShowClass = ({ allclass }) => {
    console.log(allclass)
    const {name, insName ,insEmail, price, status, students, image} = allclass;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-12">
                <figure><img className="w-96 " src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Class: {name}</h2>

                    <p className="text-xl">Instructor: {insName}</p>
                    <p className="text-xl"> {insEmail}</p>
                    <p className="text-xl">Price: {price} $</p>
                    <p className="text-xl">Students: {students} $</p>
                    <p className="text-xl">Status: {status}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline border-0 bg-orange-600 text-white">View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowClass;