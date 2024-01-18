import Container from "@/components/ui/Container";
import McqTestCard from "@/components/ui/cards/McqTestCard";
import React from "react";
import TestsCardContainer from "./TestsCardContainer";
import Page from "@/components/page/Page";

const MCQTestsContainer = () => {
  return (
    <div>
      <Container>
        <div>
          <h1>All MCQ Tests</h1>
        </div>
        <TestsCardContainer />
      </Container>
    </div>
  );
};

export default MCQTestsContainer;
