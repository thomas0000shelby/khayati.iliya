// انیمیشن برای گالری
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#gallery img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // منطق فرم لاگین
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username')?.value;
            const password = document.getElementById('password')?.value;
            const isAdmin = document.getElementById('isAdmin')?.checked;

            if (username && password) {
                if (isAdmin) {
                    alert('ورود به عنوان ادمین: خوش آمدید!');
                    // اینجا می‌تونی به صفحه ادمین redirect کنی
                } else {
                    alert('ورود به عنوان کاربر: خوش آمدید!');
                }
            } else {
                alert('لطفاً همه فیلدها را پر کنید.');
            }
        });
    }
});