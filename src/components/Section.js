import React from 'react';
import { Div } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Div>
      <h2>{title}</h2>
      {children}
    </Div>
  );
};
