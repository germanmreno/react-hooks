import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false,
        };
        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: newTodo,
        });

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Debe de borrar un TODO', () => {
        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: 2,
        });

        expect(state.length).toEqual(1);
        expect(state).toEqual([demoTodos[0]]);
    });

    test('Debe de hacer el toggle del TODO', () => {
        const state = todoReducer(demoTodos, { type: 'toggle', payload: 1 });

        expect(state[0].done).toBe(true);
    });
});
