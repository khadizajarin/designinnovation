"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Open_Sans,Roboto_Mono, } from 'next/font/google'
import { useState } from 'react';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})



const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    
    return (
        <div className="min-h-screen bg-primary bg-opacity-50 flex flex-col lg:flex-row" style={{fontFamily:"robotoMono"}}>
            <aside className="lg:w-64 p-6 shadow-lg bg-accent bg-opacity-80">
            <h2 className="text-xl font-extrabold hidden md:block text-primary ">Dashboard</h2>
            <div className="md:hidden flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-primary text-opacity-90">Dashboard</h2>
                <button onClick={toggleMenu} className="text-primary hover:text-text-neutral focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
                </button>
            </div>
      
            <nav className={`md:block ${isOpen ? 'block' : 'hidden'} md:mt-4 mt-2`}>
                <ul className="flex md:flex-col flex-row  space-x-4 md:space-x-0">
                <li className="mb-2">
                    <Link href="#profile" className="text-primary hover:text-neutral flex items-center">
                    <svg className="w-5 h-5 mr-2 border-neutral border-2 rounded-full" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 100 14 7 7 0 000-14z" />
                    </svg>
                    Profile
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="#settings" className="text-primary hover:text-neutral flex items-center">
                    <svg className="w-5 h-5 mr-2 border-neutral border-2 rounded-full" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 100 14 7 7 0 000-14z" />
                    </svg>
                    Settings
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="#logout" className="text-primary hover:text-neutral flex items-center">
                    <svg className="w-5 h-5 mr-2 border-neutral border-2 rounded-full" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 100 14 7 7 0 000-14z" />
                    </svg>
                    Logout
                    </Link>
                </li>
                </ul>
            </nav>
            </aside>


            {/*profile user name head part  */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-extrabold text-neutral">Welcome to the Coffee Lovers Dashboard...</h1>
                    <div className="flex items-center md:space-x-4 space-x-2">
                        <span className="text-neutral">User</span>
                        <Image 
                            width={40} 
                            height={40} 
                            src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="User Avatar" 
                            className="w-8 lg:h-8 h-7 rounded-full border-neutral border-2" 
                        />
                    </div>
                </header>
                {/* profile overview */}
                <section className=" shadow-lg rounded-lg p-6 mb-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40 ">
                    <h2 className="text-xl font-semibold mb-4 text-accent">Profile Overview</h2>
                    <p className="text-neutral">Discover personalized coffee recipes, tips, and articles tailored to your taste.</p>
                    <p className="text-neutral">Join our coffee community and share your favorite brews and brewing techniques.</p>
                </section>

                {/* two rows togather */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* recent activities section */}
                    <div className=" shadow-lg rounded-lg p-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40">
                        <h2 className="text-lg font-semibold mb-2 text-accent">Recent Activities...</h2>
                        <ul>
                            <li className="text-neutral mb-1"><span className='font-semibold'>New Recipe Added:</span> Vanilla Hazelnut Cold Brew</li>
                            <li className="text-neutral mb-1"><span className='font-semibold'>Article Liked: </span>&quot;The Art of Espresso: Perfecting Your Shot&quot;</li>
                            <li className="text-neutral mb-1"><span className='font-semibold'>Commented On: </span>&quot;Best Coffee Beans for a Rich Flavor&quot;</li>
                        </ul>
                    </div>
                    {/* settings options */}
                    <div className="shadow-lg rounded-lg p-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40">
                        <h2 className="text-lg font-semibold mb-2 text-accent">Settings...</h2>
                        <ul>
                            <li className="text-neutral mb-1"><span className='font-semibold'>Change Password: </span> Secure your account with a new password.</li>
                            <li className="text-neutral mb-1"><span className='font-semibold'>Notification Preferences:</span> Manage your notifications for new recipes and articles.</li>
                            <li className="text-neutral mb-1"><span className='font-semibold'>Privacy Settings:</span> Control your visibility and data sharing options within the coffee community.</li>
                        </ul>
                    </div>
                </section>

                {/* Logout section */}
                <section className="shadow-lg rounded-lg p-6 mt-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40">
                    <h2 className="text-lg font-semibold mb-4 text-accent">Logout...</h2>
                    <p className="text-neutral">Click the button below to log out of your Coffee Lovers account and come back soon for more caffeinated inspiration!</p>
                    <Link href="/" className="mt-4 inline-block px-4 py-2 hover:bg-neutral bg-secondary border-neutral border-2 border-opacity-50 text-accent hover:text-primary rounded focus:outline-none focus:shadow-outline">
                        Logout
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default page;
