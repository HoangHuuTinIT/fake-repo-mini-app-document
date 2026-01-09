---
outline: deep
---

# Giới thiệu

Phần này sẽ liệt kê đầy đủ SDK đã được triển khai, bao gồm thông tin của từng SDK, hướng dẫn kiểm tra chi tiết từng bước và kết quả mong đợi cụ thể.

## Repository

Để test app android sau khi tích hợp mini-app vui lòng clone repo tại đường link:

```
https://github.com/HoangHuuTinIT/host-mini-app-tele
```

Để lấy mã nguồn mini-app được sử dụng để tích hợp với app android trong tài liệu vui lòng clone repo tại đường link:

```
https://github.com/HoangHuuTinIT/mini-app-telegram-2.git
```
Để lấy mã nguồn gốc của mini-app được sử dụng để tích hợp với app android trong tài liệu này vui lòng clone repo tại đường link:
```
https://github.com/Telegram-Mini-Apps/vuejs-template.git
```
## Danh sách SDK

| Category | Số lượng SDK | File test chính |
|----------|--------------|-----------------|
| Buttons  | 4 | IndexPage.vue |
| UI Control | 7 | IndexPage.vue |
| Feedback | 3 | IndexPage.vue |
| Actions | 10 | IndexPage.vue |
| Permissions | 3 | IndexPage.vue |
| Storage | 1 | IndexPage.vue |
| Sensors | 3 | IndexPage.vue |
| Location | 1 | IndexPage.vue |
| Biometric | 1 | IndexPage.vue |
| Others | 3 | IndexPage.vue |
| **Tổng cộng** | **36** | |

## Files liên quan

### Phía Mini-App

| File | Mô tả |
|------|-------|
| IndexPage.vue | Trang chính chứa UI test tất cả SDK |
| mockEnv.ts | Bridge layer xử lý events SDK ↔ Android |
| env.d.ts | TypeScript declarations cho Android interface |

### Phía App Android Native

| File | Mô tả |
|------|-------|
| MainActivity.kt | Android Activity chứa WebView + SDK test menu |
| WebAppInterface.kt | Class chứa các @JavascriptInterface methods để cho mini-app gọi |