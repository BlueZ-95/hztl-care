import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { firebaseAuth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../../components/header";
import Footer from "../../components/footer";

const SignIn = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid")
      .matches(
        /^[A-Za-z0-9._%+-]+@(horizontal|horizontalintegration)\.com$/,
        "Horizontal Email is mandatory"
      ),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));

    signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("success", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    return false;
  }

  return (
    <>
      <Header />
      <div className="relative">
        <img
          src="care_bg_banner.jpg"
          className="absolute inset-0 object-cover w-full h-full opacity-70"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl xl:mb-0 xl:pr-16 xl:w-7/12"></div>
              <div className="w-full xl:px-8 xl:w-8/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mb-10">
                    <span className="mb-2 bg-theme-bg block h-2 w-14"></span>
                    Sign In
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                      <label className="text-sm text-theme-bg block font-bold">Email</label>
                      <input
                        name="email"
                        type="text"
                        {...register("email")}
                        className={`appearance-none bg-transparent border-b-4 w-full py-1.5 focus:outline-none ${
                          errors.email ? "is-invalid border-theme-01" : "border-theme-bg"
                        }`}
                      />
                      <div className="invalid-feedback text-theme-01 absolute">
                        {errors.email?.message}
                      </div>
                    </div>
                    <div className="mb-8">
                      <label className="text-sm text-theme-bg block font-bold">Password</label>
                      <input
                        name="password"
                        type="password"
                        {...register("password")}
                        className={`appearance-none bg-transparent border-b-4 w-full py-1.5 focus:outline-none ${
                          errors.password ? "is-invalid border-theme-01" : "border-theme-bg"
                        }`}
                      />
                      <div className="invalid-feedback text-theme-01 absolute">
                        {errors.password?.message}
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-btn hover:bg-theme-btn-hover focus:shadow-outline focus:outline-none mr-4"
                      >
                        SignIn
                      </button>
                      <button
                        type="button"
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-theme-btn-text transition duration-200 rounded shadow-md bg-theme-01 hover:bg-theme-01-hover focus:shadow-outline focus:outline-none mr-4"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default SignIn;
