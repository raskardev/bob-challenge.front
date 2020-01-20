import styled from "styled-components";

export const Container = styled.div`
  flex: 0.33;
  margin: 1rem;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border-radius: 5px;
  :hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    flex-basis: 50%;
  }
  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;

export const NameText = styled.h1`
  text-align: center;
`;

export const FlightTextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

export const FlightText = styled.span`
  font-size: 1.25rem;
`;

export const BagsTextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const BagsText = styled.span`
  color: #ed8936;
`;
