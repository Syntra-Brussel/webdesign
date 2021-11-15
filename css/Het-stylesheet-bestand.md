---
layout: template
title: Het stylesheet bestand (CSS)
url: /css/het-stylesheet-bestand
collection: [css]
---
De inhoud van een pagina wordt gestructureerd in een HTML bestand. De opmaak wordt gedefinieerd in een apart Stylesheet bestand, met de extensie CSS.

Er wordt in het HTML bestand via een specifieke meta element naar verwezen.

<pre data-enlighter-language="html">
&lt;head&gt;
  &lt;link rel="stylesheet" type="text/css" href="style.css" /&gt;
&lt;/head&gt;
</pre>
In het voorbeeld hierboven staat het bestand style.css in dezelfde folder als het html bestand.

Het is aangeraden dat het CSS bestand in een subfolder wordt geplaatst. Dit is vooral handig als er later verschillende bestanden zijn. Dat zorgt voor structuur. 

Sla de CSS bestanden bijvoorbeeld in de “css” folder.

<pre data-enlighter-language="html">
&lt;head&gt;
  &lt;link rel="stylesheet" type="text/css" href="css/style.css" /&gt;
&lt;/head&gt;
</pre>