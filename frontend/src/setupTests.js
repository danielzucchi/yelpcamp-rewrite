import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

module.exports = {
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
};
