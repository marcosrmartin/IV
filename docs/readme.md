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

Debido a todo lo anterior, utilizaremos Yarn Berry (PNP) para nuestro proyecto (Este será instalado con -g para poder ser usado globalmente y no introduzca archivos que no van a ser necesarios en nuestro proyecto como node_modules y package-lock.json).


## Elección del gestor de tareas
Nuestros criterios para elegir el gestor de tareas serán:
1. Facil de implementar.
2. No esté deprecated.
3. Paralelismo.

Tenemos los siguientes candidatos: **npm, yarn, make, grunt, gulp, broccoli**

| Atributos | npm | yarn | make | grunt | gulp | broccoli |
| --- | --- | --- | --- | --- | --- | --- |
| Fácil de implementar* | ✔️ | ✔️ | ❌ | ❌ | ❌ | ❌ |
| Not deprecated | ✔️ | ✔️ | ✔️ | ✔️ | ❌ | ❌ |
| Paralelismo | ✔️ | ✔️ | ✔️ | ✔️(plugin) |✔️ | ❌ |

*Facilidad de implementar para este proyecto, en el cual no se necesitarán unas órdenes muy complejas, por lo que primaremos que la curva de aprendizaje sea mínima y que sea multiplataforma. Grunt y make no tienen una curva alta, pero aun así es mayor que la del script de yarn/npm.

Nos quedan npm y yarn, así que nos quedaremos con yarn ya que es el gestor de dependencias que utilizamos (ya que no he encontrado comparativas de rendimiento de estos dos sobre scripts).

## Elección del test runner/test framework
Meto a ambos en el mismo saco ya que la linea entre ambos es muy difusa, ya que se pueden lanzar tests con node sin test runners, se pueden tener test runners con y sin tener que apoyarse en test frameworks de terceros.
Para ello tendremos en cuenta:

1. Paralelismo.
2. Facilidad de implementar.

Tendremos en cuentas los siguientes test runners: **Node.js Native Test Runner, jest, mocha, jasmine, ava, tape, tap, QUnit, vitest, storybook**

### 1. Paralelismo
| Node.js | jest | mocha | jasmine | ava | tape | node-qunit | vitest |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| ✔️ | ✔️ | ✔️ | ❌ | ❌ | ❌ | ❌ | ✔️ |
Algunos ❌ lo soportan vía plugin, pero aun así están deprecated.

### 2. Fácil de implementar
1. Node: Viene por defecto con Node y trae librería de aserciones.
2. Jest y vitest: Testing Framework + librería de aserciones.
3. Mocha: solamente el testing framework.

Nos quedamos con el test runner de Node.

## Elección de biblioteca de aserciones
Para ello priorizaremos que siga siendo mantenida y la facilidad de implementación en el proyecto:
Algunas las librerías: **chai.js, must.js, should.js, expect.js, assert de node.js**

De las cuales solo chai.js sigue siendo mantenida a dia de hoy junto con la librería assert de Node.js que es nueva.

Teniendo en cuenta que en principio no necesitamos ninguna funcionalidad que tenga chai y assert de Node no, nos quedaremos con esta última ya que viene por defecto.

## Elección de contenedor base
Los criteros para elegir la imagen serán:
1º Si es especifica para Node que sea oficiales de docker o editor oficial (para que estas tengan soporte de alguna entidad/persona que implementen mejoras o arreglen bugs) y que soporte la última versión (19.4.0 actualmente).
2º Si no es específico para Node, que no tenga una imágen para este, por ejemplo, no tendré en cuenta buster si existe node:buster pero sí baseimage ya que no existe node:baseimage.
3º Deberán ser latest.
4º Que tengan shell (No distroless). 

Las opciones que he tenido en cuenta son:
**node:alpine, node:current-bullseye (debian 11), node:current-bullseye-slim, node:current-buster (debian 10), node:current-buster-slim, bitnami/node:latest, phusion/baseimage:jammy-1.0.1**.


A partir de aquí utilizaré el nombre de la imagen sin su número de versión ni la de Node. 

### 1. Peso descarga imagen base (linux/amd64)
| alpine | bullseye | bullseye slim | buster | buster slim | bitnami  | baseimage | busybox |
| -- | -- | -- | -- | -- | -- | -- | -- | -- |
| 51.29 MB | 353.67 MB | 76.96 MB | 343.75 MB | 72.86 MB | 239.75 MB | 80.5 MB | 760.43 KB |

De aquí descartaremos bullseye, buster y bitnami ya que son imágenes bastante grandes comparadas con el resto.


### 2. Peso imagen montada
Para esta comparativa montaremos la imagen con los archivos necesarios para la puesta en funcionamiento de Node  [(dockerfiles aquí)](https://github.com/marcosrmartin/PerroAndaluz/tree/Objetivo-0/docs/imagenes.md)
| alpine | bullseye slim | buster slim | baseimage | busybox |
| -- | -- | -- | -- | -- |
| 178.93 MB | 250.65 MB | 239.27 MB | 399.9 MB | ⚠️ |

En este punto nos hemos encontrado con un problema:
- Busybox: pensaba que iba a ser fácil de configurar (me equivocaba), la curva de aprendizaje es muy elevada para conseguir 4 MB de ventaja vs otra imagen como Alpine que está basada en esta.

De aquí descartaremos busybox (por lo mencionado anteriormente) y baseimage por su peso (otro problema que he encontrado es que no permite cambiar el usuario durante la construcción de su imagen debido a que utiliza un CMD con un script y da [error](https://github.com/phusion/baseimage-docker/issues/617) por permisos, aunque si hacemos los tests con ENTRYPOINT funcionará ya que lo realiza antes).


### 3. Uso de memoria (reposo)
| alpine | bullseye slim | buster slim |
| -- | -- | -- |
| 12.3 MB | 13.5 MB | 13.4 MB |

Donde apenas hay diferencia entre ellas.

### 4. Seguridad (SnykAdvisor)
| alpine | bullseye slim | buster slim |
| -- | -- | -- |
| 0 | 43L | 2H 54L |

Donde Alpine es la única que no tiene CVEs descubiertos ahora mismo.

Basandonos en los criterios vistos anteriormente nos quedaremos con Alpine al ser la más ligera de las tres y tener menos vulnerabilidades.