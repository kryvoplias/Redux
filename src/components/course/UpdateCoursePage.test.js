import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import { UpdateCoursePage } from './UpdateCoursePage';

describe('Update Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: { saveCourse: () => { return Promise.resolve(); } },
            course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
        };

        const wrapper = mount(<UpdateCoursePage {...props} />);
        const button = wrapper.find('input').last();

        expect(button.props().type).toBe('submit');
        button.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});