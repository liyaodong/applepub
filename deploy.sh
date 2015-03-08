#! /usr/bin/env bash

rsync -av deploy/ geekpark.net:/data/www/gpk_zt/apple_event/

echo '发布完成'
