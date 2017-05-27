---
title:  Curiosity
layout: default
---

<div class="ui hidden divider"></div>
<div class="ui items">
{% for post in site.posts %}
  {% if post.type != 'dummy' and post.categories[0] == 'curiosity' %}
      {% include article_snippet.html post=post %}
  {% endif %}
{% endfor %}
</div>
