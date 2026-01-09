# Chạy Mini-App trong Android Native
Phần này sẽ kích hoạt WebView để hiển thị file index.html vừa copy trong thư mục dist có được khi build mini-app.

## Khai báo thẻ WebView trong Layout
Ta cần tạo 1 thẻ WebView trong giao diện, đây sẽ là vị trí hiển thị mini-app sau khi được chạy lên

``` JSON
<WebView
    android:id="@+id/webView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />

```
## Khai báo và gán biến
``` JSON
// Khai báo biến
private lateinit var webView: WebView

// Trong hàm onCreate hoặc hàm setup
webView = findViewById(R.id.webView)
```
## Setting cho WebView
Cần cấu hình cho Webview để có thể chạy được JavaScript và các file tĩnh.
``` JSON
webView.settings.apply {
       javaScriptEnabled = true// Bắt buộc: để chạy code Vue
       domStorageEnabled = true// Bắt buộc: để lưu data local
       allowFileAccess = true// Cho phép truy cập file assets
        allowFileAccessFromFileURLs = true  
        allowUniversalAccessFromFileURLs = true
    }

```

##  Chạy URL (Load App)
Đường dẫn file trỏ vào thư mục assets
``` JSON
val assetUrl = "file:///android_asset/dist/index.html"

```
<div style="display: flex; align-items: center; padding: 10px; border: 1px solid #E2A600FF; border-radius: 10px; color: #E2A600FF;">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="margin-right: 10px;">
        <path fill-rule="evenodd" d="M18 8A8 8 0 1 1 2 8a8 8 0 0 1 16 0zM9 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V4zm1 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" clip-rule="evenodd"></path>
    </svg>
    <span>Lưu ý: "file:///android_asset/" là cố định, đoạn đường dẫn phía sau có thể thay đổi tùy theo vị trí chứa file index.html trong file assets.Ví dụ bạn trong thư mục assets cấu trúc thư mục của bạn là mini-app/todo/index.html thì đường dẫn sẽ là "file:///android_asset/mini-app/todo/index.html"</span>
</div>