import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { firebaseAuth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
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
    <div className="">
      <h2 className="">SignIn</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="">
              <label>Email</label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={` ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <br />
          </div>
          <div className="">
            <div className="">
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register("password")}
                className={` ${errors.password ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <br />
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary mr-1">
              SignIn
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
