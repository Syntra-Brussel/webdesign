---
layout: template
title: 'Project structuur: bestanden en mappen'
url: /tips-and-tricks/bestandsnamen
collection: tricks
links:
  - url: /webdesign/tips-and-tricks/absoluut-vs-relatief-pad
    title: Absoluut vs. relatief pad
---
In principe maakt de naam van een bestand of een map niet zoveel uit. Echter zijn er toch een aantal "conventies" die maken dat iedereen wat zijn weg kan vinden in een project.

## Bestanden breng je per type onder in een aparte folder
* Beelden komen in de <em>images</em> folder.
* Het stylesheet bestand komt in de <em>css</em> folder.
* Het Javascript bestand komt in de <em>js</em> folder.
* ...

## <code>index.html</code> eenvoudig op te roepen in een browser

Door een bestand <code>index.html</code> te noemen moet je het niet specifiek in je adres opnemen. De folder volstaat dan.

## Project structuur 

We nemen vanaf nu deze structuur aan:

<div class="gray-code">
\<em>project_naam</em><br />
&nbsp;&nbsp;|_ \images<br />
&nbsp;&nbsp;&nbsp;&nbsp;|_ ...<br />
&nbsp;&nbsp;|_ \css<br />
&nbsp;&nbsp;&nbsp;&nbsp;|_ style.css<br />
&nbsp;&nbsp;|_ index.html
</div>

Je bereikt <code>index.html</code> dan eenvoudig door te surfen naar de folder <em>project_naam</em>