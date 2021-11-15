---
layout: template
title: Breedte en hoogte
url: /css/breedte-hoogte
collection: [css]
---

								
<p>Een element kan een bepaalde breedte hebben. Die bepaal je met de <code>width</code> eigenschap.</p>



<p>De breedte kan worden uitgedrukt in pixels (px) of procenten (%).</p>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">
.column {
  display: inline-block;
  width: 200px;
}
</pre>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">
.column {
  display: inline-block;
  width: 33.33%;
}
</pre>

<p>De hoogte wordt voor een element niet vaak vast gelegd omdat deze zich meestal aan past aan de inhoud die er in zit. Je kan <code>height</code> zeker wel gebruiken.

Recent is naast "px" en "%" ook "vh" (<em>view height</em>) toegevoegd aan de mogelijkheden. Je kan een element zo de hoogte geven van het zichtbare browser gedeelte.