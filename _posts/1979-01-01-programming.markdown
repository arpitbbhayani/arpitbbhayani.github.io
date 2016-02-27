---
title:  Solutions to various questions in competitive programming
layout: default
comments: true
type: dummy
---

<div class="ui grid" style="background-color: #FFFFFF;">
    <div class="one wide column"></div>
    <div class="sixteen wide column">
        <div class="ui secondary pointing large menu">
          <a class="active blue item" data-tab="spoj">Spoj</a>
          <a class="item violet" data-tab="leetcode">Leetcode</a>
          <a class="item brown" data-tab="codechef">Codechef</a>
        </div>
        <div class="ui active tab">
            <div class="ui bottom attached active tab" data-tab="spoj">
                {% include question_set.html s='spoj' cols=3 %}
            </div>
            <div class="ui tab" data-tab="leetcode">
                {% include question_set.html s='leetcode' cols=2 %}
            </div>
            <div class="ui tab" data-tab="codechef">
                {% include question_set.html s='codechef' cols=3 %}
            </div>
        </div>
    </div>
</div>
