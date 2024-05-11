@echo off

for /f %%i in (.pidfile) do (
    taskkill /PID %%i /F
)
