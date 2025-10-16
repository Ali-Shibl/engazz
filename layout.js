const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const overlay = document.getElementById("overlay");

// تفعيل التولتيب
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
  } else {
    sidebar.classList.toggle("closed");
    content.classList.toggle("expanded");
  }
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// تحميل الصفحة عند الضغط على اللينك
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // إزالة active من الكل وإضافتها للرابط الحالي
    document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    // تحميل الصفحة المطلوبة
    const page = link.getAttribute("data-page");
    if (page) {
      loadPage(page);
    }

    // لو موبايل، اقفل القائمة بعد الضغط
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    }
  });
});




async function loadPage(page) {
  try {
    // تحميل HTML الصفحة
    const res = await fetch(`pages/${page}`);
    const html = await res.text();
    content.innerHTML = html;

    // تحميل ملف JS الخاص بالصفحة (نفس الاسم)
    const scriptName = page.replace(".html", ".js");
    const scriptPath = `js/${scriptName}`;
        // نحاول تحميله لو موجود
    importScript(scriptPath);

        // تحميل ملف CSS الخاص بالصفحة (نفس الاسم)
    const cssName = page.replace(".html", ".css");
    const cssPath = `styles/${cssName}`;
    importCSS(cssPath);


  } catch (error) {
    content.innerHTML = `<div class="text-center text-danger mt-5">حدث خطأ أثناء تحميل الصفحة</div>`;
  }
}

function importScript(src) {
  // حذف أي سكريبت قديم خاص بصفحة سابقة
  document.querySelectorAll("script[data-page-script]").forEach(s => s.remove());

  const script = document.createElement("script");
  script.src = src;
  script.dataset.pageScript = "true";
  script.onload = () => console.log(`✅ تم تحميل ${src}`);
  script.onerror = () => console.warn(`⚠️ لم يتم العثور على ${src}`);
  document.body.appendChild(script);
}
function importCSS(href) {
  // حذف أي CSS قديم خاص بصفحة سابقة
  document.querySelectorAll("link[data-page-css]").forEach(l => l.remove());

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.pageCss = "true";
  link.onload = () => console.log(`✅ تم تحميل ${href}`);
  link.onerror = () => console.warn(`⚠️ لم يتم العثور على ${href}`);
  document.head.appendChild(link);
}

// اختر اللوجو
const logo = document.querySelector(".sidebar .logo");

logo.addEventListener("click", () => {
  // إزالة active من كل الروابط
  document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));

  // إضافة active للرابط الرئيسي (home)
  const homeLink = document.querySelector('.sidebar a[data-page="home.html"]');
  if (homeLink) homeLink.classList.add("active");

  // تحميل الصفحة الرئيسية
  loadPage("home.html");

  // لو موبايل، اقفل القائمة بعد الضغط
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }
});

// تحميل الصفحة الرئيسية افتراضيًا
loadPage("home.html");



// 
// ===== تسجيل الخروج =====
document.addEventListener("click", (e) => {
  const logoutBtn = e.target.closest("#logoutBtn");
  if (logoutBtn) {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Logout",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {


        // بعد ثانية، وجه المستخدم لصفحة تسجيل الدخول
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      }
    });
  }
});
