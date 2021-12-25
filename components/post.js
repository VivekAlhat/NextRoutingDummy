import Link from "next/link";
import ImageComponent from "./image";
import styles from "../styles/post.module.css";

const Post = ({ post }) => {
  const { image, likes, publishDate, text, owner, tags } = post;
  return (
    <div className={styles.post}>
      <ImageComponent src={image} alt="Post Image" />
      <div className={styles.dataContainer}>
        <div className={styles.flex}>
          <Link
            href={{
              pathname: "/users/[userid]",
              query: {
                userid: owner.id,
              },
            }}
            passHref
          >
            <h2 className={styles.username}>
              {owner.firstName}&nbsp;{owner.lastName}
            </h2>
          </Link>
          <p className={styles.count}>{likes} likes</p>
        </div>
        <p>Posted on {new Date(publishDate).toDateString()}</p>
        <p>{text}</p>
        <div className={styles.tagsContainer}>
          {tags.map((tag, key) => (
            <p key={key} className={styles.tag}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
