#!/usr/bin/env sh

npm run build

npm start &
sleep 1
echo $! > .pidfile

echo 'Now...'
echo 'Visit http://localhost:3000 to see your Node.js/React application in action.'