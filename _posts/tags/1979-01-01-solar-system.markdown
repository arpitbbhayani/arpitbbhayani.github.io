---
layout:			default
title:			Posts with tag - solar-system
category:		tag
passed-tag:		solar-system
type:           dummy
---

{% for post in site.tags[page.passed-tag] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
