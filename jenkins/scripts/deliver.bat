@echo off

CI=false react-scripts run build

npm install 
start /B npm start
timeout /T 1
echo %! > .pidfile

echo Now...
echo Visit http://localhost:3000 to see your Node.js/React application in action.