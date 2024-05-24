import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Other from "../Other/Other";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PASS | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Other></Other>
        </div>
    );
};

export default Home;