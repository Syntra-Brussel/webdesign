---
layout: template
title: 'Frontend framework: Bootstrap'
url: /tips-and-tricks/bootstrap
collection: tricks
links:
  - url: https://www.w3schools.com/bootstrap5/
    title: Bootstrap 5 tutorial
  - url: https://getbootstrap.com
    title: Bootstrap
  - url: https://mdbootstrap.com
    title: Material Design for Bootstrap   
  - url: https://medium.com/@davegenge/bootstrap-vs-foundation-which-front-end-framework-to-use-e85319258b88
    title: 'Bootstrap vs. Foundation'
---
<div class="highlight">
    <h3>Framework</h3>
    <p> 
    Een framework is een basis van waarop ontwikkeling kan beginnen. Kwestie van niet vanaf niets te moeten starten.</p>
    <p>Je hebt <strong>backend frameworks</strong> die een startpunt kunnen zijn voor backend ontwikkeling. Er zijn <strong>frontend framworks</strong> die de frontend designer of developer een snelle start geven.
    </p>
    <p>
    Het Bootstrap framework vindt zijn oorsprong bij Twitter en is ondertussen aan versie 5 toe.
    </p>
    <p>
    Een ander vaak gebruikt frontend framework is bv. <a target="_blank" href="https://get.foundation<">https://get.foundation</a>
</div>

## Bootstrap

Het Bootstrap framework is zo een frontend Framework. Het is als het ware een bibliotheek HTML, CSS en Javascript codes die je kan gaan gebruiken om sneller een responsieve website of webapplicatie te gaan bouwen.


## De basis

Alles start bij het inladen van het Bootstrap framework. 

Dan kan bijvoorbeeld de de bibliotheek via een CDN (content delivery network) te gaan gebruiken laden in uw <code>head</code>.

Vanaf dat dat is gebeurd kan je uw HTML gaan verrijken met specifieke classes en attributen om meteen opmaak en gedragingen te gaan toepassingen die je zonder het framework zelf zou moeten schrijven.

<u>HTML</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;html&gt;
  &lt;head&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
 
    &lt;!-- Latest compiled and minified CSS --&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"&gt;

    &lt;!-- Latest compiled JavaScript --&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="container"&gt;
      &lt;div class="row"&gt;
        &lt;div class="col"&gt;
        Column 1
        &lt;/div&gt;
        &lt;div class="col"&gt;
        Column 2
        &lt;/div&gt;
        &lt;div class="col"&gt;
        Column 3
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;html&gt;
</pre>