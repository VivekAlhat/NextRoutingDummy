import styles from "../styles/userinfo.module.css";

const UserPageInfo = ({ user }) => {
  const { firstName, lastName, picture, gender, email, phone, location } = user;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.userContainer}>
        <div className={styles.userInfo}>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src={picture} alt="user-img" id={styles.userImage} />
          }
          <div className={styles.personalInfo}>
            <h3>
              {firstName}&nbsp;{lastName}
            </h3>
            <p>Gender: {gender}</p>
            <email>Email: {email}</email>
            <phone>Contact: {phone}</phone>
          </div>
        </div>
        <hr style={{ borderBottom: "1px solid black", width: "100%" }} />
        <div className={styles.userLocation}>
          <p>Street: {location.street}</p>
          <p>City: {location.city}</p>
          <p>State: {location.state}</p>
          <p>Country: {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPageInfo;
