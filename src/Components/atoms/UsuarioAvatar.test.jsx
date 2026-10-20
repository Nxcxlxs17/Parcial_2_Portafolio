import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UsuarioAvatar from './UsuarioAvatar';

describe('UsuarioAvatar', () => {
    it('debe renderizar la imagen con la fuente recibida', () => {
        const { container } = render(<UsuarioAvatar imagen="foto.png" />);
        expect(container.querySelector('img')).toHaveAttribute('src', 'foto.png');
    });

    it('debe usar el tamaño por defecto de 150px', () => {
        const { container } = render(<UsuarioAvatar imagen="foto.png" />);
        expect(container.querySelector('.ant-avatar')).toHaveStyle({ width: '150px' });
    });
});