import React, { useEffect } from "react";

function FacebookLogin({ onLoginSuccess, onLoginFailure }) {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1035835651528484",
        cookie: true,
        xfbml: true,
        version: "v20.0",
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          // Logged into Facebook and your app
          onLoginSuccess(response);
        } else {
          // User cancelled login or failed
          onLoginFailure(response);
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <img
      src="../../facebook.png"
      width="50px"
      style={{ margin: "20px", cursor: "pointer" }}
      onClick={handleFacebookLogin}
      alt="Facebook Login"
    />
  );
}

export default FacebookLogin;
