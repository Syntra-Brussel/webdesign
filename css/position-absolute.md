---
layout: template
title: Floating
url: /css/floating
collection: [css]
---							
<p>Door <code>position: absolute</code>te gebruiken in een CSS selector ga het element een absolute postie geven. Het element gaat zich dus niet meer positioneren achter of onder het vorige element in de HTML structuur.</p>
<p>Standaard zal het het element zich in de linker bovenhoek positioneren.</p>
<p>Door <code>left: 100px</code> te gebruiken positioneer je het element 100px van de linker kant.</p>
Door <code>right: 100px</code> te gebruiken positioneer je het element 100px van de rechter kant.</br>
Door <code>top: 100px</code> te gebruiken positioneer je het element 100px van de bovenkant.</br>
Door <code>bottom: 100px</code> te gebruiken positioneer je het element 100px van de onderkant.</p>
<p>Je kan <code>left</code> en <code>right</code> niet samen gebruiken. Ook <code>top</code> en <code>bottom</code> kan je niet samen gebruiken.</p>

<p>HTML:</p>
<pre data-enlighter-theme="beyond" data-enlighter-language="html">
&lt;img id="visual" src="dummy_600x400_ffffff_cccccc.png" /&gt;
&lt;p&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. &lt;br /&gt;
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.
&lt;/p&gt;
&lt;p&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. &lt;br /&gt;
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.
&lt;/p&gt;
</pre>

<p>CSS:</p>
<pre data-enlighter-theme="beyond" data-enlighter-language="css">
#visual {
    position: absolute;
    left: 100px;
    top: 100px;
}</pre>

<p>Resultaat:</p>

<div class="shadow">
    <img src="images/absolute.png" />
</div>

<h2>z-index</h2>

<p>Via het <code>z-index</code> attribuut kan je de volgorde bepalen om zo (absolute) elementen naar voor of achter te verplaatsen. Standaard heeft de z-index de waarde 0.</p>

<p>CSS:</p>
<pre data-enlighter-theme="beyond" data-enlighter-language="css">
#visual {
    position: absolute;
    left: 100px;
    top: 100px;
    z-index: -1;
}</pre>

<div class="shadow">
    <img src="images/absolute-zindex.png" />
</div>
