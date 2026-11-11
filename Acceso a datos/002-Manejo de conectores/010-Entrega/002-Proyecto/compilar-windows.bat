@echo off
rem AndreiDB - compilacion en Windows con GCC 8 o superior (WinLibs / MinGW-w64)
rem Genera andreidb.exe en esta misma carpeta. Los datos se guardan en data\
setlocal
cd /d "%~dp0"

if not defined CXX (
    set "CXX=g++"
    if exist "%LOCALAPPDATA%\Microsoft\WinGet\Packages\BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe\mingw64\bin\g++.exe" set "CXX=%LOCALAPPDATA%\Microsoft\WinGet\Packages\BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe\mingw64\bin\g++.exe"
)

"%CXX%" -std=c++17 -O2 -Wall -Wextra -static -Iserver -Iprocedimientos server\*.cpp procedimientos\*.cpp -lws2_32 -o andreidb.exe
if errorlevel 1 (
    echo Error al compilar. Hace falta GCC 8 o superior ^(C++17 con ^<filesystem^>^).
    exit /b 1
)

echo Compilado: %~dp0andreidb.exe
echo Para arrancarlo: andreidb.exe  ^(los datos se guardan en %~dp0data^)
endlocal
