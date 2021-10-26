---
layout: template
title: 'HTML entiteiten'
url: /tips-and-tricks/html-entiteiten
collection: tricks
---
 
## {{ page.title }}

Elk karakter op een webpagina heeft een specifieke code. Je kan de tekstuele inhoud dus zowel opbouwen via de invoer van het toetsenbord als via de specifieke code.

### Enkele veel voorkomende symbolen

<table class="table">
    <tbody><tr>
      <th>Teken</th>
      <th>Omschrijving</th>
      <th>Entiteit naam</th>
      <th>Entiteit (hexa) code</th> 
    </tr>
    <tr>
      <td style="height: 29px"></td>
      <td style="height: 29px">non-breaking space</td>
      <td style="height: 29px">&amp;nbsp;</td>
      <td style="height: 29px">&amp;#160;</td>  
    </tr>
    <tr>
      <td>&lt;</td>
      <td>less than</td>
      <td>&amp;lt;</td>
      <td>&amp;#60;</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>greater than</td>
      <td>&amp;gt;</td>
      <td>&amp;#62;</td>
    </tr>
    <tr>
      <td>&amp;</td>
      <td>ampersand</td>
      <td>&amp;amp;</td>
      <td>&amp;#38;</td>
    </tr>
    <tr>
      <td>"</td>
      <td>double quotation mark </td>
      <td>&amp;quot;</td>
      <td>&amp;#34;</td>
    </tr>
    <tr>
      <td>'</td>
      <td>single quotation mark (apostrophe) </td>
      <td>&amp;apos;</td>
      <td>&amp;#39;</td>
    </tr>
    <tr>
      <td>¢</td>
      <td>cent</td>
      <td>&amp;cent;</td>
      <td>&amp;#162;</td>
    </tr>
    <tr>
      <td>£</td>
      <td>pound</td>
      <td>&amp;pound;</td>
      <td>&amp;#163;</td>
    </tr>
    <tr>
      <td>¥</td>
      <td>yen</td>
      <td>&amp;yen;</td>
      <td>&amp;#165;</td>
    </tr>
    <tr>
      <td>€</td>
      <td>euro</td>
      <td>&amp;euro;</td>
      <td>&amp;#8364;</td>
    </tr>
    <tr>
      <td>©</td>
      <td>copyright</td>
      <td>&amp;copy;</td>
      <td>&amp;#169;</td>
    </tr>
    <tr>
      <td>®</td>
      <td>registered trademark</td>
      <td>&amp;reg;</td>
      <td>&amp;#174;</td>
    </tr>
    </tbody>
</table>

<div class="highlight">
    Door het gebruik van <code>&lt;meta charset="utf-8"&gt;</code> kan je elk character ook zonder die <em>entiteit nummer</em> of <em>entiteit naam</em> tonen.
</div>

<div class="links">
    <h4>Hier moet je zijn</h4>
    <p>
    Nog veel meer over HTML entiteiten: <a href="https://www.w3schools.com/html/html_entities.asp" target="_blank">https://www.w3schools.com/html/html_entities.asp</a>
    </p>
    <p> 
    Ook emoji's worden met UTF-8 ondersteund: <a href="https://nl.piliapp.com/emoji/list/smileys-people/" target="_blank">https://nl.piliapp.com/emoji/list/smileys-people/</a>
    </p>
</div>