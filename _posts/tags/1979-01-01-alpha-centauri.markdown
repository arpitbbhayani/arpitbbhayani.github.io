---
layout:			default
title:			All alpha-centauri articles
category:		tag
passed-tag:		alpha-centauri
type:           dummy
---


<div class="ui basic segment">
{% for post in site.tags[page.passed-tag] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
</div>
