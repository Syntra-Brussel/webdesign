---
layout: template
title: 'CSS: CasCading Stylesheet'
url: /css
collection: css
links:
  - url: /webdesign/tips-and-tricks/absoluut-vs-relatief-pad
    title: Absoluut vs. relatief pad
---
						
<p>De inhoud van een pagina wordt gestructureerd in een HTML bestand. De opmaak wordt gedefinieerd in een apart Stylesheet bestand, met de extensie CSS.</p>



<p>Er wordt in het HTML bestand via een specifieke meta element naar verwezen.</p>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">
&lt;head&gt;
...
&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
...
&lt;/head&gt;
</pre>



<p>In het voorbeeld hierboven staat het bestand&nbsp;<code>style.css</code>&nbsp;in dezelfde folder als het html bestand.</p>



<p>Het is aangeraden dat het CSS bestand in een subfolder wordt geplaatst. Dit is vooral handig als er later verschillende bestanden zijn. Dat zorgt voor structuur.&nbsp;</p>



<p>Sla de CSS bestanden bijvoorbeeld op in de “css” folder.</p>


<pre data-enlighter-theme="beyond" data-enlighter-language="css">
&lt;head&gt;
...
&lt;link rel="stylesheet" type="text/css" href="css/style.css"&gt;
...
&lt;/head&gt;
</pre>