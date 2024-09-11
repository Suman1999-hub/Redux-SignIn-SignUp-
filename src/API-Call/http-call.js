const URL = "https://api.bhaskardey.com/api/v1";
export const getUserData = async (payload) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer Token",
  };
  try {
    const response = await fetch(URL + "/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("API Response:", data); // Add this line
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateUserData = async ({ payload, token }) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(URL + "/update/user", {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("API Response:", data); // Add this line
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const signUpData = async (payload) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch(URL + "/signup", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("API Response:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
