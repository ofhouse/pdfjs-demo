/**
 * React-PDFJS Viewer
 *
 * Provides the canvas where the pdf is rendered in
 *
 * @flow
 */

import * as React from 'react';
import pdfjsLib from 'pdfjs-dist';

import { withPdfJsContext } from './react-pdfjs';

import type { ReactContext } from './types';

type Props = {
  reactPdfjs: ReactContext,
};

// Setting worker path to worker bundle.
// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   '../../build/webpack/pdf.worker.bundle.js';

class Viewer extends React.Component<Props> {
  viewerCanvas = React.createRef();

  componentDidMount() {
    console.log(this.props);

    // Loading a document.
    var loadingTask = pdfjsLib.getDocument(this.props.reactPdfjs.file);
    loadingTask.promise
      .then(pdfDocument => {
        // Request a first page
        return pdfDocument.getPage(1).then(pdfPage => {
          // Display page on the existing canvas with 100% scale.
          var viewport = pdfPage.getViewport(1.0);
          var canvas = this.viewerCanvas.current;
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          var ctx = canvas.getContext('2d');
          var renderTask = pdfPage.render({
            canvasContext: ctx,
            viewport: viewport,
          });
          return renderTask.promise;
        });
      })
      .catch(reason => {
        console.error('Error: ' + reason);
      });
  }

  render() {
    return <canvas ref={this.viewerCanvas} style={{ flex: 1 }} />;
  }
}

const ConnectedViewer = withPdfJsContext(Viewer);

export { ConnectedViewer as Viewer };
