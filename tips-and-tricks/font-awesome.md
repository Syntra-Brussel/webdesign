---
layout: template
title: 'Font Awesome'
url: /tips-and-tricks/font-awesome
collection: tricks
links:
  - url: https://www.fontawesome.com
    title: Font Awesome
---
Font Awesome is een bibliotheek die toelaat om symbolen te gebruiken in een website. 

Ze draait <em>font</em> in haar naam omdat ze eigenlijk een extra lettertype laadt in je webpagina.

Door een Font Awesome javascript en CSS in je <code>&lt;head&gt;</code> te laden kan je ze eenvoudig gaan invoegen in je HTML.

De bibliotheek is "as we speak" al aan Versie 6. Er zijn betalende iconen maar ook heel wat zijn (nog) gratis.

<u>HTML</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;html&gt;
  &lt;head&gt;
    &lt;script src="https://kit.fontawesome.com/2d03a6046d.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;&lt;i class="fas fa-check-circle"&gt;&lt;/i&gt; Als alles is gelukt zie je hier een "check" in een cirkel.&lt;/p&gt;    
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<u>Resultaat</u>:
<img class="shadow" src="images/font_awesome_check.png?v=1" />