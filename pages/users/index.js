import { useState, useEffect } from "react";
import List from "../../components/list";
import Loading from "../../components/loading";
import axiosConfig from "../../config/axiosConfig";

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axiosConfig
      .get("/user")
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return <>{users ? <List data={users} origin="user" /> : <Loading />}</>;
};

export default Users;
