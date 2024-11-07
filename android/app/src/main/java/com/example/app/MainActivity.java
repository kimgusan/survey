//package com.example.app;
//
//import com.getcapacitor.BridgeActivity;
//
//public class MainActivity extends BridgeActivity {}

package com.example.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        WebView webView = bridge.getWebView();
        webView.setWebViewClient(new WebViewClient()); // 웹뷰 내에서 링크 열기
        webView.loadUrl("https://kimgusan.github.io/survey"); // 설정한 URL 로드
    }
}