import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Repo from './Repo'




configure({ adapter: new Adapter() });


describe('<Navbar />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Repo  />);
    });

  
    
    it('should test the Typography with Saif Ali Rko displaying', () => {      
        expect(wrapper.find("#theResult").text()).toBe("Following are your repositories")
    });

    

    

    
});

