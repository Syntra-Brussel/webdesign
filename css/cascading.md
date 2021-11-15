---
layout: template
title: De C van CSS staat voor Cascading
url: /css/cascading
collection: [css]
---
								
<blockquote><p><strong>Cascading</strong>&nbsp;(waterval / dieper) wil zeggen dat de eigenschappen niet enkel van toepassing zijn op het selector element maar ook op alle elementen binnen het selector element.</p></blockquote>



<p><span style="text-decoration: underline">HTML</span>:</p>



<pre data-enlighter-theme="beyond" data-enlighter-language="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;De C van CSS staat voor Cascading&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;link rel="stylesheet" type="text/css" href="css/style.css" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Dit is een titel&lt;/h1&gt;
    &lt;p&gt;Dit is &lt;strong&gt;een&lt;/strong&gt; rode tekst&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>



<p><span style="text-decoration: underline">CSS:</span></p>



<pre data-enlighter-theme="beyond" data-enlighter-language="html">body {
  color: red;
}
p {
  color: blue;
}
strong {
  color: green;
}</pre>



<p><span style="text-decoration: underline">Resultaat</span>:</p>



<img src="images/cascading.png" alt="">



<p>Het <code>&lt;h1&gt;</code> element heeft geen specifieke kleur dus neemt het de kleur van het <code>&lt;body&gt;</code> <font color="red">(rood)</font> element over.</p>



<p>Het <code>&lt;p&gt;</code> element normaal de kleur van het <code>&lt;body&gt;</code> element over maar heeft hier een specifieke kleur (blauw).</p>



<p>Het <code>&lt;strong&gt;</code> element neemt normaal de kleur van het <code>&lt;p&gt;</code> element over maar heeft hier een specifieke kleur <font color="green">(groen)</font>.</p>
