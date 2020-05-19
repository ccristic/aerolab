import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.section`
  background: ${({ theme }) => rgba(theme.palette.primary.light, 0.064)};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PricingCardGrid = styled.div`
  display: flex;
  margin: 80px 0px;

  .pricingCard {
    width: calc(25% - 30px);
    margin: 15px;

    @media screen and (max-width: 992px) {
      width: calc(50% - 30px);
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 30px);
    }
  }
`;
