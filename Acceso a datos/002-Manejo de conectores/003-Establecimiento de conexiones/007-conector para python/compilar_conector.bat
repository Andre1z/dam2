@echo off
setlocal

set "PYTHON=python"
for /f "delims=" %%I in ('%PYTHON% -c "import sys; print(sys.prefix)"') do set "PYROOT=%%I"
for /f "delims=" %%I in ('%PYTHON% -c "import sysconfig; print(sysconfig.get_config_var('EXT_SUFFIX'))"') do set "EXT_SUFFIX=%%I"
for /f "delims=" %%I in ('%PYTHON% -c "import sys; print('python' + str(sys.version_info.major) + str(sys.version_info.minor))"') do set "PYLIB=%%I"
for /f "delims=" %%I in ('%PYTHON% -c "import struct; print('x64' if struct.calcsize('P') == 8 else 'x86')"') do set "PYARCH=%%I"

if not defined PYROOT (
    echo No se ha encontrado Python. Comprueba que python esta en PATH.
    exit /b 1
)
if not defined EXT_SUFFIX (
    echo No se ha podido determinar la extension de Python.
    exit /b 1
)

set "VSWHERE=%ProgramFiles(x86)%\Microsoft Visual Studio\Installer\vswhere.exe"
if not exist "%VSWHERE%" (
    echo No se encuentra Visual Studio Installer. Instala Visual Studio Build Tools con C++.
    exit /b 1
)
for /f "usebackq delims=" %%I in (`"%VSWHERE%" -latest -products * -property installationPath`) do set "VSROOT=%%I"
if not defined VSROOT (
    echo No se encuentra Visual Studio Build Tools. Instala el workload de C++.
    exit /b 1
)

call "%VSROOT%\Common7\Tools\VsDevCmd.bat" -arch=%PYARCH% -host_arch=x64
if errorlevel 1 exit /b 1

pushd "%~dp0"
cl /nologo /O2 /W3 /EHsc /std:c++14 /LD /I"%PYROOT%\include" conector_python.cpp AndreiBBDD.cpp /link /LIBPATH:"%PYROOT%\libs" %PYLIB%.lib /OUT:"andreibbdd%EXT_SUFFIX%"
set "RESULT=%ERRORLEVEL%"
popd
if not "%RESULT%"=="0" exit /b %RESULT%

echo Extension creada: andreibbdd%EXT_SUFFIX%
