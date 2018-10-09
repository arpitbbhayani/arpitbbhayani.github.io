###
### python scripts/add-new-programming-question.py hackerrank "find-point" "Find Point" "https://www.hackerrank.com/challenges/find-point" ~/hackerrank/find-point.cpp "cpp"
###
import os
import sys
from datetime import datetime

SITENAME = None
QUESTION_DISPLAY_TEXT = None
SITENAME_CAPS = None
QUESTION_CODE = None
QUESTION_URL = None
SOURCE_CODE = None
LANGUAGE = None

POSTS_DIR = '_posts'
templates_filepath = 'scripts/question-complete-template.txt'

def process():
    template = None
    with open(templates_filepath, 'r') as f:
        template = f.read()

    template = template.replace('$REPLACE_SITENAME_CAPS', SITENAME_CAPS)\
                       .replace('$REPLACE_SITENAME', SITENAME)\
                       .replace('$REPLACE_QUESTION_DISPLAY_TEXT', QUESTION_DISPLAY_TEXT)\
                       .replace('$REPLACE_QUESTION_CODE', QUESTION_CODE)\
                       .replace('$REPLACE_QUESTION_URL', QUESTION_URL)\
                       .replace('$REPLACE_SOURCE_CODE', SOURCE_CODE)\
                       .replace('$REPLACE_LANGUAGE', LANGUAGE)

    filename = '%s-%s.markdown' % (datetime.today().date(), QUESTION_CODE)
    with open(os.path.join(POSTS_DIR, SITENAME, filename), 'wb') as f:
        f.write(template)


if __name__ == '__main__':
    argv = sys.argv
    if len(argv) != 7:
        print 'Refer: python scripts/add-new-programming-question.py hackerrank "find-point" "Find Point" "https://www.hackerrank.com/challenges/find-point" ~/hackerrank/find-point.cpp "cpp"'
        sys.exit(2)
    SITENAME = argv[1]
    SITENAME_CAPS = SITENAME.upper()
    QUESTION_CODE = argv[2]
    QUESTION_DISPLAY_TEXT = argv[3]
    QUESTION_URL = argv[4]

    with open(argv[5], 'rb') as f:
        SOURCE_CODE = f.read()

    LANGUAGE = argv[6]

    process()
