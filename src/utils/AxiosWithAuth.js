import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log("grabbed token:", token);

  return axios.create({
    baseURL: "https://bw-salties.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
