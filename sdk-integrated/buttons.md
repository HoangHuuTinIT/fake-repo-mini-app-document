---
outline: deep
---

# Buttons - Các nút bấm

Các SDK liên quan đến nút bấm trong Mini App.

## Main Button

Nút hành động chính (Call-to-Action) cố định ở cuối màn hình Mini App.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Main Button |
| Tác dụng | Nút hành động chính (Call-to-Action) cố định ở cuối màn hình Mini App, luôn hiển thị nổi bật để người dùng thực hiện hành động quan trọng nhất. |
| Ví dụ thực tế | Trong app đặt đồ ăn, nút này hiển thị "🛒 Đặt hàng - 150.000đ"; trong app thanh toán, hiển thị "💳 Thanh toán ngay"; trong form đăng ký, hiển thị "✅ Gửi đăng ký". Nút này giúp người dùng không phải scroll tìm nút submit, tăng tỷ lệ chuyển đổi (conversion rate). |
| Android Interface | `setMainButtonText()`, `setMainButtonVisible()`, `setMainButtonColor()`, `setMainButtonEnabled()`, `setMainButtonProgress()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Mở Mini App trong Android Host
2. Cuộn xuống tìm section "🚀 Main Button"
3. Thực hiện các thao tác:
   - Nhấn "Hiện Nút Chính" → Nút Main Button xuất hiện ở cuối màn hình với text "Nút Chính"
   - Nhấn "Đổi tên Thanh Toán" → Text nút đổi thành "THANH TOÁN NGAY"
   - Nhấn "Đổi màu Hồng" → Nút đổi sang màu hồng
   - Nhấn "🚫 Disable" → Nút mờ đi (opacity 0.5), không thể nhấn
   - Nhấn "✅ Enable" → Nút trở lại bình thường
   - Nhấn "⏳ Loading" → Hiển thị loading text "⏳ Đang xử lý..."
   - Nhấn "✓ Done" → Text trở về bình thường
4. Nhấn vào Main Button (nút ở cuối màn hình)

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Hiện nút | Nút xuất hiện ở góc dưới màn hình |
| Đổi text | Text trên nút thay đổi ngay lập tức |
| Đổi màu | Background nút thay đổi |
| Disable | Nút mờ đi, alpha = 0.5, không click được |
| Loading | Hiển thị text "⏳ Đang xử lý...", nút disabled |
| Click Main Button | Toast hiển thị "Đã bấm nút Main Button!" |

---

## Secondary Button

Nút hành động phụ đặt cạnh Main Button.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Secondary Button |
| Tác dụng | Nút hành động phụ đặt cạnh Main Button, dùng cho các lựa chọn thứ cấp hoặc hành động ngược lại. |
| Ví dụ thực tế | Trong giỏ hàng, Main Button là "Thanh toán" còn Secondary là "Tiếp tục mua sắm"; Trong form xác nhận, Main là "Đồng ý" còn Secondary là "Hủy bỏ"; Trong wizard nhiều bước, Secondary là "Quay lại bước trước". |
| Android Interface | `setSecondaryButtonText()`, `setSecondaryButtonVisible()`, `setSecondaryButtonColor()`, `setSecondaryButtonEnabled()`, `setSecondaryButtonProgress()`, `setSecondaryButtonPosition()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Mở Mini App, cuộn tìm section "🥈 Secondary Button"
2. Nhấn nút "Hiện Nút Phụ"
3. Quan sát nút phụ xuất hiện ở cuối màn hình
4. Nhấn vào Secondary Button

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Hiện nút | Button với text "Nút phụ (Secondary)" xuất hiện |
| Click | Toast hiển thị "🥈 Đã nhấn nút phụ (Secondary Button)!" |
| Ẩn nút | Nhấn lại "Ẩn" → Nút biến mất |

---

## Back Button

Nút điều hướng quay lại trên toolbar.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Back Button |
| Tác dụng | Nút điều hướng quay lại trên toolbar, cho phép Mini App tự xử lý navigation nội bộ thay vì đóng app. |
| Ví dụ thực tế | Khi Mini App có nhiều trang (Home → Chi tiết sản phẩm → Giỏ hàng), nút Back cho phép user quay lại trang trước đó. Nếu không có nút này, nhấn back sẽ đóng luôn Mini App thay vì quay về trang Home. Đặc biệt quan trọng với các app có flow phức tạp nhiều bước. |
| Android Interface | `setBackButtonVisible()` |

### Cách kiểm tra trong demo

**Tự động hiển thị:**

1. Navigate sang trang khác trong Mini App (VD: Theme Params, Init Data)
2. Nút Back tự động xuất hiện

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Show | Nút "Back" xuất hiện ở góc trái toolbar |
| Click | Event back_button_pressed được trigger, Mini App xử lý navigation |

---

## Settings Button

Nút truy cập nhanh cài đặt hiển thị trên toolbar.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Settings Button |
| Tác dụng | Nút truy cập nhanh cài đặt hiển thị trên toolbar, giúp người dùng mở menu cài đặt hoặc tùy chọn của Mini App. |
| Ví dụ thực tế | Trong app game, nút này mở cài đặt âm thanh. Trong app e-commerce, mở trang quản lý tài khoản. Trong app tin tức, mở trang chọn ngôn ngữ/chủ đề quan tâm. Giúp người dùng truy cập settings từ bất kỳ trang nào mà không cần về Home. |
| Android Interface | `setSettingsButtonVisible()` |

### Cách kiểm tra trong demo

**Mặc định:**

1. Settings button được setup tự động khi vào trang Home
2. Click sẽ navigate đến trang "Theme Params"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Show | Nút Settings hiển thị trên UI |
| Click | Navigate đến trang Theme Params hoặc trigger event settings_button_pressed |