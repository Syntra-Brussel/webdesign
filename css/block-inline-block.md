						
<p>In de cursus “VSA HTML” bekeken we uitgebreid het verschil tussen block elementen en inline-block elementen.</p>

<p>Via CSS kan je van een block element een inline-block element maken en omgekeerd.</p>

<pre data-enlighter-theme="beyond" data-enlighter-language="css">
/* 
- selector is een div met class "column"
- een div is normaal een block element 
*/
.column {
    display: inline-block;
}</pre>



<pre data-enlighter-theme="beyond" data-enlighter-language="css">
/* 
het label element is normaal een inline-block element, nu gedraagt het zich al een block element 
*/
label {
    display: block;
}
</pre>
