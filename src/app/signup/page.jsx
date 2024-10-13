import Link from 'next/link';
import { Open_Sans,Roboto_Mono, } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const page = () => {
    return (
        <div className=" min-h-screen bg-no-repeat bg-cover bg-opacity-30 bg-black font-extrabold" style={{backgroundImage:'url(https://img.pikbest.com/back_our/20210302/bg/e8ca70808e5fe.jpg!bw700)', fontFamily:"robotoMono"}}>
        <div className='bg-black bg-opacity-50 flex flex-col justify-center items-center min-h-screen'>
        <h2 className="text-5xl mb-6 text-center text-primary">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="username">
              Username
            </label>
            <input
              className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
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
              className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
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
              className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
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
              className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
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
    </div>
    );
};

export default page;