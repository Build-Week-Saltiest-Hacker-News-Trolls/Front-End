import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log("grabbed token:", token);

  return axios.create({
    baseURL: "To Be Determined",
    headers: {
      Authorization: token
    }
  });
};
