import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;
  beforeEach(() => {
    //This is a jquery object that contains react component
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    console.log(component);
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
     expect(component.find('.comment-list')).to.exist;
  });
});
