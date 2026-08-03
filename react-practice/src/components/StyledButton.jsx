import styled from "styled-components";

const Button = styled.button`
  padding: 11px 18px;
  border: 2px solid #242424;
  border-radius: 8px;
  background-color: #242424;
  color: white;
  font-weight: 700;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: white;
    color: #242424;
  }
`;

function StyledButton() {
  return <Button type="button">styled-components 버튼</Button>;
}

export default StyledButton;
