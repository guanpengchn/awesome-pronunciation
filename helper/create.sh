#!/bin/sh
for i in {C..Z}
do
    # touch $PWD/$i.md
    echo \'/content/$i.md\',
done
