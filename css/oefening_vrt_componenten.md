---
layout: template
title: 'OEFENING: componenten'
url: /css/oefening_componenten
collection: [css]
links:
  - url: /webdesign/tips-and-tricks/bestandsnamen
    title: 'Project structuur: bestanden en mappen'  
---
<div class="highlight">
    <h3>Component gebaseerd webdesign</h3>
    <ul>
        <li>
            Component based werken heeft als grote voordeel dat je CSS schrijft per component zonder al meteen aan het grotere geheel te moeten denken. Uiteindelijk is een website een configuratie van componenten maar de focus ligt op elk component individueel.
        </li>
        <li>
            Door élk component een specifieke class te geven en de CSS voor dat component te starten met <code>.component-naam ... { ... }</code> ben je verplicht de CSS per component goed te hebben en is de invloed van CSS op een ander component beperkt.
        </li>
        <li> 
            Waar mogelijk is het uiteraard wel wenselijk dat zaken die in verschillende componenten weer keren niet voor elk component afzonderlijk te definiëren. Een goed voorbeeld is bijvoorbeeld de knop (of link die er als een knop uit ziet). We doen dat door elke component ook de class <code>.component</code> mee te geven. zo kan je dus via <code>.component .button { ... }</code> de CSS schrijven en zal die CSS gebruikt worden in alle componenten waar een element met class <code>button</code> voor komt.
        </li>
        <li>
            Wat we dus bij het ontwerpen van de componenten nog niet doen is deze in een bepaalde configuratie plaatsen. Maar dat is wel een fluitje van een cent als de CSS per component goed geschreven is.
        </li>
    </ul>
</div>

<div class="highlight">
    <h3>Instructies</h3>
    <ul>
        <li>maak de bestanden aan volgens de conventies (zie link onderaan) in de folder "vrt_componenten"</li>
        <li>Voorzie één HTML pagina die de onderstaande componenten groepeerd. Voorzie ook alle CSS in één CSS bestand. Start de CSS selector telkens met een class specifiek per component.
<pre>
/* component Sporza call-to-action */
.component .cta .cta-sporza {

}

.component .cta .cta-sporza ... {

}
...
</pre>
        </li>
        <li>TIP: gebruik de website vrtnws.be en de inspectietool om componenten zo waarheidsgetrouw te maken. Je kan alvast ook laten inspireren door de CSS.
        </li>
    </ul>
</div>

<h3>artikel 1</h3>
<img src="/webdesign/css/oefeningen/vrt_artikel_1.png" />

<h3>artikel 2</h3>
<img src="/webdesign/css/oefeningen/vrt_artikel_2.png" />

<h3>artikel feedback</h3>
<img src="/webdesign/css/oefeningen/vrt_artikel_feedback.png" />

<h3>sporza call-to-action</h3>
<img src="/webdesign/css/oefeningen/vrt_sporza_cta.png" />

<h3>top bar</h3>
<img src="/webdesign/css/oefeningen/vrt_top_bar.png" />

<h3>VRT call-to-action 1</h3>
<img src="/webdesign/css/oefeningen/vrt_cta_1.png" />

<h3>VRT call-to-action 2</h3>
<img src="/webdesign/css/oefeningen/vrt_cta_2.png" />
