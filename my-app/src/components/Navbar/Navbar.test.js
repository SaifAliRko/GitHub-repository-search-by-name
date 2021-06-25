import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainRepo from '../MainRepo/MainRepo';
import Navbar from './Navbar';



configure({ adapter: new Adapter() });


describe('<Navbar />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navbar  />);
    });

    it('should test the button', () => {      
        expect(wrapper.find("#search").text()).toBe("Search")
    });

    it('should render one <NavigationItem /> element with Logout label if authenticated', () => {
        const anchor=(<a href='/' id="anchor" style={{color:'white'}}>Saifs Repositories</a>);
        expect(wrapper.contains(anchor)).toEqual(true);

    });

    

    
});

