import React from "react";
import Heading from "../heading/heading";
import ServiceCard from "@/common/service-card/service-card";
import { offer } from "@/constant/offer";
import AnimatedWrapper from "@/common/animate/animateWrapper";

const Different = () => {
  return (
    <div className="different">
      <div className="container">
        <Heading
          title="How we are different"
          content="Our approach diverges from that of traditional wealth managers. By customizing pur services to fit your unique circumstances, we align your investments with your goals and aspiration."
        />

        <div className=" different-center">
          <div className="table-container">
            <AnimatedWrapper delay="500">
              <table>
                <thead>
                  <tr>
                    <th className="white" scope="col"></th>
                    <th scope="col">WealthHat</th>
                    <th className="white" scope="col">
                      Investment Management Firm
                    </th>
                    <th scope="col">Stockbroking Firm</th>
                  </tr>
                </thead>

                <tbody>
                  {offer?.map((item: any, index: number) => {
                    return (
                      <tr className="shaded" key={index}>
                        <td className="white">{item.name}</td>

                        <td className="check">
                          {item.wealthhat ? (
                            <i className="bi bi-check-circle-fill"></i>
                          ) : (
                            ""
                          )}
                        </td>

                        <td className="white check">
                          {item.firstFirm ? (
                            <i className="bi bi-check-circle-fill"></i>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="check">
                          {item.secondFirm ? (
                            <i className="bi bi-check-circle-fill"></i>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
