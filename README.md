# Portafolio Personal con React + Vite

Presenta mi perfil profesional: datos personales, experiencia laboral, estudios, proyectos y un formulario de contacto. Fue desarrollada con **React**, **Vite** y **Ant Design**, siguiendo la metodología **Atomic Design** y con pruebas automatizadas en **Vitest**.

## Secciones

- **Personal:** nombre, avatar y descripción profesional.
- **Experiencia laboral:** empresa, cargo y fechas.
- **Estudios:** institución, título y año.
- **Proyectos:** tarjetas con imagen, descripción, tags y enlace al repositorio.
- **Contacto:** redes sociales y formulario validado en el cliente.
- **Footer:** año calculado con código, derechos de autor y correo de contacto.

## Creación del proyecto con React y Vite

```bash
npm create vite@latest Parcial_2_Portafolio -- --template react
cd Parcial_2_Portafolio
npm install
```

## Instalar dependencias

npm install

## Ejecucion del Proyecto
```
npm run dev

Abre en el navegador la dirección que muestra la terminal.
 
```
## Librería de componentes: Ant Design

```bash
npm install antd @ant-design/icons
```

Ant Design se usa en toda la aplicación (layout, tarjetas, botones, formularios, menú, avatar y tipografía) para mantener una interfaz visual consistente.

## Pruebas automatizadas

Dependencias instaladas:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Configuración:
- `vite.config.js`: define `environment: 'jsdom'`, `globals: true` y el archivo de setup.
- `src/setupTest.js`: registra los matchers de `jest-dom` y simula `matchMedia` y `ResizeObserver`, necesarios para Ant Design en jsdom.

Ejecutar las pruebas:

```bash
npm run test
```

Las pruebas cubren los átomos, la molécula `TarjetaProyecto`, los organismos principales, el layout `MainLayout`, el hook `usePortafolio` y el comportamiento del formulario de contacto.

## Arquitectura: Atomic Design

```text
src/
├── assets/          Imágenes
├── Components/
│   ├── atoms/       TituloSeccion, UsuarioAvatar
│   ├── molecules/   TarjetaProyecto
│   ├── organisms/   Navbar, CardPerfil, ExperienciaSeccion, EstudiosSeccion,
│   │                ProyectosSeccion, ContactoSeccion, Footer
│   └── layouts/     MainLayout (Navbar + contenido + Footer)
├── pages/           Home (arma las secciones del portafolio)
├── hooks/           usePortafolio
├── data/            portafolioData.js
├── App.jsx
└── main.jsx
```

- **Átomos:** elementos básicos y reutilizables.
- **Moléculas:** combinaciones de átomos y componentes de Ant Design con una función concreta.
- **Organismos:** secciones completas del portafolio.
- **Plantilla (layout):** estructura común de la página.
- **Página:** `Home`, que obtiene los datos con el hook y los distribuye a cada sección.

## Manejo de estado con Hooks

- `useState` y `useEffect` en `usePortafolio`: el estado parte vacío y los datos se cargan al montar la aplicación.
- `useState` en el formulario de contacto para controlar campos y validaciones.
- Renderizado condicional de datos, como la lista de proyectos y los enlaces al repositorio.

## Uso de IA

Se utilizó inteligencia artificial como apoyo en detalles visuales (scroll suave y efectos en los botones del navbar) Y resolviendo algunas de las dudas a las pruebas unitarias.

## Autor

**Nicolas Sobarzo**
- GitHub: [Nxcxlxs17](https://github.com/Nxcxlxs17)
- LinkedIn: [Nicolas Sobarzo](https://www.linkedin.com/in/nicolas-sobarzo-014a90335/)