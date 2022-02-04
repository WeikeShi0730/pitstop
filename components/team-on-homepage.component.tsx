import Link from "next/link";
import Image from "next/image";
interface TeamOnHomepageType {
  key: string;
  id: string;
  backgroundImg: string;
  name: string;
}

const TeamOnHomepage = ({ backgroundImg, name, id }: TeamOnHomepageType) => {
  const imgLoader = ({ src }: { src: string }) => {
    return src;
  };
  return (
    // h ????????????
    <div className="relative w-2/5 h-72 m-5 rounded-large">
      <Image
        className="absolute inset-0 w-full h-full object-cover rounded-large"
        loader={imgLoader}
        unoptimized
        src={backgroundImg}
        alt={`${name} background image`}
        layout="fill"
      />
      <div className="flex justify-center items-center absolute w-full h-full z-10 rounded-large opacity-0 hover:opacity-100 hover:backdrop-blur-sm">
        <Link href={`/${id}`}>
          <a className="bg-slate-700 text-slate-200 p-3 rounded-md shadow-slate-700 shadow-md">
            Shop {name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TeamOnHomepage;
