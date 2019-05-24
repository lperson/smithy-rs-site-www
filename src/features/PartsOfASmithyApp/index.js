import React from 'react';
import styled from 'styled-components';
import { colors } from 'src/style-constants';

import StateProvider from 'src/util/StateProvider';
import partsOfApp from './partsOfApp';

const keys = Object.keys(partsOfApp);

import {
  HeadingContainer,
  PageTitle,
  PageSubtitle,
  BodyContainer,
  BodySectionTitle,
  BodyText,
  Flexxor,
} from 'src/page-ui';
import { BOX_SHADOW } from 'src/page-ui';

const LeftSide = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  flex-grow: 0;
  min-width: 200px;
`;

const RADIUS = 10;
const LeftSideItem = styled.div`
  flex: 1;
  display: block;
  padding: 20px;
  background-color: ${props => props.isSelected ? colors.OFF_WHITE : colors.CLOSE_TO_WHITE};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.isSelected ? colors.OFF_WHITE : colors.ALMOST_WHITE};
  }
  &:first-child {
    border-top-left-radius: ${RADIUS}px;
  }
  &:last-child {
    border-bottom-left-radius: ${RADIUS}px;
  }
`;

const RightSide = styled.div`
  flex: 2;
  align-self: stretch;
  background-color: ${colors.OFF_WHITE};
  padding: 20px;
  border-top-right-radius: ${RADIUS}px;
  border-bottom-right-radius: ${RADIUS}px;

  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

const Wrapper = styled(Flexxor)`
  box-shadow: ${BOX_SHADOW};
`;

export default () => <StateProvider initialValue="SYNTAX">{
  (currentView, setCurrentView) => <Wrapper>
    <LeftSide>
      {
        keys.map(key =>
          <LeftSideItem
            key={key}
            onClick={() => setCurrentView(key)}
            isSelected={key === currentView}
          >
            {partsOfApp[key].leftText}
          </LeftSideItem>
        )
      }
    </LeftSide>
    <RightSide>
      { partsOfApp[currentView].bodyText }
    </RightSide>
  </Wrapper>
}</StateProvider>