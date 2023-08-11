import React from 'react';
import PropTypes from 'prop-types';
import { Div } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Div>
      <h2>{title}</h2>
      {children}
    </Div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  // if 1 {children} - PropTypes.element
  // if more than 1 {children} PropTypes.node
  children: PropTypes.node.isRequired,
};
