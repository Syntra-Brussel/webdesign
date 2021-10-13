---
layout: template
title: Elementen hebben attributen
url: /html/elementen/attributen
collection: [html, elementen]
---

## {{ page.title }}

### Elk element heeft zijn eigen specifieke attributen

Elementen hebben doorgaans attributen om extra eigenschappen aan het element toe te voegen:

Een attribuut bestaat uit een <span style="color: green">naam</span>, een <span style="color: red">=</span> en vervolgens een <span style="color: blue">waarde</span> tussen dubbele quotes.

<img src="{{ '/html/elementen/images/attributen_1.png' | relative_url}}" />

In dit voorbeeld wordt een link getoond (een “<strong>a</strong>nchor”). De waarde van het <code>href</code> attribuut is de URL die wordt geopend als je er klikt.

<img src="{{ '/html/elementen/images/attributen_2.png' | relative_url}}" />

Standaard wordt een link geopend in het zelfde venster. Het <code>target</code> attribuut geeft aan dat de link wordt geopend in een nieuw venster.

<img src="{{ '/html/elementen/images/attributen_3.png' | relative_url}}" />

In dit voorbeeld wordt een beeld (“image”) getoond. Het attribuut <code>src</code> bevat de URL naar het beeld. Een <code>&lt;img&gt;</code> element heeft geen inhoud dus wordt het meteen gesloten.

### Het <code>class</code> attribuut
Je kan een <code>class</code> gebruiken voor het opmaken van eender welk HTML element.

<img src="{{ '/html/elementen/images/attributen_4.png' | relative_url}}" />.

Een <code>class</code> is vooral nuttig wanneer je meerdere elementen een zelfde opmaak wil geven.

We zullen dit nog uitvoerig bekijken wanneer we over "CSS" leren.

### Het <code>id</code> attribuut

Je kan een <code>id</code> gebruiken om een element <strong>specifiek</strong> te benaderen. 

<img src="{{ '/html/elementen/images/attributen_5.png' | relative_url}}" />

In dit geval mag er dus geen ander element binnen de webpagina voorkomen met <code>id</code> "logo".

Het <code>id</code> attribuut wordt vaak gebruikt om een element vanuit JavaScript te benaderen. Bijvoorbeeld voor het valideren van formulier invoer of het manipuleren van de HTML elementen.




