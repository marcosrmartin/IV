# Configuración del repositorio

## Clave pública
![Clave pública](https://github.com/marcosrmartin/PerroAndaluz/blob/Objetivo-0/docs/key.png?raw=true)


## [Configuración del respositorio](https://github.com/marcosrmartin/PerroAndaluz/tree/Objetivo-0/docs/readme.md)

## Elección del gestor de dependencias
Nuestros criterios para elegir el gestor de dependencias, de mayor a menor prioridad, serán:
1. Que esté preparado para producción.
2. Seguridad.
3. El rendimiento de este.
4. Uso de memoria.

Compararemos los siguientes gestores de dependencias: **npm, yarn classic, pnpm, yarn berry, bun**

### 1. Que esté preparado para producción.
| npm | yarn classic | yarn berry | pnpm | bun |
| -- | -- | -- | -- | -- |
|✔️|✔️|✔️|✔️|❌|

Descartamos bun, que es la única que no está preparada para producción todavía. [Repositorio Bun](https://github.com/oven-sh/bun#not-implemented-yet)

### 2. Presentan problemas de seguridad
| Funcionalidad | npm | yarn classic | yarn berry | pnpm |
| -- | -- | -- | -- | -- |
| No Hoisting problems |❌|❌|✔️|✔️|
| Check integrity | SHA-512 | Checksum | Checksum | Checksum |

Descartamos npm y yarn classic debido al tener problemas de hoisting, provocados por el node_modules tradicional, ya que es plano (es decir si A depende de B y B de C, A puede usar directamente C sin que esta tenga acceso directo).
[Comparativa entre estos gestores](https://blog.logrocket.com/javascript-package-managers-compared/)

### 3. Rendimiento
Yarn berry y pnpm además de ser más seguras que que sus predecesores, al cambiar la forma de almacenar las dependencias, también son más eficientes.

Utilizaremos la [comparativa de benchmarks](https://p.datadoghq.eu/sb/d2wdprp9uki7gfks-c562c42f4dfd0ade4885690fa719c818?tpl_var_npm%5B0%5D=%2A&tpl_var_pnpm%5B0%5D=%2A&tpl_var_yarn-classic%5B0%5D=%2A&tpl_var_yarn-modern%5B0%5D=%2A&tpl_var_yarn-nm%5B0%5D=no&tpl_var_yarn-pnpm%5B0%5D=no&from_ts=1660693325115&to_ts=1668469325115&live=true) proporcionada por los mantenedores de Yarn, entre pnpm y Yarn de los últimos 3 meses, y [esta comparativa](https://pnpm.io/benchmarks) de los mantenedores de pnpm.

En estas comparativas observamos que:
- A la hora de instalar el proyecto en una máquina nueva o crear un proyecto nuevo desde 0 pnpm es más rápido que yarn.
- Al tener caché y lockfile, pnpm es más rápido que Yarn en proyectos pequeños.
- Con operaciones del día a día (add, remove, update...) vemos que Yarn es más rápido.

En este caso priorizaremos el tiempo cuando tiene la caché y lockfile, y con las operaciones del día a dia, ya que estos casos se van a dar más que una instalación de 0 o un proyecto nuevo (en nuestro caso 1 solo). Por lo que en esta comparativa sobresale Yarn.

### 4. Uso de memoria
Pnpm utiliza un [node_modulos basados en soft y hard links](https://pnpm.io/motivation#creating-a-non-flat-node_modules-directory) que apuntan a una instalación global .pnpm, donde estarán instaladas las dependencias. Esto evita que los proyectos y dependencias reinstalen las mismas dependencias, ahorrando espacio.

Yarn Berry elimina por completo el node_modulos y lo sustituye por un archivo .pnp.cjs, el cual contiene mapas, unos que apuntan a la localización en disco del paquete y otro que apunta a su lista de dependencias. Este archivo es más eficiente que la carpeta anidada creada por pnpm. Destacar que las dependencias [estarán en formato zip](https://yarnpkg.com/features/pnp#packages-are-stored-inside-zip-archives-how-can-i-access-their-files) ahorrando más espacio.
En el caso de tener más de un proyecto con las mismas dependencias, Yarn las duplicaría al instalarla como sus predecesores, pero como tenemos un solo proyecto esto no nos afecta.

Debido a todo lo anterior, utilizaremos Yarn Berry (PNP) para nuestro proyecto. 


## Elección del gestor de tareas
Nuestros criterios para elegir el gestor de tareas serán:
- Facil de implementar.
- Flexibilidad.
- Paralelismo.
- Rendimiento.

Tenemos los siguientes candidatos: **npm, yarn, make, grunt, gulp, broccoli**

| Atributos | npm | yarn | make | grunt | gulp | broccoli |
| --- | --- | --- | --- | --- | --- | --- |
| Fácil de implementar* | ✔️ | ✔️ | ❌ | ✔️ | ✔️ | ❌ |
| Flexibilidad | ❌ | ❌ | ✔️ | ✔️ | ✔️ | ✔️ |
| Paralelismo | ✔️ | ✔️ | ✔️ | ✔️(plugin) |✔️ | ❌ |

*Facilidad de crear tareas complejas, en el caso de broccoli no está de forma nativa en Yarn Berry, a la vez que hay escasa documentación y plugins de este. En cuanto a make sería ideal para ejecutar tareas que automaticen otro conjunto de tareas más pequeñas, pero al no contar con plugins, ni ser específico para NodeJS se vuelve una tarea más compleja.

Una vez hecha la comparativa nos quedamos con Grunt y Gulp, ya que son las únicas que satisfacen los criterios anteriores.

Para esta elección he comparado entre [gulp y grunt](https://www.keycdn.com/blog/gulp-vs-grunt) ([aqui también](https://deliciousbrains.com/grunt-vs-gulp-battle-build-tools/)), he seleccionado gulp ya que esta es más eficiente que Grunt gracias a los streams de Node, aunque Grunt para un proyecto pequeño como este también cumple su función.

### Orden check
Utilizamos una opción que nos ofrece el cli de node, el cual es node -c <ruta/archivo>, esta orden será lanzada por gulp a través de 3 subprocesos en paralelo, uno para cada estructura de datos.
