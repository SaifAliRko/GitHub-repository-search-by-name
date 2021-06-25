
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import MainRepo from './MainRepo';
import SearchedRepos from '../SearchedRepos/SearchedRepos';
import Repo from '../Repo/Repo';

configure({ adapter: new Adapter() });

describe('<MainRepo />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainRepo />);
    });

    it('should render one <SearchedRepo /> elements input is not empty and someone clicked', () => {
        wrapper.setProps({ hasSearched: true ,input:true});
        expect(wrapper.find(SearchedRepos)).toHaveLength(1);
    });
    it('should render one <Repo /> element if both input and click state is false', () => {
        wrapper.setProps({ hasSearched: false ,input:false});
        expect(wrapper.find(Repo)).toHaveLength(1);
    });

  
});