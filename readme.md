
mdon is a sort of inverted json file that is also valid markdown.

Multiline strings that would normally be encoded into a json file are instead kept in the main markdown file so can be rendred corectly.

Code chunks containig hjson formated data then surround these strings.

hjson can be hackily converted to this format by adding a ''' header and footer then replacing ``` with ''' in the json file.

