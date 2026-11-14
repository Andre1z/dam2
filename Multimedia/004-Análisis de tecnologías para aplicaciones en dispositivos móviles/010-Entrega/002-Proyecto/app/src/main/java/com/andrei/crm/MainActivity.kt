package com.andrei.crm

import android.os.Bundle
import android.util.Log
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import androidx.activity.ComponentActivity
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val webView = WebView(this)
        setContentView(webView)

        // Permite depurar la WebView desde Chrome
        WebView.setWebContentsDebuggingEnabled(true)

        // Configuración básica
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.allowFileAccess = true
        webView.settings.allowContentAccess = true

        // Carga segura de archivos desde assets
        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler(
                "/assets/",
                WebViewAssetLoader.AssetsPathHandler(this)
            )
            .build()

        webView.webViewClient = object : WebViewClientCompat() {

            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }

            override fun onPageFinished(
                view: WebView,
                url: String
            ) {
                super.onPageFinished(view, url)

                Log.d(
                    "ANDREI_CRM",
                    "Página cargada correctamente: $url"
                )
            }
        }

        webView.webChromeClient = object : WebChromeClient() {

            override fun onConsoleMessage(
                message: ConsoleMessage
            ): Boolean {

                Log.d(
                    "ANDREI_CRM",
                    "JS: ${message.message()} | " +
                            "Línea: ${message.lineNumber()} | " +
                            "Archivo: ${message.sourceId()}"
                )

                return true
            }
        }

        // Carga la aplicación principal
        webView.loadUrl(
            "https://appassets.androidplatform.net/assets/index.html"
        )
    }
}