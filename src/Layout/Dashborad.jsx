import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { Fade, Slide } from "react-awesome-reveal";


const Dashborad = () => {
    // TODO :laod data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div>


            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-orange-600 text-white text-2xl fixed md:w-[90%] z-50">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <li className="list-none"><Link to="/" className=" hover:border-b-2 hover:border-b-orange-600 font-semibold text-xl">Home</Link></li>

                        </div>
                        <Fade delay={1e3} cascade damping={1e-1}>
                            Easy-to-use animation library for React apps
                            <div className="flex-none hidden lg:block z-50">
                                <ul className="menu menu-horizontal">
                                    {/* Navbar menu content here */}

                                    {
                                        isAdmin ? (<>
                                            <li><Link to="/dashboard/allclasses">All Classes</Link></li>
                                            <li><Link to="/dashboard/allusers">All Users</Link></li>
                                        </>) : isInstructor ? (<>
                                            <li><Link to="/dashboard/askclasses">Add a Class</Link></li>
                                            <li><a>Navbar Item 2</a></li>
                                        </>) : (<>
                                            <li><Link to="/dashboard/myselect">Student Classes</Link></li>
                                            <li><a>student bar</a></li>
                                        </>)
                                    }


                                </ul>
                            </div>
                        </Fade>
                    </div>
                    {/* Page content here */}
                    <Slide>
                        <div className="mt-28 w-[80%] mx-auto" >
                            <Outlet></Outlet>
                        </div>
                    </Slide>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashborad;