import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import App from '../../App.jsx'
import RelatedProdSlider from '../Components/RelatedProducts/RelatedProdSlider.jsx';
import ProductCard from '../Components/RelatedProducts/ProductCard.jsx';


describe('Product Card', () => {
  test('renders Product Card component and has images', () => {
    render(<ProductCard />);

    expect(screen.getByAltText('apiImg')).toBeInTheDocument();
  });
});

describe('Related Products', () => {
  test('renders Related Products component', () => {
    render(<App >
             <RelatedProdSlider />
           </App>);
  });
});

// describe('Outfit button', () => {
//   test('calls the onClick ')
// })

describe('', () => {
  it('Renders related products carousel to the DOM', () => {
    const component = renderer.create(<WriteNewReview />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});