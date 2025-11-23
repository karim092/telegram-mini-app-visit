// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

class PremiumBusinessCard {
    constructor() {
        this.init();
        this.bindEvents();
    }
    
    init() {
        // Раскрываем приложение на весь экран
        tg.expand();
        
        // Устанавливаем тему
        this.setTheme();
        
        // Заполняем данные пользователя
        this.fillUserData();
        
        // Показываем интерфейс
        tg.ready();
        
        console.log('💎 Премиум визитка запущена!');
    }
    
    setTheme() {
        // Используем системные цвета Telegram, но с нашей золотой темой
        document.documentElement.style.setProperty('--tg-theme-bg-color', '#000000');
        document.documentElement.style.setProperty('--tg-theme-text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--tg-theme-button-color', '#FFD700');
        document.documentElement.style.setProperty('--tg-theme-button-text-color', '#000000');
    }
    
    /*fillUserData() {
        const user = tg.initDataUnsafe.user;
        if (user) {
            // Обновляем имя пользователя
            const userName = document.getElementById('user-name');
            const fullName = user.first_name + (user.last_name ? ` ${user.last_name}` : '');
            userName.textContent = fullName;
            
            // Можно обновить аватар, если есть доступ
            if (user.photo_url) {
                const avatar = document.querySelector('.avatar');
                avatar.src = user.photo_url;
                avatar.onerror = () => {
                    // Если фото не загружается, используем стандартное
                    avatar.src = 'images/avatar.jpg';
                };
            }
            
            // Добавляем username в заголовок
            if (user.username) {
                const title = document.querySelector('.title');
                title.textContent += ` | @${user.username}`;
            }
        }
    }*/
    
    bindEvents() {
        // Кнопка "Связаться со мной" - ИСПРАВЛЕННЫЙ КОД
        const contactBtn = document.getElementById('contact-btn');
        if (contactBtn) {
            contactBtn.addEventListener('click', () => {
                this.showContactOptions();
            });
            console.log('✅ Кнопка "Связаться" найдена и привязана');
        } else {
            console.log('❌ Кнопка "Связаться" не найдена!');
        }
        
        // Кнопки социальных сетей
        const socialBtns = document.querySelectorAll('.social-btn');
        console.log(`📱 Найдено кнопок социальных сетей: ${socialBtns.length}`);
        
        socialBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const url = e.currentTarget.getAttribute('data-url');
                console.log('🌐 Открываем ссылку:', url);
                if (url) {
                    tg.openLink(url);
                }
            });
        });
        
        // Анимация при загрузке
        this.animateElements();
    }
    
    showContactOptions() {
        console.log('🔄 Открывается попап контактов...');
        
        // Создаем кастомные кнопки для попапа
        const buttons = [
            { id: 'telegram', text: '📱 Написать в Telegram', type: 'default' },
            { id: 'phone', text: '📞 Позвонить', type: 'default' },
            { id: 'email', text: '📧 Отправить Email', type: 'default' },
            { id: 'cancel', text: '❌ Отмена', type: 'cancel' }
        ];
        
        // Показываем попап с контактами
        tg.showPopup({
            title: '💎 Связаться со мной',
            message: 'Выберите удобный способ связи:',
            buttons: buttons
        }, (buttonId) => {
            console.log('🔘 Нажата кнопка:', buttonId);
            
            switch(buttonId) {
                case 'telegram':
                    tg.openLink('https://t.me/yourusername');
                    break;
                case 'phone':
                    // Для телефона используем tel: ссылку
                    tg.openLink('tel:+79991234567');
                    break;
                case 'email':
                    tg.openLink('mailto:your@email.com');
                    break;
                case 'cancel':
                    // Ничего не делаем при отмене
                    console.log('❌ Пользователь отменил выбор');
                    break;
                default:
                    console.log('⚡ Неизвестная кнопка:', buttonId);
            }
        });
    }
    
    showContactOptions() {
        const buttons = [
            { id: 'telegram', text: '📱 Написать в Telegram', type: 'default' },
            { id: 'phone', text: '📞 Позвонить', type: 'default' },
            { id: 'email', text: '📧 Email', type: 'default' },
            { type: 'cancel' }
        ];
        
        tg.showPopup({
            title: '💎 Связаться',
            message: 'Выберите удобный способ связи:',
            buttons: buttons
        }, (buttonId) => {
            switch(buttonId) {
                case 'telegram':
                    tg.openLink('https://t.me/yourusername');
                    break;
                case 'phone':
                    tg.openLink('tel:+79991234567');
                    break;
                case 'email':
                    tg.openLink('mailto:your@email.com');
                    break;
            }
        });
    }
    
    animateElements() {
        // Анимация появления элементов
        const elements = document.querySelectorAll('.avatar-container, .profile-info, .contact-info, .contact-btn, .social-links');
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                el.style.transition = 'all 0.6s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // Дополнительные премиум функции
    addPremiumFeatures() {
        // Можно добавить дополнительные функции позже
        console.log('Премиум функции готовы к добавлению!');
    }
}

// Запускаем приложение когда DOM готов
document.addEventListener('DOMContentLoaded', () => {
    new PremiumBusinessCard();
});

// Показываем информацию для отладки
console.log('🤖 Telegram Web App инициализирован:', tg.initDataUnsafe);


