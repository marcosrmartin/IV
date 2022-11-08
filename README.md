# Repositorio para la asignatura Infraestructura Virtual UGR (22/23)

## Problemas a resolver
En ocasiones hemos estado con un grupo de amigos, ya sea en viajes o saliendo por tu ciudad, sin llevar las cuentas y al final del día no sabeis quien ha pagado cada cosa ni para quienes, y en caso de saberlo suele ser un lío ajustar cuanto le paga cada uno al resto del grupo (sobretodo en grupos grandes).

## Lógica de negocio
Crearemos una aplicación para obtener un ajuste de cuentas entre los amigos, desglosando quien ha pagado cada cosa y entre quienes se divide el gasto ,facilitando un historial, además minimizando el número de pagos en el grupo.

## ¿Por qué en la nube?
Esto posibilita tener un backup de los gastos en la nube, a la vez que poder realizar gestiones desde diferentes dispositivos. Otra característica que aporta es que los gastos entre amigos podrán ser gestionados entre diferentes usuarios.

## Planificación
Hemos planificado [4 milestones (estructura y API)](https://github.com/marcosrmartin/PerroAndaluz/milestones) los cuales describen unos productos mínimamente viables, y [2 historias de usuarios](https://github.com/marcosrmartin/PerroAndaluz/issues) los cuales expresan funcionalidades que al cliente le gustaría obtener.

## Elección del gestor de dependencias
Para esta decisión nos hemos basado en esta comparativa entre [npm, yarn, y npmp](https://nicco.io/blog/going-beyond-npm-meet-yarn-pnpm), con la que hemos descartado npmp ya que no está preparada para producción y es la que tiene menor comunidad, ahora la duda era entre npm y yarn. 
Esta se debe a que npm tiene npx y yarn no, y yarn es más rápido que npm, buscando y gracias a [esta comparativa](https://www.codingninjas.com/codestudio/library/difference-between-npm-and-npx) entre npm y npx, y esta entre [yarn y npm](knowledgehut.com/blog/web-development/yarn-vs-npm), he descartado npm, ya que en nuestro proyecto no necesitaremos instalar muchos módulos desde npm y prefiero priorizar la velocidad de instalación de dependencias, además ambas tienen casi la misma sintaxis.

## Elección del gestor de tareas
Para esta elección he comparado entre [gulp y grunt](https://www.keycdn.com/blog/gulp-vs-grunt) ([aqui también](https://deliciousbrains.com/grunt-vs-gulp-battle-build-tools/)), he seleccionado gulp ya que esta es un poco más eficiente que Grunt, es más flexible al tener más peso la programación y se escala mejor, aunque Grunt para un proyecto pequeño como este también cumple su función. He descartado yarn la cual soporta la gestión de tareas en el package.json al igual que npm porque puede ser un dolor de cabeza a la hora de escalar el código. Tanto gulp como grunt tienen soporte para usar yarn en vez de npm. Aunque utilizo npm para instalar yarn y este para instalar gulp al iniciar el servidor.

### Orden check
Utilizamos una opción que nos ofrece el cli de node, el cual es node -c <ruta/archivo>, esta orden será lanzada por gulp a través de 3 subprocesos en paralelo, una para cada estructura de datos.

## [Configuración del respositorio](https://github.com/marcosrmartin/PerroAndaluz/tree/Objetivo-0/docs/readme.md)
