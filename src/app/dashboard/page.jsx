import Image from 'next/image';
import Link from 'next/link';
import { Open_Sans,Roboto_Mono, } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const page = () => {
    return (
        <div className="min-h-screen bg-primary bg-opacity-50 flex" style={{fontFamily:"robotoMono"}}>
            <aside className="w-64 p-6 shadow-lg hidden md:block bg-accent bg-opacity-60">
                {/* dashboard options */}
                <h2 className="text-xl mb-4 text-neutral font-extrabold text-opacity-90">Dashboard</h2>
                <nav>
                    <ul>
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
                    <h1 className="text-2xl font-extrabold text-neutral">Welcome to the Dashboard...</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-neutral">User Name</span>
                        <Image 
                            width={40} 
                            height={40} 
                            src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="User Avatar" 
                            className="w-8 h-8 rounded-full border-neutral border-2" 
                        />
                    </div>
                </header>
                {/* profile overview */}
                <section className=" shadow-lg rounded-lg p-6 mb-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40 ">
                    <h2 className="text-xl font-semibold mb-4 text-accent">Profile Overview</h2>
                    <p className="text-neutral">Main content goes here...</p>
                </section>

                {/* two rows togather */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* recent activities section */}
                    <div className=" shadow-lg rounded-lg p-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40">
                        <h2 className="text-lg font-semibold mb-2 text-accent">Recent Activities...</h2>
                        <ul>
                            <li className="text-neutral mb-1">Activity 1</li>
                            <li className="text-neutral mb-1">Activity 2</li>
                            <li className="text-neutral mb-1">Activity 3</li>
                        </ul>
                    </div>
                    {/* settings options */}
                    <div className="shadow-lg rounded-lg p-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40">
                        <h2 className="text-lg font-semibold mb-2 text-accent">Settings...</h2>
                        <ul>
                            <li className="text-neutral mb-1">Change Password</li>
                            <li className="text-neutral mb-1">Notification Preferences</li>
                            <li className="text-neutral mb-1">Privacy Settings</li>
                        </ul>
                    </div>
                </section>

                {/* Logout section */}
                <section className="shadow-lg rounded-lg p-6 mt-6 bg-primary bg-opacity-70 border-neutral border-2 border-opacity-40">
                    <h2 className="text-lg font-semibold mb-4 text-accent">Logout...</h2>
                    <p className="text-neutral">Click the button below to logout.</p>
                    <Link href="#logout" className="mt-4 inline-block px-4 py-2 hover:bg-neutral bg-secondary border-neutral border-2 border-opacity-50 text-accent hover:text-primary rounded focus:outline-none focus:shadow-outline">
                        Logout
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default page;
