**Note**: Initially this project is mainly oriented to Catalan institutions, and at this moment the documentation is only in Catalan. Contact us if you need an English translation (check our mail at the end of the document).


# _Léeme_ - Buzón Ético y de Buen Gobierno

1. Licencia del Buzón Ético y de Buen Gobierno
2. Rasgos característicos del Buzón Ético y de Buen Gobierno
3. Aportaciones de Xnet y Ayuntamiento de Barcelona a Globaleaks
4. Introducción al Buzón Ético y de Buen Gobierno: Funcionamiento y Seguridad
5. Instalación y configuración
6. Datos de contacto


-------------------------------------------------------------------------------------------------------------------------

## 1. Licencia del Buzón Ético y de Buen Gobierno

La [Buzón Ético y de Buen Gobierno](https://ajuntament.barcelona.cat/bustiaetica/es) es un canal seguro que permite la participación anónima de la ciudadanía para conocer cualquier acción u omisión contraria a los principios del buen gobierno y así reforzar la gestión pública.

Una vez propuesta y creada por la organización independiente [Xnet](https://xnet-x.net/es/), ha sido desarrollada e implementada por el [Ayuntamiento de Barcelona](http://www.barcelona.cat/es/) como a extensión del programa [Globaleaks](https://www.globaleaks.org/), desarrollado por el _[Hermes Center for Transparency and Digital Human Rights](https://www.hermescenter.org/)_.

Su código es libre, modificable y replicable siempre que se reconozca e indique expresamente la autoría en partes iguales de Xnet y el Ayuntamiento de Barcelona, indicando la siguiente frase textual al pie de página: "Herramienta creada por [Xnet](https://xnet-x.net/es/) y [Ayuntamiento de Barcelona](http://www.barcelona.cat/es/). Powered by [Globaleaks](https://www.globaleaks.org/)"

El uso del código de la aplicación Globaleaks está bajo las condiciones de la [licencia utilizada por la misma](https://github.com/globaleaks/GlobaLeaks/blob/master/LICENSE).



-------------------------------------------------------------------------------------------------------------------------

## 2. Rasgos característicos del Buzón Ético y de Buen Gobierno

El _Buzón Ético y de Buen Gobierno_ está basado en el software _Globaleaks_, y para su implementación en el sector público se han tomado las siguientes decisiones:

- Permite el anonimato del comunicador
	- Es accesible desde un dominio de internet público, no exclusivo dentro de la red TORO
	- Permite el acceso del comunicador tanto desde el navegador [TOR](https://www.torproject.org/) como también desde una conexión internet normal
	- Opcionalmente, el comunicador puede dar sus datos. Se pueden comunicar informaciones sin identificarse en absoluto. 
- se utiliza una terminología propia: comunicador, receptor, comunicación
- según las [normas reguladoras](https://ajuntament.barcelona.cat/bustiaetica/es/normas-reguladoras) , se da una respuesta formal al comunicador, y por lo tanto ha habido que incorporar la funcionalidad (no existente anteriormente en Globaleaks) de devolver un documento oficial firmado como respuesta a la comunicación
- se definen unos roles diferenciados de gestión para asegurar la segregación de funciones y el auditabilidad: administrador de sistema, administrador de globaleaks, auditor del administrador de globaleaks, y receptor (se describen más adelante).
	- se incorpora la figura del auditor de seguridad, que audita a los usuarios del sistema y su utilización
	- no se permite a los receptores borrar los casos, con el fin de asegurar una trazabilidad con el gestor de expedientes
- la infraestructura se despliega en el _cloud privat_ interno del [Institut Municipal d'Informàtica](http://ajuntament.barcelona.cat/imi/es)
	- servidores dedicados
	- segmento de red específico, aislado del resto de redes corporativas
	- separada en 3 capas, en vez de tener toda la instalación en un solo servidor como propone la instalación por defecto
	- comunicadores se pueden conectar con navegador TOR a este segmento
	- receptores sólo pueden acceder desde la red corporativa (vía https): se ha diferenciado el acceso vía _proxy_ intermedio, dado que globaleaks prevé sólo un único punto de entrada para|por comunicador y receptor.

-------------------------------------------------------------------------------------------------------------------------

## 3. Aportaciones de Xnet y Ayuntamiento de Barcelona a Globaleaks

lista de las funcionalidades y de las mejoras implementadas en el Buzón:

- configuración adaptada a las especificidades del sector público _(se puede consultar en el documento [INSTALL_es.md](INSTALL_es.md)_
- desarrollo de una nueva funcionalidad que permite al receptor adjuntar ficheros de resolución, que podrá descargar el comunicador de forma anónima _(incorporado en el repositorio de Globaleaks, a partir de la versión 2.65.0)_
- creación de una imagen gráfica más moderna, reestructuración de algunos contenidos para mejorar la comprensión, formateo de algunos textos para mejorar la lectura _(ficheros js, css, y miniaturas de imagen)_
- traducciones al catalàn:
	- de la interficie de globaleaks: [literals de l'aplicació](https://www.transifex.com/otf/globaleaks/)
	- del web del proyecto: [globaleaks.org/ca/](https://www.globaleaks.org/ca/)	(_pendient de publicación_)
- nomenclatura propia: adaptaciones de traducciones dentro el producto
- configuración cuestionarios que respeten la normativa vigente (LOPD). Construcción de un fichero de configuración importable para la rápida creación del cuestionario _(fichero importable json proporcionado en este repositorio)_
- detección y corrección de [errores del producto](https://github.com/globaleaks/GlobaLeaks/issues?utf8=%E2%9C%93&q=label%3A%22X%3A%20MH96DX%22%20)


_En este proyecto se proporciona todo el detalle de la configuración usada, y se incluyen todos los desarrollos realizados, a fin de que se puedan usar en otros buzones, siempre de acuerdo con la [licencia de uso](LICENSE)._ 

-------------------------------------------------------------------------------------------------------------------------

## 4. Introducción al Buzón Ético y de Buen Gobierno: Funcionamiento y Seguridad
En este apartado se hace una **descripción del funcionamiento** del Buzón, y de los **requerimientos generales de seguridad** que se han aplicado.


**El Buzón es un canal seguro de comunicación electrónica bidireccional y asíncrona, que garantiza la confidencialidad y permite el anonimato de las informaciones.**

### Alta Confidencialidad

La información se trata con clasificación 'Muy Crítica' y LOPD nivel ALTO (ALTA CONFIDENCIALIDAD):
- Las comunicaciones de datos son cifradas extremo en extremo mediante protocolo HTTPS.
- La información entregada por el comunicador se almacena cifrada siempre.
- Se han utilizado claves de encriptación de mecanismos de clave pública / clave privada que permiten mantener la privacidad entre comunicador y receptor.
- El receptor (órgano gestor del Buzón) tiene su clave privada.
- Cada información que se entra al Buzón abre un caso y se entrega un número único que sirve como elemento de comunicación del caso concreto.
- No se hace de registro _(log)_ de comunicaciones al servidor de aplicación del buzón ético, con el fin de garantizar el anonimato del informador.
- Las notificaciones en los Receptores para|por nuevas informaciones, o nuevos datos de una información existente, se hacen por correo cifrado vía correo corporativo interno.

El receptor dispone de manuales de metodología de trabajo seguro.

El Ayuntamiento dispone de procedimiento de custodia de claves, para garantizar la recuperación de los documentos bajo procedimiento reglado (contingencia en caso de pérdida de claves).

El Ayuntamiento ofrece protección del puesto de trabajo corporativo (incluye antivirus y encriptación).


### Protección de la infraestructura

Se facilita el acceso anónimo de los comunicadores al Buzón a través del navegador TOR.
- La red TOR y su navegador es un software gratuito y de código abierto

La aplicación está hospedada en el cloud privado del Ayuntamiento, en un segmento especial y aislado de la red corporativa.

Definido en dos zonas:
- Internet por acceso de los comunicadores.
- Intranet para|por receptores y administradores.

Los servidores se han bastionado (protección específica de las configuraciones de los sistemas y productos) para evitar ataques.

La información adjuntada por el comunicador esta siempre cifrada en el servidor mediante Claves PGP para evitar cualquier acceso no deseado, incluso el de posibles administradores de sistemas.

Se ha realizado test de _hacking_ ético por testear la infraestructura.


### Perfiles de usuarios del Buzón

Comunicador
- Es quién comunica los casos.

Receptor
- Órgano gestor del Buzón.
- Es lo único que puede recibir los casos.
- La información está cifrada y sólo con su clave privada se puede descifrar.

Administrador funcional:
- Define a los usuarios de perfil receptor.
- No tiene acceso a los casos.
- Todas las acciones quedan registradas.

Administrador de sistemas:
- Mantiene el software, monitoriza el sistema, hace copias de seguridad.
- No puede leer la información sensible, ya que está cifrada.

Auditor del Administrador funcional:
- Revisa las acciones del administrador
- Revisa la creación y la activación/desactivación de los usuarios
- Registra las incidencias que se puedan producir

### Comunicador: Como introducir un caso

Acceso:  [barcelona.cat/bustiaetica](https://ajuntament.barcelona.cat/bustiaetica/es)

- Desde el pie de cualquier página de la web se puede acceder a la aplicación de envío y consulta del caso en un clic.
- Permite un acceso anónimo con el navegador TOR.
- Hay que exponer el caso en una ficha.
- Se pueden adjuntar documentos que quedan cifrados en el buzón.
- Hay que conservar el identificador del caso, para poder consultar la respuesta del Ayuntamiento y/o aportar más información y/o documentación.



### Comunicador: Como acceder al caso

Acceso:  [barcelona.cat/bustiaetica](https://ajuntament.barcelona.cat/bustiaetica/es)

- Desde el pie de cualquier página de la web se puede acceder a la aplicación para consultar el caso.
- Introduce el identificador del caso (código numérico de acceso), para poder consultar la respuesta del ayuntamiento y/o aportar más información a través de mensajes o de nuevos documentos.


### Receptor: cómo consulta y trata la comunicación

El receptor recibe un aviso (vía un correo interno cifrado) de que hay una comunicación nueva o que se ha aportado más información.

Accede a la comunicación (por|para una dirección interna sólo accesible desde la red interna del Ayuntamiento):
- Ve la ficha resumen.
- Puede descargar todo el caso: ficha y documentos adjuntos.
- La documentación se descarga cifrada.
- Los documentos se descifran sólo con su clave privada

Hace tratamiento:
- Análisis de la comunicación: estudio de admisión y comprobaciones.
- Devuelve respuesta al comunicador a través de mensajes. Puede pedir más información.
- Adjunta documentos de respuesta firmados digitalmente, si es necesario.
- El receptor no puede borrar ninguna comunicación.

### Más información

- Para más información sobre el lanzamiento del Buzón, consultad la [Nota de prensa](http://ajuntament.barcelona.cat/premsa/2017/01/19/barcelona-activa-la-seva-bustia-etica-una-eina-de-bon-govern-pionera-en-la-prevencio-contra-la-corrupcio/) de la presentación del Buzón.

- Para más información sobre el funcionamiento y el marco regulador, consultad la [web informativo del Buzón](https://ajuntament.barcelona.cat/bustiaetica/es)

- Otras herramientas usadas fuera de Globaleaks para el tratamiento posterior de la información:
- GPG4WIN para encriptar/desencriptar
- Navegador TOR
- Bitlocker para el cifrado del disco duro

-------------------------------------------------------------------------------------------------------------------------


## 5. Instalación

En este repositorio se incluye el detalle de la configuración usada por el Buzón, y se adjuntan todos los ficheros de código desarrollados.
- Consultar el detalle en el fichero [INSTALL_es.md](INSTALL_es.md)


-------------------------------------------------------------------------------------------------------------------------

## 6. Datos de contacto

Para consultas técnicas de instalación y configuración:
- Joan Bitlloch <jbitlloch@bcn.cat>
- Dirección de Desarrollo del Instituto Municipal de Informática, Ayuntamiento de Barcelona


-------------------------------------------------------------------------------------------------------------------------
