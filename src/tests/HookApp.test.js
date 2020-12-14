import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp.js';

describe('Pruebas sobre <HookApp/>', () => {
    test('Debe de renderizarse correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});
