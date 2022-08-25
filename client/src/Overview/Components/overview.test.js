import renderer from 'react-test-renderer';
import OverviewModule from './OverviewModule.jsx';
it('renders the component to the DOM', () => {
  const component = renderer.create(<OverviewModule />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});