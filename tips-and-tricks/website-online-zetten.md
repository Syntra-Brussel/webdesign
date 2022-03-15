---
layout: template
title: 'Website online zetten'
url: /tips-and-tricks/website-online-zetten
collection: tricks
---
## Een client-server architectuur

In de client-server architectuur is de client de partij die een vraag stelt, de server is de partij die daarop antwoord.

Het werk dat een server heeft met het beantwoorden van de vraag is afhankelijk van het type vraag.

Afhankelijk van de taak zijn er verschillende client programma's die kunnen worden gebruikt. 
Afhankelijk van de taaj worden ook verschillende types server aangesproken.

## De belangrijkste taken

### Tonen van een website

#### De server: HTTP server of webserver

<img src="/webdesign/tips-and-tricks/images/client_server.png">
Een HTML pagina (met bijhorende CSS / JS / beelden is in principe een eenvoudig data dat volledig wordt geïnterpreteerd door een browser. We spreken hierbij over <strong>"statische"</strong> inhoud. Een server dient in dit geval enkel om de informatie (HTML / CSS / JS / beelden) publiek aan te bieden. De informatie wordt gedownload naar de computer en daar verwerkt. 

Tot nu toe hebben we trouwens de HTML gebouwd op onze computer en zo meteen in onze browser getoond. 

De <strong>"dynamische"</strong> inhoud wordt opgevraagd via de PHP extensie. De output van een PHP script is HTML maar die wordt gebouwd wanneer die wordt opgevraagd.

De meest courant gebruikte webserver zijn Apache, Nginx, IIS 

#### Het protocol: HTTP protocol

Het HTTP protocol staat voor <strong>Hyper<strong>t</strong>ext <strong>T</strong>ransfer <strong>P</strong>rotocol.

Het is een protocol dat heel snel data van een server naar een client stuurt. In 1989 startte dit enkel voor tekst (met links). Gaandeweg kon elke bestand via dat protocol van server naar client verstuurd worden. 

Wanneer informatie gecommuniceerd via https wordt verstuurd tussen client en server versleuteld aan de hand van een certificaat. Dit heeft de absolute voorkeur tegenwoordig, zéker als informatie verstuurd vanaf de website via bv. een formulier.

#### De client: een webbrowser

#### De URL

Elke webpagina heeft een uniek adres: de URL

<img src="/webdesign/tips-and-tricks/images/url.png">

* <span style="color: red">het protocol:</span> http(s)
* <span style="color: green">de domeinnaam</span> die achterliggend verwijst naar een IP adres (elke publieke server heeft een publiek IP adres) en een plekje op de server waar de bestanden staan
* <span style="color: darkblue">de folder</span> binnen het gereserveerde plekje op de server
* <span style="color: orange">het bestand</span> in de folder

### Plaatsen van een website

#### De server: FTP server of fileserver

Via het FTP protocol is deze server geoptimaliseerd om (grote) (hoeveelheden) bestanden op te halen van een server en te plaatsen op een server.

#### De client: een FTP programma

Er zijn veel FTP clients beschikbaar. Veel gebruikt is bv. FileZilla.

### FTP verbinding

Om bestanden uit te wisselen met een FTP server heb je volgende zaken nodig:
* host (IP adres of domeinnaam) die verwijst naar de FTP service
* poort (standaard is dat 21)
* gebruikersnaam
* paswoord