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
        <InlineWidget url="https://calendly.com/wealthhat?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=1a1a1a" />
      </div>
    </Layout>
  );
};

export default Schedule;
