# Build Mini-App

Đây là bước biên dịch mã nguồn Vue.js thành các file tĩnh (HTML, CSS, JS) mà Android có thể đọc được.

## Cách thực hiện

- Mở cửa sổ dòng lệnh (Terminal/Command Prompt) tại thư mục gốc của dự án Vue.js.
- Chạy lệnh sau để build:
```
npm run build
```

- Sau khi chạy xong, một thư mục tên là dist sẽ được sinh ra ngay tại thư mục gốc.
- Bên trong dist sẽ chứa file index.html và thư mục assets chứa các file JS/CSS đã được nén. Mọi thứ trong này là những gì cần để chạy app.

## Vị trí thư mục sau khi build 
Sau khi build được mini-app ra bằng lệnh npm run build, thư mục dist sẽ được sinh ra tại vị trí:
![BuildMiniApps1](/BuildMiniApp/BuildMiniApps1.avif)