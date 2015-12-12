---
layout:			default
title:			All alpha-centauri articles
category:		tag
passed-tag:		alpha-centauri
type:           dummy
---

{% for post in site.tags[page.passed-tag] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
