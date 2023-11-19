import Layout from "@/components/Layout";
import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

type Props = {};

const Schedule = (props: Props) => {
  useCalendlyEventListener({
    onDateAndTimeSelected: (e) => console.log(e.data),
    onEventScheduled: (e) => console.log(e.data),
  });

  return (
    <Layout>
      <div className="schedule">
        <InlineWidget url="https://calendly.com/alayosingers/wealthhat" />
        {/* <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/alayosingers/wealthhat"
          //   style={{ minWidth: "320px", height: "100vh" }}
        /> */}
      </div>
    </Layout>
  );
};

export default Schedule;
