---
layout: template
title: 'Conventies bij bestandsnamen en mappen structuren'
url: /tips-and-tricks/bestandsnamen
collection: tricks
links:
  - url: /webdesign/tips-and-tricks/absoluut-vs-relatief-pad
    title: Absoluut vs. relatief pad
---
In principe maakt de naam van een bestand of een map niet zoveel uit. Echter zijn er toch een aantal "conventies" die maken dat iedereen wat zijn weg kan vinden in een project.

## meerdere bestanden van hetzelfde type breng je onder in een aparte folder
Heeft je project bijvoorbeeld verschillende beelden? Maak daarvoor een aparte folder <em>images</em> aan.
Het stylesheet bestand komt in de <em>css</em> folder.
Het Javascript bestand komt in de <em>js</em> folder.

## eenvoudig op te roepen in een browser

Door een bestand index.html te noemen moet je het niet specifiek in je adres opnemen. De folder volstaat dan.

We nemen vanaf deze structuur aan:

<div class="gray-code">
\&lt;project_naam&gt;<br />
  |_ \images<br />
    |_ ...<br />
  |_ \css<br />
    |_ style.css<br />
  |_index.html
</div>