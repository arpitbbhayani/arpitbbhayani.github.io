import os
import yaml

sites = ['leetcode', 'spoj', 'codechef']

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

        d = yaml.load(tokens[1])

        code = d['title'].split('solution for')[1].strip()

        d['img'] = 'https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg'
        d['comments'] = True
        d['categories'] = site
        d['layout'] = 'post'
        d['tags'] = ['competitive-programming', 'programming']
        d['seo'] = {
         'description': 'Here is the solution for programming question %s on %s' % (code, site),
         'tags': ['solution', 'source code', 'programming']
        }
        d['title'] = 'Solution for programming question %s on %s' % (code, site)

        yaml_str = yaml.dump(d, default_flow_style=False)
        tokens[1] = '\n' + yaml_str

        content = '---'.join(tokens)

        # Write
        with open(path, 'wb') as outf:
            outf.write(content)
