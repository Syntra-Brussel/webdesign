---
layout: template
title: 'E-mail adres maskeren'
url: /tips-and-tricks/e-mail-maskeren
collection: tricks
links:
  - url: http://www.email-obfuscator.com
---
Een link naar een e-mail adres leggen kan via HTML eenvoudig via het <code>&lt;a&gt;</code> element.

<pre data-enlighter-language="html">
&lt;a href=&quot;mailto:bill.gates@microsoft.com&quot;&gt;e-mail mij&lt;/a&gt;
</pre>

Niet enkel bezoekers van de webpagina kunnen op deze link klikken. Ook SPAM bots doen dit massaal en geautomatiseerd. Voor je het weet zit de mailbox dus vol met SPAM.

Je kan het de SPAM bots moeilijker maken door bijvoorbeeld een stukje Javascript uit te voeren wanneer je op de link klikt: 

<pre data-enlighter-language="html">
&lt;a href=&quot;javascript:location='mailto:\u0062\u0069\u006c\u006c\u002e\u0067\u0061\u0074\u0065\u0073\u0040\u006d\u0069\u0063\u0072\u006f\u0073\u006f\u0066\u0074\u002e\u0063\u006f\u006d';void 0">mail mij&lt;/a&gt;
</pre>

Het is niet heiligmakend maar je maakt het de SPAM bots moeilijker.