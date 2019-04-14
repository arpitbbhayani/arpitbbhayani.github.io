---
layout:			default
title:			All how-was-it-calculated articles
category:		tag
passed-tag:		how-was-it-calculated
type:           dummy
---


<div class="ui basic segment">
{% for post in site.tags[page.passed-tag] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
</div>
