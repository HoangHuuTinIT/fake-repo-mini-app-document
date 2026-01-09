---
outline: deep
---

# Sensors - Cảm biến

Các SDK liên quan đến cảm biến thiết bị trong Mini App.

## Accelerometer

Đọc dữ liệu gia tốc 3 trục (X, Y, Z).

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Accelerometer |
| Tác dụng | Đọc dữ liệu gia tốc 3 trục (X, Y, Z) từ cảm biến, cho phép detect chuyển động và hướng thiết bị. Giá trị Z ≈ 9.8 khi đặt phẳng (trọng lực). |
| Ví dụ thực tế | Game lắc điện thoại để xúc xắc; phát hiện user đang đi bộ hay chạy (fitness app); tự động xoay giao diện theo hướng cầm; phát hiện "shake to undo"; đếm bước chân. |
| Android Interface | `startAccelerometer(refreshRate)`, `stopAccelerometer()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📱 Accelerometer"
2. Thấy giá trị X, Y, Z = 0.000
3. Nhấn "▶️ Start"
4. Di chuyển/lắc điện thoại
5. Quan sát giá trị X, Y, Z thay đổi realtime
6. Nhấn "⏹️ Stop" để dừng

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Start | Sensor listener registered, Giá trị X, Y, Z bắt đầu thay đổi |
| Đặt phẳng | Z ≈ 9.8 (trọng lực), X, Y ≈ 0 |
| Nghiêng | X hoặc Y thay đổi tùy hướng nghiêng |
| Lắc | Tất cả giá trị dao động |
| Stop | Sensor listener unregistered |

---

## Gyroscope

Đọc vận tốc góc xoay (angular velocity) của thiết bị.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Gyroscope |
| Tác dụng | Đọc vận tốc góc xoay (angular velocity) của thiết bị theo 3 trục, cho phép detect xoay mượt mà. Khác với Accelerometer - Gyroscope đo tốc độ XOAY, không đo gia tốc. |
| Ví dụ thực tế | Game đua xe nghiêng điện thoại để lái; xoay 360° để xem sản phẩm 3D; VR/AR tracking head movement; camera ổn định (stabilization); game cân bằng quả bóng trên bàn nghiêng. |
| Android Interface | `startGyroscope(refreshRate)`, `stopGyroscope()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🌀 Gyroscope"
2. Nhấn "▶️ Start"
3. Xoay điện thoại theo các trục
4. Quan sát giá trị X (Beta), Y (Gamma), Z (Alpha) thay đổi
5. Nhấn "⏹️ Stop"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Để yên | X, Y, Z ≈ 0 (không xoay) |
| Xoay | Giá trị thay đổi theo vận tốc góc |

---

## Device Orientation

Đọc hướng thiết bị (la bàn số).

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Device Orientation |
| Tác dụng | Đọc hướng thiết bị (la bàn số) với 3 góc Alpha, Beta, Gamma, cho phép biết điện thoại đang hướng về đâu. Alpha 0° = Bắc, 90° = Đông, 180° = Nam, 270° = Tây. |
| Ví dụ thực tế | App la bàn chỉ hướng Bắc/Nam; AR hiển thị thông tin theo hướng nhìn; game bắn súng kết hợp xoay người; app Qibla finder cho Muslim; navigation chỉ đường đi bộ. |
| Android Interface | `startDeviceOrientation(refreshRate, needAbsolute)`, `stopDeviceOrientation()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🧭 Device Orientation"
2. Nhấn "▶️ Start"
3. Quan sát các giá trị:
   - Alpha (Hướng): 0° - 360° (la bàn)
   - Beta (Nghiêng trước/sau): -180° đến 180°
   - Gamma (Nghiêng trái/phải): -90° đến 90°
4. Xoay/nghiêng điện thoại để thấy giá trị đổi
5. Nhấn "⏹️ Stop"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Hướng Bắc | Alpha ≈ 0° |
| Hướng Đông | Alpha ≈ 90° |
| Nghiêng về phía trước | Beta tăng |
| Nghiêng sang trái | Gamma giảm |
