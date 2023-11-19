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
       
      </div>
    </Layout>
  );
};

export default Schedule;
