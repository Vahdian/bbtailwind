import React from "react";
import myvood from "../../assets/images/voodgreytext.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { addUserToDatabase } from "../../redux/userData/userData.actions";

const WelcomePage = ({ addUserToDatabase, user }) => {
  const history = useHistory();
  function cancelData() {
    console.log("CANCELLING");
    history.push("/home");
  }
  const {
    register,
    handleSubmit,
    //watch,
    //formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addUserToDatabase(data);
    history.push("/home");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col sm:border border-yellow-300 p-8 rounded-md relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="absolute right-12 text-2xl text-gray-500 cursor-pointer"
          onClick={() => cancelData()}
        >
          x
        </div>
        <div className="flex justify-center items-center p-2">
          <img src={myvood} className="w-14" alt="myVood" />
        </div>
        <div className="text-sm py-4">
          Hey there! We are about to launch, would you like to receive our
          emails?
        </div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
          className="text-center p-2 border border-black m-2"
        />
        <input
          type="text"
          id="surname"
          placeholder="Surname"
          {...register("surname")}
          className="text-center p-2 border border-black m-2"
        />
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          {...register("email")}
          className=" text-center p-2 border border-black m-2"
        />
        <input
          type="submit"
          id="submit"
          value="Send"
          className="p-2 border border-black m-2"
        />

        <div className="flex flex-row p-2">
          <input type="checkbox" id="checkbox" />
          <p className="text-sm p-2">
            {" "}
            I have read and understood MyVood's{" "}
            <a href="www.google.com" className="text-yellow-500">
              privacy policy
            </a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addUserToDatabase: (user) => dispatch(addUserToDatabase(user)),
});

export default connect(null, mapDispatchtoProps)(WelcomePage);
