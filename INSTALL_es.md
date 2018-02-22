# _Instalación_ - Buzón Ético y de Buen Gobierno

1. Instalación de Globaleaks
2. Configuración opciones del Buzón
3. Configuración de los cuestionarios del Buzón
4. Configuración de traducciones específicas 
5. Configuración del tema visual 
6. Activar la funcionalidad de adjuntar ficheros para el comunicador

----

## 1. Instalación de Globaleaks

Con el fin de llevar a cabo la instalación del Buzón Ético, el primer paso es el de instalar Globaleaks, según la propia documentación de su repositori. Se recomienda instalar la última versión estable (el instalador genérico ya lo hace por defecto).
También se puede instalar una versión específica si, por ejemplo, queremos alinear dos entornos (como por ejemplo desarrollo y producción).

Documentación Globaleaks:
- [GlobaLeaks Documentation](https://globaleaks.readthedocs.io/en/latest/)

### Instalación

Aparte de [revisar los requerimientos técnicos](https://globaleaks.readthedocs.io/en/latest/TechnicalRequirements.html), y las diferentes opciones de configuración del servidor, la instalación en términos generales es bastante sencilla:
- [instalación de sistema](https://globaleaks.readthedocs.io/en/latest/InstallationGuide.html)
  - descarga del script de instalación (_install-globaleaks.sh_) desde el repositorio oficial
  - ejecutar el script
  - anotar las URLs de acceso, que se proporcionan una vez instalado

- ejecutar el [asistente de configuración](https://globaleaks.readthedocs.io/en/latest/ConfigurationGuide.html)
  - abrir la URL dada durante la instalación en un navegador
  - escoge idioma del asistente
  - nombre y descripción de la iniciativa
  - aceptar el perfil por defecto
  - alta credenciales administrador (admin): mail y password
  - nombre del contexto
  - alta credenciales de un destinatario: nombre, mail, password
  - aceptar acuerdo de licencia

### Consideraciones de la arquitectura

Se proponen varios aspectos a tener en cuenta, desde el punto de vista del Buzón de Correo del Ayuntamiento de Barcelona:
- Se recomienda la instalación del servicio de Buzón Ético en una red aislada del resto de servidores corporativos, haciendo uso de (al menos) dos capas diferenciadas:
	- Frontal Web (_proxy invers_)
	- Aplicación (_proxy_ inverso + Globaleaks)
- Entre el comunicador y la capa web, así como entre la capa web y la capa de aplicación tendría que haber diferentes niveles de cortafuegos para garantizar la seguridad controlando el tráfico que puede llegar a la aplicación, y a las máquinas donde está instalada.
- Las comunicaciones van por https de extremo a extremo, para eso se han utilizado servidores configurados como proxy inverso con certificados: Uno en la capa web y otro en la capa Aplicación.
- Aunque Globaleaks es una única aplicación, en la capa _Frontal Web_ se han introducido reglas para separar y aislar el acceso de los comunicadores y el acceso de los receptores como si fueran dos aplicaciones aisladas:
	- Se ha prohibido el acceso del comunicador al contexto del administrador (_/authentication_)
	- Se ha permitido el acceso de los receptores sólo desde dentro de la red corporativa
- Hay que tener en cuenta que por defecto Globaleaks se publica como servicio dentro de la red TORO. Para deshabilitarlo, se configura a los scripts de configuración.

---

## 2. Configuración opciones del Buzón
A continuación se indican las configuraciones adoptadas en el Buzón.

_En el fichero [README.md](README.md) podéis encontrar la descripción de los rasgos|tiros diferenciales del Buzón de Correo, que es útil para entender los valores escogidos en esta configuración_

### Requisitos previos
Hace falta que hayamos acabado la instalación y ejecutado el asistente.

Hace falta que estemos identificados dentro de la web de administración ( _http://xx.xx.xx.xx/#/login_ ).

### Idiomas disponibles: _Configuración General > Idiomas_
Hace falta que marquemos los idiomas en los cuales traduciremos el Buzón de Correo de cara a los usuarios.

El Buzón de Correo Ético tiene el catalán y el castellano. Si marcamos más de uno, aparecerá encima a la derecha uno desplegable de idiomas. Para configurar las opciones del buzón de correo en lo referente a cada uno de los idiomas, tendremos que ir cambiando el idioma de la interfaz.

### Textos del Buzón: _Configuración General > Configuración Principal_
Traducció:
En esta opción del menú, se lleva a cabo la configuración de los textos personalizados del Buzón de Correo.

Para entrar la información de los diferentes idiomas, hace falta que cambiemos el idioma correspondiente. Por ejemplo, para introducir los literales en catalán, hay que tener la interfaz en catalán. Desprendido seleccionamos el castellano, y podremos cambiar los literales en castellano.

#### Català
Detall de la configuració de cada una de les opcions d'aquesta secció:


| paràmetre | valor |
| --------------- | -------------- |
| Nom de la iniciativa | Bústia Ètica i de Bon Govern |
| Títol de la pàgina d'inici | Oficina per a la Transparència i les Bones Pràctiques |
| Presentació | Canal segur de participació per enfortir la integritat del sector públic |
| Descripció | Si heu detectat una mala praxi i podeu aportar proves respecte d'això, envieu la informació a través d'aquest canal. |
| Peu de pàgina | Ajuntament de Barcelona Amb la col•laboració d'X-NET |
| Pàgina d'aterratge  | _(selecció de :   “pàgina d’inici”)_ |
| Pregunta per sol•licitar possibles informadors  | Utilitzant l'aplicació podreu fer que s'investigui el cas i s'actuï per millorar la integritat del sector públic. Assegureu-vos de conèixer l'àmbit d'actuació i les eines d'anonimat. |
| Botó de l'informador  | INICI DE LA COMUNICACIÓ |
| Text que apareix perquè els informadors entrin a la plataforma | Si voleu consultar l'estat de tramitació o aportar més informació sobre una comunicació anterior, introduïu el codi alfanumèric d'accés: |
| Títol de la pàgina de l'entrega | Bústia Ètica i de Bon Govern |
| Títol de la pàgina de la confirmació de la recepció | Bústia Ètica i de Bon Govern |
| Títol de la pàgina de l'estatus de l'entrega | Estat de la Comunicació - Bústia Ètica i de Bon Govern |
| Títol del widget dels comentaris | Comunicació amb l'òrgan gestor de la bústia |
| Títol del widget dels missatges | Descripció inicial |
| Títol del widget dels adjunts | Documentació aportada |
| El text es mostra a sobre de la interfície per seleccionar els contextos | _(en blanc)_ |
| Mostra contextos en ordre alfabètic: | _(NO)_ |
| Tipus de selector de context: | _ (seleccionat:  “llista”)_ |
| Tor Onion Services (URL) | _(en blanc)_ |
| Lloc web HTTPS (URL) | _(aquí cal especificar l'adreça interna de gestió de continguts. En el cas de la Bústia de l'Ajuntament és una adreça interna de la xarxa corporativa, no accessible des d'internet, amb un domini diferenciat)_ |
| enllaç de descàrrega del navegador TOR  | https://www.torproject.org/download/download |


---

#### Castellà

| paràmetre | valor |
| --------------- | -------------- |
| Nombre de la iniciativa | Bústia Ètica i de Bon Govern |
| Título de la página principal | Oficina para la Transparencia y las Buenas Prácticas |
| Presentación | Canal seguro de participación para fortalecer la integridad del sector público |
| Descripción | Si has detectado una mala praxis y puedes aportar pruebas al respecto, envía la información a través de este canal. |
| Pie de página | Ayuntamiento de Barcelona, con la colaboración de Xnet |
| Página de inicio | _(Selecció de: “pagina principal”)_ |
| Pregunta a formular a posibles informantes | Utilizando la aplicación podrás hacer que se investigue el caso y se actúe para mejorar la integridad del sector público. Asegúrate de conocer el ámbito de actuación y las herramientas de anonimato. |
| Botón de aporte de información  | INICIO DE LA COMUNICACIÓN |
| Texto del requerimiento a los informantes para iniciar sesión | Si quieres consultar el estado de tramitación o aportar más información sobre una comunicación anterior, introduce el código alfanumérico de acceso: |
| Título de la página de entrega | Buzón Ético y de Buen Gobierno |
| Título de la página de recibo | Buzón Ético y de Buen Gobierno |
| Título de la página de estado de la entrega | Estado de la comunicación - Buzón Ético y de Buen Gobierno |
| Título del indicador de comentarios | Comunicación con el órgano gestor del buzón |
| Título del indicador de mensajes | Descripción inicial |
| Título del indicador de adjuntos | Documentación aportada |
| Texto mostrado en la parte superior de la interfaz para seleccionar contextos |  _(en blanc)_ |
| Mostrar contextos por orden alfabético | _(desactivat)_ |
| Selector de tipo de contexto:  |  _(Seleccionat:  “llista”)_ |
| Servicio Tor onion (URL) | _(en blanc)_ |
| Sitio web HTTPS (URL)  |  _(aquí indiquem la URL interna de la xarxa corporativa)_ |
| Enlace de descarga del Navegador Tor  | https://www.torproject.org/download/download |

---

### Paràmetres del sistema:  _Configuració avançada > Configuració principal_
Per cada opció, s'indica si està activada (SI) o desactivada (NO), o bé si és un camp de text el valor que s'ha especificat. En negreta marcats els que no són valors per defecte:

| valor | paràmetre |
| ---------- | ------------ |
| NO | Deshabilita els enviaments |
| **NO** | **Habilita configuració insegura sense xifrat PGP** |
| NO | Deshabilita els missatges que adverteixen de la manca de xifratge |
| NO | Permet que altres webs incloguin la plataforma a l'interior d'Iframes |
| NO | Permet que els destinataris posposin la caducitat del lliurament |
| NO | Permet que els destinataris esborrin els lliuraments |
| NO | Permet als destinataris concedir permisos als informadors sobre determinats enviaments |
| **NO** | **Habilita els motors de cerca d'indexació** |
| **SI** | **Habilita distintiu personalitzat de privacitat (Habilitat)** |
| _(en blanc)_ | Tauler de privacitat del client (El text es mostra quan l'informador fa servir Tor) |
| **"Si no vols deixar el rastre de l’adreça IP i vols navegar de manera anònima, utilitza el navegador TOR"** | **Tauler de privacitat del client (El text es mostra quan l'informador no fa servir Tor):** |
| NO | Deshabilita el distintiu de privacitat |
| "Atenció! No ets anònim." | Títol del tauler de conscienciació de la seguretat: |
| "Enviar lliuraments mitjançant HTTPS exposa ...." | Text del tauler de conscienciació de la seguretat: |
| **SI** | **Deshabilita les preguntes del distintiu de conscienciació de seguretat** |
| **SI** | **Deshabilita el distintiu de conscienciació de seguretat** |
| **SI** | **Deshabilita el toc del codi d'accés** |
| **SI** | **Deshabilita el tauler de donació** |
| SI | Activa el mecanisme CAPTCHA |
| SI | Activa el mecanisme de prova de funcionament |
| NO | Activa l'accés simplificat per als destinataris |
| 128 | Límit per a la informació introduïda d'una única línia, en caràcters |
| 4096 | Límit per a la informació introduïda de diverses línies, en caràcters |
| 30 |  Límit de mida per als arxius adjunts en megabytes  |
| **180** |  **Quantitat de dies fins a l'accés dels informadors expira: **   |
| **_(es recomana posar una de pròpia diferent de 'globaleaks')_** | **Contrasenya de l'usuari per defecte** |
| NO | Activa l'autenticació bàsica d'HTTP per limitar l'accés a la plataforma |
| NO | Activa els trets experimentals |

---

## 3. Configuración de los cuestionarios del Buzón: _Configuración de Cuestionarios_
En este apartado se detalla la configuración adoptada por el cuestionario que se mostrará al comunicador, incluyendo todos los textos en catalán y castellano.

Se aconseja la importación automática del formulario, dado que configurarlo a mano es bastante trabajo:
para importar el cuestionario:
    - acceder al menú _Configuración de Cuestionarios > Configuración de Cuestionarios_
    - Clicar IMPORTAR, y seleccionar el fichero [Qüestionari Bústia Ètica i de Bon Govern.json](questionnaire) del repositorio

para configurar el contexto:
    - acceder al menú _Configuración de Contextos_
    - Clicar en _EDITAR_ el contexto
    - en el desplegable de cuestionarios, seleccionar el cuestionario de la Buzón Ético
    - configurar parámetros (como mínimo): 
    	- ajustar tiempo de caducidad
	- marcar los usuarios receptores (si no tenemos ahora usuarios, se tandrá que volver después a añadirlos)
	- marcar la opción "Permitir a los receptores cargar archivos para los informadores"
	- revisar los otros valores por defecto, por si queremos cambiar alguno
    - guardar

Además, se detalla a continuación el contenido de esta configuración:

### Cuestionario Buzón Ético y de Buen Gobierno

#### catalàn
<pre>
Passos configurats:
    (1) Descripció
      Preguntes preconfigurades:
        -Assumpte
            Tipus: Entrada de text d'una sola línia
            Requerit: SI
            Vista prèvia: SI
        -Descripció
            Tipus: Entrada de text de múltiples línies
            Requerit: SI
            Descripció: 
        -Fitxers
            Tipus: Adjunt
            Descripció: Les extensions admeses són: .pdf, .txt, -rtf, .doc, .docx, .odt, .xls, .ods, .gif, .tiff, .jpg, .jpeg i .zip. Per garantir l'anonimat, esborreu les metadades del fitxer.

    (2) Identificació
      Descripció:
                ● Si preferiu no identificar-vos, no ompliu aquests camps i aneu al pas següent.
                ● Si us identifiqueu, d’acord amb la Llei orgànica 15/1999, de 13 de desembre, de protecció de dades de caràcter personal, us informem que les vostres dades personals s’incorporaran al fitxer "Comunicacions de la Bústia Ètica i de Bon Govern de l’Ajuntament de Barcelona", amb la finalitat de gestionar les comunicacions a la Bústia Ètica i de Bon Govern i d'atenció al públic. Les vostres dades només se cediran quan siguin requerides pels jutjats i tribunals en exercici de la seva funció jurisdiccional o per la Fiscalia en exercici de les facultats d'investigació. Consentiu expressament el tractament de les vostres dades per a la finalitat indicada. Podeu exercitar els drets d’accés, rectificació, cancel·lació i oposició, adreçant-vos per escrit al Registre General de l’Ajuntament (plaça de Sant Jaume, 1, 08002 Barcelona), i indicar clarament a l’assumpte "Exercici de dret LOPD".   
      Preguntes preconfigurades:
        -Nom i Cognom
            Tipus: Entrada de text d'una sola línia
        -NIF o número de passaport
            Tipus: Entrada de text d'una sola línia
        -Adreça Electrònica
            Tipus: Entrada de text d'una sola línia
            Validació de la informació d'entrada:  Adreça electrònica
        -Telèfon
            Tipus: Entrada de text d'una sola línia

    (3) Condicions i Regles d'Ús
      Descripció: 
            ● La presentació de comunicacions a la bústia implica acceptar les seves normes reguladores disponibles al peu de pàgina,  aprovades per acord de la Comissió de Govern de 6 d'octubre de 2016, especialment les condicions d'ús.
            ● La persona que fa la comunicació és responsable de l’ús incorrecte de la bústia ètica i del contingut de les comunicacions formulades. L'Ajuntament de Barcelona restarà exempt de tota responsabilitat. 
            ● No es poden formular comunicacions amb una finalitat diferent de la prevista a les normes reguladores de la bústia, que vulnerin els drets fonamentals a l’honor, a la imatge i a la intimitat personal i familiar de terceres persones, que siguin contràries a la dignitat de la persona o que lesionin la legislació de protecció de dades de caràcter personal. 
            ● En cas de litigi entre la persona que fa la comunicació i terceres persones, l’Ajuntament restarà exempt de qualsevol reclamació, demanda o dany de qualsevol naturalesa relacionats amb el litigi. 
             ● Les comunicacions no comporten, en cap cas, la formulació d'un recurs administratiu, ni l'exercici de qualsevol acció o reclamació a la qual tinguin dret les persones que les formulen. 
             ● Les recomanacions formulades per l'òrgan gestor de la bústia són tràmits no qualificats i no són recurribles. Les recomanacions tenen per finalitat millorar la gestió pública, no declaren l'existència de responsabilitat ni de vulneració de l'ordenament jurídic.
              ● L’òrgan gestor de la bústia podrà requerir qualsevol altra informació que pugui tenir qui la presenti. L’Ajuntament no està obligat a retornar la documentació que es pugui presentar amb la comunicació.

    (4) Acceptació      
      Preguntes preconfigurades:
        -Validació
            Tipus: Condicions del servei
            Descripció: Per tramitar la comunicació cal acceptar les condicions i regles d'ús de la bústia.
            Requerit: SI
            Text de l'acord:  En marcar aquesta casella, accepteu les condicions i regles d'ús de la Bústia Ètica i de Bon Govern.
</pre>

#### castellano
<pre>
(1)Descripción
    -Asunto
    -Descripción
    -Ficheros

(2)Identificación
    Descripción:  
            ● Si prefieres no identificarte, no rellenes estos campos y ve al paso siguiente.
            ● Si te identificas, de acuerdo con la Ley Orgánica 15/1999, de 13 de diciembre, de protección de datos de carácter personal, te informamos de que tus datos personales se incorporarán al fichero "Comunicaciones del Buzón Ético y de Buen Gobierno del Ayuntamiento de Barcelona ", con el fin de gestionar las comunicaciones en el Buzón Ético y de Buen Gobierno y de atención al público. Tus datos sólo se cederán cuando sean requeridos por los juzgados y tribunales en ejercicio de su función jurisdiccional o por la Fiscalía en ejercicio de las facultades de investigación. Consientes expresamente el tratamiento de tus datos para la finalidad indicada. Puedes ejercitar los derechos de acceso, rectificación, cancelación y oposición, dirigiéndote por escrito al Registro General del Ayuntamiento (plaza de Sant Jaume, 1, 08002 Barcelona), indicando claramente en el asunto "Ejercicio de derecho LOPD".​
    -Nombre y Apellido
    -NIF o número de pasaporte
    -Dirección electrónica
    -Teléfono

(3)Condiciones y Reglas de uso
            ● La presentación de comunicaciones en el buzón implica aceptar sus normas reguladoras disponibles en el pie de página, aprobadas por acuerdo de la Comisión de Gobierno de 6 de octubre de 2016, especialmente las condiciones de uso. 
            ● La persona que hace la comunicación es responsable del uso incorrecto del buzón ético y del contenido de las comunicaciones formuladas. El Ayuntamiento de Barcelona quedará exento de toda responsabilidad. 
            ● No se pueden formular comunicaciones con una finalidad diferente de la prevista a las normas reguladoras del buzón, que vulneren los derechos fundamentales al honor, a la imagen y a la intimidad personal y familiar de terceras personas, que sean contrarias a la dignidad de la persona o que lesionen la legislación de protección de datos de carácter personal. 
            ● En caso de litigio entre la persona que realiza la comunicación y terceras personas, el Ayuntamiento quedará exento de cualquier reclamación, demanda o daño de cualquier naturaleza relacionados con el litigio. 
            ● Las comunicaciones no comportan, en ningún caso, la formulación de un recurso administrativo ni el ejercicio de cualquier acción o reclamación a la que tengan derecho las personas que las formulan. 
            ● Las recomendaciones formuladas por el órgano gestor del buzón son trámites no cualificados y no son recurribles. Las recomendaciones tienen como objetivo mejorar la gestión pública, no declaran la existencia de responsabilidad ni de vulneración del ordenamiento jurídico.
            ● El órgano gestor del buzón podrá requerir cualquier otra información que pueda tener quien la presente. El Ayuntamiento no está obligado a devolver la documentación que se pueda presentar con la comunicación.

(4)Aceptación
    -Validación
        Descripción:  Para tramitar la comunicación hay que aceptar las condiciones y reglas de uso del buzón.
        Texto del acuerdo:  Al marcar esta casilla, aceptas las condiciones y reglas de uso del Buzón Ético y de Buen Gobierno.
</pre>

---

## 4. Configuración de traducciones específicas: _Configuración General > Personalización del texto_
El producto globaleaks permite adaptar los literales de la aplicación a las necesidades del proyecto.

Se detalla en este apartado los mensajes traducidos específicamente, para adaptar al vocabulario concreto del Buzón Ético.

### Catalàn 

| Text original | Traducció original | Traducció personalitzada |
| ------------- | ------------------ | ------------------------ |
| We do not discriminate based on race and gender, but we do against computers :) | No discriminem per raça ni sexe, però sí si ets un ordinador :-) | Demostra que no ets un robot. |
| Hint | Suggeriment | Suggeriment: |
| Submission errors | Manca informació en els següents passos | Manca informació en els següents passos: |
| Comments | Comentaris | Comunicació amb l’agent |
| Questionnaire answers | Respostes del qüestionari | Descripció inicial |
| Blow the whistle | Delata l'informador | INICI DE LA COMUNICACIÓ |
| I've solved the math challenge, hide this thing now! | Ja he solucionat el repte matemàtic, amaga això ara mateix! | Fet |
| Use the 16 digit key code to log in. It will allow you to view any messages we sent you, and also to add extra info. | Fes servir el codi de 16 dígits per entrar i veure els missatges que t'enviem o si creus que hauries d'haver afegit algun altre fitxer. | L'òrgan gestor de la bústia utilitzarà, de manera prioritària, aquest canal segur, i garantirà l'anonimat i la confidencialitat de les comunicacions. |
| Are you sure? | N'estàs segur? | |
| Errors in this step | Els següents camps no s’han omplert correctament: | Els següents camps no s’han omplert correctament: |
| Upload completed successfully! | La càrrega s'ha completat satisfactòriament! | La càrrega s'ha completat satisfactòriament. |
| Whistleblower | Informador | Comunicador |
| The key code is either invalid or the submission has expired. | El codi és invàlid o l'enviament ha expirat. | El codi alfanumèric és invàlid. |
| The following steps have errors: | Els passos següents tenen errors:  | |
| Logout | Tanca sessió | Surt |
| View your submission | Mira el teu enviament | Accedeix a la comunicació |
| We will try to get back to you as soon as possible! | Intentarem tornar amb tu al més aviat possible! | Cal conservar aquest codi de setze dígits per: - Accedir a la comunicació. - Comunicar-se amb l'òrgan gestor de la bústia i consultar els missatges rebuts. - Afegir fitxers o informació addicional. - Conèixer l'estat de tramitació de la comunicació. |
| Example: | Exemple: | Podeu fer ús d'aquest exemple: |
| Attached files for the whistleblower | Els arxius adjunts per al informador | Els arxius adjunts per al comunicador |
| Your submission was successful. | El teu lliurament s'ha efectuat amb èxit. |La informació s'ha rebut correctament. Conserveu el codi per fer el seguiment de la comunicació. |
| Please review the following information and decide if you wish to proceed. | Per favor, revisi la següent informació i decideixi si vol continuar.  | Per favor, revisi la següent informació abans de continuar. |
| Remember your key code for this submission. | Recorda el teu codi per a aquest enviament. | El codi per aquest enviament és: |
| These files have been attached to your submission by the recipients. | Aquests arxius s'han adjuntat al seu enviament per el receptor | El receptor adjunta aquests arxius a la comunicació. |
| A useful way to hide your key code is to write it down like a credit card number, i.e. by also including an expiration date. | Un manera útil de recordar el codi és escriure'l com si fos el número d'una targeta de crèdit. A més, també pots incloure la data de caducitat. | Una manera útil de recordar el codi és escriure'l com si fos el número d'una targeta de crèdit. |
| The name of the file and its content can be intentionally misleading. | El nom de l'arxiu i el seu contingut pot ser intencionalment enganyós. |  |
| please enter a valid email address. | si us plau, introdueix una adreça electrònica correcta.  | introduïu una adreça electrònica correcta. |
| Log in | Inicia sessió | ACCÉS |
| YOUR NAME | EL TEU NOM | Documentació aportada |
| Files attached by recipients | Arxius adjuntats pels receptors | Documentació generada per l'òrgan gestor de la bústia |
| Cannot log in | El codi clau és invàlid o l'enviament ha expirat. | No es pot accedir |
| Danger | Perill | Atenció |
| The answers to the following questions are either missing or invalid: | Les respostes a les següents preguntes falten o són invàlides: |  |
| Recipient | Destinatari | Receptor |
| Just to prove you are human, please answer the following math challenge: | Per demostrar-nos que ets una persona, si us plau, resol el repte matemàtic següent: | Resol el següent repte matemàtic: |
| This file exceeds the maximum upload size for this server. | Aquest fitxer ultrapassa el pes màxim que es pot pujar al servidor. | Aquest fitxer supera la mida màxima que permet el servidor. |
| Downloading a file with malicious content could compromise your computer or disclose your identity. | La descàrrega d'un arxiu amb contingut maliciós podria posar en perill el seu ordinador o revelar la seva identitat. |  Si vols assegurar al màxim el teu anonimat, descarrega aquest fitxer, analitza’l amb un antivirus actualitzat i obre'l sempre sense connexió a internet. |
| The specified input is not valid: | La informació que has introduït no és vàlida: | La informació que heu introduït no és vàlida:  |

---

### Castellano

| Texto original | Traducción original | Traducción personalizada |
| --------------------------- | --------------------------- | --------------------------- |
| We do not discriminate based on race and gender, but we do against computers :) | No discriminamos por raza, sexo o género, pero si lo hacemos con las computadoras :) | Demuestra que no eres un robot. |
| Hint | Sugerencia | Sugerencia: |
| Submission errors | Falta información en los siguientes pasos: | Falta información en los siguientes pasos: |
| Comments | Comentarios | Comunicación con el agente |
| Questionnaire answers | Respuestas al cuestionario | Descripción inicial |
| Blow the whistle | Aporte información | INICIO DE LA COMUNICACIÓN |
| I've solved the math challenge, hide this thing now! | He resuelto el reto matemático, ¡ahora oculte esta cosa! | Hecho |
| Use the 16 digit key code to log in. It will allow you to view any messages we sent you, and also to add extra info. | Use el código de clave de 16 dígitos para iniciar sesión. Le permitirá ver cualquier mensaje que le enviemos, además de poder añadir información extra para completar. | El órgano gestor del buzón utilizará, de manera prioritaria, este canal seguro, y garantizará el anonimato y la confidencialidad de las comunicaciones. |
| Are you sure? | ¿Está seguro? |  |
| Errors in this step | Errores en este paso | Los siguientes campos no se han rellenado correctamente: |
| Upload completed successfully! | ¡Subida completada con éxito! | La carga se ha completado satisfactoriamente. |
| Whistleblower | Informante | Comunicador |
| The key code is either invalid or the submission has expired. | El código de su clave o bien no es válido o la entrega ha caducado. | El código alfanumérico es inválido. |
| The following steps have errors: | Los siguientes pasos tienen errores: |  |
| Logout | Cerrar sesión | Salir |
| View your submission | Ver su entrega | Accede a la comunicación |
| We will try to get back to you as soon as possible! | ¡Intentaremos contactar con usted tan pronto como sea posible! | Hay que conservar este código de dieciséis dígitos para: - Acceder a la comunicación. - Comunicarse con el órgano gestor del buzón y consultar los mensajes recibidos. - Añadir ficheros o información adicional. - Conocer el estado de tramitación de la comunicación. |
| Example: | Ejemplo: | Podéis hacer uso de este ejemplo: |
| Attached files for the whistleblower | Ficheros adjuntados por el informante | Los ficheros adjuntos para el comunicador |
| Your submission was successful. | ¡Su entrega se completó con éxito! | La información se ha recibido correctamente. Conserva el código para realizar el seguimiento de la comunicación. |
| next step | paso siguiente | Paso siguiente |
| Submission | Entrega | Envío |
| Please review the following information and decide if you wish to proceed. | Por favor, revise la siguiente información y decida si desea continuar. | Por favor, revise la siguiente información antes de continuar |
| Remember your key code for this submission. | Recuerde el código de su clave para esta entrega. | El código para este envío es: |
| These files have been attached to your submission by the recipients. | Estos ficheros han sido adjuntados a su entrega por los receptores. | El receptor adjunta estos archivos a la comunicación. |
| A useful way to hide your key code is to write it down like a credit card number, i.e. by also including an expiration date. | Una forma útil de ocultar el código de su clave es escribirlo como si fuera un número de tarjeta de crédito, es decir, incluyendo también una fecha de caducidad. | Una manera útil de recordar el código es escribirlo como si fuera el número de una tarjeta de crédito. |
| The name of the file and its content can be intentionally misleading. | El nombre del fichero y su contenido pueden ser intencionadamente equívocos. |  |
| please enter a valid email address. | por favor, introduzca una dirección de correo electrónico válida. | introduce una dirección electrónica correcta. |
| Log in | Iniciar sesión | ACCESO |
| YOUR NAME | SU NOMBRE | Documentación aportada |
| Files attached by recipients | Ficheros adjuntados por los destinatarios | Documentación generada por el órgano gestor del buzón |
| Cannot log in | No se pudo iniciar sesión | No se puede acceder  |
| Danger | Peligro | Atención |
| The answers to the following questions are either missing or invalid: | Las respuestas a las siguientes preguntas están ausentes o no son válidas: |  |
| Recipient | Receptor | Receptor |
| Just to prove you are human, please answer the following math challenge: | Tan solo para probar que usted es humano, por favor. responda al siguiente reto matemático: | Resuelve el siguiente reto matemático:  |
| This file exceeds the maximum upload size for this server. | Este fichero excede el tamaño máximo de subida para este servidor. | Este fichero supera la medida máxima que permite el servidor. |
| Downloading a file with malicious content could compromise your computer or disclose your identity. | Descargar un fichero con contenido malicioso podría comprometer su computadora o desvelar su identidad. | Si quieres asegurar al máximo tu anonimato, descarga este archivo, analízalo con un antivirus actualizado y ábrelo siempre sin conexión a internet. |
| The specified input is not valid: | La entrada especificada no es válida: | La información que has introducido no es válida:  |

---

## 5. Configuración del tema visual: _Configuración General > Personalización del tema_
Opciones para personalizar el tema visual: colores, tipos de letra, imágenes.

Dentro del repositorio, se aloja al directorio [theme](theme) se incluye un fichero javascript, un fichero css, y un directorio con varios ficheros estáticos de imágenes y fuentes de letra. Se incluyen todos los ficheros necesarios dentro de Globaleaks de manera que en el consultar la web del Buzón ético no se cargue **ningún recurso externo**.

En el fichero CSS encontramos:
- incorporadas imágenes corporativas, para garantizar la carga
- llamamientos a fuentes, todo autocontenido al directorio estático del propio servidor

En el javascript hay, entre otros:
- personalización de textos, para incluir texto rico
- lógica de carga de la barra corporativa
- arregla la URL si se intenta entrar para gestionar, o si no se pone el idioma

Ficheros estáticos de imágenes y fuentes de letra:
- Imágenes:
	- bustia_etica_icona_aplicacio_140x140.png
	- Menys.png
	- Mes.png
- Fuentes de letra:
	- Las fuentes de letra tienen la suya propia [llicència Open Font](theme/static-files/LICENSE).
	- SourceSansPro-Bold.eot 
	- SourceSansPro-Bold.otf
	- SourceSansPro-Bold.otf.woff
	- SourceSansPro-Bold.ttf
	- SourceSansPro-Bold.ttf.woff2
	- SourceSansPro-It.eot
	- SourceSansPro-It.otf
	- SourceSansPro-It.otf.woff
	- SourceSansPro-It.ttf
	- SourceSansPro-It.ttf.woff2
	- SourceSansPro-LightIt.eot
	- SourceSansPro-LightIt.otf
	- SourceSansPro-LightIt.otf.woff
	- SourceSansPro-LightIt.ttf
	- SourceSansPro-LightIt.ttf.woff2
	- SourceSansPro-Regular.eot
	- SourceSansPro-Regular.otf
	- SourceSansPro-Regular.otf.woff
	- SourceSansPro-Regular.ttf
	- SourceSansPro-Regular.ttf.woff2
	- SourceSansPro-Semibold.eot
	- SourceSansPro-Semibold.otf
	- SourceSansPro-Semibold.otf.woff
	- SourceSansPro-Semibold.ttf.woff2

Para más información
- Documentación Globaleaks sobre la personalización del tema:  [Customization guide](https://github.com/globaleaks/GlobaLeaks/wiki/Customization-guide)

---

## 6. Activar la funcionalidad de adjuntar ficheros para el comunicador
El Ayuntamiento, para requerimientos de la _Bústia ètica_, ha desarrollado una nueva funcionalidad que permite al receptor adjuntar ficheros al caso, a fin de que el comunicador se los pueda descargar de forma anónima.

la funcionalidad permite:
- se puede activar/desactivar, según si se quiere utilizar
- permite adjuntar un fichero y una descripción por parte del receptor
- este fichero no se encripta
- el enlace en el fichero aparece en la página de detalle de comunicación, desde donde el comunicador lo puede descargar
- el fichero no caduca, y se puede descargar múltiples veces
- el receptor puede consultar el número de veces que se ha descargado el fichero, para saber si se lo han descargado

El desarrollo se ha incorporado al propio repositorio de Globaleaks, con el fin de que sea código abierto y se puedan beneficiar otros buzones.

Por defecto, este desarrollo viene desactivado.

Pasos para activar subir ficheros por parte del receptor:
- acceder al menú: _configuración de contextos > "Editar"_
- clicar el botón _+Configuració Avançada_
- marcar la opción " Permitir a los receptores cargar archivos para los informadores"

----
