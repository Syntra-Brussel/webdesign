---
layout: template
title: 'Backgrounds'
url: /tips-and-tricks/backgrounds
collection: tricks
links:
  - url: https://www.w3schools.com/css/css_background.asp 
    title: Backgrounds
  - url: /webdesign/tips-and-tricks/kleuren
    title: Kleuren
  - url: https://www.w3schools.com/colors/colors_gradient.asp
    title: Gradients  
  - url: https://www.w3schools.com/cssref/pr_background-image.asp
    title: Background images
  - url: https://www.w3schools.com/howto/howto_css_parallax.asp
    title: Parallax
---
Elke HTML element heeft de mogelijkheid om met backgrounds te werken. Je kan volgende zaken instellen als backgound:
* een kleur (zie: <a href="/webdesign/tips-and-tricks/kleuren">kleuren</a>)
* aan gradient (een verloop van de ene kleur naar de andere)
* een beeld

<u>HTML</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;section class="with-background"&gt;Met achtergrond&lt;/section&gt;
</pre>

<u>CSS</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="css">
section {
  height: 100px;
  width: 100%;
}
</pre>

## Een kleur

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
.with-background {
  background-color: #ff9933;
}
</pre>

## Een kleur met transparantie
<pre data-enlighter-theme="beyond" data-enlighter-language="css">
.with-background {
  background-color: #ff9933;
  opacity: 0.5;
}
</pre>
Zowel de achtergrond als de inhoud worden half transparant.

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
.with-background {
  background-color: rgba(255, 153, 51, .5);
}
</pre>
De achtergrond wordt half transparant, de inhoud niet.

## Een gradient
<pre data-enlighter-theme="beyond" data-enlighter-language="css">
.with-background {
  background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
}
</pre>
Experimenteer gerust verder via de link hieronder.

## Een beeld
We hebben geleerd hoe je een beeld gebruikt via het <code><img></code> element. Als je een beeld als achterground gebruikt kan je er inhoud (tekst bijvoorbeeld) bovenop plaatsen.

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
.with-background {
  background: url('https://www.w3schools.com/css/mountain.jpg');
}
</pre>

Experimenteer nu wat met de eigenschappen  <code>background-size</code>, <code>background-repeat</code> en <code>background-position</code>.

De sky is the limit.