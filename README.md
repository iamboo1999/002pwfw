# Tên dự án
Automation-bba
Dự án này chứa code automation cho BBA

# Cấu trúc
Cấu trúc bao gồm các thư mục

├── README.md
├── constants
├── fixtures
├── node_modules
├── package-lock.json
├── package.json
├── playwright.config.ts
├── pom
├── tests
├── tests-examples
└── utils

Trong đó:

README.md: file tài liệu, chứa cách cài đặt, các conventions, lưu ý và các lỗi thường gặp.
constants: folder chứa các hằng số thường dùng cho toàn bộ dự án.
playwright.config.ts: file config theo môi trường
pom: folder chứa các page object model
utils: folder chứa các hàm utils dùng cho dự án.
fixtures: folder chứa các fixture viết sẵn cho dự án.
.gitignore: file chứa các ignore file

# Cách chạy dự án ở local
- Tạo file .env
- Điền thông số sau:...
- Chạy lệnh:
...
npx playwright test -g "@casename"

# Lưu ý
- Cần bật VPN trước khi lấy code về hoặc trước khi chạy test

# Convention
- Sử dụng camel case
- Không upload file quá lớn (>=2 MB), tránh nặng file

# Workflows
- [Workflow](docs/workflow.md)
