import os
import sys

def replace(folder_path):
    for path, subdirs, files in os.walk(folder_path):
        for name in files:
            if "1979-01-01-" in name:
                file_path = os.path.join(path, name)
                new_name = os.path.join(path,name.lower().replace("1979-01-01", "2019-04-13"))
                os.rename(file_path, new_name)

replace(sys.argv[1])