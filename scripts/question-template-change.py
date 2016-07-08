import os
import re
import yaml

sites = ['codechef', 'leetcode', 'spoj']


def new_content_body(content, code, site):
    print code, site
    source_code = content.split("{% highlight cpp %}")[1].split('{% endhighlight %}')[0]
    # print content
    url = re.search('\[[a-zA-Z0-9-_]+\](\((.*)\))', content).group(2)

    with open('question_template_body.txt', 'r') as f:
        b = f.read()
        b = b.replace('REPLACE_QUESTION_CODE', code)
        b = b.replace('REPLACE_SITE', site)
        b = b.replace('REPLACE_QUESTION_URL', url)
        b = b.replace('REPLACE_SOURCE_CODE', source_code)

        return b


for site in sites:
    SOURCE_DIR = '/Users/arpitbhayani/arpitbhayani.me/_posts/%s' % site

    files = os.listdir(SOURCE_DIR)
    for f in files:
        path = os.path.join(SOURCE_DIR, f)
        # Read
        with open(path) as inf:
            content = inf.read()

        # Modify
        tokens = content.split('---')

        assert len(tokens) >= 3

        d = yaml.load(tokens[1])

        code = d['title'].split()[4]

        d['img'] = 'https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true'
        d['comments'] = True
        d['categories'] = site
        d['layout'] = 'post'
        d['tags'] = ['competitive-programming', 'programming']
        d['seo'] = {
         'description': 'Here is the solution for programming question %s on %s' % (code, site),
         'tags': ['solution', 'source code', 'programming', site, '%s Solution' % (code)]
        }
        d['title'] = '%s %s Solution' % (site.upper(), code)

        yaml_str = yaml.dump(d, default_flow_style=False)

        content_body = '---'.join(tokens[2:])

        new_body = new_content_body(content_body, code, site)

        tokens[1] = '\n' + yaml_str
        tokens[2] = '\n' + new_body

        content = '---'.join(tokens)

        # print content
        with open(path, 'wb') as outf:
            outf.write(content)
