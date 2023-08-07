import React from 'react';
import { Button } from './FeedbackOptions.styled';
import { Div } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map((option, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </Div>
  );
};
