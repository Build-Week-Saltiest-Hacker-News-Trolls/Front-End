import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log("grabbed token:", token);

  return axios.create({
    baseURL: "https://bw3.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
