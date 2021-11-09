---
layout: template
title: 'Absoluut vs. relatief pad'
url: /tips-and-tricks/absoluut-vs-relatief-pad
collection: tricks
links:
  - url: https://www.hostinginnederland.nl/help/vragen/wat-is-verschil-tussen-absoluut-relatief-pad-171
--- 
## {{ page.title }}

Een webpagina bevat heelwat links naar externe bestanden. Dat zijn voorbeeld CSS bestanden (voor opmaak), JS script bestanden (voor programmatie) en beelden.

De referentie naar zo een bestand is een pad en een pad kan <strong>relatief</strong> en <strong>absoluut</strong> worden op gegeven.

### Absoluut pad

<pre data-enlighter-language="html">
&lt;img src=&quot;https://syntra-brussel.github.io/webdesign/images/logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt in dit voorbeeld van https://syntra-brussel.github.io gehaald. Op die webhosting wordt het beeld in de <code>webdesign/images</code> folder gezocht.

<pre data-enlighter-language="html">
&lt;img src=&quot;/logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt in dit voorbeeld van de domeinaam gehaald waar ook het HTML bestand staat. De eerste <code>/</code> zorgt ervoor dat in de start folder wordt gezocht.

<pre data-enlighter-language="html">
&lt;img src=&quot;/images/logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt in dit voorbeeld van de domeinaam gehaald waar ook het HTML bestand staat. De eerste <code>/</code> zorgt ervoor dat in de start folder wordt begonnen met zoeken. Vervolgens wordt het beeld gezocht in de in de <code>images</code> folder.

### Relatief pad

<pre data-enlighter-language="html">
&lt;img src=&quot;logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt gezocht in de folder waarin ook het HTML bestand zich bevindt.

### Relatief pad

<pre data-enlighter-language="html">
&lt;img src=&quot;images/logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt gezocht in de <code>images</code> folder binnen de folder waarin ook het HTML zich bevindt.

<div class="highlight">
<h3>Hou het overzichtelijk</h3>
<p>
Zorg ervoor dat bestanden van een zelfde type samen staan in een aparte folder. Dat zorgt voor een overzichtelijke bestandsstructuur.
</p>
<p>
Plaats de beelden bijvoorbeeld in de <code>images</code> folder.
</p>
</div>
<div class="highlight">
<h3>Vermijd absolute paden</h3>
<p>
Bij het gebruik van een absoluut pad is de kans veel groter dat een bestand niet meer gevonden zal worden wanneer de mappen structuur wijzigt.
</p>
</div>