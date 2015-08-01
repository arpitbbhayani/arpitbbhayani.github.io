import os
import codecs
from optparse import OptionParser

CODE_URL_FILE = '/home/arpit/leetcode_out'
SOURCE_DIR_LOCATION = '/home/arpit/leetcode_files'

TEMPLATE_FILE = '/home/arpit/sites/arpitbbhayani.github.io/templates/leetcode-solution-template.html'

OUTPUT_DIR = '/home/arpit/sites/arpitbbhayani.github.io/_posts/leetcode/'

LANG_EXT_MAP = {
	'c'		: 'c',
	'cpp'	: 'cpp',
	'py'	: 'python'
}

code_url_map = {}
code_file_map = {}

def read_files(code_url_file):
	"""
	code_url_file: Contains mapping of leetcode QUESTION CODE to URL
	"""
	with open(code_url_file, 'rb') as f:
		for line in f:
			elements = line.split()
			url = elements[0]
			filepath = ' '.join(elements[1:])
			code_url_map[get_code_from_url(url)] = url
			code_file_map[get_code_from_url(url)] = os.path.join(SOURCE_DIR_LOCATION, filepath)

	print len(code_url_map)

def get_code_from_url(url):
	l = url.split('/')
	code = l[-1]
	if code == '':
		code = l[-2]
	return code

def get_language_from_ext(ext):
	if not LANG_EXT_MAP.has_key(ext):
		raise Exception
	return LANG_EXT_MAP[ext]

def main():
	read_files(CODE_URL_FILE)

	with open(TEMPLATE_FILE, 'rb') as f:
		template = f.read()

	for code, path in code_file_map.items():

		print 'FILE:', code
		
		with open(path, 'rb') as t:
			solution_source = t.read()
		
		post_processed = template.replace('$CODE$', code)
		post_processed = post_processed.replace('$URL$', code_url_map[code])
		post_processed = post_processed.replace('$SOURCE_CODE$', solution_source)

		output_file = os.path.join(OUTPUT_DIR, '2015-08-01-' + code + '.markdown')

		with codecs.open(output_file, 'w', 'utf-8') as t:
			t.write(post_processed)
			print 'Writing file:', output_file

if __name__ == '__main__':
	main()