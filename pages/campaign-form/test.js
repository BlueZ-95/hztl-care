import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

const CampaignForm = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("First Name is required"),
    description: Yup.string().required("Description is required"),
    type: Yup.string().required("Title is required"),
    amount: Yup.string().required("Title is required"),
    startDate: Yup.string()
      .required("Start Date is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Start Date must be a valid date in the format YYYY-MM-DD"
      ),
    endDate: Yup.string()
      .required("End Date is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "End Date must be a valid date in the format YYYY-MM-DD"
      ),
    image: Yup.mixed().test("required", "Please select a file", (value) => {
      return value && value.length;
    }),
  });
  const [cImage, setCImage] = useState("");
  const formOptions = { resolver: yupResolver(validationSchema) };

  const convert2base64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setCImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    if (data.files.length > 0) {
      convert2base64(data.files[0]);
    }
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <div className="">
      <h2 className="">Campaign Form</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="-5">
              <label>Name</label>
              <input
                name="name"
                type="text"
                {...register("name")}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
            <br />
            <div className="-5">
              <label>Description</label>
              <textarea
                name="description"
                {...register("description")}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">
                {errors.description?.message}
              </div>
            </div>
            <br />
          </div>
          <div className="form-group col">
            <label>Type</label>
            <select
              name="type"
              {...register("type")}
              className={`form-control ${errors.type ? "is-invalid" : ""}`}
            >
              <option value="">Select</option>
              <option value="Self">Self</option>
              <option value="Educatiion">Educatiion</option>
              <option value="Medical">Medical</option>
            </select>
            <div className="invalid-feedback">{errors.type?.message}</div>
            <br />
          </div>
          <div className="">
            <div className="-5">
              <label>Amount</label>
              <input
                name="amount"
                type="number"
                {...register("amount")}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.amount?.message}</div>
            </div>
            <br />
          </div>
          <div className="form-group col">
            <label>Start Date</label>
            <input
              name="startDate"
              type="date"
              {...register("startDate")}
              className={`form-control ${errors.startDate ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.startDate?.message}</div>
          </div>
          <br />
          <div className="form-group col">
            <label>End Date</label>
            <input
              name="endDate"
              type="date"
              {...register("endDate")}
              className={`form-control ${errors.endDate ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.endDate?.message}</div>
          </div>
          <br />
          <div className="form-group col">
            <label>Image</label>
            <input
              name="image"
              type="file"
              {...register("image")}
              className={`form-control ${errors.image ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.image?.message}</div>
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-1">
              Register
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

export default CampaignForm;
