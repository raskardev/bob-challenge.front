import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 0.25px solid #e83f40;
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  padding-bottom: 0.25rem;
  align-items: center;
`;

export const LogoContainer = styled.div`
  flex: 0.8;
  padding-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 58px;
  height: 58px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 0.75rem;
  background-color: #f56565;
  color: white;
  cursor: pointer;
  border: none;
`;
