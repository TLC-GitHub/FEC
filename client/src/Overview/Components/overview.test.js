import React from 'react';
import renderer from 'react-test-renderer';
import OverviewModule from './OverviewModule.jsx';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Announcement from './Announcement.jsx';
import ImageGallery from './ImageGallery.jsx';

describe('overview module', () => {
  it('renders the OverviewModule component to the DOM', () => {
    const component = renderer.create(<OverviewModule />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Logo component to the DOM', () => {
    const component = renderer.create(<Logo />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Search component to the DOM', () => {
    const component = renderer.create(<Search />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Announcement component to the DOM', () => {
    const component = renderer.create(<Announcement />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Image Gallery component to the DOM', () => {
    const component = renderer.create(<ImageGallery />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});






