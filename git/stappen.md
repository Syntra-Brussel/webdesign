---
layout: template
title: Bestanden synchroniseren
url: /git/stappen
collection: git
---

## {{ page.title }}

Een bestand toevoegen / wijzigen en zichtbaar maken voor de anderen teamleden gebeurt in 3 stappen:

<ol>
<li><strong>stage</strong>: bestanden klaar zetten</li>
<li><strong>commit</strong>: bestanden bevestigen</li>
<li><strong>push</strong>: bestanden duwen naar de GIT server</li>
<li><strong>pull</strong>: bestanden ophalen van de GIT server</li>
</ol>

### 1. stage
Bestanden klaar zetten voor een <em>commit</em>

<img src="{{ '/git/images/vsc_na_wijziging.png' | relative_url}}" />
<img src="{{ '/git/images/stagen_commit.png' | relative_url}}" />

### 2. commit
Aanpassingen aan verschillende bestanden worden samen goedgekeurd voor publicatie. Een commit krijgt een gepaste omschrijving.

<img src="{{ '/git/images/commit_2.png' | relative_url}}" />
<img src="{{ '/git/images/na_commit.png' | relative_url}}" />
<img src="{{ '/git/images/voor_push.png' | relative_url}}" />

### 3. push
Een commit die werd gedaan kan nu naar de GIT server worden verstuurd.

<img src="{{ '/git/images/na_push.png' | relative_url}}" />

### 4. pull
De aanpassingen kunnen nu door de andere op hun eigen computer worden gesynchroniseerd.