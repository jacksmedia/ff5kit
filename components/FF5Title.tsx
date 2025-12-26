import Image from "next/image";

const FF5Title = () => {
  return(
    <a target="_blank" href="https://ff5kit.vercel.app/">
      <Image
          className="nicer-btn"
          src="/img/Title.png"
          alt="FF5 title screen"
          width={256}
          height={224}
          priority
      />
    </a>
  );
};
export default FF5Title;