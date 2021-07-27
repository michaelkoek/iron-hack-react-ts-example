import React, { FC } from "react";
import styled from "styled-components";

type ContainerType = 'section' | 'article' | 'div'

interface ContainerProps {
    verticalPadding?: string;
    horizontalPadding?: string;
    type?: ContainerType;
}

const Container: FC<ContainerProps> = ({
  verticalPadding,
  horizontalPadding = "2rem",
  type = "section",
  children,
}) => {
  return (
    <Wrapper
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
      as={type} // what kind element? Default is 'section'
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Pick<ContainerProps, 'verticalPadding' | 'horizontalPadding'>>`
  padding: 0
    ${({ horizontalPadding }) => horizontalPadding && horizontalPadding};

  border: 5px solid ${({ theme }) => theme.colors.default};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default Container;
