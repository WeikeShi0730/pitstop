import Image from "next/image";
import NoScrollLink from "./no-scroll-link.component";

const About = () => {
  const componentStyle =
    "max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex justify-center items-center m-auto my-24 h-full text-slate-700 bg-slate-50 bg-opacity-50 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg hover:shoadw-slate-700 transition-all ease-in-out duration-200";
  return (
    <div className="min-h-content flex justify-center items-center">
      <div className="m-auto">
        <div className={`${componentStyle} flex-col md:flex-row`}>
          <div className="md:-rotate-90">
            <div className="relative w-48 h-48 md:w-72 md:h-48 my-5 md:-my-28 md:-translate-y-10">
              <Image
                src="/pitstop-logos/pitstop.png"
                className="object-contain rounded-lg"
                unoptimized
                alt="Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="md:flex-col leading-8 py-5 px-10 md:-ml-32 text-justify">
            <p>
              <a className="underline-primary font-normal text-lg md:text-xl">
                Pitstop™
              </a>{" "}
              is an E-commerce website that sells various F1™ related stickers,
              including some meme stickers. You can find products of different
              teams, drivers, and team principles. Our products give you a
              chance to showcase your love towards F1™. Enjoy!
            </p>
            <p className="underline-primary font-normal text-lg md:text-xl text-right">
              <NoScrollLink href="/">
                <a>Go to shop →</a>
              </NoScrollLink>
            </p>
          </div>
        </div>
        <div className={`${componentStyle} flex-col md:flex-row-reverse`}>
          <div>
            <div className="relative w-48 h-48 md:w-56 md:h-82 my-5 md:-my-28">
              <Image
                src="/about/me.jpg"
                className="object-cover rounded-lg"
                unoptimized
                alt="My photo"
                layout="fill"
              />
            </div>
          </div>
          <p className="leading-8 py-5 px-10 text-justify">
            My name is{" "}
            <a className="underline-primary font-normal text-lg md:text-xl">
              Weike
            </a>
            , and I&apos;m a HUGE Formula 1 fan. Also, I&apos;m a passionate{" "}
            <a className="underline-primary font-normal">web developer</a>. This
            website is created using some of the most trending technologies that
            help with web development and UI/UX. Such as{" "}
            <a className="underline-primary font-normal">Next.js</a>,{" "}
            <a className="underline-primary font-normal">React</a>,{" "}
            <a className="underline-primary font-normal">TailwindCSS</a>,{" "}
            <a className="underline-primary font-normal">Typescript</a>,{" "}
            <a className="underline-primary font-normal">Firebase</a>, and{" "}
            <a className="underline-primary font-normal">Stripe</a>. They ensure
            to bring a smooth and quick web browsing experience.
          </p>
        </div>
        <div className={`${componentStyle}`}>
          <p className="leading-8 py-5 px-10 text-justify">
            I love to learn new skills and am passionate about creating web
            applications to solve real problems and find solutions to human
            laziness using the latest tech. You can find me on{" "}
            <a
              target="_blank"
              href="https://github.com/WeikeShi0730"
              rel="noopener noreferrer"
              className="underline-primary font-normal"
            >
              Github
            </a>
            ,{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/weike-shi/"
              rel="noopener noreferrer"
              className="underline-primary font-normal"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              target="_blank"
              href="https://twitter.com/vicshi97"
              rel="noopener noreferrer"
              className="underline-primary font-normal"
            >
              Twitter
            </a>
            , and my{" "}
            <a
              target="_blank"
              href=""
              rel="noopener noreferrer"
              className="underline-primary font-normal"
            >
              portfolio website
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
