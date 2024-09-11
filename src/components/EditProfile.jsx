import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { updateUserData } from "../API-Call/http-call";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginUser } from "../Redux/action";

function EditProfile() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const loginUserData = useSelector((state) => state.data);
  const token = useSelector((state) => state.token);
  console.log(loginUserData);
  const nameSplit = loginUserData.fullName.split(" ");
  const firstName = nameSplit[0] || "";
  const lastName = nameSplit.slice(1).join(" ") || "";
  const [profileData, setProfileData] = useState({
    name: {
      first: firstName,
      last: lastName,
    },
    phone: loginUserData.phone,
  });
  const handleSaveBtn = async () => {
    try {
      const response = await updateUserData({
        payload: profileData,
        token,
      });
      dispatch(
        updateLoginUser({
          ...loginUserData,
          fullName: response.user.name.full,
          phone: response.user.phone,
        })
      );
      // Handle response if needed
      console.log("Update response:", response);
      toggle();
    } catch (err) {
      //   setError(err.message || "An error occurred"); // Set error state
      console.log(err);
    }
  };
  const handleName = (e) => {
    const val = e.target.value;
    const splitValue = val.split(" ");

    setProfileData({
      ...profileData,
      name: {
        first: splitValue[0] || "",
        last: splitValue[1] || "",
      },
    });
  };

  const toggle = () => setModal(!modal);
  console.log(profileData);
  return (
    <>
      <div style={{ margin: "auto", width: "18%" }}>
        <Button
          onClick={toggle}
          style={{
            height: "50px",
            minWidth: "100px",
            background: "linear-gradient(45deg, red, blue)",
          }}
        >
          Edit
        </Button>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{ color: "rgb(133, 0, 200)" }}>
          Edit Profile
        </ModalHeader>
        <ModalBody style={{ margin: "0 0 0 10%" }}>
          <div>
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              style={{ borderRadius: "20px" }}
            />
            <div style={{ marginTop: "10px" }}>
              <input type="file" className="choose" />
            </div>
          </div>
          <div>
            <label style={{ color: "rgb(157, 3, 183)" }}>Name</label>
            <div>
              <input
                type="text"
                value={profileData.name.first + " " + profileData.name.last}
                style={{
                  minWidth: "350px",
                  height: "50px",
                  border: "1px solid rgb(157, 3, 183)",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
                onChange={handleName}
              />
            </div>
          </div>
          <div>
            <label style={{ color: "rgb(157, 3, 183)" }}>Email</label>
            <div>
              <input
                type="email"
                value={loginUserData.email}
                readOnly
                style={{
                  minWidth: "350px",
                  height: "50px",
                  border: "1px solid rgb(157, 3, 183)",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
              />
            </div>
          </div>
          <div>
            <label style={{ color: "rgb(157, 3, 183)" }}>Phone Number</label>
            <div>
              <input
                type="tel"
                value={profileData.phone}
                style={{
                  minWidth: "350px",
                  height: "50px",
                  border: "1px solid rgb(157, 3, 183)",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
                onChange={(e) =>
                  setProfileData({ ...profileData, phone: e.target.value })
                }
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={handleSaveBtn}
            style={{ background: "linear-gradient(45deg, red, blue)" }}
          >
            Save
          </Button>{" "}
          <Button color="info" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default EditProfile;
