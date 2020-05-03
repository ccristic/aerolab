import styled from 'styled-components';

import { Heading5, Paragraph } from '../../../../assets/styles/typography';

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  ${Heading5} {
    margin: 0;
    margin-left: 30px;
    max-width: 185px;
  }

  ${Paragraph} {
    margin-top: 12px;
  }
`;

export const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background-image: linear-gradient(-225deg, #f8c59b, #e68c60);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
`;