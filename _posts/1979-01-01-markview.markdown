---
title:  MarkView - A fast in browser markdown previewer, also supports Github flavoured markdown.
layout: default
comments: false
tags:
 - markdown
 - live markdown
 - github flavoured markdown
 - markdown to html
 - codemirror
 - marked.js
seo:
 tags:
  - markdown
  - live markdown
  - github flavoured markdown
  - markdown to html
  - codemirror
  - marked.js
 description: A fast in browser markdown previewer.
type: dummy
---


<link rel="stylesheet" href="/static/css/codemirror.css">
<script src="/static/js/codemirror.js"></script>
<script src="/static/js/gfm.js"></script>
<script src="/static/js/marked.js"></script>

<div class="ui two column grid" style="margin-top: -75px;">
    <div class="ui column" id="editor"></div>
    <div class="ui column" id="preview" style="height: 600px; overflow-y: scroll;"></div>
</div>


<script>
$(document).ready(function() {
    var editor = CodeMirror(document.getElementById("editor"), {
        lineNumbers: true,
        mode: "markdown",
        theme: "material",
        smartIndent: true,
        lineWrapping: true,
        styleActiveLine: true
    });

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    editor.on("change", function(instance, changeObject) {
        document.getElementById('preview').innerHTML = marked(instance.getValue());
    });
});
</script>
