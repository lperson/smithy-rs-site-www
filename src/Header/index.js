import React from 'react';
import BodyClassName from 'react-body-classname';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { Flexxor, Container } from 'src/page-ui';
import Logo from 'src/SmithyLogo';

import { breakpointInfo, colors } from 'src/style-constants';
import { BOX_SHADOW } from 'src/page-ui';
import HEADER_HEIGHT from './height';

const BODY_CLASS_NAME = 'margin-top-class';
const BORDER_SIZE = 2;

const HeaderPositioning = styled.div`
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  box-shadow: ${BOX_SHADOW};
  z-index: 1;
`;

const HeaderLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LOGO_MAX_HEIGHT = 50;

const BaseLink = styled.a`
  transition: 200ms color ease;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;
  cursor: pointer;
  line-height: ${HEADER_HEIGHT - BORDER_SIZE}px;
  
  text-decoration: none;
  user-select: none;
  
  ${props => props.isCurrent
    ? `
      color: ${colors.HIGHLIGHT_SOFT};
      border-bottom-color: ${colors.HIGHLIGHT_SOFT};
      &:hover {
        color: ${colors.HIGHLIGHT};
        border-bottom-color: ${colors.HIGHLIGHT};
      }
    `
    : `
      border-bottom-color: transparent;
      color: ${colors.OFF_WHITE};
      &:hover {
        color: ${colors.WHITE};
      }
    `
  }
`;

const InnerLink = styled(BaseLink)`
  border-bottom-width: ${BORDER_SIZE}px;
  border-bottom-style: solid;
`

const HeaderGlobalStyle = createGlobalStyle`
  body {
    margin: ${HEADER_HEIGHT}px 0 0;
    box-sizing: border-box;
  }
`;

const LogoLink = styled(BaseLink)`line-height: 1px; cursor: pointer; padding-left: 0;`;

const pathMatches = (path, target) => path.startsWith(target);

export default ({ path }) => (<>
  <HeaderGlobalStyle />
  <HeaderPositioning>
    <Container>
      <Flexxor>
        <HeaderLeftSide>
          <Link href="/">
            <LogoLink isCurrent={path === '/'}>
              <Logo />
            </LogoLink>
          </Link>
          <Link href="/features">
            <InnerLink isCurrent={pathMatches(path, "/features")}>Features</InnerLink>
          </Link>
          <Link href="/guide">
            <InnerLink isCurrent={pathMatches(path, "/guide")}>Guide</InnerLink>
          </Link>
          <Link href="/news">
            <InnerLink isCurrent={pathMatches(path, "/news")}>News</InnerLink>
          </Link>
          <InnerLink href="https://docs.smithy.rs/smithy/">Docs</InnerLink>
        </HeaderLeftSide>
        <InnerLink href="https://www.github.com/rbalicki2/smithy">Code</InnerLink>
      </Flexxor>
    </Container>
  </HeaderPositioning>
</>);
