import styled from "styled-components";

export const Featured = styled.section`
  height: 100vh;
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent);
`;

export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;

export const FeaturedPoints = styled.div`
  color: #46d369;
`;

export const FeaturedYear = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedSeasons = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  @media screen and (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const FeaturedButtons = styled.div`
  margin: 15px;
`;

const SharedStyles = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 760px) {
    font-size: 10px;
  }
`;

export const FeaturedWatchButton = styled(SharedStyles)`
  background-color: #fff;
  color: #000;
`;

export const FeaturedMyListButton = styled(SharedStyles)`
  background-color: #333;
  color: #fff;
`;

export const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
`;
