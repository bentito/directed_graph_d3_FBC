directed-graph-creator
======================

Interactive tool for creating directed graphs, created using d3.js.

Demo: http://bl.ocks.org/cjrd/6863459

Operation:

* drag/scroll to translate/zoom the graph
* shift-click on graph to create a node
* shift-click on a node and then drag to another node to connect them with a directed edge
* shift-click on a node to change its title
* click on node or edge and press backspace/delete to delete

Run:

* `python -m SimpleHTTPServer 8000`
* navigate to http://127.0.0.1:8000

Github repo is at https://github.com/metacademy/directed-graph-creator

License: MIT/X

BBT Work Notes:
* Writing dataHandlers.js to bring in FBC catalog stuff.
* catalog_json_fix.sh fixes catalog.json to make it actual JSON (WTF!)
* index.html is currently starting point for a working directed graph bit of code using D3
* d3.html is currently the workspace for d3.json import based work on getting catalog.json into a useful, in-memory form, for graphing






