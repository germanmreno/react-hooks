import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('Debe de mostrarse correctamente', () => {
        useCounter.mockReturnValue({ counter: 1 });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {
        useCounter.mockReturnValue({ counter: 1 });
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Germán',
                    quote: 'Hello World',
                },
            ],
            loading: false,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hello World');
        expect(wrapper.find('footer').text().trim()).toBe('Germán');
    });
});
