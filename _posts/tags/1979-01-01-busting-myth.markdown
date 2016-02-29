---
layout:			default
title:			All busting-myth articles
category:		tag
passed-tag:		busting-myth
type:           dummy
---

{% for post in site.tags[page.passed-tag] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
