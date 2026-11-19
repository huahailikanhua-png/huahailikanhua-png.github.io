/* ============================================================
   下载站配置文件 —— 以后增删资源，只改这一个文件即可
   ------------------------------------------------------------
   字段说明：
     name        资源名称（显示在卡片标题）
     description 资源简介（显示在标题下方）
     version     版本号，可留空 ""
     size        文件大小，如 "12.4 MB"，可留空 ""
     date        更新日期，如 "2026-11-19"，可留空 ""
     file        下载文件路径。放在本站 downloads 文件夹里就写
                 "downloads/文件名.zip"；也可以用完整网址指向
                 阿里云 OSS / 腾讯云 COS 等外链
     image       卡片配图路径，可留空 ""（留空会自动轮流使用
                 images/pic01.jpg ~ pic06.jpg）
   ============================================================ */

window.DOWNLOAD_SITE = {
  title: "我的下载站",
  intro: "欢迎来到我的下载站。下面的资源可以直接点击下载按钮获取。",
  items: [
    {
      name: "金宝桌面 v1.0.30",
      description: "桌面图标整理与备份工具，支持自定义布局、快捷整理与还原。",
      version: "v1.0.30",
      size: "8.5 MB",
      date: "2026-11-17",
      file: "https://github.com/huahailikanhua-png/huahailikanhua-png.github.io/releases/download/v1.0.30/JinbaoDesktop-win-Setup.exe",
      image: ""
    }
  ]
};
