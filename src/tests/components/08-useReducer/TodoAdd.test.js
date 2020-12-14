import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleaAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({
            preventDefault() {},
        });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la función handleAddTodo', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description',
            },
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({
            preventDefault() {},
        });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number),
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
