# Proyecto 1 - Sistemas y Tecnologías Web

En este proyecto se han puesto en práctica los conceptos explorados durante el primer tercio de curso Sistemas y Tecnologías Web, el cual consta de replicar de la forma más exacta posible
los estilos de una página web existente, tomando en cuenta aspectos como el espacio entre elementos, fuentes, íconos, imágenes, entre otros.<br />
Para esta ocasión, se ha optado por replicar el sitio web oficial de la banda inglesa [Sleep Token](https://sleep-token.com).

## Tecnologías utilizadas
- [React](https://reactjs.org/): Librería de código abierto para JavaScript creada por Facebook y mantenida a día de hoy por esta empresa y por una gran comunidad de
desarrolladores independientes. Facilita la creación de interfaces de usuario reutilizables al estar basada en componentes que se crean una vez y pueden ser fácilmente
implementados en varios proyectos.
- [Vite](https://vitejs.dev/): Se trata de una herramienta de compilación que tiene como propósito brindar una experiencia de desarrollo más ágil y rápida para la creación de
proyectos web. Consta de dos partes:
  1. Un servidor de desarrollo que permite los cambios en tiempo real sin necesidad de recargar la página o reiniciar el proyecto.
  2. Un comando de compilación de elementos estáticos, haciendo uso de Rollup, con el que se crea una versión del proyecto lista para publicar en algún servidor remoto.
- [ESLint](https://eslint.org/): Herramienta de código abierto desarrollada con node.js que está enfocada en el proceso de *linting* para JavaScript. Al ser JavaScript un
lenguaje flexible y débilmente tipado, es común llegar a cometer errores de sintaxis al momento de desarrollar un proyecto que pueden no ser fácilmente detectados en el
proceso de testing o cuya corrección en ese punto suele ser complicada, por lo tanto, ESLint permite *limpiar* el código durante su desarrollo, de manera que, con el uso
de determinadas reglas de estelizado, es posible definir lo que se puede hacer y no se puede hacer a lo largo del código.
- [Storybook](https://storybook.js.org): Herramienta de código abierto que permite inspeccionar el diseño y funcionamiento de componentes de manera aislada. Al momento de crear
un nuevo componente, si se desea probarlo, resulta molesto tener que iniciar la aplicación completa para poder llegar al punto en el que se implementa dicho componente, además
de que esto puede resultar en errores ajenos a dicho componente (por ejemplo, obtener información errónea de un API o errores en otros componentes). Por lo tanto, Storybook
facilita este proceso al tratar cada componente como un elemento separado del resto de la aplicación, lo que permite configurar su diseño y funcionamiento de forma más rápida.
- [Rollup](https://rollupjs.org): Integrado dentro de Vite, Rollup es una herramienta que permite unir en un único archivo todo el código escrito en JavaScript que forma parte
de nuestra aplicación. Esto es especialmente útil al trabajar con React, ya que en lugar de contar con múltiples archivos dedicados al funcionamiento de distintos componentes,
Rollup lo integra todo en un único archivo que será posteriormente integrado en el archivo html principal, de manera que estos archivos estáticos facilitan la publicación del
sitio en un servidor remoto.
- [PostCSS](https://postcss.org): De manera similar a Rollup, e igualmente integrado dentro de Vite, PostCSS es una herramienta que nos permite integrar todo el código escrito
en CSS a un único archivo que será leído por el archivo html principal, de manera que, al crear una aplicación con React y utilizar el comando build brindado por Vite, este nos
generará 3 archivos: la página principal en html, el código de JavaScript integrado y el código CSS integrado.
