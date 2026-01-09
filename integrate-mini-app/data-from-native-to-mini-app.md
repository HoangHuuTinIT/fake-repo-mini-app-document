# Truyền dữ liệu từ Android Native -> Mini-App.
Có 2 cách chính để Android gửi thông tin sang Vue
## Cách 1: Qua URL Parameters (Gửi lúc khởi tạo)
Android Gửi
``` JSON
val userId = "999999"
val name = "Hoang Huu Tin"

// Nối chuỗi param vào sau url
val fullUrl = "$assetUrl?user_id=$userId&username=$name"
webView.loadUrl(fullUrl)
```
Mini-App nhận
``` JSON
const params = new URLSearchParams(window.location.search);
const id = params.get('user_id'); // Kết quả: "999999"
const user = params.get('username'); // Kết quả: "Hoang Huu Tin"
```
## Cách 2: Qua evaluateJavascript
Dùng khi App đang chạy và Android muốn báo hiệu sự kiện.
### Trường hợp A: Bắn Event
Android kích hoạt một sự kiện Javascript:
``` JSON
// Android: Bắn event tên là 'qr_scanned' kèm data text
val script = "window.dispatchEvent(new CustomEvent('qr_scanned', { detail: 'Nội dung QR' }));"
webView.evaluateJavascript(script, null)
```
Mini-App Nhận:
``` JSON
// Vue: Lắng nghe event
window.addEventListener('qr_scanned', (event) => {
    const data = (event as CustomEvent).detail;
    console.log("Đã quét được:", data);
});
```
### Trường hợp B: Gọi Hàm (Function Call)
Android gọi trực tiếp một hàm global được định nghĩa sẵn bên Vue:
``` JSON 
// Android: Gọi hàm 'updateTheme'
val jsonColor = "{ 'bg_color': '#ffffff' }"
val script = "if(window.updateTheme) { window.updateTheme('$jsonColor'); }"
webView.evaluateJavascript(script, null)

```
Mini-App Nhận:
``` JSON
(window as any).updateTheme = (json) => {
    console.log("Nhận màu mới:", json);
};
```

<div style="display: flex; align-items: center; padding: 10px; border: 1px solid #E2A600FF; border-radius: 10px; color: #E2A600FF;">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="margin-right: 10px;">
        <path fill-rule="evenodd" d="M18 8A8 8 0 1 1 2 8a8 8 0 0 1 16 0zM9 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V4zm1 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" clip-rule="evenodd"></path>
    </svg>
    <span>Lưu ý: Tên sự kiện (qr_scanned) hoặc tên hàm (updateTheme) là do tự đặt. Miễn sao Android gọi tên nào thì Vue lắng nghe đúng tên đó.
 </span>
</div>


