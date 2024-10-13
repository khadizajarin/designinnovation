"use client"
import Link from 'next/link';

import { Open_Sans,Roboto_Mono, } from 'next/font/google'

// const onk_latin = Yuji_Hentaigana_Akebono({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['400'],
// })

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-no-repeat bg-cover bg-opacity-25 text-[#DCDFDC] font-extrabold" style={{backgroundImage:'url(https://www.shutterstock.com/image-photo/brown-roasted-coffee-beans-closeup-600nw-1925210999.jpg)', fontFamily:"robotoMono"}}>
        <h2 className="text-5xl mb-6 text-center text-primary">Login</h2>
        <form>
          <div className="mb-6">
            <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="email">
              Email/Username
            </label>
            <input
              className="bg-primary text-accent rounded w-[24rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
              id="email"
              type="text"
              placeholder="Email or Username"
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="password">
              Password
            </label>
            <input
              className="bg-primary text-accent rounded w-[24rem] py-2 px-3 mb-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs font-bold italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-secondary text-accent hover:text-neutral  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline  text-sm text-secondary hover:text-primary hover:text-base"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="/signup" className="text-secondary hover:text-primary hover:text-base">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </form>
    </div>
  );
};

export default Login;
