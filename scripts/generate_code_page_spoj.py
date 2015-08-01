import os
import codecs
from optparse import OptionParser

CODE_URL_FILE = '/home/arpit/spoj_out'
SOURCE_DIR_LOCATION = '/home/arpit/spoj_files'

TEMPLATE_FILE = '/home/arpit/sites/arpitbbhayani.github.io/templates/spoj-solution-template.html'

OUTPUT_DIR = '/home/arpit/sites/arpitbbhayani.github.io/_posts/spoj/'

LANG_EXT_MAP = {
	'c'		: 'c',
	'cpp'	: 'cpp',
	'py'	: 'python'
}

code_url_map = {}

def read_files(code_url_file):
	"""
	code_url_file: Contains mapping of SPOJ QUESTION CODE to URL
	"""
	with open(code_url_file, 'rb') as f:
		for line in f:
			elements = line.split()
			code_url_map[elements[0]] = elements[1]

	print len(code_url_map)

def get_language_from_ext(ext):
	if not LANG_EXT_MAP.has_key(ext):
		raise Exception
	return LANG_EXT_MAP[ext]

def main():
	read_files(CODE_URL_FILE)

	with open(TEMPLATE_FILE, 'rb') as f:
		template = f.read()

	files = os.listdir(SOURCE_DIR_LOCATION)
	files.sort()
	for f in files:

		print 'FILE:', f
		
		with open(os.path.join(SOURCE_DIR_LOCATION, f), 'rb') as t:
			solution_source = t.read()
		
		post_processed = template.replace('$CODE$', f.split('.')[0])
		post_processed = post_processed.replace('$URL$', code_url_map[f.split('.')[0]])
		post_processed = post_processed.replace('$LANG$', get_language_from_ext(f.split('.')[1]))
		post_processed = post_processed.replace('$SOURCE_CODE$', solution_source)

		output_file = os.path.join(OUTPUT_DIR, '2015-07-01-' + f.split('.')[0] + '.markdown')

		with codecs.open(output_file, 'w', 'utf-8') as t:
			t.write(post_processed)
			print 'Writing file:', output_file

if __name__ == '__main__':
	main()