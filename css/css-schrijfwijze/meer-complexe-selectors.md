---
layout: template
title: Meer complexe CSS selectors
url: /css/css-schrijfwijze/meer-complexe-selectors
collection: [css, css-schrijfwijze]
---
								
<p><span style="text-decoration: underline">HTM code:</span></p>



<p class="has-very-light-gray-background-color has-background"><code><font color="blue">&lt;p&gt;</font>Dit is een <font color="purple">&lt;strong&gt;</font>vette<font color="purple">&lt;/strong&gt;</font> paragraaf<font color="blue">&lt;/p&gt;</font></code></p>



<p><span style="text-decoration: underline">CSS code:</span></p>



<p class="has-very-light-gray-background-color has-background"><code><font color="blue">p</font> {<br>  <font color="green">font-family</font>: <font color="red">"Arial"</font>;<br>  <font color="green">font-size</font>: <font color="red">14px</font>;<br>  <font color="green">color</font>: <font color="red">#C0C0C0</font>;<br>}</code></p>



<p>De <em>selector</em> is in dit geval de naam van een element (<code><font color="blue">&lt;p&gt;</font></code>).</p>



<p>De eigenschappen worden toegepast op <strong>alle</strong> <strong>inhoud</strong> binnen <strong>elk</strong> <code><font color="blue">&lt;p&gt;</font></code> element binnen het document. </p>



<p>De eigenschappen zijn ook van toepassing op alle elementen binnen alle <font color="blue">&lt;p&gt;</font> element. In het geval hierboven dus ook op het <code><font color="purple">&lt;strong&gt;</font></code> element.</p>



<p>Opmaak die van toepassing is op het volledige document definieer je dus op het <code>&lt;body&gt; </code>element of zelfs het <code>&lt;html&gt;</code> element.</p>