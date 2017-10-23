# _Llegeix-me_ - Bústia Ètica i de Bon Govern

1. Llicència de la Bústia Ètica i de Bon Govern
2. Trets característics de la Bústia ètica i de Bon Govern
3. Aportacions de Xnet i Ajuntament de Barcelona a Globaleaks
4. Introducció a la Bústia Ètica i de Bon Govern: Funcionament i Seguretat
5. Instal·lació i configuració
6. Dades de contacte


-------------------------------------------------------------------------------------------------------------------------

## 1. Llicència de la Bústia Ètica i de Bon Govern

La [Bústia Ètica i de Bon Govern](https://ajuntament.barcelona.cat/bustiaetica/ca) és un canal segur que permet la participació anònima de la ciutadania per conèixer qualsevol acció o omissió contrària als principis del bon govern i així reforçar la gestió pública.

Proposada i creada per l'organització independent [Xnet](https://xnet-x.net/ca/), ha estat desenvolupada i implementada per l'[Ajuntament de Barcelona](http://www.barcelona.cat/ca/) com a extensió del programari [Globaleaks](https://www.globaleaks.org/), desenvolupat per el _[Hermes Center for Transparency and Digital Human Rights](https://www.hermescenter.org/)_.

El seu codi és lliure, modificable i replicable sempre que es reconegui i indiqui expressament l'autoria en parts iguals de Xnet i l'Ajuntament de Barcelona, indicant la següent frase textual al peu de pàgina: "Eina creada per [Xnet](https://xnet-x.net/ca/) i [Ajuntament de Barcelona](http://www.barcelona.cat/ca/). Powered by [Globaleaks](https://www.globaleaks.org/)"

L'ús del codi de l'aplicació Globaleaks està sota les condicions de la [llicència utilitzada per la mateixa](https://github.com/globaleaks/GlobaLeaks/blob/master/LICENSE).



-------------------------------------------------------------------------------------------------------------------------

## 2. Trets característics de la Bústia ètica i de Bon Govern

La _Bústia ètica i de Bon Govern_ està basada en el programari _Globaleaks_, i per a la seva implementació al sector públic s'han pres les següents decisions:

- Permet l'anonimat del comunicador
	- És accessible des d’un domini d’internet públic, no exclusiu dins de la xarxa TOR
	- Permet l'accés del comunicador tant des del navegador [TOR](https://www.torproject.org/) com també des d'una connexió internet normal
	- Opcionalment, el comunicador pot donar les seves dades. Es poden comunicar informacions sense identificar-se en absolut. 
- s'utilitza una terminologia pròpia: comunicador, receptor, comunicació
- segons les [normes reguladores](https://ajuntament.barcelona.cat/bustiaetica/ca/normes-reguladores) , es dóna una resposta formal al comunicador, i per tant ha calgut incorporar la funcionalitat (no existent anteriorment a Globaleaks) de retornar un document oficial signat com a resposta a la comunicació
- es defineixen uns rols diferenciats de gestió per assegurar la segregació de funcions i l'auditabilitat: administrador de sistema, administrador de globaleaks, auditor de l'administrador de globaleaks, i receptor (es descriuen més endavant).
	- s'incorpora la figura de l'auditor de seguretat, que audita els usuaris del sistema i la seva utilització
	- no es permet als receptors d'esborrar els casos, a fi d'assegurar una traçabilitat amb el gestor d'expedients
- la infraestructura es desplega al _cloud privat_ intern de l'[Institut Municipal d'Informàtica](http://ajuntament.barcelona.cat/imi/ca)
	- servidors dedicats
	- segment de xarxa específic, aïllat de la resta de xarxes corporatives
	- separada en 3 capes , en comptes de tenir tota la instal·lació en un sol servidor com proposa la instal·lació per defecte
	- comunicadors es poden connectar amb navegador TOR a aquest segment
	- receptors només poden accedir des de la xarxa corporativa (via https): s'ha diferenciat l'accés via _proxy_ intermedi, donat que globaleaks preveu només un únic punt d'entrada per comunicador i receptor.

-------------------------------------------------------------------------------------------------------------------------

## 3. Aportacions de Xnet i Ajuntament de Barcelona a Globaleaks

llista de les funcionalitats i de les millores implementades a la Bústia:

- configuració adaptada a les especificitats del sector públic _(es pot consultar al document [INSTALL](INSTALL.md)_
- desenvolupament d'una nova funcionalitat que permet al receptor adjuntar fitxers de resolució, que podrà descarregar el comunicador de forma anònima _(incorporat al repositori de Globaleaks, a partir de la versió 2.65.0)_
- creació d'una imatge gràfica més moderna, reestructuració d'alguns continguts per millorar la comprensió, formatació d'alguns textos per millorar la lectura _(fitxers js, css, i miniatures d'imatge)_
- traduccions al català:
	- de la interfície de globaleaks: [literals de l'aplicació](https://www.transifex.com/otf/globaleaks/)
	- del web del projecte: [globaleaks.org/ca/](https://www.globaleaks.org/ca/)	(_pendent de publicació_)
- nomenclatura pròpia: adaptacions de traduccions dins el producte
- configuració qüestionaris que respectin la normativa vigent (LOPD). Construcció d'un fitxer de configuració importable per a la ràpida creació del qüestionari _(fitxer importable json proporcionat en aquest repositori)_
- detecció i correcció d'[errors del producte](https://github.com/globaleaks/GlobaLeaks/issues?utf8=%E2%9C%93&q=label%3A%22X%3A%20MH96DX%22%20)


_En aquest projecte es proporciona tot el detall de la configuració usada, i s'inclouen tots els desenvolupaments realitzats, per tal que es puguin usar en d'altres bústies, sempre d'acord amb la [llicència d'ús](LICENSE)._ 

-------------------------------------------------------------------------------------------------------------------------

## 4. Introducció a la Bústia Ètica i de Bon Govern: Funcionament i Seguretat
En aquest apartat es fa una **descripció del funcionament** de la Bústia, i dels **requeriments generals de seguretat** que s'hi han aplicat.


**La Bústia és un canal segur de comunicació electrònica bidireccional i asíncrona, que garanteix la confidencialitat i permet l'anonimat de les informacions.**

### Alta Confidencialitat

La informació es tracta amb classificació 'Molt Crítica' i LOPD nivell ALT (ALTA CONFIDENCIALITAT):
- Les comunicacions de dades són xifrades extrem a extrem mitjançant protocol HTTPS.
- La informació lliurada pel comunicador s'emmagatzema xifrada sempre. 
- S'han emprat claus de xifratge de mecanismes de clau pública / clau privada que permeten mantenir la privacitat entre comunicador i receptor.
- El receptor (òrgan gestor de la Bústia) té la seva clau privada.
- Cada informació que s'entra a la Bústia obre un cas i es lliura un número únic que serveix com a element de comunicació del cas concret. 
- No es fa de registre _(log)_ de comunicacions al servidor d'aplicació de la bústia ètica, per tal de garantir l’anonimat de l’informador.
- Les notificacions als Receptors per noves informacions, o noves dades d’una informació existent, es fan per correu xifrat via correu corporatiu intern.

El receptor disposa de manuals de metodologia de treball segur.

L'Ajuntament disposa de procediment de custòdia de claus, per garantir-ne la recuperació dels documents sota procediment reglat (contingència en cas de pèrdua de claus).

L'Ajuntament  ofereix protecció del lloc de treball corporatiu (inclou antivirus i encriptació).


### Protecció de la infraestructura

Es facilita l'accés anònim dels comunicadors a la Bústia a través del navegador TOR.
- La xarxa TOR i el seu navegador és un programari gratuït i de codi obert

L'aplicació està hostatjada al cloud privat de l'Ajuntament, en un segment especial i aïllat de la xarxa corporativa.

Definit en dues zones:
- Internet per accés dels comunicadors.
- Intranet per receptors i administradors.

Els servidors s'han bastionat (protecció específica de les configuracions dels sistemes i productes) per evitar atacs.

La informació adjuntada per el comunicador esta sempre xifrada al servidor mitjançant Claus PGP per evitar qualsevol accés no desitjat, inclús el de possibles administradors de sistemes.

S'ha realitzat test de _hacking_ ètic per testejar la infraestructura.


### Perfils d'usuaris de la Bústia

Comunicador
- És qui comunica els casos.

Receptor
- Òrgan gestor de la Bústia.
- És l'únic que pot rebre els casos.
- La informació està xifrada i només amb la seva clau privada es pot des xifrar.

Administrador funcional:
- Defineix els usuaris de perfil receptor.
- No té accés als casos.
- Totes les accions queden enregistrades.

Administrador de sistemes:
- Manté el programari, monitoritza el sistema, fa còpies de seguretat.
- No pot llegir la informació sensible, ja que està xifrada.

Auditor de l'Administrador funcional:
- Revisa les accions de l'administrador
- Revisa la creació i l'activació/desactivació dels usuaris
- Registra  les incidències que es puguin produir

### Comunicador: Com introduir un cas

Accés:  [barcelona.cat/bustiaetica](https://ajuntament.barcelona.cat/bustiaetica/ca)

- Des del peu de qualsevol pàgina del web es pot accedir a l'aplicació d'enviament i consulta del cas en un clic.
- Permet un accés anònim amb el navegador TOR.
- Cal exposar el cas en una fitxa.
- Es poden adjuntar documents que queden xifrats a la bústia.
- Cal conservar l'identificador del cas, per poder consultar la resposta de l'Ajuntament i/o aportar més informació i/o documentació.



### Comunicador: Com accedir al cas

Accés:  [barcelona.cat/bustiaetica](https://ajuntament.barcelona.cat/bustiaetica/ca)

- Des del peu de qualsevol pàgina del web es pot accedir a l'aplicació per consultar el cas.
- Introdueix l'identificador del cas (codi numèric d'accés), per poder consultar la resposta de l'ajuntament i/o aportar més informació a través de missatges o de nous documents.


### Receptor: com consulta i tracta la comunicació

El receptor rep un avís (via un correu intern xifrat) de que hi ha una comunicació nova o que s'ha aportat més informació.

Accedeix a la comunicació (per una adreça interna només accessible des de la xarxa interna de l'Ajuntament):
- Veu la fitxa resum.
- Pot descarregar tot el cas : fitxa i documents adjunts.
- La documentació es descarrega xifrada.
- Els documents  es desxifren només amb la seva clau privada

Fa tractament:
- Anàlisi de la comunicació: estudi d'admissió i comprovacions.
- Retorna resposta al comunicador a través de missatges. Pot demanar més informació.
- Adjunta documents de resposta signats digitalment, si és necessari. 
- El receptor no pot esborrar cap comunicació. 

### Més informació

- Per a més informació sobre el llançament de la Bústia, consulteu la [Nota de premsa](http://ajuntament.barcelona.cat/premsa/2017/01/19/barcelona-activa-la-seva-bustia-etica-una-eina-de-bon-govern-pionera-en-la-prevencio-contra-la-corrupcio/) de la presentació de la bústia.

- Per a més informació sobre el funcionament i el marc regulador, consulteu el [web informatiu de la Bústia](https://ajuntament.barcelona.cat/bustiaetica/ca)

- Altres eines usades fora de Globaleaks per al tractament posterior de la informació:
	- GPG4WIN per a encriptar/desencriptar 
	- Navegador TOR
	- Bitlocker per al xifrat del disc dur

-------------------------------------------------------------------------------------------------------------------------


## 5. Instal·lació

En aquest repositori s'inclou el detall de la  configuració usada per la Bústia, i s'adjunten tots els fitxers de codi desenvolupats.
- Consultar el detall al fitxer [INSTALL.md](INSTALL.md)


-------------------------------------------------------------------------------------------------------------------------

## 6. Dades de contacte

Per a consultes tècniques de instal·lació i configuració:
- Joan Bitlloch <jbitlloch@bcn.cat>
- Direcció de Desenvolupament de l'Institut Municipal d'Informàtica, Ajuntament de Barcelona


-------------------------------------------------------------------------------------------------------------------------
