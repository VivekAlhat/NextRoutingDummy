import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
});

instance.defaults.headers.common["app-id"] = process.env.NEXT_PUBLIC_APPID;

export default instance;
