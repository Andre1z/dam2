<?php
require_once dirname(__DIR__)."/nucleo/AndreiDB.php";
if(!AndreiDB::installed()){header("Location: instalacion/instalar.php");exit;}
?>
<!doctype html><html lang="es"><head><link rel="icon" type="image/svg+xml" href="https://static.jocarsa.com/logos/crimson.svg"><meta charset="utf-8"><title>Acceso · Crimson</title>
<style>
:root{--c:#1d4ed8}*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#eff6ff;font-family:Ubuntu,Arial,sans-serif;color:#111827}.login{width:360px;background:#ffffff;border:1px solid #dbeafe;padding:26px;box-shadow:0 10px 30px #11182711}.brand{color:var(--c);font-weight:700;font-size:20px;margin-bottom:24px}.login label{display:block;margin:12px 0 5px}.login input{width:100%;padding:11px;border:1px solid #dbeafe;font:inherit}.login button{width:100%;margin-top:18px;padding:11px;border:0;background:var(--c);color:#ffffff;font:inherit;cursor:pointer}.error{min-height:20px;color:#1e40af;margin-top:10px;font-size:13px}
/* paleta-andrei */:root{--naranja:#f97316;--azul:#1d4ed8;--azul-medio:#1e40af;--azul-claro:#eff6ff;--azul-palido:#dbeafe;--blanco:#ffffff;--negro:#111827;--radio:12px}:where(button,input,select,textarea,fieldset,img,video,canvas,iframe,table,pre,dialog,details,article,section,aside,nav a,[class*="card"],[class*="tarjeta"],[class*="panel"],[class*="caja"],[class*="boton"],[class*="btn"],[class*="widget"],[class*="modal"]){border-radius:var(--radio)}</style></head><body><form class="login" id="login"><div class="brand">andrei | crimson</div><h1>Acceso</h1><label>Usuario</label><input id="username" autocomplete="username" required autofocus><label>Contraseña</label><input id="password" type="password" autocomplete="current-password" required><button>Entrar</button><div class="error" id="error"></div></form>
<script>
fetch("api/auth.php?action=status",{cache:"no-store"})
.then(r=>r.json())
.then(d=>{
  if(d.installed===false){location.href="instalacion/instalar.php";return}
  if(d.authenticated)location.href="index.html";
});
login.onsubmit=async e=>{e.preventDefault();error.textContent="";const r=await fetch("api/auth.php?action=login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:username.value,password:password.value})});const d=await r.json();if(!r.ok){error.textContent=d.error||"Error";return}location.href="index.html"};
</script></body></html>
