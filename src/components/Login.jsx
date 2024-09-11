import { useState } from "react";
import { Button, Input } from "reactstrap";
import { getUserData } from "../API-Call/http-call";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/action";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const storeData = useSelector((state) => state.storeData);
  const [error, setError] = useState(false);
  // const token = useSelector((state) => state.storeData.token);

  const [inputData, setInputData] = useState({
    handle: "",
    password: "",
  });
  // console.log(inputData);

  async function handleSubmit() {
    try {
      const userData = await getUserData(inputData);
      console.log("userData", userData);
      // console.log("token", userData.token);
      const decoded = jwtDecode(userData.token);

      // console.log(decoded);
      dispatch(loginUser(userData.token, decoded));

      if (userData.token) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  return (
    <>
      <div className="container">
        <div className="login-container text-center">
          <div>
            <img src="../../Black_Panther.png" width="150px" />
          </div>
          <h3 className="text-dark">
            SIGN <span className="text-danger">IN</span>
          </h3>

          <div>
            <Input
              className="inputField"
              placeholder="Email"
              type="email"
              value={inputData.handle}
              onChange={(e) =>
                setInputData({ ...inputData, handle: e.target.value })
              }
            />
          </div>
          <div>
            <Input
              className="inputField"
              placeholder="Password"
              type="password"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
          </div>
          <div>
            <Button size="lg" color="dark" onClick={() => handleSubmit()}>
              Sign In
            </Button>
          </div>
          {error ? (
            <p style={{ color: "red" }}>Invalid Email or Password</p>
          ) : (
            ""
          )}

          <div>
            Don't have an account?{" "}
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
