import axiosClient from "./axiosClient";
const register = async (body) => {
  return await axiosClient.post("/register", body);
};
const signIn = async (body) => {
  return await axiosClient.post("/login", body);
};
const getInfo = async () => {
  return await axiosClient.get(
    "/user/info/8513cc86-aa82-4c01-bee0-7ff917165db2",
  );
};
export { register, signIn, getInfo };
