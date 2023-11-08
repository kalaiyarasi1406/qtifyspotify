import React from "react";
import "./Faqs.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const FaqSection = ({ data }) => {
  return (
    <div className="faqWrapper">
      <div className="faqSection">
        <h1 className="faqTitle">FAQs</h1>
        {data.length > 1
          ? data.map((item, index) => {
              return (
                <Accordion
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4 className="faqQuestions">{item.question}</h4>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "white" }}>
                    <h6 className="faqAnswer">{item.answer}</h6>
                  </AccordionDetails>
                </Accordion>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default FaqSection;
