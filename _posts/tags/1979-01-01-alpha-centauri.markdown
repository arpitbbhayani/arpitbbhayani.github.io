---
layout:			default
title:			Posts with tag - alpha-centauri
category:		tag
passed-tag:		alpha-centauri
type:           dummy
---
Tag: {{page.passed-tag}}

{% for post in site.tags[page.passed-tag] %}
<article>
    <div class="ui stackable grid">
        <div class="four wide column">
            <div class="ui segment basic">
                <div class="ui fluid image">
                    <div class="ui green ribbon label">
                        <i class="date icon"></i>{{post.date | date: '%B %d, %Y'}}
                    </div>
                    <img src="{{post.img}}">
                </div>
            </div>
        </div>
        <div class="twelve wide column fluid">
            <div class="ui basic segment">
                <div class="">
                {% for tag in post.tags %}
                    <a href='/tag/{{tag}}' class="ui blue label">{{tag}}</a>
                {% endfor %}
                </div>
                <br/>
                <div class="article-header">
                    <a href="{{post.url}}" class="ui large header">{{post.title}}</a>
                </div>
                <div class="ui divider"></div>
                <div class="article-meta">
                    <span class="date"></span>
                </div>
                <div class="article-info">
                    <div class="description">{{post.excerpt}}</div>
                </div>
            </div>
        </div>
    </div>
</article>
{% endfor %}
