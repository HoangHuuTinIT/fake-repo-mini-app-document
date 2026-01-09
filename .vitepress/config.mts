import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mini-app Documentation",
  description: "Official documentation for Mini-app",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/vbot-documentation/app-logo.png",
      },
    ],
  ],
  base: "/vbot-documentation/",
  themeConfig: {
    docFooter: {
      prev: "Trang trước",
      next: "Trang sau",
    },
    nav: [
      { text: "Trang chủ", link: "/" },
      { text: "Tài liệu", link: "/overview/introduction" },
    ],

    sidebar: [
      {
        text: "Tổng quan",
        collapsed: false,
        items: [
          { text: "Giới thiệu", link: "/overview/introduction" },

        ],
      },
      {
        text: "Cách tích hợp mini-app",
        collapsed: false,
        items: [
          { text: "Build Mini-App", link: "/integrate-mini-app/build-mini-app" },
          { text: "Đưa Mini-App vào App Android", link: "/integrate-mini-app/immport-mini-app" },
          { text: "Chạy Mini-App", link: "/integrate-mini-app/run-mini-app" },
          { text: "Truyền dữ liệu từ Android Native -> Mini-App", link: "/integrate-mini-app/data-from-native-to-mini-app" },
          { text: "Truyền dữ liệu từ Mini-App -> Android Native", link: "/integrate-mini-app/data-from-mini-app-to-native" },
        ],
      },
      {
        text: "Các SDK được tích hợp",
        collapsed: false,
        items: [
          { text: "Giới thiệu", link: "/sdk-integrated/introduction" },
          { text: "Buttons - Các nút bấm", link: "/sdk-integrated/buttons" },
          { text: "UI Control - Điều khiển giao diện", link: "/sdk-integrated/ui-control" },
          { text: "Feedback - Phản hồi người dùng", link: "/sdk-integrated/feedback" },
          { text: "Actions - Hành động", link: "/sdk-integrated/actions" },
          { text: "Permissions - Quyền truy cập", link: "/sdk-integrated/permissions" },
          { text: "Storage - Lưu trữ", link: "/sdk-integrated/storage" },
          { text: "Sensors - Cảm biến", link: "/sdk-integrated/sensors" },
          { text: "Location - Vị trí", link: "/sdk-integrated/location" },
          { text: "Biometric - Sinh trắc học", link: "/sdk-integrated/biometric" },
          { text: "Others - Khác", link: "/sdk-integrated/others" },
        ],
      },
      {
        text: "Tổng kết",
        collapsed: false,
        items: [
          { text: "Các SDK được tích hợp", link: "/summary/sdk-summary" },
        ],
      },
      {
        text: "Các file liên quan",
        collapsed: false,
        items: [
          { text: "Phía Mini-App", link: "/related-files/related-files-mini-app" },
          { text: "Phía Android Native", link: "/related-files/related-files-native" },
        ],
      },
    ],
    outlineTitle: "Mục lục",
    logo: "/app-logo.png",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Tìm kiếm",
            buttonAriaLabel: "Tìm kiếm",
          },
          modal: {
            displayDetails: "Hiển thị danh sách chi tiết",
            resetButtonTitle: "Đặt lại tìm kiếm",
            backButtonTitle: "Đóng tìm kiếm",
            noResultsText: "Không có kết quả",
            footer: {
              selectText: "Chọn",
              selectKeyAriaLabel: "Nhập",
              navigateText: "Điều hướng",
              navigateUpKeyAriaLabel: "Mũi tên lên",
              navigateDownKeyAriaLabel: "Mũi tên xuống",
              closeText: "Đóng",
              closeKeyAriaLabel: "Esc",
            },
          },
        },
      },
    },
  },
});
