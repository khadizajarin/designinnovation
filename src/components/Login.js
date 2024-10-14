"use client"
import Link from 'next/link';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Open_Sans,Roboto_Mono, } from 'next/font/google'


const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-no-repeat bg-cover bg-opacity-25 text-[#DCDFDC] font-extrabold" style={{backgroundImage:'url(https://www.shutterstock.com/image-photo/brown-roasted-coffee-beans-closeup-600nw-1925210999.jpg)', fontFamily:"robotoMono"}}>
        <h2 className="text-5xl mb-6 text-center text-primary">Login</h2>

        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
            <Form>
                <div className="mb-4">
                <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="email">
                  Email
                </label>
                <Field
                  className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage className="block text-[10px] mb-2 tracking-wider text-primary mt-2" name="email" component="div" />
              </div>

              <div className="mb-8">
                <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="password">
                  Password
                </label>
                <Field
                  className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 mb-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-primary text-opacity-70 text-xs font-bold ">Please choose a password.</p>
                <ErrorMessage className="block text-[10px] mb-2 tracking-wider text-primary mt-2" name="password" component="div" />
              </div>
             
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary hover:bg-secondary text-accent hover:text-neutral  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit" disabled={isSubmitting}
                >
                  Sign In
                </button>
              </div>
            </Form>
            )}
     </Formik>


            <Link
              className="inline-block align-baseline  text-sm text-secondary hover:text-primary hover:text-base"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>

     
          <div className="mt-4 text-center">
            <Link href="/signup" className="text-secondary hover:text-primary hover:text-base">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="/dashboard" className="bg-primary hover:bg-secondary text-accent hover:text-neutral  py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go to Dashboard
            </Link>
          </div>


        {/* social login button */}
        <h1 className="text-secondary hover:text-primary hover:text-base mt-6"> Or, Login with</h1>
        <div className='flex mt-3 gap-4'>
          <button
              className="flex justify-center items-center gap-2 bg-primary hover:bg-secondary text-accent hover:text-neutral  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Google <FaGoogle className='w-3' />

            </button>
            <button
              className="flex justify-center items-center gap-2 bg-primary hover:bg-secondary text-accent hover:text-neutral  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Facebook <FaFacebook className='w-3'/>
            </button>

        </div>
    </div>
  );
};

export default Login;
