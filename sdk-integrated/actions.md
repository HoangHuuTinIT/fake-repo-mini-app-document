---
outline: deep
---

# Actions - Hành động

Các SDK liên quan đến hành động trong Mini App.

## Open Link

Mở URL trong browser hoặc app tương ứng của hệ thống.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Open Link |
| Tác dụng | Mở URL trong browser hoặc app tương ứng của hệ thống, cho phép Mini App liên kết ra ngoài. Link tg:// sẽ mở trong Telegram, link http sẽ mở trong browser mặc định. |
| Ví dụ thực tế | Mở trang điều khoản sử dụng; mở Google Maps để xem vị trí cửa hàng; mở YouTube để xem video hướng dẫn; mở trang Facebook fanpage. |
| Android Interface | `openLink()`, `openTelegramLink()` |

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Open Link | Intent ACTION_VIEW được gọi, Browser mở URL, App bị minimize, browser hiển thị |

---

## QR Scanner

Mở camera để quét mã QR/Barcode.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | QR Scanner |
| Tác dụng | Mở camera để quét mã QR/Barcode, trả kết quả về Mini App để xử lý. Tích hợp ZXing Scanner với UI đẹp, hỗ trợ nhiều định dạng mã. |
| Ví dụ thực tế | Quét QR thanh toán VNPay/Momo; quét mã vận đơn để tra cứu đơn hàng; quét barcode sản phẩm để xem giá; quét QR check-in sự kiện; quét mã voucher giảm giá. |
| Android Interface | `scanQrCode()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🤖 Android Native Controls"
2. Nhấn "📷 Quét QRCode"
3. Nếu chưa cấp quyền Camera → Hệ thống hỏi cấp quyền → Nhấn "Allow"
4. Camera mở với giao diện quét QR (ZXing Scanner)
5. Hướng camera vào một mã QR bất kỳ
6. Sau khi quét thành công → Alert hiển thị nội dung QR

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Quét QR | Hỏi quyền Camera (nếu chưa có) |
| Cấp quyền | Camera mở với UI ZXing |
| Quét mã | Tự động nhận diện và decode |
| Quét xong | Scanner đóng, Alert hiển thị: "Đã quét được: [nội dung]", Event qr_text_received gửi về Mini App |

> [!NOTE]
> Cần thiết bị vật lý với camera.

---

## Invoice

Mở giao diện thanh toán Telegram Stars.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Invoice |
| Tác dụng | Mở giao diện thanh toán Telegram Stars, cho phép user mua hàng bằng tiền ảo Stars của Telegram. Trong Telegram thật, tiền được trừ từ tài khoản Stars của user và chuyển cho bot owner. Demo này chỉ mô phỏng flow thanh toán. |
| Ví dụ thực tế | Bán sticker premium, mua vật phẩm game, donate cho creator, mua subscription dịch vụ. |
| Android Interface | `openInvoice(slug)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "💰 Invoice (Fake)"
2. Nhập Invoice Slug vào ô input (mặc định: "test-invoice-slug")
3. Nhấn "Mở Invoice"
4. Dialog mô phỏng thanh toán hiện:
   - Title: "Invoice Payment"
   - Message: "Thanh toán Invoice: [slug]" + "(Mô phỏng thanh toán $10)"
   - Buttons: "Thanh toán" | "Hủy"
5. Nhấn "Thanh toán"
6. Kết quả hiển thị: "✅ Thanh toán thành công! Invoice: [slug]"
7. Toast: "💰 Thanh toán Invoice [slug] thành công!"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Mở Invoice | Dialog thanh toán hiện |
| Nhấn "Thanh toán" | Event invoice_closed với status: 'paid', UI hiển thị ✅ thành công, Toast xác nhận |
| Nhấn "Hủy" | Dialog đóng, không có event |

> [!NOTE]
> Đây là mock. Chỉ hoạt động thanh toán thật trong Telegram.

