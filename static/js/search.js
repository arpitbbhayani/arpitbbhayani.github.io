var TemplateEngine = function(html, options) {
    var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
}

function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) {
        var appendString = '';

        for (var i = 0; i < results.length; i++) {
            var post = window.store[results[i].ref];
            var template = '\
            <div class="ui card">\
                <div class="image">\
                    <img src="<%this.img%>">\
                </div>\
                <div class="content">\
                    <a class="header" href="<%this.url%>"><%this.title%></a>\
                    <div class="meta">\
                        <span class="date"><%this.date%></span>\
                    </div>\
                </div>\
            </div>';
            appendString += TemplateEngine(template, post);
        }
        searchResults.innerHTML = appendString;
    } else {
        searchResults.innerHTML = '<div class="ui huge center aligned basic label" style="font-weight: normal;">Oops! No results found</div>';
    }
}

window.search_engine = null;

function initSearchEngine() {
    window.search_engine = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('tags', { boost: 50 });
    });

    for (var key in window.store) { // Add the data to lunr
        window.search_engine.add({
            'id': key,
            'title': window.store[key].title,
            'content': window.store[key].content,
            'tags': window.store[key].tags
        });
    }
}

$(document).ready(function() {

    displaySearchResults(window.all_posts, window.store);
    initSearchEngine();

    $('#search-box').keyup(function(e) {
        var searchTerm = $('#search-box').val();
        console.log("Searching", searchTerm);
        if(searchTerm) {
            displaySearchResults(search_engine.search(searchTerm), window.store);
        }
        else {
            displaySearchResults(window.all_posts, window.store);
        }
    });
});
