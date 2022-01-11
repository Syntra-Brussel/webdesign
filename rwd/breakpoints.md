---
layout: template
title: Breakpoints via @media queries
url: /rwd/breakpoints
collection: [rwd]
---
Door @media rond een CSS selector te plaatsen gaat de CSS enkel toegepast worden bij een bepaalde scherm breedte.

<img src="/webdesign/rwd/images/rwd-desktop-first.jpg" />	

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
/* CSS altijd van toepassing */
body {
  background-color: blue;
}

/* CSS van toepassing bij een scherm <= aan 600px */
@media (max-width: 600px) {
  body {
    background-color: red;
  }
}
</pre>
  
<img src="/webdesign/rwd/images/rwd-mobile-first.jpg" />	

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
/* CSS altijd van toepassing */
body {
  background-color: blue;
}

/* CSS van toepassing bij scherm breedte >= 600px */
@media (min-width: 600px) {
  body {
    background-color: red;
  }
}
</pre>