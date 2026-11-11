@echo off
setlocal
cd /d "%~dp0"

if not defined CXX (
    set "CXX=g++"
    if exist "%LOCALAPPDATA%\Microsoft\WinGet\Packages\BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe\mingw64\bin\g++.exe" set "CXX=%LOCALAPPDATA%\Microsoft\WinGet\Packages\BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe\mingw64\bin\g++.exe"
)
if not exist "%CXX%" (
    where "%CXX%" >nul 2>nul
    if errorlevel 1 (
        echo No se encuentra "%CXX%". Instala GCC con soporte C++20 y anadelo a PATH.
        exit /b 1
    )
)

"%CXX%" -std=c++20 -O2 -Wall -Wextra -pedantic main.cpp AndreiBBDD.cpp -o AndreiBBDD.exe
if errorlevel 1 (
    echo Error al compilar AndreiBBDD.exe.
    exit /b 1
)

echo Compilacion correcta: %~dp0AndreiBBDD.exe
endlocal
