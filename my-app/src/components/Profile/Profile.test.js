import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Profile from './Profile';




configure({ adapter: new Adapter() });


describe('<Navbar />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Profile  />);
    });

    it('should test the Typography with Saif displaying', () => {      
        expect(wrapper.find("#saif").text()).toBe("Saif Ali")
    });
    
    it('should test the Typography with Saif Ali Rko displaying', () => {      
        expect(wrapper.find("#SaifAliRko").text()).toBe("SaifAliRko")
    });

    it('should test the button for followers and following', () => {      
        expect(wrapper.find("#followers").text()).toBe("1 follower . 1 following")
    });

    it('should test the button for location', () => {      
        expect(wrapper.find("#location").text()).toBe("Deggendorf, Germany")
    });

    

    
});

