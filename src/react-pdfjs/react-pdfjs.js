/**
 * The main components which controls the pdf.js instance
 *
 * @flow
 */
import * as React from 'react';

import type { ReactContext } from './types';

const PdfjsContext = React.createContext('light');
const withPdfJsContext = (Component: React.Component) => (props: any) => (
  <PdfjsContext.Consumer>
    {(context: ReactContext) => <Component {...props} reactPdfjs={context} />}
  </PdfjsContext.Consumer>
);

type Props = {
  file: string,
  children: React.Node,
};

type State = {
  context: ReactContext,
};

class ReactPdfjs extends React.Component<Props, State> {
  state = {
    context: {
      file: this.props.file,
    },
  };

  render() {
    return (
      <PdfjsContext.Provider value={this.state.context}>
        {this.props.children}
      </PdfjsContext.Provider>
    );
  }
}

export { ReactPdfjs, withPdfJsContext };
