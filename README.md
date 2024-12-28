# Repositorio para la posición de desarrollador de software en BCC Innovation

La aplicación está basada en una plantilla publicada recientemente por mí: [supabase-auth-turborepo-boilerplate](https://github.com/Telmiyo/supabase-auth-turborepo-boilerplate)

## Tecnologías usadas

Las siguientes tecnologías han sido seleccionadas debido a mi reciente familiarización con ellas, la facilidad de uso que ofrecen y la escalabilidad que permiten:

- **Turbo.js**: Permite la creación de repositorios monorepo, también conocidos como aplicaciones monolíticas. Esto ayuda a mejorar la organización y estructuración del espacio de trabajo, facilitando su escalabilidad. Un caso práctico es aislar los componentes de interfaz (`packages/ui`) para usarlos en diferentes aplicaciones dentro del mismo repositorio, como la configuración de la base de datos, infraestructura, etc., e importarlos en la aplicación principal (la web) o varias aplicaciones. Por ejemplo, tener una web app de documentación.
- **Next.js**: Utilizado para desarrollar la aplicación web.
- **Shadcn/ui**: Biblioteca de componentes Open Source.
- **Supabase**: Plataforma de infraestructura. En este caso, se utiliza como base de datos para leer y escribir recetas.
- **Vercel**: Plataforma para alojar la aplicación de manera rápida y eficiente.
- **ChatGPT**: Me ha facilitado la creación de estilos básicos rápidamente, permitiéndome centrarme en la lógica principal para el manejo de recetas.

## Instalación

No es necesario iniciar el proyecto para visualizarlo; se puede acceder al resultado directamente en [bcc-web-app-dashboard.vercel.app](https://bcc-web-app-dashboard.vercel.app/).

La inicialización del proyecto está detallada en el repositorio [supabase-auth-turborepo-boilerplate](https://github.com/Telmiyo/supabase-auth-turborepo-boilerplate)
