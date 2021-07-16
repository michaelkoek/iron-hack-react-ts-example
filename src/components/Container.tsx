import React from 'react'
import styled from "styled-components";

type ContainerType = 'section' | 'article' | 'div';

interface ContainerProps {
    verticalPadding?: string;
    horizontalPadding?: string;
    type?: ContainerType;
}

const Container: React.FC<ContainerProps> = ({
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

const Wrapper = styled.div<Pick<ContainerProps, 'horizontalPadding' | 'verticalPadding'>>`
  padding: 0
    ${({ horizontalPadding }) => horizontalPadding && horizontalPadding};
    border: 1px solid ${({ theme }) => theme.colors.default}; 
`;

export default Container;
