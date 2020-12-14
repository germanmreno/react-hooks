import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Germán',
        email: 'german@gmail.com',
    };

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current[0]).toEqual(initialForm);
        expect(typeof result.current[1]).toBe('function');
        expect(typeof result.current[2]).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Enrique',
                },
            });
        });

        const [values] = result.current;

        expect(values).toEqual({
            name: 'Enrique',
            email: 'german@gmail.com',
        });
    });

    test('Debe de re-establecer el formulario con reset', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Enrique',
                },
            });
            reset();
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);
    });
});
