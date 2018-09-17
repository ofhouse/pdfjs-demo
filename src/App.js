import * as React from 'react';
import styled from 'styled-components';

import './app.css';

import PDFJS, { Viewer } from './react-pdfjs';

const pathToPdf = './helloworld.pdf';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <PDFJS file={pathToPdf}>
          <Viewer />
        </PDFJS>
      </Wrapper>
    );
  }
}

export default App;
