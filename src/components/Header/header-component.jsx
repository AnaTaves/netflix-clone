import React from "react";

import * as S from "./header-styles";

const Header = ({ black }) => (
  <S.HeaderContainer black={black}>
    <S.HeaderLogo>NETFLIX</S.HeaderLogo>
    <S.HeaderUser>
      <S.HeaderUserImg src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
    </S.HeaderUser>
  </S.HeaderContainer>
);

export default Header;
