import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[158px] px-0 pb-[79px] box-border gap-[45px] leading-[normal] tracking-[normal] mq800:gap-[22px]">
      <img
        className="w-full h-[810px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/classmeyts-illustration-1@2x.png"
      />
      <section className="self-stretch h-[607px] flex flex-row items-start justify-center pt-0 pb-[60px] pr-5 pl-[21px] box-border max-w-full mq800:pb-[39px] mq800:box-border">
        <div className="self-stretch w-[741px] flex flex-col items-start justify-start max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/classmeyts-no-bg-2@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
            <button className="cursor-pointer [border:none] pt-[17px] pb-4 pr-[37px] pl-[38px] bg-dashboard-background rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-lightgray">
              <div className="h-[52px] w-[220px] relative rounded-3xs bg-dashboard-background hidden" />
              <b className="relative text-5xl leading-[19px] font-comfortaa text-text-main-color text-left z-[1]">
                Get Started
              </b>
            </button>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className="w-[1374px] flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[87px] max-w-full text-left text-29xl text-white font-comfortaa mq800:gap-[43px] mq450:gap-[22px] mq1100:flex-wrap">
        <div className="flex-1 bg-secondary-color-blue flex flex-col items-start justify-start pt-[154px] pb-[153px] pr-5 pl-[57px] box-border gap-[66px] min-w-[468px] max-w-full mq800:gap-[33px] mq800:pl-7 mq800:pt-[100px] mq800:pb-[99px] mq800:box-border mq800:min-w-full mq450:gap-[16px]">
          <div className="w-[720px] h-[539px] relative bg-secondary-color-blue hidden max-w-full" />
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq800:text-19xl mq450:text-10xl">
            Discussion Module
          </h1>
          <div className="w-[540px] relative text-xl flex items-center max-w-full z-[1] mq450:text-base">
            Engage in meaningful discussions with fellow students to exchange
            ideas and deepen your understanding of academic subjects. Challenge
            your thinking and broaden your knowledge through interactive
            dialogue.
          </div>
        </div>
        <img
          className="w-[547px] relative max-h-full object-cover max-w-full mq1100:flex-1"
          loading="lazy"
          alt=""
          src="/headway5qgiuubxkwmunsplash-1@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-end max-w-full">
        <FrameComponent3
          priscillaDuPreezXkKCui44i="/johnschnobrichflpc9-vocj4unsplash-1@2x.png"
          resourceSharing="Peer Feedback"
          accessAndShareEducational="Give and receive constructive criticism and insights from your peers to enhance your academic strengths and areas for improvement. Grow personally and academically in a supportive environment."
          propWidth="1379px"
          propGap="81px"
          propWidth1="558px"
          propGap1="66px"
        />
      </section>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Homepage;
