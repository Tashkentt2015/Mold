import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Inborn Ethical Vulture</title>
          <meta property="og:title" content="Inborn Ethical Vulture" />
        </Head>
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.product-card, .benefit-card, .product-image img {
  transition: none;
}
.product-card:hover, .benefit-card:hover {
  transform: none;
}
.product-card:hover .product-image img {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="homepage-interactions">
(function(){
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lazy loading optimization for product images
  const productImages = document.querySelectorAll('.product-image img, .hero-image, .cta-image');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';

        img.onload = () => {
          img.style.opacity = '1';
        };

        if (img.complete) {
          img.style.opacity = '1';
        }

        observer.unobserve(img);
      }
    });
  });

  productImages.forEach(img => {
    imageObserver.observe(img);
  });

  // Product card hover enhancement
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = var('--shadow-level-2');
    });

    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });

  // WhatsApp link tracking for analytics
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
  whatsappLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Track WhatsApp clicks for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
          'event_category': 'engagement',
          'event_label': this.textContent.trim()
        });
      }
    });
  });
})()
</script>`}
            ></Script>
          </div>
        </div>
        <main>
          <section id="hero" className="hero-section">
            <div className="hero-background">
              <img
                src="https://images.pexels.com/photos/7257823/pexels-photo-7257823.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="Detailed silicone mold crafting"
                className="hero-image"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Силиконовые формы для гипса и свечей
                </h1>
                <p className="hero-subtitle">
                  {' '}
                  Профессиональные формы для литья. Связь через WhatsApp
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hero-actions">
                  <a href="#new-products">
                    <div className="btn btn-primary">
                      <span>Новинки</span>
                    </div>
                  </a>
                  <a href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20перейти%20в%20каталог.">
                    <div className="btn btn-outline">
                      <span>
                        {' '}
                        Перейти в каталог
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="new-products" className="new-products-section">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title">Новинки</h2>
                <p className="section-subtitle">
                  Последние поступления силиконовых форм
                </p>
              </div>
              <div className="products-grid">
                <article className="product-card">
                  <div className="product-image">
                    <img
                      src="https://images.pexels.com/photos/5531641/pexels-photo-5531641.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                      alt="M3000-001 Роза мини"
                    />
                    <span className="product-badge new">Новинка</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">M3000-001 Роза мини</h3>
                    <p className="product-purpose">
                      Форма для гипсовых фигур, декор
                    </p>
                    <div className="product-specs">
                      <span className="spec">Ø 60 мм, высота 35 мм</span>
                      <span className="spec">Вес формы: 120 г</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">350 TRY</span>
                      <a href="https://wa.me/905370399890?text=Интересует%20M3000-001%20Роза%20мини">
                        <div className="btn btn-accent btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Спросить
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="product-card">
                  <div className="product-image">
                    <img
                      src="https://images.pexels.com/photos/6578914/pexels-photo-6578914.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                      alt="M3000-014 Свеча-столб 50×100"
                    />
                    <span className="product-badge hit">Хит</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">
                      M3000-014 Свеча-столб 50×100
                    </h3>
                    <p className="product-purpose">Форма для свечей</p>
                    <div className="product-specs">
                      <span className="spec">50×50×100 мм</span>
                      <span className="spec">Вес формы: 280 г</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">650 TRY</span>
                      <a href="https://wa.me/905370399890?text=Интересует%20M3000-014%20Свеча-столб%2050×100">
                        <div className="btn btn-accent btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Спросить
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="product-card">
                  <div className="product-image">
                    <img
                      src="https://images.pexels.com/photos/2049736/pexels-photo-2049736.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                      alt="M3000-032 Барельеф Лист"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">M3000-032 Барельеф Лист</h3>
                    <p className="product-purpose">Гипс, барельеф</p>
                    <div className="product-specs">
                      <span className="spec">150×90×15 мм</span>
                      <span className="spec">Вес формы: 210 г</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">590 TRY</span>
                      <a href="https://wa.me/905370399890?text=Интересует%20M3000-032%20Барельеф%20Лист">
                        <div className="btn btn-accent btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Спросить
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="product-card">
                  <div className="product-image">
                    <img
                      src="https://images.pexels.com/photos/3683188/pexels-photo-3683188.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                      alt="M3000-045 Сердце рельефное"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">
                      M3000-045 Сердце рельефное
                    </h3>
                    <p className="product-purpose">Универсальная</p>
                    <div className="product-specs">
                      <span className="spec">80×75×30 мм</span>
                      <span className="spec">Вес формы: 190 г</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">520 TRY</span>
                      <a href="https://wa.me/905370399890?text=Интересует%20M3000-045%20Сердце%20рельефное">
                        <div className="btn btn-accent btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Спросить
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="product-card">
                  <div className="product-image">
                    <img
                      src="https://images.pexels.com/photos/7221109/pexels-photo-7221109.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                      alt="M3000-057 Свеча-винтаж Ø70"
                    />
                    <span className="product-badge new">Новинка</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">
                      M3000-057 Свеча-винтаж Ø70
                    </h3>
                    <p className="product-purpose">Свечи</p>
                    <div className="product-specs">
                      <span className="spec">Ø 70 мм, высота 90 мм</span>
                      <span className="spec">Вес формы: 320 г</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">740 TRY</span>
                      <a href="https://wa.me/905370399890?text=Интересует%20M3000-057%20Свеча-винтаж%20Ø70">
                        <div className="btn btn-accent btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Спросить
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
                <article className="product-card">
                  <div className="product-image">
                    <img
                      src="https://images.pexels.com/photos/5862814/pexels-photo-5862814.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                      alt="M3000-073 Панно Гео 200"
                    />
                    <span className="product-badge hit">Хит</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">M3000-073 Панно Гео 200</h3>
                    <p className="product-purpose">Гипс, панно</p>
                    <div className="product-specs">
                      <span className="spec">Ø 200 мм, толщина 20 мм</span>
                      <span className="spec">Вес формы: 600 г</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">980 TRY</span>
                      <a href="https://wa.me/905370399890?text=Интересует%20M3000-073%20Панно%20Гео%20200">
                        <div className="btn btn-accent btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                          <span>
                            {' '}
                            Спросить
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section id="benefits" className="benefits-section">
            <div className="section-container">
              <div className="section-header">
                <h2 className="section-title">Наши преимущества</h2>
                <p className="section-subtitle">
                  Почему выбирают наши силиконовые формы
                </p>
              </div>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="benefit-title">Гладкая поверхность отливок</h3>
                  <p className="benefit-description">
                    {' '}
                    Высококачественный силикон обеспечивает идеально гладкую
                    поверхность готовых изделий без дефектов
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="benefit-title">
                    Пищевой и термостойкий силикон
                  </h3>
                  <p className="benefit-description">
                    {' '}
                    Безопасные материалы, выдерживающие высокие температуры и
                    подходящие для пищевых продуктов
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="benefit-title">Повторяемость формы</h3>
                  <p className="benefit-description">
                    {' '}
                    Долговечные формы выдерживают множество циклов использования
                    без потери детализации
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="benefit-title">Поддержка в WhatsApp</h3>
                  <p className="benefit-description">
                    {' '}
                    Персональная консультация и быстрая поддержка по любым
                    вопросам через мессенджер
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="delivery-preview" className="delivery-preview-section">
            <div className="delivery-content">
              <div className="delivery-visual">
                <div className="delivery-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle cx="17" cy="18" r="2"></circle>
                      <circle cx="7" cy="18" r="2"></circle>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="delivery-info">
                <h2 className="section-title">Доставка по всей Турции</h2>
                <p className="section-content">
                  {' '}
                  Быстрая и надежная доставка силиконовых форм с защитной
                  упаковкой. Отслеживание посылки и поддержка на всех этапах.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="delivery-features">
                  <div className="delivery-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                    </svg>
                    <span>Защитная упаковка</span>
                  </div>
                  <div className="delivery-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7-7l7 7l-7 7"
                      ></path>
                    </svg>
                    <span>Отправка за 1-3 дня</span>
                  </div>
                  <div className="delivery-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                      ></path>
                    </svg>
                    <span>Трек-номер в WhatsApp</span>
                  </div>
                </div>
                <a href="https://wa.me/905370399890?text=Хочу%20узнать%20подробнее%20о%20доставке">
                  <div className="btn btn-primary">
                    <span>
                      {' '}
                      Подробнее о доставке
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7-7l7 7l-7 7"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section id="cta" className="cta-section">
            <div className="cta-background">
              <img
                src="https://images.pexels.com/photos/11020224/pexels-photo-11020224.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="Craft workshop with molds"
                className="cta-image"
              />
              <div className="cta-overlay"></div>
            </div>
            <div className="cta-content">
              <h2 className="hero-title">Готовы начать творить?</h2>
              <p className="hero-subtitle">
                {' '}
                Свяжитесь с нами в WhatsApp для консультации и заказа форм
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20заказать%20форму.">
                <div className="btn btn-primary btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Написать в WhatsApp
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </section>
        </main>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container7">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon64"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text23">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container7 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon64 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text23 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
