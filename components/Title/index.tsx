import Image from "next/image";
import { FC } from "react";

const Title: FC = () => {
  return (
    <div className="title">
      <div className="name">{process.env.NEXT_PUBLIC_TITLE}</div>
      <div className="more">
        <Image src={"/more.png"} alt={"更多"} width={20} height={20} />
        <div className="progress"></div>
      </div>
    </div>
  );
};
export default Title;
