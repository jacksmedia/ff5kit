import Image from "next/image";

const PlusTitle = () => {
  return(
    <a target="_blank" href="https://ultima-plus.vercel.app/">
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
export default PlusTitle;