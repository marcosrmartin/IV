# Repositorio para la asignatura Infraestructura Virtual UGR (22/23)

## Problemas a resolver
En ocasiones hemos estado con un grupo de amigos, ya sea en viajes o saliendo por tu ciudad, sin llevar las cuentas y al final del día no sabeis quien ha pagado cada cosa ni para quienes, y en caso de saberlo suele ser un lío ajustar cuanto le paga cada uno al resto del grupo (sobretodo en grupos grandes).

## Lógica de negocio
Crearemos una aplicación para obtener un ajuste de cuentas entre los amigos, desglosando quien ha pagado cada cosa y entre quienes se divide el gasto ,facilitando un historial, además minimizando el número de pagos en el grupo.

## ¿Por qué en la nube?
Esto posibilita tener un backup de los gastos en la nube, a la vez que poder realizar gestiones desde diferentes dispositivos. Otra característica que aporta es que los gastos entre amigos podrán ser gestionados entre diferentes usuarios.

## Planificación
Hemos planificado [2 milestones (estructura y API)](https://github.com/marcosrmartin/PerroAndaluz/milestones) los cuales describen unos productos mínimamente viables, y [4 historias de usuarios](https://github.com/marcosrmartin/PerroAndaluz/issues) los cuales expresan funcionalidades que al cliente le gustaría obtener.

### Milestones
#### [M-0] Estructura de datos para gestionar las cuentas de cada usuario
Módulo definido en un lenguaje y que el mismo compile sin problemas.

#### [M-1] Funcionalidad módulo para la gestión de usuarios
Implementar en el módulo anterior, las funcionalidades necesarias para la lógica de negocio.

#### [M-2] Definición e implementación de una API REST

### Historias de usuarios
#### [HU-01] Aplicación para gestionar las cuentas
Como estudiante que vive en un piso compartido que realiza un par de compras a la semana, me gustaría tener una aplicación en la cual poder apuntar los gastos en común con mis compañeros de piso, pudiendo elegir quienes participan en cada pago, y que la aplicación calcule cuanto le debe cada uno al otro.

#### [HU-02] Modificar usuarios en pago
Hay veces que llega algún amigo tarde y no contábamos con él, me gustaría poder añadir gente a un pago o cuenta que no estaba en la creación de la misma.

## [Configuración del respositorio](https://github.com/marcosrmartin/PerroAndaluz/tree/Objetivo-0/docs/readme.md)
