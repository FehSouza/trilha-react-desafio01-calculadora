import styled from 'styled-components'

export const ButtonContainer = styled.button`
  min-height: 75px;
  min-width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cdcdcd;
  background-color: #00BFFF;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  transition-duration: 350ms;

  &:focus {
   background-color: #1E90FF;
  }

  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`
