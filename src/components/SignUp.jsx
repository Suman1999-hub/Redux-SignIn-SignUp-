import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { signUpData } from "../API-Call/http-call";

function SignUp() {
  const navigate = useNavigate();
  // const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: {
      first: "",
      last: "",
    },
    email: "",
    phone: "",
    password: "",
    gender: "",
    isSuperAdmin: true,
    permissionGroup: "Admin",
  });
  const handleGender = (val) => {
    if (val != "") {
      console.log(val);
      setFormData({ ...formData, gender: val });
    }
  };

  async function signUpBtn() {
    try {
      const callSignUp = await signUpData(formData);
      console.log("callSignUp", callSignUp);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  }
  return (
    <div className="card-container">
      <div className="video-side">
        <video width="100%" height="100%" autoPlay muted loop>
          <source src="/4962002-uhd_2160_3840_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="form-side">
        <div className="text-center">
          <img
            src="/Monkey_Gaming_Logo.png"
            width="170px"
            alt="Monkey Gaming Logo"
          />
          <h3 className="text-dark">
            SIGN <span className="text-danger">UP</span>
          </h3>
          <Input
            className="signUpInputField"
            placeholder="First Name"
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  first: e.target.value || "",
                  last: formData.name.last,
                },
              });
            }}
          />
          <Input
            className="signUpInputField"
            placeholder="Last Name"
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  first: formData.name.first,
                  last: e.target.value || "",
                },
              });
            }}
          />
          <Input
            className="signUpInputField"
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <Input
            className="signUpInputField"
            placeholder="Phone Number"
            type="tel"
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
          <Input
            className="signUpInputField"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <div>
            <select
              className="signUpInputField"
              name="gender"
              id="gender"
              onChange={(e) => handleGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <Button size="lg" color="danger" onClick={() => signUpBtn()}>
            Sign Up
          </Button>
          <div className="sign-in-link">
            Already have an account?{" "}
            <Link to="/login">
              <p>Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
