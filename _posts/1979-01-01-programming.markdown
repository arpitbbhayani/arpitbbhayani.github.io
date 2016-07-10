---
title:  Solutions to various questions in competitive programming
layout: default
comments: true
type: dummy
---

<div class="ui hidden section divider"></div>
<div class="ui grid" style="background-color: #FFFFFF;">
  <div class="row computer tablet only">
    <div class="two wide column"></div>
    <div class="twelve wide column">
        <div class="ui secondary pointing large menu">
          <a class="active grey item" data-tab="spoj">
            Spoj <div class="ui basic grey label">{{ site.categories.spoj | size }}</div>
          </a>
          <a class="item grey" data-tab="leetcode">
            Leetcode <div class="ui basic grey label">{{ site.categories.leetcode | size }}</div>
          </a>
          <a class="item grey" data-tab="codechef">
            Codechef <div class="ui basic grey label">{{ site.categories.codechef | size }}</div>
          </a>
          <a class="grey item" data-tab="hackerrank">
            HackerRank <div class="ui basic grey label">{{ site.categories.hackerrank | size }}</div>
          </a>
        </div>
        <div class="ui active tab">
            <div class="ui bottom attached active tab" data-tab="spoj">
                {% include question_set.html s='spoj' cols=4 %}
            </div>
            <div class="ui tab" data-tab="leetcode">
                {% include question_set.html s='leetcode' cols=2 %}
            </div>
            <div class="ui tab" data-tab="codechef">
                {% include question_set.html s='codechef' cols=4 %}
            </div>
            <div class="ui tab" data-tab="hackerrank">
                {% include question_set.html s='hackerrank' cols=3 %}
            </div>
        </div>
    </div>
  </div>
  <div class="row mobile only">
    <div class="sixteen wide column">
        <div class="ui secondary pointing large menu">
          <a class="active grey item" data-tab="spoj">
            Spoj <div class="ui basic grey label">{{ site.categories.spoj | size }}</div>
          </a>
          <a class="item grey" data-tab="leetcode">
            Leetcode <div class="ui basic grey label">{{ site.categories.leetcode | size }}</div>
          </a>
          <a class="item grey" data-tab="codechef">
            Codechef <div class="ui basic grey label">{{ site.categories.codechef | size }}</div>
          </a>
          <a class="item grey" data-tab="hackerrank">
            HackerRank <div class="ui basic grey label">{{ site.categories.hackerrank | size }}</div>
          </a>
        </div>
        <div class="ui active tab">
            <div class="ui bottom attached active tab" data-tab="spoj">
                {% include question_set.html s='spoj' cols=1 %}
            </div>
            <div class="ui tab" data-tab="leetcode">
                {% include question_set.html s='leetcode' cols=1 %}
            </div>
            <div class="ui tab" data-tab="codechef">
                {% include question_set.html s='codechef' cols=1 %}
            </div>
            <div class="ui tab" data-tab="hackerrank">
                {% include question_set.html s='hackerrank' cols=1 %}
            </div>
        </div>
    </div>
  </div>
</div>
