import ImageComponent from "./image";
import Link from "next/link";
import styles from "../styles/userprofileinfo.module.css";

const UserProfileInfo = ({ user }) => {
  const { id, firstName, lastName, picture } = user;

  return (
    <div className={styles.userContainer}>
      <ImageComponent src={picture} alt="user-profile-picture" />
      <div className={styles.userInfo}>
        <Link
          href={{
            pathname: "/users/[userid]",
            query: {
              userid: id,
            },
          }}
          passHref
        >
          <h2 className={styles.userName}>
            {firstName}&nbsp;{lastName}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default UserProfileInfo;
