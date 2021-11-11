import React from "react";
import { connect } from "react-redux";
import { addUserToDatabase } from "../../redux/userData/userData.actions";
import { useForm } from "react-hook-form";

import myvood from "../../assets/images/voodgreytext.png";

const Contact = ({ addUserToDatabase, user }) => {
  const {
    register,
    handleSubmit,
    //watch,
    //formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addUserToDatabase(data);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl  sm:text-8xl text-center font-bold text-gray-600">
        GET IN TOUCH WITH US!
      </h1>
      <form
        className="flex flex-col p-8 rounded-md relative sm:w-1/4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center items-center p-2">
          <img src={myvood} className="w-14" alt="myVood" />
        </div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="text-center p-2 border border-black m-2"
          {...register("name")}
        />
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          className=" text-center p-2 border border-black m-2"
          {...register("email")}
        />
        <input
          type="text"
          id="contact"
          placeholder="Hey! I'd like to..."
          className="text-center p-2 pb-6 border border-black m-2"
          {...register("text")}
        />
        <input
          type="submit"
          id="submit"
          value="Send"
          className="p-2 border border-black m-2"
        />
      </form>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addUserToDatabase: (user) => dispatch(addUserToDatabase(user)),
});

export default connect(null, mapDispatchtoProps)(Contact);
