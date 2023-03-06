import styled from "styled-components";
export const StyledNavbar = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(66, 68, 90, 1);
`;

export const NavButton = styled.button`
  border: 1px solid #999;
  border-radius: 10px;
  height: 2rem;
  margin: auto 0.2rem;
  padding: 0.25rem 0.75rem;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 1.25rem;

  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(66, 68, 90, 1);
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;
