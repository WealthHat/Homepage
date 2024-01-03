import Image from "next/image";
import React from "react";
import AnimatedWrapper from "../animate/animateWrapper";
import { useRouter } from "next/router";

interface Props {
  title: string;
  content?: string;
  image: any;
  showbutton?: boolean;
}

const HeroSection = (props: Props) => {
  const router = useRouter();

  //
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-7 hero-left">
            <div className="hero-left-box">
              <AnimatedWrapper>
                <h1>{props.title}</h1>
              </AnimatedWrapper>

              <AnimatedWrapper delay="500">
                <p>{props.content}</p>
              </AnimatedWrapper>

              <AnimatedWrapper delay="800">
                {props.showbutton && (
                  <button onClick={() => router.push("/schedule-a-call")}>
                    Schedule a call
                  </button>
                )}
              </AnimatedWrapper>
            </div>
          </div>

          <div className="col-5 hero-right">
            <AnimatedWrapper delay="500">
              <div className="hero-image">
                <Image src={props.image} alt="" width={100} height={100} />
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
