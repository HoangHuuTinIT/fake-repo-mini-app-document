# Đưa Mini-App vào trong app Android Native
Để đưa Mini-App vào trong app Android Native, bạn cần thực hiện các bước sau:

- Trong dự án Android, tìm đến đường dẫn app/src/main/.

- Nếu chưa có thư mục assets, hãy tạo mới nó

- Copy toàn bộ thư mục dist (có ở bước Build Mini-App) và Paste vào trong thư mục assets vừa tạo

Đường dẫn thư mục sẽ trông như sau:
![IntegrateMiniApps1](/IntegrateMiniApp/IntegrateMiniApps1.avif)

<div style="display: flex; align-items: center; padding: 10px; border: 1px solid #E2A600FF; border-radius: 10px; color: #E2A600FF;">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="margin-right: 10px;">
        <path fill-rule="evenodd" d="M18 8A8 8 0 1 1 2 8a8 8 0 0 1 16 0zM9 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V4zm1 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" clip-rule="evenodd"></path>
    </svg>
    <span>Lưu ý: Vị trí hay tên gọi của thư mục chứa các file mini-app sau khi build trong thư mục assets có thể thay đổi tùy theo nhu cầu.</span>
</div>