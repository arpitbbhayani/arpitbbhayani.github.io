---
title:  Solutions to various questions in competitive programming
layout: default
comments: true
type: dummy
---

<div class="ui grid">
    <div class="one wide column"></div>
    <div class="fourteen wide column">
        <div class="ui secondary pointing menu basic">
          <a class="active blue item" data-tab="spoj">Spoj</a>
          <a class="item purple" data-tab="leetcode">Leetcode</a>
        </div>
        <div class="ui bottom attached active tab basic segment" data-tab="spoj">
            {% include question_set.html s='spoj' %}
        </div>
        <div class="ui bottom attached tab basic segment" data-tab="leetcode">
            {% include question_set.html s='leetcode' %}
        </div>
    </div>
</div>
