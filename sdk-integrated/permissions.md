---
outline: deep
---

# Permissions - Quyền truy cập

Các SDK liên quan đến quyền truy cập trong Mini App.

## Request Write Access

Xin quyền để Bot gửi tin nhắn chủ động cho user.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Request Write Access |
| Tác dụng | Xin quyền để Bot gửi tin nhắn chủ động cho user sau này, ngay cả khi user không online trong Mini App. Nếu không có quyền này, bot chỉ có thể reply khi user chủ động nhắn trước. |
| Ví dụ thực tế | Gửi thông báo khi đơn hàng được giao; nhắc nhở khi có voucher sắp hết hạn; thông báo khi có cập nhật quan trọng; gửi OTP xác thực. |
| Android Interface | `requestWriteAccess()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "✍️ Request Write Access"
2. Nhấn "Yêu cầu quyền gửi tin"
3. Hiển thị "⏳ Đang yêu cầu quyền gửi tin nhắn..."
4. Dialog hỏi:
   - "Bot muốn gửi tin nhắn cho bạn. Bạn có đồng ý không?"
   - Buttons: "Đồng ý" | "Từ chối"
5. Nhấn "Đồng ý"
6. Kết quả: "✅ Đã được cấp quyền gửi tin nhắn!"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Yêu cầu quyền | Dialog xác nhận hiện |
| Nhấn "Đồng ý" | Event write_access_requested với status: 'allowed', UI hiển thị ✅ |
| Nhấn "Từ chối" | Event với status: 'declined', UI hiển thị ❌ |

---

## Request Contact

Xin số điện thoại của user.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Request Contact |
| Tác dụng | Xin số điện thoại của user để liên lạc hoặc xác thực tài khoản. User phải đồng ý chia sẻ, đảm bảo privacy. Số điện thoại lấy từ tài khoản Telegram đã xác thực. |
| Ví dụ thực tế | Đăng ký tài khoản e-commerce cần SĐT để giao hàng; xác thực OTP qua SMS; liên lạc khi đơn hàng có vấn đề; tích điểm thành viên theo SĐT. |
| Android Interface | `requestContact()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📞 Request Contact"
2. Nhấn "Yêu cầu số điện thoại"
3. Hiển thị "⏳ Đang yêu cầu số điện thoại..."
4. Dialog hỏi chia sẻ số điện thoại
5. Nhấn "Đồng ý"
6. Kết quả: "✅ SĐT: +84123456789, Tên: User Test"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Yêu cầu | Dialog xác nhận hiện |
| Đồng ý | Event phone_requested với contact data (mock), UI hiển thị SĐT và tên |
| Từ chối | Event với status: 'cancelled' |

---

## Read Clipboard

Đọc nội dung text từ clipboard của thiết bị.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Read Text From Clipboard |
| Tác dụng | Đọc nội dung text từ clipboard của thiết bị, giúp user dán thông tin nhanh chóng. Tiết kiệm thao tác cho user, đặc biệt trên mobile khó select+paste. |
| Ví dụ thực tế | Tự động điền mã voucher khi user vừa copy từ tin nhắn; dán địa chỉ ví crypto khi chuyển tiền; dán tracking number để tra cứu đơn hàng; dán invite code để nhận thưởng. |
| Android Interface | `readTextFromClipboard()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Chuẩn bị: Copy một đoạn text bất kỳ vào clipboard (VD: copy từ browser)
2. Cuộn tìm section "📋 Read Clipboard"
3. Nhấn "📋 Đọc Clipboard"
4. Hiển thị "⏳ Đang đọc..."
5. Kết quả: Nội dung clipboard hiển thị

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Đọc Clipboard | Event clipboard_text_received |
| Có nội dung | UI hiển thị text từ clipboard |
| Clipboard trống | Hiển thị "(Clipboard trống)" |
