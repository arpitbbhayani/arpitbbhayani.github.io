---
layout:			default
title:			Posts with tag - alpha-centauri
category:		tag
passed-tag:		alpha-centauri
type:           dummy
---

{% for post in site.tags[page.passed-tag] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
