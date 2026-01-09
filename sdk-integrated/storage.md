---
outline: deep
---

# Storage - Lưu trữ

Các SDK liên quan đến lưu trữ dữ liệu trong Mini App.

## Cloud Storage

Lưu trữ dữ liệu key-value cho user.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Cloud Storage |
| Tác dụng | Lưu trữ dữ liệu key-value cho user, đồng bộ trên cloud (trong Telegram thật) hoặc local (trong demo dùng SharedPreferences). Data tồn tại ngay cả khi đóng app, đổi thiết bị vẫn còn (nếu sync cloud). |
| Ví dụ thực tế | Lưu cài đặt ngôn ngữ/theme đã chọn; lưu giỏ hàng chưa checkout; lưu trạng thái onboarding đã xem chưa; lưu token đăng nhập; cache data để load nhanh hơn. |
| Android Interface | `cloudStorageSetItem()`, `cloudStorageGetItem()`, `cloudStorageRemoveItem()`, `cloudStorageGetKeys()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "☁️ Cloud Storage"

2. **Lưu data:**
   - Nhập Key: "testKey" (mặc định)
   - Nhập Value: "Hello World"
   - Nhấn "💾 Lưu"
   - Kết quả: "✅ Đã lưu: testKey = Hello World"

3. **Đọc data:**
   - Key vẫn là "testKey"
   - Nhấn "📖 Đọc"
   - Kết quả: "📖 Đọc được: testKey = Hello World"

4. **Lấy tất cả keys:**
   - Nhấn "🔑 Lấy Keys"
   - Kết quả: "🔑 Có 1 keys: testKey"

5. **Xóa data:**
   - Nhấn "🗑️ Xóa"
   - Kết quả: "🗑️ Đã xóa: testKey"

6. **Xác nhận đã xóa:**
   - Nhấn "📖 Đọc"
   - Kết quả: "📖 Đọc được: testKey = (trống)"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Lưu | Data lưu vào SharedPreferences, UI hiển thị ✅ |
| Đọc | Data được đọc ra, UI hiển thị value |
| Xóa | Data bị xóa, Đọc lại ra trống |
| Lấy Keys | Danh sách tất cả keys |

> [!NOTE]
> Trong Telegram thật, data sync qua cloud. Ở đây dùng SharedPreferences local.
