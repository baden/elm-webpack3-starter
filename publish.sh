#!/bin/bash

rsync -axzP -e ssh ./dist/ baden@navi2.baden.space:~/navi2/www/
