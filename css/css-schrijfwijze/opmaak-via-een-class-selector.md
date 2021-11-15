---
layout: template
title: Opmaak via class selector
url: /css/css-schrijfwijze/opmaak-via-class-selector
collection: [css, css-schrijfwijze]
---
<div class="ld-tabs ld-tab-count-1">
	

								
<p><span style="text-decoration: underline">HTML code:</span></p>



<div class="gray-code">
&lt;div <font color="blue">class="form-element"</font>&gt;<br>
&nbsp;&nbsp;<font color="purple">&lt;label</font> for="naam"<font color="purple">&gt;</font>Naam:<font color="purple">&lt;/label&gt;</font><br>
&nbsp;&nbsp;<font color="purple">&lt;input</font> type="text" id="naam" name="naam" <font color="purple">/&gt;</font><br>&lt;/div&gt;<br>&lt;div <font color="blue">class="form-element"</font>&gt;<br>
&nbsp;&nbsp;<font color="purple">&lt;label</font> for="email"<font color="purple">&gt;</font>E-mail:<font color="purple">&lt;/label&gt;</font><br>
&nbsp;&nbsp;<font color="purple">&lt;input</font> type="email" id="email" name="email" <font color="purple">/&gt;</font><br>&lt;/div&gt;
</div>



<p><span style="text-decoration: underline">CSS code:</span></p>



<div class="gray-code">
<font color="blue">.form-element</font> {<br>
&nbsp;&nbsp;<font color="green">font-family</font>: <font color="red">"Arial"</font>;<br>
&nbsp;&nbsp;<font color="green">font-size</font>: <font color="red">14px</font>;<br>  <font color="green">color</font>: <font color="red">#C0C0C0</font>;<br>}
</code>



<p>De <em>selector</em> is in dit geval de naam van een class attrtibuut (<code><font color="blue">form-element</font></code>). Voorafgegaan door een <code><font color="blue">.</font></code></p>



<p>De eigenschappen worden toegepast op <strong>alle</strong> <strong>inhoud</strong> binnen <strong>elk</strong> element met <code>class</code> <code><font color="blue">form-element</font></code> binnen het document. </p>



<p>De eigenschappen zijn ook van toepassing op alle elementen binnen alle elementen met de <code>class</code> <code><font color="blue">form-element</font></code> element. In het geval hierboven dus ook op het <code><font color="purple">&lt;label&gt;</font></code> en <code><font color="purple">&lt;input&gt;</font></code> element.</p>
			</div>

			
