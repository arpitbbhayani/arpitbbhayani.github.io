import os
import yaml

SOURCE_DIR = '/Users/arpitbhayani/arpitbbhayani.github.io/_posts/leetcode'

files = os.listdir(SOURCE_DIR)
for f in files:
    path = os.path.join(SOURCE_DIR, f)
    # Read
    with open(path) as inf:
        content = inf.read()

    # Modify
    tokens = content.split('---')

    d = yaml.load(tokens[1])

    d['img'] = 'https://gun.io/static/uploads/web%20dev.jpg'
    d['comments'] = True
    d['categories'] = 'leetcode'
    d['layout'] = 'post'
    d['tags'] = ['competitive-programming']

    yaml_str = yaml.dump(d, default_flow_style=False)
    tokens[1] = '\n' + yaml_str

    content = '---'.join(tokens)

    # Write
    with open(path, 'wb') as outf:
        outf.write(content)
