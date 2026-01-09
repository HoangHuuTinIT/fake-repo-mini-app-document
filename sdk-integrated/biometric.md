---
outline: deep
---

# Biometric - Sinh trắc học

Các SDK liên quan đến sinh trắc học trong Mini App.

## Biometric Authentication

Xác thực bằng vân tay hoặc FaceID.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Biometric Manager |
| Tác dụng | Xác thực bằng vân tay hoặc FaceID để bảo vệ hành động nhạy cảm, không cần nhập mật khẩu. An toàn hơn password vì sinh trắc học không thể copy/hack. |
| Ví dụ thực tế | Xác nhận thanh toán số tiền lớn; mở khóa xem thông tin nhạy cảm (số dư, lịch sử giao dịch); thay đổi mật khẩu; xác nhận chuyển tiền; đăng nhập nhanh không cần gõ password. |
| Android Interface | `biometricInit()`, `biometricAuthenticate(reason)`, `biometricOpenSettings()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🔐 Biometric Authentication"

2. **Kiểm tra thiết bị hỗ trợ:**
   - Nhấn "🔍 Kiểm tra"
   - Kết quả: "✅ Biometric có sẵn: finger" (nếu có vân tay)
   - Hoặc: "❌ Biometric không khả dụng"

3. **Xác thực:**
   - Nhấn "👆 Xác thực"
   - Hiển thị "⏳ Đang chờ xác thực..."
   - Dialog hệ thống hiện:
     - Title: "Xác thực sinh trắc học"
     - Subtitle: "Xác thực để truy cập tính năng bảo mật"
   - Đặt vân tay lên sensor
   - Kết quả: "✅ Xác thực thành công! Token: biometric_token_..."

4. **Mở Settings:**
   - Nhấn "⚙️ Settings"
   - Mở Security Settings của Android

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Kiểm tra | JSON info với available: true/false |
| Xác thực | BiometricPrompt dialog hiện |
| Vân tay đúng | onBiometricResult(true, token), UI hiển thị ✅ + token |
| Vân tay sai | onBiometricResult(false, ''), UI hiển thị ❌ |
| Nhấn Hủy | onAuthenticationError |

> [!NOTE]
> Cần thiết bị có vân tay/FaceID đã setup.
