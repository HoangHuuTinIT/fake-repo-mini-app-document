---
outline: deep
---

# Feedback - Phản hồi người dùng

Các SDK liên quan đến phản hồi người dùng trong Mini App.

## Haptic Feedback

Tạo phản hồi rung (haptic) với nhiều kiểu khác nhau.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Haptic Feedback |
| Tác dụng | Tạo phản hồi rung (haptic) với nhiều kiểu khác nhau, giúp người dùng "cảm nhận" được hành động của mình. Tạo trải nghiệm cao cấp như iPhone, tăng sự hài lòng của user. |
| Ví dụ thực tế | Rung nhẹ khi nhấn nút bất kỳ (impact light); rung 2 lần khi thanh toán thành công (notification success); rung 3 lần mạnh khi có lỗi (notification error); rung cực nhẹ khi chọn item trong list (selection). |
| Android Interface | `hapticFeedback(type, style)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🤖 Android Native Controls"
2. Nhấn các nút rung:
   - "Rung Nhẹ" → Máy rung nhẹ
   - "Rung Mạnh" → Máy rung mạnh
   - "Rung Success" → Máy rung 2 lần
   - "Rung Error" → Máy rung 3 lần
   - "Rung Selection" → Máy rung rất nhẹ

### Kết quả mong đợi

| Thao tác | Kết quả rung |
|----------|--------------|
| Nhấn Rung nhẹ | Rung nhẹ |
| Nhấn rung mạnh | Rung mạnh |
| Nhấn rung Success | Rung mạnh 2 lần |
| Nhấn rung Error | Rung mạnh 3 lần |
| Nhấn rung Selection | Rung cực nhẹ |

> [!NOTE]
> Cần thiết bị vật lý để cảm nhận rung. Emulator không hỗ trợ.

---

## Popup

Hiển thị dialog thông báo native.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Popup |
| Tác dụng | Hiển thị dialog thông báo native với title, message và các nút tùy chọn, có giao diện nhất quán với Android. Dùng dialog native thay vì dialog web giúp UX mượt mà và familiar hơn với user Android. |
| Ví dụ thực tế | Xác nhận trước khi xóa item ("Bạn muốn xóa sản phẩm này?"); thông báo quan trọng ("Đơn hàng đã được xác nhận!"); hỏi lựa chọn ("Bạn muốn thanh toán bằng Momo hay ZaloPay?"). |
| Android Interface | `openPopup(title, message, buttonsJson)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "💬 Popup Demo"
2. Nhấn "Hiện Popup Chuẩn"
3. Dialog hiển thị:
   - Title: "Xác nhận giao dịch"
   - Message: "Bạn có chắc chắn muốn thanh toán 100.000đ?"
   - Buttons: "Đồng ý" | "Hủy"
4. Nhấn một button bất kỳ
5. Alert hiển thị: "Bạn đã bấm nút: [ID của button]"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Gọi openPopup | AlertDialog hiện với title và message |
| Nhấn button | Dialog đóng, Event popup_closed gửi về với button_id, Alert xác nhận hiển thị button đã nhấn |

---

## Toast

Hiển thị thông báo ngắn tạm thời ở cuối màn hình.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Toast |
| Tác dụng | Hiển thị thông báo ngắn tạm thời ở cuối màn hình, tự động ẩn sau vài giây, không cần user tương tác. Thông báo nhanh mà không làm gián đoạn workflow của user. |
| Ví dụ thực tế | "Đã thêm vào giỏ hàng" khi bấm Add to Cart; "Đã sao chép" khi copy mã giảm giá; "Đã lưu" khi auto-save form; "Không có kết nối mạng" khi offline. |
| Android Interface | `showToast(message)` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🤖 Android Native Controls"
2. Nhấn nút "Toast Hello"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Nhấn nút | Toast hiển thị ở cuối màn hình, Nội dung: "Lời chào từ Vue.js gửi tới Android!", Tự động ẩn sau ~2 giây |
