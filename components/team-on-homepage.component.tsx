import Image from "next/image";
interface TeamOnHomepageType {
  key: string;
  backgroundImg: string;
  name: string;
}

const TeamOnHomepage = ({ backgroundImg, name }: TeamOnHomepageType) => {
  const imgLoader = ({ src }: { src: string }) => {
    return src;
  };
  return (
    // h ????????????
    <div className="relative w-2/5 h-72 m-5">
      <Image
        className="rounded-tr-3xl"
        loader={imgLoader}
        unoptimized
        src={backgroundImg}
        alt={`${name} background image`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default TeamOnHomepage;
