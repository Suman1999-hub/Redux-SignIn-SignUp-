import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import EditProfile from "./EditProfile";
import { logoutUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";

function Profile() {
  // const token = useSelector((state) => state.token);
  // console.log("Token", token);
  // const loginUserDataDecoded = jwtDecode(token);
  // console.log("decode", loginUserDataDecoded);

  const loginUserData = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogOff = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <>
      <div className="profile-upperBackground">
        <div style={{ float: "right", margin: "20px" }}>
          <img src="../turn-off.png" width="50px" onClick={handelLogOff} />
        </div>
      </div>
      <div className="profile-lower">
        <Card
          className="profile-card"
          style={{
            maxWidth: "30rem",
            margin: "auto",
          }}
        >
          <CardBody>
            <div
              className="profile-img"
              style={{ margin: "auto", width: "55%" }}
            >
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <CardSubtitle className="mb-2 text-muted" tag="h5">
                <span style={{ fontWeight: "bold" }}>Id: </span>
                {loginUserData.id}
              </CardSubtitle>
            </div>

            <div
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                margin: "10px",
                padding: "30px",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
              }}
            >
              <CardText>
                <CardTitle tag="h5">
                  <span style={{ color: "#9d03b7" }}>Name:</span>{" "}
                  {loginUserData.fullName}
                </CardTitle>

                <h6>
                  <span style={{ fontWeight: "bold", color: "#9d03b7" }}>
                    Email:
                  </span>{" "}
                  {loginUserData.email}
                </h6>
                <h6>
                  <span style={{ fontWeight: "bold", color: "#9d03b7" }}>
                    Phone Number:
                  </span>{" "}
                  {loginUserData.phone}
                </h6>
              </CardText>
            </div>
            <EditProfile loginUserData={loginUserData} />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Profile;
