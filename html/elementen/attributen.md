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
Een belangrijk attribuut voor het opmaken van HTML elementen is het <code>class</code> attribuut.

<img src="{{ '/html/elementen/images/attributen_4.png' | relative_url}}" />

Via een bepaalde <code>class</code> attribuut toe te kennen aan of meerdere elementen kan je specifieke opmaak toepassen.

We zullen dit nog uitvoerig bekijken wanneer we over "CSS" leren.

### Het <code>id</code> attribuut

Een ander belangrijk attribuut is het <code>id</code> attribuut. 

<img src="{{ '/html/elementen/images/attributen_5.png' | relative_url}}" />

Je kan een <code>id<code> bepalen om een element <strong>uniek</strong> te benaderen. In dit geval mag er dus geen ander element binnen de webpagina voorkomen met <code>id</code>.

Het <code>id<code> attribuut wordt vaak gebruikt om een element vanuit JavaScript te benaderen. Bijvoorbeeld bij het valideren van formulier invoer.




