import * as React from 'react';
import styled from 'styled-components';

import './app.css';

import PDFJS, { Viewer } from './react-pdfjs';
import PdfToolbar from './components/pdf-toolbar';

const pathToPdf = './test.pdf';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
          <PdfToolbar />
          <ViewerContainer>
            <Viewer />
          </ViewerContainer>
        </PDFJS>
      </Wrapper>
    );
  }
}

export default App;
