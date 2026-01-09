---
outline: deep
---

# UI Control - Điều khiển giao diện

Các SDK liên quan đến việc điều khiển giao diện của Mini App.

## Header Color

Tùy chỉnh màu thanh tiêu đề (toolbar) và status bar.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Header Color |
| Tác dụng | Tùy chỉnh màu thanh tiêu đề (toolbar) và status bar để phù hợp với branding của Mini App. |
| Ví dụ thực tế | App ngân hàng dùng màu xanh navy đặc trưng (#003366); app bán hàng thời trang dùng màu hồng (#ff69b4); khi user đạt level VIP, header đổi sang màu vàng gold. Giúp Mini App có giao diện nhất quán với thương hiệu, tạo cảm giác chuyên nghiệp và khác biệt. |
| Android Interface | `setHeaderColor()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🤖 Android Native Controls" (chỉ hiển thị khi chạy trên Android Host)
2. Tìm row có 3 nút màu:
   - Nhấn "Header Đỏ" → Header đổi sang màu đỏ
   - Nhấn "Header Xanh" → Header đổi sang màu xanh lá
   - Nhấn "Header Theme" → Header đổi về màu theme (secondary_bg_color)

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Set màu Red | Toolbar background đổi sang đỏ, Status bar cũng đổi sang đỏ, Icon status bar đổi sang màu trắng (vì nền tối) |
| Set màu Theme | Toolbar đổi về màu theme (xám nhạt hoặc xám đậm tùy light/dark mode) |

---

## Bottom Bar Color

Tùy chỉnh màu thanh điều hướng hệ thống (navigation bar).

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Bottom Bar Color |
| Tác dụng | Tùy chỉnh màu thanh điều hướng hệ thống (navigation bar) ở cuối màn hình Android. Giúp Mini App kiểm soát toàn bộ giao diện từ trên xuống dưới. |
| Ví dụ thực tế | Kết hợp với Header Color để tạo giao diện đồng bộ hoàn toàn; khi ở trang thanh toán quan trọng, đổi sang màu xanh lá để tạo cảm giác "an toàn"; trong dark mode, đổi sang màu tối để không chói mắt. |
| Android Interface | `setBottomBarColor()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🎨 Bottom Bar Color"
2. Nhấn các nút màu:
   - "🔵 Xanh dương" → Navigation bar đổi sang màu xanh dương
   - "🟠 Cam" → Navigation bar đổi sang màu cam
   - "🟢 Xanh lá" → Navigation bar đổi sang màu xanh lá
   - "🟣 Tím" → Navigation bar đổi sang màu tím
3. Quan sát phần "Màu hiện tại:" hiển thị mã màu đang chọn

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Click nút màu | Navigation bar ở cuối màn hình đổi màu, Toast hiển thị "Bottom Bar Color: #...", UI hiển thị mã màu hiện tại |

---

## Expand Viewport

Mở rộng không gian hiển thị bằng cách ẩn toolbar.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Expand Viewport |
| Tác dụng | Mở rộng không gian hiển thị bằng cách ẩn toolbar, cho phép nội dung Mini App chiếm nhiều diện tích màn hình hơn. Giữ lại status bar để user vẫn thấy giờ/pin. |
| Ví dụ thực tế | App đọc báo/truyện cần không gian đọc tối đa; app xem ảnh muốn hiển thị ảnh lớn hơn; app map/bản đồ cần hiển thị nhiều thông tin hơn; form nhập liệu dài cần ít scroll hơn. |
| Android Interface | `expandViewport()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "📐 Viewport"
2. Quan sát thông tin hiện tại:
   - Height: (chiều cao hiện tại)
   - Expanded: ❌ No
3. Nhấn nút "🔲 Expand Full Screen"
4. Quan sát:
   - Toolbar (AppBar) biến mất
   - Content mở rộng lên phía trên
   - Thông tin cập nhật: Expanded: ✅ Yes

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Expand | Toolbar/AppBar ẩn đi, Status bar trở nên trong suốt, Content chiếm nhiều không gian hơn, Height tăng lên, Expanded status đổi thành ✅ Yes |

---

## Fullscreen

Chế độ toàn màn hình tuyệt đối.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Fullscreen |
| Tác dụng | Chế độ toàn màn hình tuyệt đối, ẩn hoàn toàn cả status bar, toolbar và navigation bar. Khác với Expand Viewport - Fullscreen ẩn TẤT CẢ các thanh hệ thống, chiếm 100% màn hình thiết bị. |
| Ví dụ thực tế | App xem video/phim cần trải nghiệm immersive; game cần không gian chơi tối đa; app camera/AR cần toàn bộ màn hình; app trình chiếu slide. |
| Android Interface | `setFullscreen()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🖥️ Fullscreen"
2. Nhấn "Vào Fullscreen"
3. Quan sát:
   - Status bar (thanh pin, giờ) biến mất
   - Navigation bar (thanh điều hướng) biến mất
   - Toolbar biến mất
   - Mini App chiếm toàn bộ màn hình
4. Cuộn tìm lại section Fullscreen
5. Nhấn "Thoát Fullscreen"

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Vào Fullscreen | Status bar ẩn hoàn toàn, Navigation bar ẩn hoàn toàn, Toolbar ẩn, App chiếm 100% màn hình |
| Thoát Fullscreen | Tất cả thanh trở lại bình thường |

---

## Swipe Behavior

Kiểm soát cử chỉ vuốt đóng app.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Swipe Behavior |
| Tác dụng | Kiểm soát cử chỉ vuốt đóng app, cho phép hoặc chặn người dùng vuốt/nhấn back (nút back của điện thoại) để thoát Mini App. Thường kết hợp với Closing Confirmation để có UX tốt nhất. |
| Ví dụ thực tế | Trong flow thanh toán quan trọng, tắt swipe để tránh user vô tình thoát mất dữ liệu; trong game đang chơi, ngăn thoát nhầm; trong form đang điền dở, bảo vệ dữ liệu chưa lưu. |
| Android Interface | `setSwipeEnabled()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "👆 Swipe Behavior"
2. Thấy checkbox "Cho phép vuốt dọc để đóng" (mặc định: ✓ checked)
3. Bỏ check checkbox
4. Quan sát Toast: "Swipe to close: OFF"
5. Thử nhấn nút Back (nút back của điện thoại)
6. Khi không có trang để back lại → Toast nói "Swipe to close đã bị vô hiệu hóa", app không đóng
7. Check lại checkbox để bật lại

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Disable Swipe | Toast "Swipe to close: OFF", Nhấn Back không còn đóng app được, Gesture back bị chặn |
| Enable Swipe | Toast "Swipe to close: ON", Back hoạt động bình thường |

---

## Closing Confirmation

Hiển thị dialog xác nhận trước khi đóng app.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Closing Confirmation |
| Tác dụng | Hiển thị dialog xác nhận trước khi đóng app, bảo vệ người dùng khỏi mất dữ liệu do thoát nhầm. Giảm tỷ lệ abandon cart và mất dữ liệu. |
| Ví dụ thực tế | Trong giỏ hàng có sản phẩm chưa checkout, hỏi "Bạn có item chưa thanh toán, chắc chắn muốn thoát?"; trong form đăng ký dài, hỏi "Dữ liệu chưa lưu, bạn muốn tiếp tục?"; trong game, hỏi "Tiến trình chưa save, thoát ngay?". |
| Android Interface | `setClosingConfirmation()` |

### Cách kiểm tra trong demo

**Từ Mini App UI:**

1. Cuộn tìm section "🚪 Closing Behavior"
2. Nhấn "🔒 Bật Xác nhận đóng"
3. Nhấn nút Back hoặc cố gắng đóng app
4. Quan sát dialog hiện ra:
   - Title: "Xác nhận thoát"
   - Message: "Bạn có chắc muốn thoát Mini App?"
   - Buttons: "Thoát" | "Ở lại"
5. Nhấn "Ở lại" → Dialog đóng, vẫn ở Mini App
6. Nhấn "Thoát" → App đóng
7. Nhấn "🔓 Tắt Xác nhận đóng" để disable

### Kết quả mong đợi

| Thao tác | Kết quả |
|----------|---------|
| Enable | Trạng thái needCloseConfirmation = true |
| Nhấn Back | Dialog xác nhận hiện ra thay vì đóng ngay |
| Nhấn "Ở lại" | Dialog đóng, vẫn ở app |
| Nhấn "Thoát" | App đóng |

---

## Theme Sync

Tự động đồng bộ theme Light/Dark từ hệ thống Android.

### Thông tin SDK

| Thuộc tính | Giá trị |
|------------|---------|
| Tên SDK | Theme Sync |
| Tác dụng | Tự động đồng bộ theme Light/Dark từ hệ thống Android sang Mini App, đảm bảo giao diện nhất quán. Các màu text, background, button đều thay đổi theo, không cần user cài đặt riêng trong app. |
| Ví dụ thực tế | Khi user bật Dark Mode trên điện thoại lúc 10h tối, Mini App tự động chuyển sang nền tối, bảo vệ mắt; khi ra ngoài trời sáng, tự chuyển Light Mode để dễ nhìn hơn. |
| Android Interface | `requestTheme()` |

### Cách kiểm tra trong demo

1. Mở Mini App
2. Vào trang "Theme Params"
3. Xem các giá trị theme hiện tại (bg_color, text_color, etc.)
4. Chuyển qua lại giữa chế độ sáng và tối (dark, light mode)
5. Kiểm tra các giá trị theme đã thay đổi

### Kết quả mong đợi

| Mode | bg_color | text_color |
|------|----------|------------|
| Light | #ffffff | #000000 |
| Dark | #17212b | #f5f5f5 |
