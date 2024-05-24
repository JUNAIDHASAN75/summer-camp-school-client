import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const {user,logOut} =useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{
            console.log('logOUt successfylly')
        })
        .catch(error=>console.log(error))
    }

    const navItems = <>
        <li><Link to="/" className=" hover:border-b-2 hover:border-b-orange-600 font-semibold text-xl">Home</Link></li>
        <li><Link to="/instructor" className=" hover:border-b-2 hover:border-b-orange-600 font-semibold text-xl">Instractor</Link></li>
        <li><Link to="/approvedclass" className=" hover:border-b-2 hover:border-b-orange-600 font-semibold text-xl">Classes</Link></li>
        <li><Link to="/dashboard/classadd" className=" hover:border-b-2 hover:border-b-orange-600 font-semibold text-xl">DashBoard</Link></li>
        {user ?<div className="flex items-center gap-2"><img className="w-[40px] rounded-full" src={user?.photoURL} alt="" /> <button onClick={handleLogOut} className=" hover:border-b-2 hover:border-b-orange-600 font-semibold text-xl">LogOut</button></div>:
        <li><Link to="/login" className=" hover:border-b-2 hover:border-b-orange-600 font-semibold text-xl">Login</Link></li>

        }
    </>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-20 fixed md:w-[90%] z-10 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 p-2 w-52 bg-black bg-opacity-60 rounded-lg">
                            {navItems}
                        </ul>
                    </div>
                    <h2 className="font-semibold md:text-2xl shadow-lg md:ml-12">PrimePlay Sports School</h2>
                </div>
                <div className="navbar-end md:mr-12 hidden lg:flex">
                    <ul className="flex justify-between items-center gap-4 px-1">
                        {navItems}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;