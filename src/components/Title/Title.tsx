import React from "react";

import { TitleStyled } from "./styled";

type Props = {
  children: React.ReactNode;
};

export const Title = ({ children }: Props): JSX.Element => (
  <TitleStyled>{children}</TitleStyled>
);
