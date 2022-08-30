import React from 'react';
import App from '../../App.jsx';

describe('App', () => {
  it('renders components to the DOM', () => {
   const domTree = renderer.create(<App />).toJSON();
   expect(tree).toMatchSnapshot();
  });

});






