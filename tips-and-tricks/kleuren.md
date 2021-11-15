---
layout: template
title: 'Kleuren'
url: /tips-and-tricks/kleuren
collection: tricks
links:
  - url: https://www.w3schools.com/colors/colors_picker.asp
    label: Color picket
  - url: https://www.color-hex.com
    label: Populaire kleuren en kleuren die mooi samen passen
---
Elke kleur binnen op een website heeft een hexadecimale waarde. Elke hexadecimale waarde is eigenlijk een vertaling van 3 getallen, de RGB waardes.

Een <strong style="color: red">R</strong>ood waarde tussen 0 en 255.
Een <strong style="color: green">G</strong>roen waarde tussen 0 en 255.
Een <strong style="color: blue">B</strong>lauw waarde tussen 0 en 255.

Zwart heeft 0 (R), 0 (G), 0 (B) = #000000
Wit heet 255 (R), 255 (G), 255 (B) = #FFFFFF

Elke andere kleur heeft een waarde die tussen deze twee uitersten valt.

Een oranje tint heeft bijvoorbeeld deze waarde:
HEX: #ff9933
RGB: 255, 153, 51

<u>HTML</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;div class="kleur-1"&gt;kleur 1&lt;/div&gt;
&lt;div class="kleur-2"&gt;kleur 2&lt;/div&gt;
&lt;div class="kleur-3"&gt;kleur 3&lt;/div&gt;
</pre>

<u>CSS</u>:
<pre data-enlighter-theme="beyond" data-enlighter-language="css">
/* een witte tekst kleur, een oranje achtergrond kleur */
.kleur-1 {
  background-color: #ff9933;
  color: #ffffff;
}

/* ofwel */
.kleur-2 {
  background-color: rgb(255, 153, 51);
  color: rgb(255, 255, 255);
}

/* half transparant */
.kleur-3 {
  background-color: rgba(255, 153, 51, .5);
  color: rgb(255, 255, 255);
}
</pre>
