import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContactoSeccion } from './ContactoSeccion.jsx';

describe('Contacto Seccion', () =>{
    it('debe mostrar los campos del formulario', () => {
        render(<ContactoSeccion/>)

        expect(screen.getByText('Contacto')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo Electrónico')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument();
    });
     it('debe mostrar errores si se envía el formulario vacío', async () => {
        render(<ContactoSeccion />);

        fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/i }));

        expect(
            await screen.findByText('Por favor ingresa tu nombre')
        ).toBeInTheDocument();

        expect(
            screen.getByText('Por favor ingresa tu correo')
        ).toBeInTheDocument();

        expect(
            screen.getByText('Por favor escribe tu mensaje')
        ).toBeInTheDocument();
    });

    it('debe validar que el correo tenga un formato válido', async () => {
        render(<ContactoSeccion />);

        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Nicolas Sobarzo' },
        });

        fireEvent.change(screen.getByPlaceholderText('tu.correo@ejemplo.com'), {
            target: { value: 'correo-invalido' },
        });

        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), {
            target: { value: 'Hola, este es un mensaje de prueba.' },
        });

        fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/i }));

        expect(
            await screen.findByText('Ingresa un correo válido')
        ).toBeInTheDocument();
    });

    it('debe enviar el formulario con datos válidos y limpiarlo', async () => {
        render(<ContactoSeccion />);

        fireEvent.change(screen.getByPlaceholderText('Tu nombre'), {
            target: { value: 'Nicolas Sobarzo' },
        });

        fireEvent.change(screen.getByPlaceholderText('tu.correo@ejemplo.com'), {
            target: { value: 'nicolas@ejemplo.com' },
        });

        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), {
            target: { value: 'Hola, este es un mensaje de prueba.' },
        });

        fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/i }));

        expect(
            await screen.findByText('¡Mensaje enviado con éxito!')
        ).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByPlaceholderText('Tu nombre')).toHaveValue('');
            expect(screen.getByPlaceholderText('tu.correo@ejemplo.com')).toHaveValue('');
            expect(screen.getByPlaceholderText('Escribe tu mensaje aquí...')).toHaveValue('');
        });
    });
});