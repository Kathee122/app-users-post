# Usuarios y Publicaciones | Proyecto React

## Cómo correr el proyecto

Para ejecutar este proyecto, sigue los siguientes pasos:

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. **Instalar dependencias**
   Una vez tengas Node.js y npm instalados, ejecutamos:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   Una vez instaladas las dependencias, inicia el servidor de desarrollo con:
   ```bash
   npm run dev
   ```
---

## Funcionalidades implementadas

1. **Visualización de usuarios**:
   - El sistema muestra una lista de usuarios obtenidos desde una API externa.

2. **Visualización de publicaciones por usuario**:
   - Al hacer clic en un usuario, se navega a una página donde se muestran sus publicaciones.

3. **Diseño responsivo basado en Bootstrap**:
   - Se utiliza Bootstrap para garantizar un diseño atractivo y funcional en diferentes tamaños de pantalla.

4. **Estilos personalizados con CSS**:
   - Se agregaron detalles específicos con CSS para personalizar la apariencia del proyecto.

---

## Decisiones técnicas

1. **Framework utilizado: React + Vite**
   - Se seleccionó Vite para aprovechar su velocidad en el entorno de desarrollo y sus capacidades modernas de construcción.

2. **Consumo de API con Axios**
   - Se utilizó Axios para realizar peticiones HTTP debido a su simplicidad y manejo de promesas.

3. **Organización de componentes**
   - El proyecto está estructurado con componentes reutilizables para facilitar la mantenibilidad y escalabilidad.

4. **Rutas dinámicas**
   - Se configuraron rutas dinámicas para mostrar las publicaciones de cada usuario en páginas separadas.
