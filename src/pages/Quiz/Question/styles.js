import styled from 'styled-components';

export const Container = styled.label`
  padding: 16px 10px;
  margin-bottom: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #C7BAE4;
`;

export const Text = styled.p`
  color: #333;
  font-size: 18px;
  margin-left: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span`
  position: absolute;
  left: 10px;
  height: 25px;
  width: 25px;
  background-color: #eee;
  transition: 0.15s;

  ${Input}:not(:checked) ~ &:hover {
    background-color: #6b1fb8;
    opacity: 0.5;
  }

  ${Input}:checked ~ & {
    background-color: #6b1fb8;
  }

  ${Input}:checked ~ &:after {
    display: block;
  }

  :after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
