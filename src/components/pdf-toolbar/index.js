import * as React from 'react';
import styled from 'styled-components';
import { Toolbar } from '../../react-pdfjs';

const Bar = styled.div`
  height: 40px;
  background-color: red;
`;

type Props = {};

const PdfToolbar = (props: Props) => {
  return (
    <Bar>
      <Toolbar>
        {({ zoomOut, zoomIn }) => (
          <div>
            <button onClick={zoomOut}>Zoom -</button>
            <button onClick={zoomIn}>Zoom +</button>
          </div>
        )}
      </Toolbar>
    </Bar>
  );
};

export default PdfToolbar;
