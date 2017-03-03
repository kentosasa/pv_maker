import commands
import sys
import re

txt = commands.getstatusoutput('python lib/tasks/youtube_upload/upload.py --title={} ./public/videos/{}'.format(sys.argv[1], sys.argv[2]))[1]

print(txt)
