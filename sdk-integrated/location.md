---
outline: deep
---

# Location - Vị trí

Các SDK liên quan đến vị trí trong Mini App.

## Location Manager

Lấy vị trí GPS hiện tại của thiết bị.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Location Manager |
| Tác dụng | Lấy vị trí GPS hiện tại của thiết bị với tọa độ và độ chính xác. Trả về latitude, longitude và accuracy (độ chính xác tính bằng mét). |
| Ví dụ thực tế | Tìm cửa hàng gần nhất; tự động điền địa chỉ giao hàng; check-in tại địa điểm; ước tính phí ship theo khoảng cách; app gọi xe cần vị trí đón; food delivery hiển thị quán gần nhất. |
| Android Interface | `getCurrentLocation()`, `openLocationSettings()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📍 Location Manager"
2. Nhấn "📍 Lấy vị trí"
3. Nếu chưa bật GPS hoặc chưa cấp quyền:
   - Nhấn "⚙️ Cài đặt" để mở Location Settings
   - Bật Location
   - Cấp quyền truy cập vị trí cho app
   - Quay lại app
4. Kết quả hiển thị (ví dụ):
   - Latitude: 10.762622
   - Longitude: 106.660172
   - Độ chính xác: 100m

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Lấy vị trí | Loading hiển thị "⏳ Đang lấy..." |
| Có GPS | Event location_received với lat, lon, accuracy, UI hiển thị tọa độ |
| Không có GPS | Event location_error, UI hiển thị lỗi |

> [!NOTE]
> Yêu cầu quyền ACCESS_FINE_LOCATION.
