import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserPageInfo from "../../components/userinfo";
import Loading from "../../components/loading";
import axiosConfig from "../../config/axiosConfig";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { userid } = router.query;
      axiosConfig
        .get(`/user/${userid}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, [router.isReady, router.query]);

  return <div>{user ? <UserPageInfo user={user} /> : <Loading />}</div>;
};

export default UserInfo;
