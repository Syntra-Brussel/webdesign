---
layout: template
title: 'Website online zetten'
url: /tips-and-tricks/website-online-zetten
collection: tricks
---
## Een client-server architectuur

In de client-server architectuur is de client de partij die een vraag stelt, de server is de partij die daarop antwoord.

Het werk dat een server heeft met het beantwoorden van de vraag is afhankelijk van het type vraag.

Afhankelijk van het type vraag zijn er verschillende client programma's die kunnen worden gebruikt. Ze werken via een bepaald protocol om te communiceren met de server en om het antwoord dus correct te interpreteren.

## Tonen van een webpagina

### De server: een webserver

De meest courant gebruikte webserver zijn Apache, Nginx, IIS 
<img src="/webdesign/tips-and-tricks/images/client_server.png">
Een HTML pagina (met bijhorende CSS / JS / beelden is in principe een eenvoudig data dat volledig wordt geïnterpreteerd door een browser. We spreken hierbij over <strong>"statische"</strong> inhoud. Een server dient in dit geval enkel om de informatie (HTML / CSS / JS / beelden) publiek aan te bieden. De informatie wordt gedownload naar de computer en daar verwerkt. 

Tot nu toe hebben we trouwens de HTML gebouwd op onze computer en zo meteen in onze browser getoond. 

De <strong>"dynamische"</strong> inhoud wordt opgevraagd via de PHP extensie. De output van een PHP script is HTML maar die wordt gebouwd wanneer die wordt opgevraagd.

### De client: een webbrowser

### Het protocol: http of https

Het HTTP protocol staat voor <strong>Hyper<strong>t</strong>ext <strong>T</strong>ransfer <strong>P</strong>rotocol.

<blockquote>
Hypertekst; hypertext - document waarin verwijzingen (gemarkeerde woorden of hyperlinks ) zijn opgenomen naar bepaalde informatie (tekstfragmenten). Door met de muis op het gemarkeerd woord of de hyperlink te klikken, komt men terecht bij de informatie. Het world wide web is gebaseerd op het systeem van hypertekst.
</blockquote>

Het is een protocol dat heel snel data van een server naar een client stuurt. In 1989 startte dit enkel voor tekst. Gaandeweg kon elke bestand via dat protocol van server naar client verstuurd worden. 

### De URL

Elk stuk informatie heeft een uniek adres: de URL.

<img src="/webdesign/tips-and-tricks/images/url.png">

* het protocol: http(s)
* de domeinnaam die achterliggend verwijst naar een IP adres (elke publieke server heeft een publiek IP adres)
* de folder op de server
* het bestand op de server

Wanneer informatie gecommuniceerd via https wordt verstuurd tussen client en server versleuteld aan de hand van een certificaat. Dit heeft de absolute voorkeur tegenwoordig, zéker als informatie verstuurd vanaf de website via bv. een formulier.