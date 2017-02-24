---
title:  Geek at Work
layout: default
comments: true
tags:
 - geekatwork
seo:
 tags:
  - geekatwork
 description: Geek at Work
type: dummy
---

<div class="ui basic segment center aligned">
    <div class="ui big icon input transperent" style="width: 75%;">
        <input type="text" id="search-box" name="query" placeholder="Search">
        <i class="search red icon"></i>
    </div>
</div>

<div class="ui basic very padded segment">
    <div class="ui four stackable cards doubling" id="search-results"></div>
</div>

<script>
  {% assign posts = site.categories['geekatwork'] %}
  window.store = {
    {% for post in posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "tags": {{ post.tags | jsonify }},
        "date": "{{ post.date | date: '%B %d, %Y' }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}",
        "img": "{{ post.img }}",
        "description": "{{ post.seo.description | slice: 0, 80 }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
  window.all_posts = [
    {% for post in posts %}
      {
        "ref": "{{ post.url | slugify }}",
        "title": "{{ post.title | xml_escape }}",
        "tags": {{ post.tags | jsonify }},
        "date": "{{ post.date | date: '%B %d, %Y' }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}",
        "img": "{{ post.img }}",
        "description": "{{ post.seo.description | slice: 0, 80 }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>
