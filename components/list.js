import Post from "./post";
import Loading from "./loading";
import styles from "../styles/list.module.css";
import UserProfileInfo from "./user";

const List = ({ data, origin }) => {
  return (
    <div className={styles.list}>
      {data ? (
        data.map((item) =>
          origin === "post" ? (
            <Post key={item.id} post={item} />
          ) : (
            <UserProfileInfo key={item.id} user={item} />
          )
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default List;
