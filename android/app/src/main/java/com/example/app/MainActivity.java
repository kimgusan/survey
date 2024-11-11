//package com.example.app;
//
//import com.getcapacitor.BridgeActivity;
//
//public class MainActivity extends BridgeActivity {}

//package com.example.app;
//
//import android.os.Bundle;
//import com.getcapacitor.BridgeActivity;
//import android.webkit.WebView;
//import android.webkit.WebViewClient;

package com.example.app;

import android.content.Context;
import android.content.DialogInterface;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkInfo;
import android.os.Build;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AlertDialog;
import com.getcapacitor.BridgeActivity;


//public class MainActivity extends BridgeActivity {
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//
//        WebView webView = bridge.getWebView();
//        webView.setWebViewClient(new WebViewClient()); // 웹뷰 내에서 링크 열기
//        webView.loadUrl("https://kimgusan.github.io/survey"); // 설정한 URL 로드
//    }
//}

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (isOnline()) {
            WebView webView = new WebView(this);
            webView.getSettings().setJavaScriptEnabled(true);
            webView.setWebViewClient(new WebViewClient());
            webView.loadUrl("https://kimgusan.github.io/survey");
            setContentView(webView);
        } else {
            showNoInternetDialog();
        }
    }

    private boolean isOnline() {
        ConnectivityManager connectivityManager =
                (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);

        if (connectivityManager != null) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                Network network = connectivityManager.getActiveNetwork();
                if (network != null) {
                    NetworkCapabilities networkCapabilities = connectivityManager.getNetworkCapabilities(network);
                    return networkCapabilities != null &&
                            (networkCapabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) ||
                                    networkCapabilities.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) ||
                                    networkCapabilities.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET));
                }
            } else {
                NetworkInfo networkInfo = connectivityManager.getActiveNetworkInfo();
                return networkInfo != null && networkInfo.isConnected();
            }
        }
        return false;
    }

    private void showNoInternetDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("인터넷 연결 오류")
                .setMessage("인터넷 연결이 필요합니다. 연결을 확인한 후 다시 시도해 주세요.")
                .setCancelable(false)
                .setPositiveButton("확인", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        finish(); // 앱 종료
                    }
                });

        AlertDialog alert = builder.create();
        alert.show();
    }
}