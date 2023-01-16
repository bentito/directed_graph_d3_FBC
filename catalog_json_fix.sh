#!/bin/bash
(echo "[" && cat "$1") > tmp_filename && mv tmp_filename "$1"
(cat "$1" && echo "]") > tmp_filename && mv tmp_filename "$1"
perl -0777 -pe 's/}\n\{/},\n\{/g' "$1" > tmp_filename
mv tmp_filename "$1"