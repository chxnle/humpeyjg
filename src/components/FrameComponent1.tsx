import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[2px] max-w-full text-left text-29xl text-white font-comfortaa">
      <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-[236px] box-border relative gap-[81px] max-w-full mq800:gap-[40px] mq800:pb-[153px] mq800:box-border mq450:gap-[20px] mq450:pb-[99px] mq450:box-border mq1300:flex-wrap">
        <div className="w-[720px] bg-secondary-color-blue flex flex-col items-start justify-start pt-[157px] pb-[161px] pr-5 pl-[57px] box-border gap-[77px] min-w-[720px] max-w-full mq800:gap-[38px] mq800:pl-7 mq800:pt-[102px] mq800:pb-[105px] mq800:box-border mq800:min-w-full mq450:gap-[19px] mq1300:flex-1">
          <div className="w-[720px] h-[539px] relative bg-secondary-color-blue hidden max-w-full" />
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq800:text-19xl mq450:text-10xl">
            Gamification Features
          </h1>
          <div className="w-[540px] relative text-xl flex items-center max-w-full z-[1] mq450:text-base">
            Stay motivated and engaged with our reward system. Earn badges for
            participation and achievements like sharing resources and providing
            feedback.
          </div>
        </div>
        <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] bg-moccasin flex flex-col items-center justify-start pt-[61px] pb-[34px] pr-5 pl-[21px] box-border gap-[15px] max-w-full z-[1] text-center text-13xl text-black">
          <div className="w-[1440px] h-[244px] relative bg-moccasin hidden max-w-full" />
          <b className="w-[1075px] relative flex items-center justify-center max-w-full z-[2] mq800:text-7xl mq450:text-lgi">
            At Classmeyt's, we're excited to embark on this journey with you.
            Join our community and let's elevate learning together!
          </b>
          <div className="w-[1075px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
            <button className="cursor-pointer [border:none] py-[22px] pr-[59px] pl-[60px] bg-text-main-color rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-dimgray">
              <div className="h-[63px] w-[220px] relative rounded-3xs bg-text-main-color hidden" />
              <b className="relative text-5xl leading-[19px] inline-block font-comfortaa text-white text-left min-w-[101px] z-[1]">
                Sign Up
              </b>
            </button>
          </div>
        </div>
        <div className="h-[382px] w-[558px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border min-w-[558px] max-w-full mq800:min-w-full mq1300:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1300:self-stretch mq1300:w-auto"
            loading="lazy"
            alt=""
            src="/chuttersnapvmkskfsueg8unsplash-1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch bg-secondary-color-blue flex flex-row items-start justify-center pt-[23px] pb-1 pr-5 pl-[21px] box-border max-w-full text-45xl">
        <div className="h-[99px] w-[1440px] relative bg-secondary-color-blue hidden max-w-full" />
        <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq800:text-32xl mq450:text-19xl">
          Frequently Asked Questions (FAQs)
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent1;
