import { Fade, Slide } from "react-awesome-reveal";

const ClassCards = ({ classes }) => {
    const { name, image, students, insName, price, seats } = classes;
    // console.log(classes)
    return (
        <div className="">
            <div className="card h-[410px]  image-full p-2  hover:p-0 transition-all">
                <figure><img className="rounded-none " src={image} alt={name} /></figure>
                <div className="card-body">
                    <Slide>
                        <h2 className="card-title text-3xl">{name}</h2>
                        <h2 className="card-title text-3xl">Ins Name: {insName}</h2>
                    </Slide>
                    <Fade delay={1e3} cascade damping={1e-1}>
                    <div className="space-y-2">
                        <p className="text-xl">Students :{students}</p>
                        <p className="text-xl">Available Seats :{seats}</p>
                        <p className="text-xl">Price: {price}$</p>
                        <p className="text-xl">{ }</p>
                    </div>
                    </Fade>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCards;