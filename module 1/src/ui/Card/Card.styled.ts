import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 0rem 1rem;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 140px;
  padding: 1rem 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 3px 8px 18px rgba(41, 44, 79, 0.2);
    border-radius: 16px;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 18px auto 25px;
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.05em;
  color: #53af8e;
`;

export const Desc = styled.p`
  font-weight: 600;
  cursor: pointer;
  color: #292c31;
  margin-bottom: 10px;
  margin-right: 3px;
`;
