#! /usr/bin/env bash

ssh geekpark.net 'rm -rf /data/www/gpk_zt/apple_event/**'
scp -r deploy/** geekpark.net:/data/www/gpk_zt/apple_event/

echo '发布完成'
