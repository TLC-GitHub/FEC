import React from 'react';
import renderer from 'react-test-renderer';
import WriteNewReview from './WriteNewReview/index.jsx'


describe('Ratings and Reviews', () => {
  it('Renders Ratings and Reviews components to the DOM', () => {
    const component = renderer.create(<WriteNewReview />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});