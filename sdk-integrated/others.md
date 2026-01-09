---
outline: deep
---

# Others - Khác

Các SDK khác trong Mini App.

## Emoji Status

Đặt emoji status hiển thị bên cạnh tên user trên Telegram.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Set Emoji Status |
| Tác dụng | Đặt emoji status hiển thị bên cạnh tên user trên Telegram (chỉ Telegram Premium). Status hiển thị trong một khoảng thời gian rồi tự hết. |
| Ví dụ thực tế | Mini app game đặt emoji 🏆 khi user đạt top 1; app music đặt emoji 🎵 khi đang nghe nhạc; app mood tracker đặt emoji 😊 theo tâm trạng; campaign marketing đặt emoji đặc biệt cho participant. |
| Android Interface | `setEmojiStatus(emojiId, duration)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "😀 Emoji Status"
2. Nhập Custom Emoji ID (mặc định: "5368324170671202286")
3. Nhấn "Đặt Emoji Status"
4. Dialog hiển thị:
   - "Emoji ID: [id]"
   - "Duration: 3600s"
5. Nhấn OK
6. Kết quả: "✅ Đã đặt Emoji Status thành công!"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Đặt Emoji | Dialog thông báo hiện |
| Nhấn OK | Event emoji_status_set với success: true |

> [!NOTE]
> Chỉ hoạt động thật với Telegram Premium.

---

## Add to Home Screen

Tạo shortcut Mini App trên màn hình chính của điện thoại.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Add to Home Screen |
| Tác dụng | Tạo shortcut Mini App trên màn hình chính của điện thoại, giúp user mở app nhanh như native app. Shortcut có icon và tên riêng, click vào mở thẳng Mini App không cần vào Telegram trước. |
| Ví dụ thực tế | User thường xuyên dùng app đặt cơm trưa → tạo shortcut để mở nhanh; app game muốn user quay lại hàng ngày; app công ty muốn nhân viên truy cập nhanh. |
| Android Interface | `addToHomeScreen()`, `checkHomeScreenStatus()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🏠 Add to Home Screen"
2. Nhấn "➕ Thêm vào Home Screen"
3. Dialog xác nhận:
   - "Tạo shortcut cho Mini App trên màn hình chính?"
4. Nhấn "Thêm"
5. Toast: "Đã thêm vào Home Screen!"
6. Kết quả: "✅ Đã thêm vào Home Screen thành công!"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn Thêm | Dialog xác nhận hiện |
| Xác nhận | Event home_screen_added với status: 'added', Toast + UI xác nhận |

---

## Start Param

Đọc tham số khởi động từ deep link.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Start Param |
| Tác dụng | Đọc tham số khởi động từ deep link, cho phép mở Mini App với context cụ thể từ link chia sẻ. Giúp tạo deeplink marketing campaigns hiệu quả. |
| Ví dụ thực tế | Link t.me/bot?startapp=product_123 sẽ mở Mini App và hiển thị ngay sản phẩm 123; link invite startapp=invite_ABC để track referral; link promo startapp=voucher_50OFF để tự động áp dụng voucher. |
| Nguồn | URL param `tgWebAppStartParam` hoặc `start_param` |

### Cách kiểm tra trong demo

**Từ Android:**

1. Trong HomeActivity.kt, đã truyền: `start_param = "test123"`
2. Mở Mini App
3. Cuộn tìm section "🚀 Start Param"
4. Kết quả hiển thị: "Start Param: test123"

**Test khác:**

1. Thay đổi giá trị `start_param` trong HomeActivity
2. Build lại app và kiểm tra

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Có start_param | UI hiển thị giá trị |
| Không có | Hiển thị "(Không có start param)" |
