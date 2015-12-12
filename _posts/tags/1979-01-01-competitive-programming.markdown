---
layout:			default
title:			All competitive-programming articles
category:		tag
passed-tag:		competitive-programming
type:           dummy
---

{% for post in site.tags[page.passed-tag] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
