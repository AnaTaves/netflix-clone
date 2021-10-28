import React from "react";

import * as S from "./footer-styles";

const Footer = () => (
  <S.FooterContainer>
    <div>All image rights to Netflix</div>
    <div>
      Data extracted from:{" "}
      <S.Link href="https://www.themoviedb.org/">The Movie</S.Link>
    </div>
    <div>
      Made by: <S.Link href="https://github.com/AnaTaves">Ana</S.Link>
    </div>
  </S.FooterContainer>
);

export default Footer;
