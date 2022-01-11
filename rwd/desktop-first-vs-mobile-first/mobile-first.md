---
layout: template
title: Commentaar
url: /css/desktop-first-vs-mobile-first/desktop-first
collection: [css,schrijfwijze]
---			
Bij “mobiel eerst” is de basis CSS voorzien voor het kleinste scherm (smartphone) en worden @media queries voorzien voor de grotere schermen.

<img src="/webdesign/rwd/images/rwd-mobile-first-2.jpg" />	
 
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;html&gt;
  &lt;head&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;section&gt;
      &lt;article&gt;
        &lt;p&gt;artikel 1&lt;/p&gt;
      &lt;/article&gt;
      &lt;article&gt;
        &lt;p&gt;artikel 1&lt;/p&gt;
      &lt;/article&gt;
      &lt;article&gt;
        &lt;p&gt;artikel 1&lt;/p&gt;
      &lt;/article&gt;            
    &lt;/section&gt;
  &lt;/body&gt;
&lt;/html&gt;
&lt;/pre&gt;

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
/* CSS van toepassing bij scherm breedte >= 500px */
@media (min-width: 500px) {
   section {
    display: flex;
  }   
  article {
    width: 33.33%;
  }
}
</pre>