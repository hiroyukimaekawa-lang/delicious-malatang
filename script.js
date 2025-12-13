// モバイルメニューのトグル
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ナビゲーションリンククリック時にモバイルメニューを閉じる
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// フォーム送信処理
const orderForm = document.querySelector('.order-form');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(orderForm);
        const data = Object.fromEntries(formData);
        
        // ここで実際の送信処理を実装
        alert('ご注文ありがとうございます！\n確認のため、後ほどお電話させていただきます。');
        orderForm.reset();
    });
}

// 予約フォームは削除（予約不可のため）

// スクロール時のヘッダー効果
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// スムーススクロール（既にCSSで実装されているが、念のため）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .info-card, .about-content, .order-content, .reservation-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// 日付入力の最小値を今日に設定
const dateInputs = document.querySelectorAll('input[type="datetime-local"]');
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

dateInputs.forEach(input => {
    input.setAttribute('min', minDateTime);
});

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

