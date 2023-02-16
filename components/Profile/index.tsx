import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
const Profile: FC = () => {
  const local =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_BASEURL_DEV
      : process.env.NEXT_PUBLIC_BASEURL_PROD;
  return (
    <div className={styles.profile}>
      <Image
        src={`${local}/avactor/${process.env.NEXT_PUBLIC_NAME}.jpg`}
        alt="avactor"
        width={150}
        height={150}
      />
      <h2 className={styles.name}>{process.env.NEXT_PUBLIC_NAME}</h2>
      <p className={styles.content}>{process.env.NEXT_PUBLIC_CONTENT}</p>
      <div className={styles.cates}>
        <div>
          <span>文章</span>
          <span>2</span>
        </div>
        <div>
          <span>标签</span>
          <span>4</span>
        </div>
      </div>
      <button className={styles.github}>
        <a href={process.env.NEXT_PUBLIC_GITHUB}>要看看菜狗吗?</a>
      </button>
    </div>
  );
};
export default Profile;
