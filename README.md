# Repositorio para la asignatura Infraestructura Virtual UGR (22/23)

## Problemas a resolver
En ocasiones hemos estado con un grupo de amigos, ya sea en viajes o saliendo por tu ciudad, sin llevar las cuentas y al final del día no sabeis quien ha pagado cada cosa ni para quienes, y en caso de saberlo suele ser un lío ajustar cuanto le paga cada uno al resto del grupo (sobretodo en grupos grandes).

## Lógica de negocio
Crearemos una aplicación para obtener un ajuste de cuentas entre los amigos, desglosando quien ha pagado cada cosa y entre quienes se divide el gasto ,facilitando un historial, además minimizando el número de pagos en el grupo.

## ¿Por qué en la nube?
Esto posibilita tener un backup de los gastos en la nube, a la vez que poder realizar gestiones desde diferentes dispositivos. Otra característica que aporta es que los gastos entre amigos podrán ser gestionados entre diferentes usuarios.

## Planificación
Hemos planificado [4 milestones (estructura y API)](https://github.com/marcosrmartin/PerroAndaluz/milestones) los cuales describen unos productos mínimamente viables, y [2 historias de usuarios](https://github.com/marcosrmartin/PerroAndaluz/issues) los cuales expresan funcionalidades que al cliente le gustaría obtener.

### yarn run check
Utilizamos una opción que nos ofrece el cli de node, el cual es node -c o --check <ruta/archivo>, esta orden será lanzada a través de 3 subprocesos en paralelo, uno para cada estructura de datos.

### Para lanzar los tests
```
yarn test
```


## [Configuración del respositorio](https://github.com/marcosrmartin/PerroAndaluz/tree/Objetivo-0/docs/readme.md)
