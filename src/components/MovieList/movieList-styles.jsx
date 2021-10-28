import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0px 0px 0px 30px;
  }
`;

export const MovieRowListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const MovieRowList = styled.div`
  transition: all ease 0.2s;
`;

export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
`;

export const MovieRowImage = styled.img`
  width: 100%;
  transform: scale(0.9);
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1);
  }
`;

const SharedStyles = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const MovieRowRight = styled(SharedStyles)`
  right: 0;
`;

export const MovieRowLeft = styled(SharedStyles)`
  left: 0;
`;
