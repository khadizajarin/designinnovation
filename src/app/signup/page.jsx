"use client"
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Open_Sans, Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const Page = () => {

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-opacity-30 bg-black font-extrabold" style={{ backgroundImage: 'url(https://img.pikbest.com/back_our/20210302/bg/e8ca70808e5fe.jpg!bw700)', fontFamily: "robotoMono" }}>
      <div className='bg-black bg-opacity-50 flex flex-col justify-center items-center min-h-screen'>
        <h2 className="text-5xl mb-6 text-center text-primary">Sign Up</h2>
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

              {/* username */}
              <div className="mb-4">
                <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="username">
                  Username
                </label>
                <Field
                  className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <ErrorMessage className="block text-[10px] mb-2 tracking-wider text-primary" name="username" component="div" />
              </div>

              {/* email */}
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
                <ErrorMessage className="block text-[10px] mb-2 tracking-wider text-primary" name="email" component="div" />
              </div>

              {/* password */}
              <div className="mb-4">
                <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="password">
                  Password
                </label>
                <Field
                  className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage className="block text-[10px] mb-2 tracking-wider text-primary" name="password" component="div" />
              </div>

              {/* confirm password */}
              <div className="mb-6">
                <label className="block text-sm mb-2 tracking-wider text-primary" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <Field
                  className="bg-primary text-accent rounded md:w-[24rem] w-[20rem] py-2 px-3 leading-relaxed tracking-wider focus:outline-none focus:shadow-outline placeholder-accent placeholder-opacity-60"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                <ErrorMessage className="block text-[10px] mb-2 tracking-wider text-primary" name="confirmPassword" component="div" />
              </div>

              {/* Button */}
              <div className="flex items-center justify-between mt-6">
                <button
                  className="bg-primary hover:bg-secondary text-accent hover:text-neutral py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </div>

            </Form>
          )}
        </Formik>


        <div className="mt-4 text-center">
            <Link href="/dashboard" className="bg-primary hover:bg-secondary text-accent hover:text-neutral  py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go to Dashboard
            </Link>
          </div>


        <div className="mt-4 text-center">
          <Link href="/" className="text-secondary hover:text-primary hover:text-base">
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
