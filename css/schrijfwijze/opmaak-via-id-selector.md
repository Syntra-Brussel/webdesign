---
layout: template
title: Opmaak via id selector
url: /css/opmaak-via-id-selector
collection: [css, schrijfwijze]
---

								
<p><u>HTML</u>:</p>



<div class="gray-code">
&lt;label for="naam"&gt;Naam:&lt;/label&gt;<br>&lt;input type="text" <font color="blue">id="naam"</font> name="naam" /&gt;</div>



<p><u>CSS</u>:</p>



<div class="gray-code">
<font color="blue">#naam</font> {<br>
&nbsp;&nbsp;<font color="green">width: </font><font color="red">100%</font>;<br>}
</div>



<p>De <em>selector</em> is in dit geval de naam van een <code>id</code> attribuut (<code><font color="blue">naam</font></code>). Voorafgegaan door een <code><font color="blue">#</font></code></p>
