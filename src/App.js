import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pdfjsLib from 'pdfjs-dist';

// var pdfjsLib = require('pdfjs-dist');

var pdfPath = './helloworld.pdf';

// Setting worker path to worker bundle.
// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   '../../build/webpack/pdf.worker.bundle.js';

class App extends Component {
  pdfCanvas = React.createRef();

  componentDidMount() {
    // Loading a document.
    var loadingTask = pdfjsLib.getDocument(pdfPath);
    loadingTask.promise
      .then(pdfDocument => {
        // Request a first page
        return pdfDocument.getPage(1).then(pdfPage => {
          // Display page on the existing canvas with 100% scale.
          var viewport = pdfPage.getViewport(1.0);
          var canvas = this.pdfCanvas.current;
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
    return (
      <div className="App">
        <canvas ref={this.pdfCanvas} />
      </div>
    );
  }
}

export default App;
