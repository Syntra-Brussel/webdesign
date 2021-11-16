---
layout: template
title: Opmaak via element naam selector
url: /css/schrijfwijze/opmaak-via-naam-selector
collection: [css, schrijfwijze]
---

<p><u>HTML</u>:</p>



<div class="gray-code">
<font color="blue">&lt;p&gt;</font>Dit is een <font color="purple">&lt;strong&gt;</font>vette<font color="purple">&lt;/strong&gt;</font> paragraaf<font color="blue">&lt;/p&gt;</font>
</div>



<p><u>CSS</u>:</p>



<div class="gray-code">
<font color="blue">p</font> {<br>
&nbsp;&nbsp;<font color="green">font-family</font>: <font color="red">"Arial"</font>;<br>
&nbsp;&nbsp;<font color="green">font-size</font>: <font color="red">14px</font>;<br>
&nbsp;&nbsp;<font color="green">color</font>: <font color="red">#C0C0C0</font>;<br>}
</div>



<p>De <em>selector</em> is in dit geval de naam van een element (<code><font color="blue">&lt;p&gt;</font></code>).</p>



<p>De eigenschappen worden toegepast op <strong>alle</strong> <strong>inhoud</strong> binnen <strong>elk</strong> <code><font color="blue">&lt;p&gt;</font></code> element binnen het document. </p>



<p>De eigenschappen zijn ook van toepassing op alle elementen binnen alle <code><font color="blue">&lt;p&gt;</font></code> element. In het geval hierboven dus ook op het <code><font color="purple">&lt;strong&gt;</font></code> element.</p>



<p>Opmaak die van toepassing is op het volledige document definieer je dus op het <code>&lt;body&gt; </code>element of zelfs het <code>&lt;html&gt;</code> element.</p>
