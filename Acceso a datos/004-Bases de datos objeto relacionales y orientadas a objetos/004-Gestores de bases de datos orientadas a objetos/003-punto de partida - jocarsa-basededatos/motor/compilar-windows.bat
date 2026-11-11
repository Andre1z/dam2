@echo off
rem Compila AndreiBBDD para Windows con GCC (MinGW-w64 / WinLibs):
rem   andreibbdd.dll  -> la usa la interfaz PHP (UI/andreibbdd_ffi.php) mediante FFI
rem   andreibbdd.exe  -> consola interactiva del motor
rem No necesita json-c: usa el sustituto de compat\json-c\json.h.
rem Se enlaza de forma estatica para que Apache no dependa de DLL de MinGW.
setlocal
cd /d "%~dp0"

rem Hace falta GCC 8 o superior (C++17 con ^<filesystem^>). Se prefiere WinLibs
rem porque un C:\MinGW antiguo en el PATH (GCC 6) no sirve.
if not defined CXX (
    set "CXX=g++"
    if exist "%LOCALAPPDATA%\Microsoft\WinGet\Packages\BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe\mingw64\bin\g++.exe" set "CXX=%LOCALAPPDATA%\Microsoft\WinGet\Packages\BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe\mingw64\bin\g++.exe"
)
if not exist "%CXX%" (
    where "%CXX%" >nul 2>nul
    if errorlevel 1 (
        echo No se encuentra %CXX%. Instala GCC 8 o superior ^(por ejemplo WinLibs^) y anadelo al PATH.
        exit /b 1
    )
)
echo Compilador: %CXX%

set "FLAGS=-std=c++17 -O2 -Wall -Wextra -Wno-misleading-indentation -Wno-sign-compare -static -Iinclude -Icompat"

echo Compilando andreibbdd.dll ...
"%CXX%" %FLAGS% -shared src\andreibbdd_c.cpp src\AndreiBBDD.cpp -o andreibbdd.dll
if errorlevel 1 (echo Error al compilar andreibbdd.dll & exit /b 1)

echo Compilando andreibbdd.exe ...
"%CXX%" %FLAGS% src\main.cpp src\AndreiBBDD.cpp -o andreibbdd.exe
if errorlevel 1 (echo Error al compilar andreibbdd.exe & exit /b 1)

echo.
echo Listo. Recuerda activar FFI en C:\xampp\php\php.ini:
echo     extension=ffi
echo     ffi.enable=true
echo y reiniciar Apache desde el panel de XAMPP.
endlocal
