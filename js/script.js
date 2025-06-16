document.addEventListener('DOMContentLoaded', () => {
    // --- Глобальные данные об играх (обычно загружаются с бэкенда) ---
    // Данные сохраняются в gamesData и могут быть обновлены отзывами.
    // Используем `let`, чтобы можно было изменять данные.
    let gamesData = {
        'cyberpunk-2077': {
            id: 'cyberpunk-2077',
            name: 'Cyberpunk 2077',
            category: 'RPG, Action',
            price: 59.99,
            oldPrice: 79.99,
            image: 'images/cyberpunk.jpg',
            description: 'Cyberpunk 2077 — это приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся превыше всего. Вы играете за V, наёмника в поиске уникального импланта, который является ключом к бессмертию. Вы можете настроить кибероборудование, навыки и стиль игры своего персонажа, исследуя огромный открытый мир, где ваш выбор влияет на историю и её исход.',
            rating: 4.5,
            reviews: [
                { reviewerName: 'Иван Петров', rating: 5, comment: 'Потрясающая игра, графика невероятна!', date: '2023-01-15T12:00:00Z' },
                { reviewerName: 'Мария Сидорова', rating: 4, comment: 'Немного багов, но сюжет захватывает.', date: '2023-02-01T10:30:00Z' }
            ]
        },
        'witcher-3': {
            id: 'witcher-3',
            name: 'The Witcher 3: Wild Hunt',
            category: 'RPG',
            price: 39.99,
            image: 'images/witcher3.jpg',
            description: 'Ведьмак 3: Дикая Охота — это ролевая игра нового поколения с открытым миром и глубоким, ориентированным на сюжет повествованием, действие которой разворачивается в поразительной фэнтези-вселенной, где игроку предстоит принимать значимые решения, имеющие далеко идущие последствия.',
            rating: 5,
            reviews: [
                { reviewerName: 'Алексей Смирнов', rating: 5, comment: 'Шедевр! Лучшая RPG всех времен.', date: '2022-11-20T08:00:00Z' },
                { reviewerName: 'Елена Козлова', rating: 5, comment: 'Прошла несколько раз, всегда нахожу что-то новое.', date: '2023-03-10T14:45:00Z' }
            ]
        },
        'red-dead-redemption-2': {
            id: 'red-dead-redemption-2',
            name: 'Red Dead Redemption 2',
            category: 'Action-adventure',
            price: 49.99,
            oldPrice: 69.99,
            image: 'images/red_dead.jpg',
            description: 'Red Dead Redemption 2 — это эпическая история о жизни в Америке на заре современной эпохи. Огромный и атмосферный открытый мир, который также станет основой для совершенно нового многопользовательского режима.',
            rating: 4.8,
            reviews: [
                { reviewerName: 'Дмитрий Волков', rating: 5, comment: 'Детализация мира поражает! Сюжет очень сильный.', date: '2023-04-05T16:20:00Z' },
                { reviewerName: 'Ольга Соколова', rating: 4, comment: 'Немного медленный темп, но все равно отлично.', date: '2023-05-12T11:00:00Z' }
            ]
        },
        'elden-ring': {
            id: 'elden-ring',
            name: 'Elden Ring',
            category: 'Action RPG',
            price: 59.99,
            image: 'images/elden_ring.jpg',
            description: 'Elden Ring — это фэнтезийная ролевая игра в жанре экшн, действие которой происходит в мире, созданном Хидетакой Миядзаки и Джорджем Р.Р. Мартином. Вас ждет обширный открытый мир, наполненный тайнами и опасностями, и сложная боевая система.',
            rating: 4.7,
            reviews: [
                { reviewerName: 'Сергей Николаев', rating: 5, comment: 'Очень сложная, но невероятно затягивающая!', date: '2023-06-20T09:15:00Z' },
                { reviewerName: 'Анна Морозова', rating: 4, comment: 'Визуальный стиль и лор на высоте.', date: '2023-07-01T13:00:00Z' }
            ]
        },
        'baldurs-gate-3': {
            id: 'baldurs-gate-3',
            name: 'Baldur\'s Gate 3',
            category: 'RPG',
            price: 69.99,
            image: 'images/baldurs_gate3.jpg',
            description: 'Baldur\'s Gate 3 — это ролевая игра нового поколения от создателей Divinity: Original Sin II. Собирайте отряд, возвращайтесь в Забытые Королевства и начните историю о дружбе и предательстве, о самопожертвовании и выживании, а также о соблазне абсолютной власти.',
            rating: 4.9,
            reviews: [
                { reviewerName: 'Михаил Иванов', rating: 5, comment: 'Лучшая ролевая игра за последние годы!', date: '2023-08-10T17:00:00Z' },
                { reviewerName: 'Виктория Ковалева', rating: 5, comment: 'Каждый выбор имеет значение. Восторг!', date: '2023-09-01T10:00:00Z' }
            ]
        },
        'zelda-totk': {
            id: 'zelda-totk',
            name: 'The Legend of Zelda: Tears of the Kingdom',
            category: 'Action-adventure',
            price: 59.99,
            image: 'images/zelda_totk.jpg',
            description: 'Продолжение The Legend of Zelda: Breath of the Wild, в котором Линк исследует не только обширные земли Хайрула, но и таинственные парящие острова в небе.',
            rating: 4.6,
            reviews: [
                { reviewerName: 'Наталья Гусева', rating: 5, comment: 'Бесконечное творчество и исследования, просто потрясающе!', date: '2023-10-15T18:00:00Z' },
                { reviewerName: 'Павел Климов', rating: 4, comment: 'Немного похоже на предыдущую часть, но все равно очень хорошо.', date: '2023-11-01T12:00:00Z' }
            ]
        },
        'god-of-war-ragnarok': {
            id: 'god-of-war-ragnarok',
            name: 'God of War Ragnarök',
            category: 'Action-adventure',
            price: 69.99,
            image: 'images/god_of_war_ragnarok.jpg',
            description: 'Отправляйтесь в эпическое и трогательное путешествие вместе с Кратосом и Атреем, чтобы найти ответы и союзников перед лицом приближающегося Рагнарёка.',
            rating: 4.9,
            reviews: [
                { reviewerName: 'Артем Лебедев', rating: 5, comment: 'Мощный сюжет и отличный геймплей. Must have!', date: '2023-12-05T09:00:00Z' }
            ]
        },
        'horizon-forbidden-west': {
            id: 'horizon-forbidden-west',
            name: 'Horizon Forbidden West',
            category: 'Action RPG',
            price: 49.99,
            oldPrice: 59.99,
            image: 'images/horizon_forbidden_west.jpg',
            description: 'Присоединяйтесь к Элой в её путешествии по опасному, но великолепному западному запретному миру, где её ждут новые таинственные угрозы.',
            rating: 4.4,
            reviews: [
                { reviewerName: 'Ксения Попова', rating: 4, comment: 'Красивый мир и интересные персонажи.', date: '2024-01-20T14:00:00Z' }
            ]
        }
    };

    // Initialize gamesData from localStorage if it exists (for persistent reviews in demo)
    // Важно: эта логика должна идти до использования gamesData, но после ее объявления.
    const storedGamesData = localStorage.getItem('gamesData');
    if (storedGamesData) {
        try {
            // Attempt to parse stored data. If invalid, catch the error and prevent crashes.
            const parsedData = JSON.parse(storedGamesData);
            // Используем Object.assign для глубокого слияния, если структура gamesData сложная,
            // но для нашего простого объекта прямое присвоение или spread-оператор тоже подойдут.
            Object.assign(gamesData, parsedData);
        } catch (e) {
            console.error("Error parsing stored games data from localStorage:", e);
            // Optionally, clear the corrupted data from localStorage
            localStorage.removeItem('gamesData');
            showNotification('Ошибка при загрузке данных игр. Данные сброшены.', 'error');
        }
    }


    // --- Custom Notification System ---
    function showNotification(message, type = 'success', duration = 3000) {
        let notification = document.querySelector('.custom-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.classList.add('custom-notification');
            document.body.appendChildg(notification);
        }

        // Remove existing type classes
        notification.classList.remove('success', 'error', 'info');
        // Add new type class
        notification.classList.add(type);

        notification.textContent = message;
        notification.classList.add('show');

        // Hide after duration
        setTimeout(() => {
            notification.classList.remove('show');
        }, duration);
    }

    // --- Theme Switcher Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    function loadTheme() {
        // Default to 'dark' if no theme is saved or if an invalid theme is stored
        const savedTheme = localStorage.getItem('theme') || 'dark';
        body.setAttribute('data-theme', savedTheme);
        updateThemeToggleIcon(savedTheme);
    }

    function updateThemeToggleIcon(theme) {
        const sunIcon = themeToggleBtn ? themeToggleBtn.querySelector('.fa-sun') : null;
        const moonIcon = themeToggleBtn ? themeToggleBtn.querySelector('.fa-moon') : null;

        if (sunIcon && moonIcon) { // Ensure both icons exist before manipulating them
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline-block';
            } else {
                sunIcon.style.display = 'inline-block';
                moonIcon.style.display = 'none';
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let currentTheme = body.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggleIcon(newTheme);
        });
    }
    loadTheme(); // Call on page load to apply initial theme

    // --- END Theme Switcher Logic ---


    // --- Navigation Active Link Logic ---
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav ul li a');

    navLinks.forEach(link => {
        // Special handling for index.html to be active when path is empty
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Shopping Cart Logic (Simple In-Memory/LocalStorage) ---
    // Load cart from localStorage or initialize as empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountElement.textContent = totalItems;
            cartCountElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
        }
    }
    updateCartCount(); // Call on page load to set initial cart count

    // Make addToCart globally accessible for inline onclick in HTML
    window.addToCart = function(productId, quantity = 1) {
        quantity = parseInt(quantity);
        const game = gamesData[productId];
        if (!game) {
            console.error('Game not found:', productId);
            showNotification('Ошибка: Игра не найдена.', 'error');
            return;
        }

        const existingItemIndex = cart.findIndex(item => item.id === productId);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({
                id: productId,
                name: game.name,
                price: game.price,
                image: game.image,
                quantity: quantity
            });
        }
        saveCart();
        showNotification(`${game.name} добавлен в корзину!`, 'success');
    };

    // --- Dynamic Content Loading for Index Page (Featured Games) ---
    const gameGrid = document.getElementById('game-grid');
    if (gameGrid) {
        const featuredGameIds = ['cyberpunk-2077', 'witcher-3', 'red-dead-redemption-2', 'elden-ring', 'baldurs-gate-3', 'zelda-totk'];
        let featuredGamesHTML = '';
        featuredGameIds.forEach(id => {
            const game = gamesData[id];
            if (game) {
                featuredGamesHTML += `
                    <div class="game-card">
                        <a href="product.html?id=${game.id}"><img src="${game.image}" alt="${game.name}"></a>
                        <div class="game-card-content">
                            <h3><a href="product.html?id=${game.id}">${game.name}</a></h3>
                            <p class="category">${game.category}</p>
                            <p class="price">$${game.price.toFixed(2)} ${game.oldPrice ? `<span>$${game.oldPrice.toFixed(2)}</span>` : ''}</p>
                            <button class="btn" onclick="addToCart('${game.id}', 1)">Добавить в корзину</button>
                        </div>
                    </div>
                `;
            }
        });
        gameGrid.innerHTML = featuredGamesHTML;
    }

    // --- Product Detail Page Logic (product.html) ---
    const productDetailContainer = document.querySelector('.product-detail');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id') || 'cyberpunk-2077'; // Default to Cyberpunk if no ID

        const game = gamesData[productId];

        if (game) {
            document.title = `${game.name} - GameKeys`;
            productDetailContainer.innerHTML = `
                <div class="product-image">
                    <img src="${game.image}" alt="${game.name}">
                </div>
                <div class="product-info">
                    <h1>${game.name}</h1>
                    <p class="category">${game.category}</p>
                    <div class="rating" id="product-rating">
                        ${generateStarRatingHTML(game.rating)}
                    </div>
                    <p class="description">${game.description}</p>
                    <p class="price-large">$${game.price.toFixed(2)} ${game.oldPrice ? `<span>$${game.oldPrice.toFixed(2)}</span>` : ''}</p>
                    <div class="product-actions">
                        <div class="quantity-control">
                            <button id="decrease-quantity">-</button>
                            <input type="text" id="product-quantity" value="1" readonly>
                            <button id="increase-quantity">+</button>
                        </div>
                        <button class="btn" id="add-to-cart-btn">Добавить в корзину</button>
                    </div>
                    <div style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                        <h3 style="text-align: left; margin-bottom: 15px;">Особенности Игры:</h3>
                        <ul id="game-features" style="list-style: none; padding-left: 0; color: var(--text-color);">
                            <li><i class="fas fa-check-circle" style="color: var(--accent-green); margin-right: 10px;"></i> Многопользовательский режим</li>
                            <li><i class="fas fa-check-circle" style="color: var(--accent-green); margin-right: 10px;"></i> Открытый мир</li>
                            <li><i class="fas fa-check-circle" style="color: var(--accent-green); margin-right: 10px;"></i> Глубокий сюжет</li>
                            </ul>
                    </div>
                </div>
            `;

            // Quantity control logic
            const quantityInput = document.getElementById('product-quantity');
            const decreaseBtn = document.getElementById('decrease-quantity');
            const increaseBtn = document.getElementById('increase-quantity');
            const addToCartBtn = document.getElementById('add-to-cart-btn');

            decreaseBtn.addEventListener('click', () => {
                let currentQty = parseInt(quantityInput.value);
                if (currentQty > 1) {
                    quantityInput.value = currentQty - 1;
                }
            });

            increaseBtn.addEventListener('click', () => {
                let currentQty = parseInt(quantityInput.value);
                quantityInput.value = currentQty + 1;
            });

            addToCartBtn.addEventListener('click', () => {
                addToCart(productId, quantityInput.value);
            });

            // Reviews section dynamic content (will be appended to .review-section by renderReviews)
            const reviewSection = document.querySelector('.review-section');
            if (reviewSection) {
                reviewSection.innerHTML = `
                    <h3>Отзывы о ${game.name}</h3>
                    <div class="review-list" id="review-list">
                        </div>
                    <div class="review-form">
                        <h3>Оставить отзыв</h3>
                        <form id="add-review-form">
                            <div class="form-group">
                                <label for="reviewer-name">Ваше имя:</label>
                                <input type="text" id="reviewer-name" required>
                            </div>
                            <div class="form-group rating-input">
                                <label for="review-rating">Рейтинг:</label>
                                <div class="stars" id="review-stars">
                                    <i class="far fa-star" data-rating="1"></i>
                                    <i class="far fa-star" data-rating="2"></i>
                                    <i class="far fa-star" data-rating="3"></i>
                                    <i class="far fa-star" data-rating="4"></i>
                                    <i class="far fa-star" data-rating="5"></i>
                                </div>
                                <input type="hidden" id="review-rating-value" value="0" required>
                            </div>
                            <div class="form-group">
                                <label for="review-text">Ваш отзыв:</label>
                                <textarea id="review-text" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn">Отправить отзыв</button>
                        </form>
                    </div>
                `;

                const reviewList = document.getElementById('review-list');
                const addReviewForm = document.getElementById('add-review-form');
                const reviewStarsContainer = document.getElementById('review-stars');
                const reviewRatingValueInput = document.getElementById('review-rating-value');

                let selectedRating = 0; // To keep track of the selected rating

                // Star rating interaction
                if (reviewStarsContainer) {
                    reviewStarsContainer.addEventListener('mouseover', (e) => {
                        if (e.target.classList.contains('fa-star')) {
                            const rating = parseInt(e.target.dataset.rating);
                            reviewStarsContainer.querySelectorAll('.fa-star').forEach(star => {
                                star.classList.toggle('fas', parseInt(star.dataset.rating) <= rating);
                                star.classList.toggle('far', parseInt(star.dataset.rating) > rating);
                            });
                        }
                    });

                    reviewStarsContainer.addEventListener('mouseout', () => {
                        reviewStarsContainer.querySelectorAll('.fa-star').forEach(star => {
                            star.classList.toggle('fas', parseInt(star.dataset.rating) <= selectedRating);
                            star.classList.toggle('far', parseInt(star.dataset.rating) > selectedRating);
                        });
                    });

                    reviewStarsContainer.addEventListener('click', (e) => {
                        if (e.target.classList.contains('fa-star')) {
                            selectedRating = parseInt(e.target.dataset.rating);
                            reviewRatingValueInput.value = selectedRating; // Update hidden input value
                            reviewStarsContainer.querySelectorAll('.fa-star').forEach(star => {
                                star.classList.toggle('fas', parseInt(star.dataset.rating) <= selectedRating);
                                star.classList.toggle('far', parseInt(star.dataset.rating) > selectedRating);
                            });
                        }
                    });
                }


                function renderReviews() {
                    reviewList.innerHTML = ''; // Clear existing reviews
                    if (game.reviews && game.reviews.length > 0) {
                        // Sort reviews by date, newest first
                        const sortedReviews = [...game.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));

                        sortedReviews.forEach(review => {
                            reviewList.innerHTML += `
                                <div class="review-item">
                                    <div class="review-header">
                                        <span class="reviewer-name">${review.reviewerName}</span>
                                        <div class="review-rating">
                                            ${generateStarRatingHTML(review.rating)}
                                        </div>
                                    </div>
                                    <p class="review-text">${review.comment}</p>
                                    <p class="review-date">${new Date(review.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                                </div>
                            `;
                        });
                    } else {
                        reviewList.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Пока нет отзывов. Будьте первым, кто оставит отзыв!</p>';
                    }
                    // Update main product rating display as well
                    const productRatingElement = document.getElementById('product-rating');
                    if (productRatingElement) {
                        productRatingElement.innerHTML = generateStarRatingHTML(game.rating);
                    }
                }

                if (addReviewForm) {
                    addReviewForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const reviewerName = document.getElementById('reviewer-name').value.trim();
                        const reviewText = document.getElementById('review-text').value.trim();
                        const rating = parseInt(reviewRatingValueInput.value);

                        if (!reviewerName || !reviewText || rating === 0) {
                            showNotification('Пожалуйста, заполните все поля и выберите рейтинг.', 'error');
                            return;
                        }

                        const newReview = {
                            reviewerName,
                            rating,
                            comment: reviewText,
                            date: new Date().toISOString() // Store full ISO string for sorting
                        };

                        if (!game.reviews) {
                            game.reviews = [];
                        }
                        game.reviews.push(newReview);

                        // Update overall game rating
                        const totalRating = game.reviews.reduce((sum, r) => sum + r.rating, 0);
                        game.rating = totalRating / game.reviews.length;

                        // Save updated gamesData to localStorage
                        localStorage.setItem('gamesData', JSON.stringify(gamesData));

                        renderReviews(); // Re-render reviews
                        addReviewForm.reset(); // Clear the form
                        selectedRating = 0; // Reset selected rating
                        // Reset star icons visually
                        reviewStarsContainer.querySelectorAll('.fa-star').forEach(star => {
                            star.classList.remove('fas');
                            star.classList.add('far');
                        });
                        showNotification('Ваш отзыв был успешно добавлен!', 'success');
                    });
                }
                renderReviews(); // Initial render of reviews when product page loads
            }
        } else {
            productDetailContainer.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Игра не найдена.</p>';
            document.title = `Игра не найдена - GameKeys`;
            // Hide review section if game not found
            const reviewSection = document.querySelector('.review-section');
            if(reviewSection) reviewSection.style.display = 'none';
        }
    }

    // Helper function to generate star rating HTML
    function generateStarRatingHTML(rating) {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.round(rating)) {
                starsHtml += '<i class="fas fa-star"></i>'; // Filled star
            } else {
                starsHtml += '<i class="far fa-star"></i>'; // Empty star
            }
        }
        return starsHtml;
    }


    // --- Cart Page Logic (cart.html) ---
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSummary = document.querySelector('.cart-summary');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');


    function renderCart() {
        if (!cartItemsContainer) return; // Exit if not on cart page

        cartItemsContainer.innerHTML = ''; // Clear existing items
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center" style="color: var(--text-muted);">Ваша корзина пуста.</p>';
            // Hide summary and buttons if cart is empty
            if (cartSummary) cartSummary.style.display = 'none';
            if (clearCartBtn) clearCartBtn.style.display = 'none';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            updateCartCount(); // Ensure cart count is 0 and hidden
            return;
        }

        // Show summary and buttons if cart has items
        if (cartSummary) cartSummary.style.display = 'block';
        if (clearCartBtn) clearCartBtn.style.display = 'inline-block';
        if (checkoutBtn) checkoutBtn.style.display = 'inline-block';

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const cartItemHTML = `
                <div class="cart-item" data-product-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p class="price">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="decrease-quantity-cart">-</button>
                            <input type="text" value="${item.quantity}" readonly class="item-quantity-input">
                            <button class="increase-quantity-cart">+</button>
                        </div>
                        <button class="remove-btn"><i class="fas fa-times"></i></button>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });

        // Update summary
        const subtotalElement = document.getElementById('subtotal-price');
        const shippingElement = document.getElementById('cart-shipping');
        const totalElement = document.getElementById('total-price');

        const shippingCost = 5.00; // Example shipping cost
        const finalTotal = totalPrice + shippingCost;

        if (subtotalElement) subtotalElement.textContent = `$${totalPrice.toFixed(2)}`;
        if (shippingElement) shippingElement.textContent = `$${shippingCost.toFixed(2)}`;
        if (totalElement) totalElement.textContent = `$${finalTotal.toFixed(2)}`;

        // Attach event listeners for quantity and remove buttons after rendering
        document.querySelectorAll('.decrease-quantity-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.closest('.cart-item').dataset.productId;
                updateCartItemQuantity(productId, -1);
            });
        });

        document.querySelectorAll('.increase-quantity-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.closest('.cart-item').dataset.productId;
                updateCartItemQuantity(productId, 1);
            });
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.closest('.cart-item').dataset.productId;
                removeCartItem(productId);
            });
        });

        updateCartCount(); // Update cart count in header
    }

    function updateCartItemQuantity(productId, change) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                // If quantity drops to 0 or less, remove item from cart
                const removedItemName = gamesData[productId] ? gamesData[productId].name : 'товар';
                cart.splice(itemIndex, 1);
                showNotification(`"${removedItemName}" удален из корзины.`, 'info');
            } else {
                 showNotification(`Количество "${gamesData[productId].name}" обновлено.`, 'info');
            }
            saveCart();
            renderCart(); // Re-render cart to update display
        }
    }

    function removeCartItem(productId) {
        const removedItemName = gamesData[productId] ? gamesData[productId].name : 'товар';
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCart(); // Re-render cart
        showNotification(`"${removedItemName}" удален из корзины.`, 'success');
    }

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Вы уверены, что хотите очистить корзину?')) {
                cart = [];
                saveCart();
                renderCart();
                showNotification('Корзина очищена.', 'info');
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (cart.length > 0) {
                window.location.href = 'checkout.html';
            } else {
                showNotification('Ваша корзина пуста, добавьте товары, чтобы оформить заказ.', 'info');
            }
        });
    }

    renderCart(); // Initial render for cart page when loaded


    // --- Contact Form (contact.html) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Сообщение отправлено! (Это демо-версия, реальная отправка не происходит)', 'success');
            contactForm.reset();
        });
    }

    // --- Checkout Form (checkout.html) ---
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                showNotification('Ваша корзина пуста, невозможно оформить заказ.', 'error');
                return;
            }
            showNotification('Заказ успешно оформлен! (Это демо-версия)', 'success');
            cart = []; // Clear cart after successful checkout
            saveCart();
            setTimeout(() => { // Give time for notification to be seen
                window.location.href = 'index.html'; // Redirect to home page
            }, 2000);
        });
    }

    
// --- All Games Page Logic (all_games.html) ---
    // --- All Games Page Logic (all_games.html) ---
    const allGamesGrid = document.getElementById('all-games-grid');
    if (allGamesGrid) {
        function renderAllGames() {
            allGamesGrid.innerHTML = ''; // Очищаем сетку перед добавлением
            const allGames = Object.values(gamesData); 

            allGames.forEach(game => {
                // УСИЛЕННАЯ ПРОВЕРКА: Убедимся, что это валидный объект игры
                if (!game || typeof game !== 'object' || !game.id || !game.name || !game.image || !game.price) {
                    console.warn('Skipping invalid or incomplete game entry:', game);
                    return; // Пропускаем, если объект игры недействителен или отсутствуют ключевые свойства
                }
                
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');
                gameCard.innerHTML = `
                    <img src="${game.image}" alt="${game.name}">
                    <div class="game-info">
                        <h3>${game.name}</h3>
                        <p class="category">${game.category || 'Без категории'}</p> <div class="game-price">
                            ${game.oldPrice ? `<span class="old-price">$${game.oldPrice.toFixed(2)}</span>` : ''}
                            <span class="current-price">$${game.price.toFixed(2)}</span>
                        </div>
                        <div class="game-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(game.rating || 0))} ${(game.rating % 1 !== 0 && game.rating) ? '<i class="fas fa-star-half-alt"></i>' : ''}
                            (${game.reviews ? game.reviews.length : 0})
                        </div>
                        <a href="product.html?id=${game.id}" class="btn add-to-cart-btn">Подробнее</a>
                    </div>
                `;
                allGamesGrid.appendChild(gameCard);
            });
        }
        renderAllGames(); 
    }
    
}); // <-- Это закрывающая скобка для document.addEventListener('DOMContentLoaded', () => { ... });
