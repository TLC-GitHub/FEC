import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import RelatedProducts from '../Components/RelatedProducts.jsx'
import RelatedProdSlider from '../Components/RelatedProdSlider.jsx';
import ProductCard from '../Components/ProductCard.jsx';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';


describe('Product Card', () => {
  test('renders Product Card component and has images', () => {
    render(<ProductCard />);

    expect(screen.getByAltText('apiImg')).toBeInTheDocument();
  });
});

describe('Related Products', () => {
  test('renders Related Products component', () => {
    render(<RelatedProducts>
             <RelatedProdSlider />
           </RelatedProducts>);
  });
});
