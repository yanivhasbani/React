import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;
    beforeEach(() => {
        //This is a jquery object that contains react component
        
        //  Third arg - props
        const props = {comments:[
            'New Comment',
            'New Comment1',
            'New Comment2'
        ]};
        
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('New Comment1');
        expect(component).to.contain('New Comment2');
    });
});