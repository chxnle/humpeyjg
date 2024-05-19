import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-29xl text-black font-comfortaa">
      <div className="self-stretch bg-moccasin flex flex-row items-start justify-between pt-[69px] pb-[61px] pr-[99px] pl-[72px] box-border max-w-full gap-[20px] mq800:pl-9 mq800:pr-[49px] mq800:box-border mq450:pr-5 mq450:box-border mq1300:flex-wrap mq1300:justify-center">
        <div className="h-[321px] w-[1440px] relative bg-moccasin hidden max-w-full" />
        <div className="w-[773px] flex flex-col items-start justify-start gap-[9px] max-w-full">
          <h1 className="m-0 w-[557px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq800:text-19xl mq450:text-10xl">
            <p className="m-0">{`Connecting Students, `}</p>
            <p className="m-0">Fostering Learning</p>
          </h1>
          <div className="self-stretch relative text-base z-[1]">
            At Classmeyt's, we're committed to enhancing your academic journey
            by providing a vibrant online community where students can share
            resources, engage in discussions, and receive valuable peer
            feedback. Our goal is to cultivate a collaborative environment that
            promotes knowledge sharing and supports your growth.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[60px] px-0 pb-0">
          <button className="cursor-pointer [border:none] py-[22px] pr-[37px] pl-[38px] bg-text-main-color rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray">
            <div className="h-[63px] w-[220px] relative rounded-3xs bg-text-main-color hidden" />
            <b className="relative text-5xl leading-[19px] font-comfortaa text-white text-left z-[1]">
              Get Started
            </b>
          </button>
        </div>
      </div>
      <FrameComponent3
        priscillaDuPreezXkKCui44i="/priscilladupreezxkkcui44im0unsplash-1@2x.png"
        resourceSharing="Resource Sharing"
        accessAndShareEducational="Access and share educational materials such as notes, articles, and study guides with your peers. Expand your understanding beyond the classroom and contribute to a supportive learning community."
      />
    </section>
  );
};

export default FrameComponent2;
