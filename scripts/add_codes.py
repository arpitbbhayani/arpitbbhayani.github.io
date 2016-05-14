# python add_codes.py --file ~/codechef/hello.cpp --qcode CHRL4

from optparse import OptionParser


def process(file_path, id, name, qcode):
    with open(file_path, 'rb') as source_code_file, open('../_posts/' + id + '/1979-01-01-' + qcode + '.markdown', 'wb') as out_file, open('question_template.txt', 'rb') as template_file:
        content = template_file.read()
        content = content.replace('$SITE_ID$', id)
        content = content.replace('$SITE_NAME$', name)
        content = content.replace('$QCODE$', qcode)
        content = content.replace('$QURL$', 'https://www.codechef.com/problems/' + qcode)
        content = content.replace('$CODE$', source_code_file.read())

        out_file.write(content)


if __name__ == '__main__':
    parser = OptionParser("usage='usage: %prog [options] arguments'")
    parser.add_option("--file", dest="in_file",
                      help="Source code")
    parser.add_option("--qcode", dest="question_code",
                      help="Question code")

    (options, args) = parser.parse_args()

    if not options.in_file:
        print 'You forgot to specify --file'
        exit()

    if not options.question_code:
        print 'You forgot to specify --qcode'
        exit()

    process(options.in_file, 'codechef', 'Codechef', options.question_code)
