import React from 'react';
import { Element } from 'react-scroll';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { SolidButton } from '../../assets/styles/buttons';
import { Heading1, Paragraph, Link } from '../../assets/styles/typography';
import StartupThumb from '../../assets/img/hero/startup-thumb.png';

import {
  HeroSection,
  LeftSection,
  RightSection,
  TextBlock,
  CTARow,
  Image,
  QuestionsText,
  WaveAnimation,
} from './style';

function Home({ theme }) {
  return (
    <>
      <Element name="home">
        <HeroSection id="home">
          <LeftSection>
            <TextBlock>
              <Heading1>
                Get Your Sites <br /> A Kickstart Now!
              </Heading1>
              <Paragraph margin="20px 0px 0px 0px" fontSize="18px">
                There’s no need to be a technical professional to create sites with AeroLand. With
                simple guides, everything is easy!
              </Paragraph>
              <CTARow>
                <SolidButton>Get Started</SolidButton>
                <QuestionsText>
                  <Paragraph margin="0px 5px 0px 20px" fontWeight="500">
                    Questions?
                  </Paragraph>
                  <Link target="_blank" href="https://wa.me/491702988400?text=Hi%20there!">
                    Talk to our team
                  </Link>
                </QuestionsText>
              </CTARow>
            </TextBlock>
          </LeftSection>

          <RightSection>
            <Image src={StartupThumb} />
          </RightSection>

          <WaveAnimation
            x="0px"
            y="0px"
            viewBox="0 0 3841 104"
            style={{
              overflow: 'scroll',
              enableBackground: 'new 0 0 3841 120',
            }}
          >
            <path
              style={{
                fill: theme.palette.neutral.white,
                strokeMiterlimit: '10',
              }}
              d="M3360.5,97.739c-242,0-480-48.375-480-48.375
            S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
            S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
            />
          </WaveAnimation>
        </HeroSection>
      </Element>
    </>
  );
}

Home.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(Home);
