---
layout: template
title: 'Google Fonts'
url: /tips-and-tricks/google-fonts
collection: tricks
links:
  - url: https://www.fonts.google.com
    title: Google Fonts
---
Standaard bent je beperkt tot het gebruik van lettertypes die op de computer van de website bezoeker staan. Er zijn een handvol lettertypes die op elke computer staan (Arial, Verdana, Courier, ...) maar grafisch stellen die niet zoveel voor.

Het is zeker zo dat je via de webserver een lettertype bestand (ttf, otf, ...) kan aanbieden. Dat zal dan worden gedownload bij het ophalen van de webpagina. Echter zijn de meeste lettertypes te betalen via een licentie.

## Google fonts to the rescue

Google heeft een heel assortiment open-source lettertypes ter beschikking gesteld en via zijn website (zie link onderaan) kan je die ook heel eenvoudig gaan gebruiken in jouw webpagina. Google Fonts biedt de lettertypes aan via een CSS bestand. Dezelfde manier van werken als bijvoorbeeld ook bij Font Awesome.

<u>HTML</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;html&gt;
  &lt;head&gt;
    &lt;link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" /&gt;
    &lt;link href="css/style.css" rel="stylesheet" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;&lt;&gt; Een paragraaf in het Ubuntu lettertype&lt;/p&gt;    
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<u>CSS</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="css">
p {
  font-family: Ubuntu;
}
</pre>