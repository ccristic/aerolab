import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;
`;

export const CenteredTitle = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabContent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 80px;
`;

export const LeftSection = styled.div`
  width: 60%;
`;

export const RightSection = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;

export const TabImage = styled.img``;

export const CenteredContent = styled.div``;

export const FeaturedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0px;
`;

export const FeaturedListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

export const LearnMoreRow = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

export const SupportCard = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 10px 40px 5px rgba(89, 69, 230, 0.05);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
    transform: translateY(-3px);
  }
`;

export const CardImage = styled.img``;

export const CardContent = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;
