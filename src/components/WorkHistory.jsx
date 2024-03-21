import React from 'react';
import styled from 'styled-components';
import JobDescription from './JobDescription';

const WorkHistorySection = styled.section`
  display: 'flex';
`;
const SectionTitle = styled.h2``;

const WorkHistory = () => {
  return (
    <WorkHistorySection>
      <SectionTitle>Experiencia</SectionTitle>
      <JobDescription />
    </WorkHistorySection>
  );
};

export default WorkHistory;
