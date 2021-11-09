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

Het beeld wordt in dit voorbeeld van https://syntra-brussel.github.io gehaald. Op die webhosting zoekt de browser in de <code>webdesign/images</code> folder.

<pre data-enlighter-language="html">
&lt;img src=&quot;/logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt in dit voorbeeld van de domeinaam gehaald waar ook het HTML bestand staat. De eerste <code>/</code> zorgt ervoor dat de browser in de start folder begint te zoeken.

<pre data-enlighter-language="html">
&lt;img src=&quot;/images/logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt in dit voorbeeld van de domeinaam gehaald waar ook het HTML bestand staat. De eerste <code>/</code> zorgt ervoor dat de browser in de start folder begint te zoeken. Vervolgens zoekt hij in het beeld in de <code>images</code> folder.

### Relatief pad

<pre data-enlighter-language="html">
&lt;img src=&quot;logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt gezocht in de folder waarin ook het HTML bestand staat.

### Relatief pad

<pre data-enlighter-language="html">
&lt;img src=&quot;images/logo.png&quot; alt=&quot;Alternatieve tekst&quot; width=&quot;100&quot; height=&quot;200&quot; /&gt;
</pre>

Het beeld wordt gezocht in de <code>images</code> folder binnen de folder waarin ook het HTML bestand staat.

<div class="highlight">
Zorg ervoor dat bestanden van een zelfde type samen staan in een aparte folder. Dat zorgt voor een overzichtelijke bestandsstructuur.

Plaats de beelden bijvoorbeeld in de <code>images</code> folder.
</div>