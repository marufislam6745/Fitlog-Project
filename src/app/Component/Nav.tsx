import Image from 'next/image';
import logo from "@/assets/logo.png"
import Link from 'next/link';

const Nav = () => {
    return (
        <div className="navbar lg:w-300 lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href="/">Workouts</Link></li>
                        <li><Link href="">My Plan</Link></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-2 text-2xl'>
                    <Image src={logo} alt='logo image'></Image>
                    <h3 className='font-bold text-white'>FITLOG</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Workouts</Link></li>
                    <li><Link href="">My Plan</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <p className="py-2 px-4 rounded-3xl hover:border border-white"><Link href="">Plan</Link></p>
                <p className="py-2 px-4 rounded-3xl hover:border border-white"><Link href="">Saved</Link></p>
            </div>
        </div>
    );
};

export default Nav;