---

## Share Text

Mở Share Sheet native của Android để chia sẻ nội dung text.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Share Text |
| Tác dụng | Mở Share Sheet native của Android để chia sẻ nội dung text sang các app khác. Hiển thị tất cả app có thể nhận text (Messenger, Zalo, Gmail, Viber...) để user chọn. |
| Ví dụ thực tế | Share link sản phẩm lên Facebook/Zalo; share mã giảm giá cho bạn bè; share kết quả game lên story; share location đến người thân. |
| Android Interface | `shareText(text)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📢 Share Message"
2. Nhập nội dung muốn share vào ô input
   - Mặc định: "Testing Share Message from Android Host!"
3. Nhấn "Share App"
4. Share sheet Android hiện ra với danh sách apps có thể share
5. Chọn app bất kỳ để share

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Share | Intent.ACTION_SEND được gọi, Share sheet hiển thị (Messenger, Zalo, Gmail...) |
| Chọn app | App đó mở với nội dung text đã nhập |

---

## Share Story

Chia sẻ ảnh/video lên Telegram Stories kèm theo widget link.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Share Story (Story Widget) |
| Tác dụng | Chia sẻ ảnh/video lên Telegram Stories kèm theo widget link có thể click. Widget link giúp người xem story có thể click để mở Mini App ngay. |
| Ví dụ thực tế | Share kết quả quiz với ảnh đẹp và link "Bạn thử đi!"; share voucher với link mở mini app; share thành tích game với nút "Chơi ngay"; share outfit với link mua sản phẩm. |
| Android Interface | `shareStory(mediaUrl, text, widgetLinkUrl, widgetLinkName)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📖 Story Widget"
2. Nhập các thông tin:
   - URL ảnh/video: https://picsum.photos/400/600 (mặc định)
   - Caption text: "Check out my Mini App! 🚀"
   - Widget Link URL: https://t.me/DuorovChat
   - Widget Link Name: "Open Mini App"
3. Nhấn "📤 Share to Story"
4. Dialog preview hiển thị tất cả thông tin
5. Nhấn "Chia sẻ"
6. Kết quả: "✅ Đã chia sẻ lên Story thành công!"
7. Toast xác nhận

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Share | Dialog preview hiện |
| Nhấn "Chia sẻ" | Event story_shared với success: true, UI hiển thị ✅ thành công |
| Nhấn "Hủy" | Event với success: false |

> [!NOTE]
> Chỉ hoạt động thật trong Telegram. Demo chỉ mô phỏng.

---

## Download File

Tải file từ internet xuống thư mục Downloads.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Download File |
| Tác dụng | Tải file từ internet xuống thư mục Downloads của thiết bị, có notification hiển thị tiến trình. File được lưu vào thư mục Downloads chuẩn của Android, user có thể mở bằng app tương ứng. |
| Ví dụ thực tế | Tải hóa đơn PDF sau khi thanh toán; tải ảnh sản phẩm chất lượng cao; tải tài liệu hướng dẫn; tải music/video. |
| Android Interface | `downloadFile(url, fileName)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📥 Download File"
2. Nhập thông tin:
   - URL file: https://www.w3.org/.../dummy.pdf (mặc định)
   - Tên file: sample.pdf
3. Nhấn "📥 Download"
4. Toast: "Đang tải: sample.pdf"
5. Notification hiển thị progress
6. Kết quả: "✅ Đang tải: sample.pdf"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Download | DownloadManager bắt đầu tải, Toast xác nhận, Notification hiển thị progress |
| Hoàn thành | File lưu vào Downloads |

---

## Open Media Preview

Mở ảnh/video trong viewer fullscreen của hệ thống.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Open Media Preview |
| Tác dụng | Mở ảnh/video trong viewer fullscreen của hệ thống hoặc app gallery. Sử dụng viewer native có đầy đủ tính năng zoom, pan, share mà không cần code thêm. |
| Ví dụ thực tế | Xem ảnh sản phẩm chi tiết với zoom pinch; xem video review sản phẩm; xem ảnh đánh giá của khách hàng khác; xem infographic toàn màn hình. |
| Android Interface | `openMediaPreview(url, type)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🖼️ Media Preview"
2. Nhập thông tin:
   - URL media: https://picsum.photos/800/600 (mặc định)
   - Loại: Chọn "Ảnh (photo)" hoặc "Video"
