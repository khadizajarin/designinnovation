import Link from 'next/link';
import { Open_Sans,Roboto_Mono, } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const page = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover font-extrabold" style={{backgroundImage:'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTcxMzA4Ni13aWtpbWVkaWEtaW1hZ2Utam9iNTcyLTEuanBn.jpg)', fontFamily:"robotoMono"}}>
        <h2 className="text-5xl mb-6 text-center text-primary">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="username">
              Username
            </label>
            <input
              className="bg-primary text-accent rounded w-[24rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="email">
              Email
            </label>
            <input
              className="bg-primary text-accent rounded w-[24rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="password">
              Password
            </label>
            <input
              className="bg-primary text-accent rounded w-[24rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="bg-primary text-accent rounded w-[24rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-secondary text-accent hover:text-neutral  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link href="/" className="text-secondary hover:text-primary hover:text-base">
              Already have an account? Log In
            </Link>
          </div>
        </form>
    </div>
    );
};

export default page;