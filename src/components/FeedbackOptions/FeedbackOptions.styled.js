import { styled } from 'styled-components';

export const Button = styled.button`
  width: 75px;
  height: 35px;
  border-radius: 4px;
  background-color: ${({ option }) => {
    switch (option) {
      case 'good':
        return '#5aed7a';
      case 'neutral':
        return '#dae8dd';
      case 'bad':
        return '#f58c87';
      default:
        return 'white';
    }
  }};
`;

export const Div = styled.div`
  display: flex;
  gap: 12px;
`;
