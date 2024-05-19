import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  priscillaDuPreezXkKCui44i?: string;
  resourceSharing?: string;
  accessAndShareEducational?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propWidth1?: CSSProperties["width"];
  propGap1?: CSSProperties["gap"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  priscillaDuPreezXkKCui44i,
  resourceSharing,
  accessAndShareEducational,
  propWidth,
  propGap,
  propWidth1,
  propGap1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  const priscillaDuPreezXkKCui44iM0IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  return (
    <div
      className="w-[1371px] flex flex-row items-end justify-start py-0 pr-0 pl-5 box-border gap-[88px] max-w-full text-left text-29xl text-white font-comfortaa mq800:gap-[44px] mq450:gap-[22px] mq1100:flex-wrap"
      style={frameDivStyle}
    >
      <img
        className="w-[543px] relative max-h-full object-cover max-w-full mq1100:flex-1"
        loading="lazy"
        alt=""
        src={priscillaDuPreezXkKCui44i}
        style={priscillaDuPreezXkKCui44iM0IconStyle}
      />
      <div
        className="flex-1 bg-secondary-color-blue flex flex-col items-start justify-start pt-[154px] pb-[164px] pr-5 pl-[57px] box-border gap-[77px] min-w-[468px] max-w-full mq800:gap-[38px] mq800:pl-7 mq800:pt-[100px] mq800:pb-[107px] mq800:box-border mq800:min-w-full mq450:gap-[19px]"
        style={frameDiv1Style}
      >
        <div className="w-[720px] h-[539px] relative bg-secondary-color-blue hidden max-w-full" />
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq800:text-19xl mq450:text-10xl">
          {resourceSharing}
        </h1>
        <div className="w-[540px] relative text-xl flex items-center max-w-full z-[1] mq450:text-base">
          {accessAndShareEducational}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
