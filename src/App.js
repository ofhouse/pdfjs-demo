import * as React from 'react';
import styled from 'styled-components';

import './app.css';

import PDFJS, { Viewer } from './react-pdfjs';

const pathToPdf = './helloworld.pdf';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

const ViewerContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: #333;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <PDFJS file={pathToPdf}>
          <ViewerContainer>
            <Viewer />
          </ViewerContainer>
        </PDFJS>
      </Wrapper>
    );
  }
}

export default App;
