---
title:  Curiosity
layout: default
---

<div class="ui hidden divider"></div>
{% assign count = 0 %}
{% for post in site.posts %}
    {% if post.type != 'dummy' and post.categories[0] == 'curiosity' %}
        {% include article_snippet.html post=post %}
        {% assign count = count | plus: 1 %}
    {% endif %}
{% endfor %}