3. Nhấn "🖼️ Xem Media"
4. App Gallery/Viewer mở và hiển thị ảnh

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Xem | Intent ACTION_VIEW với media type, Gallery app hoặc browser mở, Ảnh/video hiển thị fullscreen |

---

## Close App

Đóng Mini App và quay về Telegram.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Close App |
| Tác dụng | Đóng Mini App và quay về Telegram (hoặc Home Activity trong demo). Cho phép Mini App kiểm soát thời điểm kết thúc thay vì phụ thuộc vào user nhấn back. |
| Ví dụ thực tế | Sau khi thanh toán thành công và hiển thị thông báo xong, tự động đóng app; khi user nhấn nút "Thoát"; khi session timeout. |
| Android Interface | `closeApp()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🤖 Android Native Controls"
2. Nhấn nút đỏ "Đóng App"
3. Activity finish, quay về Home

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Đóng App | MainActivity.finish() được gọi, Quay về HomeActivity |

---

## Send Data

Gửi dữ liệu JSON về Bot backend và tự động đóng Mini App.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Send Data |
| Tác dụng | Gửi dữ liệu JSON về Bot backend và tự động đóng Mini App. Data được gửi qua webhook tới server của bot, không lưu trên client. |
| Ví dụ thực tế | Sau khi user điền form khảo sát, gửi câu trả lời về bot để xử lý; gửi đơn hàng đã chọn về bot để tạo invoice; gửi thời gian đặt lịch về bot để xác nhận. |
| Android Interface | `sendData(data)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📤 Send Data (to Bot)"
2. Nhập JSON vào textarea:
   - Mặc định: `{"action":"test","value":123}`
3. Nhấn "📤 Gửi Data"
4. Dialog xác nhận hiện:
   - Hiển thị data sẽ gửi
   - Buttons: "Gửi & Đóng" | "Hủy"
5. Nhấn "Gửi & Đóng"
6. Toast: "Đã gửi data tới Bot!"
7. App đóng

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Gửi | Dialog xác nhận hiện |
| Nhấn "Gửi & Đóng" | Toast xác nhận, App tự động đóng |

> [!NOTE]
> Trong Telegram thật, data được gửi tới Bot qua webhook.

---

## Switch Inline Query

Chuyển sang chat khác với inline query đã điền sẵn.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Switch Inline Query |
| Tác dụng | Chuyển sang chat khác với inline query đã điền sẵn, giúp user share nội dung nhanh chóng. Tương tự như khi bạn @YouTube trong chat và chọn video. |
| Ví dụ thực tế | Sau khi chọn sản phẩm, nhấn "Share cho bạn bè" → mở chat picker → chọn bạn → tin nhắn inline tự động có @bot search_product_id để người nhận có thể xem ngay sản phẩm. |
| Android Interface | `switchInlineQuery(query, chatTypesJson)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🔍 Switch Inline Query"
2. Nhập thông tin:
   - Query: "test query" (mặc định)
   - Chat Types: Check các loại chat (users, bots, groups, channels)
3. Nhấn "🔍 Mở Inline Query"
4. Dialog hiển thị query và chat types đã chọn

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Mở | Dialog thông báo hiện, Hiển thị: "Query: @bot [query]", Hiển thị: "Chat Types: [...]" |

> [!NOTE]
> Trong Telegram thật, sẽ mở chat picker để chọn chat.
