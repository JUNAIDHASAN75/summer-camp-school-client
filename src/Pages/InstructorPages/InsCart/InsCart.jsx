

const InsCart = ({ user }) => {
    const { name, image, email } = user;
    console.log(user)
    return (
        <div>
            <div className="card w-full  shadow-xl">
                <figure><img className="h-96" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline bg-orange-600 border-0 text-white">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsCart;