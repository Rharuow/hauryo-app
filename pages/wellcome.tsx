import dynamic from "next/dynamic";
import React from "react";
import StepWizard from "react-step-wizard";

import Wellcome from "../components/Wellcome";

const wellcome = () => {
  return (
    <StepWizard>
      <Wellcome />
    </StepWizard>
  );
};

export default wellcome;
