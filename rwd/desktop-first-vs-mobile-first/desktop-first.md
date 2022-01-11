---
layout: template
title: Desktop first
url: /css/desktop-first-vs-mobile-first/desktop-first
collection: [css,desktop-first-vs-mobile-first]
---			
Bij “desktop eerst” is de basis CSS voorzien voor het grootste scherm (desktop) en worden @media queries voorzien voor het kleinere schermen.

<img src="/webdesign/rwd/images/rwd-desktop-first-2.jpg" />	


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
</pre>

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
/* CSS altijd van toepassing */
section {
  display: flex;
}   
article {
  width: 33.33%;
}
* CSS van toepassing bij scherm breedte <= 500px */
@media (max-width: 500px) {
  section {
    display: block;
  }
   
  article {
    width: 100%;
  }
}
</pre>