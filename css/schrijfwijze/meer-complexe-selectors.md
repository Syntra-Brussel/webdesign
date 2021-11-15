---
layout: template
title: Meer complexe CSS selectors
url: /css/schrijfwijze/meer-complexe-selectors
collection: [css, schrijfwijze]
---
					
<blockquote><p>The Sky is the Limit</p></blockquote>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">p strong {
  ...
}</pre> 



<p>Opmaak code is van toepassing op elk <code>&lt;strong&gt;</code> element binnen een <code>&lt;p&gt;</code> element.</p>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">.container article {
 ... 
}</pre>



<p>Opmaak code is van toepassing op elk <code>&lt;article&gt;</code> element binnen een  element met class <code>container</code>.</p>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">/* toegepast op alle div elementen in .container */
.container div {
  ...
}

/* toegepast al alle div elementen in .container op het eerste niveau */
.container &gt; div {
  ...
}</pre>



<p>Opmaak code is van toepassing op elk <code>&lt;div&gt;</code> element op het eerste niveau binnen een  element met class <code>container</code>.</p>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">p strong.blue {
  ...
}</pre>



<p>Opmaak code is van toepassing op elk <code>&lt;strong&gt;</code> met class <code>blue</code> binnen een <code>&lt;p&gt;</code> element.</p>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">
p.blue strong {
  ...
}</pre>



<p>Opmaak code is van toepassing op elk <code>&lt;strong&gt;</code> binnen een <code>&lt;p&gt;</code> element met class <code>blue</code>.</p>