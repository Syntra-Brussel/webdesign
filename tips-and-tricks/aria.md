---
layout: template
title: 'Toegankelijkheid en ARIA attributen'
url: /tips-and-tricks/aria
collection: tricks
links:
  - url: https://www.w3schools.com/accessibility/index.php
    title: Toegankelijkheid richtlijnen
  - url: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
    title: ARIA
  - url: https://www.w3.org/TR/wai-aria
    title: 'ARIA: W3C standaard'
---
In de cursus HTML hebben we het belang van correcte HTML elementen benadrukt: de webpagina moet namelijk goed "begrepen" worden door bijvoorbeeld zoekmachines.

Echter moet de HTML niet enkel door zoekmachines goed begrepen worden. Ook mensen met beperkingen moeten de webpagina (en de interactie) kunnen begrijpen. Er zijn bijvoorbeeld specifieke browser plugins die de inhoud van een webpagina voorlezen of visueel vereenvoudigen. Het is dan belangrijk dat de de inhoud zo goed mogelijk beschreven wordt.

## Gebruik contrast in kleuren

## Gebruik duidelijk namen bij beelden, gebruikt alt attribuut

<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;img alt="De bergen zijn fijn." src="beelden-zijn-fijn.jpg" /&gt;
</pre>

## Gebruik <code>rem<code> zodat de Zoom functie van de browser correct werkt

## Gebruik correcte elementen en correcte attributen

De komst van <strong>HTML5</strong> heeft dat een pak eenvoudiger gemaakt met de <strong>semantische elementen</strong>.

In HTML4:
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;div role="banner"&gt;Header&lt;/div&gt;
</pre>

In HTML5:
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;header&gt;Header&lt;/header&gt;
</pre>

### Gebruik hiërachie in titels h1 - h5

### correct gebruik van links en buttons
Correct gebruik van links (linken naar een andere pagina) en buttons (acties: bv. inschrijven, versturen, ...)

Als je toch niet het correcte element kan gebruiken: gebruik het <code>role</code> attribuut.

<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;a role="button"&gt;Verstuur&lt;/a&gt;
</pre>

### gebruik van <code>alt</code> attributen bij een beeld

### ARIA attributen

<strong>Accessible <strong>R</strong>ich <strong>I</storng>nternet <strong>A</strong>pplications

Het zijn attributen die tot doel hebben om nog meer betekenis te geven aan HTML elementen. Door deze ook via Javascript "dynamisch" te laten veranderen krijgt de gebruiker ten allen tijde een real-time idee van de "staat" van de webpagina.

Veel voorkomende aria attributen:
* <code>role</code>: gebruik wanneer het gebruikte element niet helemaal het beste element is of geen specifiek element voor handen is (bv. tab, tabpanel, menuitem, listbox, ...)
* <code>aria-label</code>: geef een leesbare omschrijving bij het element
* <code>aria-describedby</code>: de <code>id</code> van element dat de beschrijving van het element bevat
* <code>aria-expanded</code>: geeft via true/false aan of element inhoud zichtbaar is of niet (bv. bij een <a target="_blank" href="https://getbootstrap.com/docs/5.1/components/accordion/">accordion</a>)
* ...