# Truyền dữ liệu từ Mini-App -> Android Native
Cần tạo một cổng để Vue có thể gọi ngược về Java/Kotlin.
## B1: Khai báo Class chứa hàm (Android)
Tạo một class (ví dụ WebAppInterface) chứa các hàm cho mini-app gọi, các hàm muốn để mini-app gọi được phải có @JavascriptInterface.
``` JSON 
class WebAppInterface(private val context: Context) {

    // Hàm hiển thị Toast
    @JavascriptInterface
    fun showToast(message: String) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }

    // Hàm mở Camera
    @JavascriptInterface
    fun scanQrCode() {
        // Logic mở camera scan...
    }
}

```
## B2: Khai báo cổng trong WebView
Trong vị trí settup của WebView ban đầu:
``` JSON
// "Android" là tên cổng giao tiếp tự đặt
webView.addJavascriptInterface(WebAppInterface(this), "Android")
```
## B3: Mini-App Gọi (Vue)
Vue sẽ gọi thông qua window.[Tên Cổng].
``` JSON
// Gọi hàm showToast
// 'Android' phải trùng với tên cổng đã đặt ở B2
// 'showToast' phải trùng với tên hàm trong Class ở B1
(window as any).Android.showToast("Chào từ Vue!");

// Gọi hàm scanQrCode
(window as any).Android.scanQrCode();

```
<div style="display: flex; align-items: center; padding: 10px; border: 1px solid #E2A600FF; border-radius: 10px; color: #E2A600FF;">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="margin-right: 10px;">
        <path fill-rule="evenodd" d="M18 8A8 8 0 1 1 2 8a8 8 0 0 1 16 0zM9 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V4zm1 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" clip-rule="evenodd"></path>
    </svg>
    <span> Lưu ý:

    - Tên Cổng ("Android"): có thể đặt là "MyBridge", "AppHost", v.v.
    Nhưng đổi ở Android thì phải đổi code gọi ở Vue tương ứng
    (VD: window.MyBridge.showToast(...)).

    - Tên Hàm (showToast): Phải khớp chính xác từng ký tự giữa Kotlin và JS.

    - Tham số: Các kiểu dữ liệu cơ bản (String, Int, Boolean) truyền qua lại OK.
    Object phức tạp nên chuyển thành chuỗi JSON (String) để truyền.
 </span>
</div>

