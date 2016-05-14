---
layout:			default
title:			Articles to quench your curiosity
type:       dummy
---


<div class="ui basic segment">
{% for post in site.categories['curiosity'] %}
{% if post.type != 'dummy' %}
    {% include article_snippet.html post=post %}
{% endif %}
{% endfor %}
</div>
