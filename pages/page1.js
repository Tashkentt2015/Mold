import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container1">
        <Head>
          <title>Page1 - Inborn Ethical Vulture</title>
          <meta property="og:title" content="Page1 - Inborn Ethical Vulture" />
        </Head>
        <Navigation></Navigation>
        <div className="page1-container2">
          <div className="page1-container3">
            <Script
              html={`<script defer data-name="contact-page">
(function(){
  // Form submission handler
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form values
      const productName = document.getElementById("productName").value.trim()
      const quantity = document.getElementById("quantity").value.trim()
      const notes = document.getElementById("notes").value.trim()

      // Build WhatsApp message
      let message = "Здравствуйте! Хочу заказать форму."

      if (productName) {
        message += \`\n\nТовар: \${productName}\`
      }

      if (quantity) {
        message += \`\nКоличество: \${quantity}\`
      }

      if (notes) {
        message += \`\nЗаметки: \${notes}\`
      }

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message)

      // Open WhatsApp with prefilled message
      const whatsappUrl = \`https://wa.me/905370399890?text=\${encodedMessage}\`
      window.open(whatsappUrl, "_blank")
    })
  }

  // Smooth fade animations for interactive elements
  const animateElements = document.querySelectorAll(
    ".btn, .faq-item, .contact-info-card, .contact-cta-card"
  )

  animateElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.2s ease-out"
      this.style.opacity = "0.9"
    })

    element.addEventListener("mouseleave", function () {
      this.style.opacity = "1"
    })
  })

  // Form field focus animations
  const formInputs = document.querySelectorAll("input, textarea")

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.transform = "translateY(-1px)"
      this.style.transition = "all 0.2s ease-out"
    })

    input.addEventListener("blur", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add subtle scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe FAQ items for fade-in animation
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = \`all 0.6s ease-out \${index * 0.1}s\`
    observer.observe(item)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <section className="hero-contact">
          <div className="hero-contact-container">
            <div className="hero-contact-content">
              <div className="hero-contact-info">
                <h1 className="hero-title">Mold 3000 — Контакты</h1>
                <p className="hero-subtitle">
                  {' '}
                  У вас есть вопрос или хотите заказать форму? Напишите нам в
                  WhatsApp для быстрой персональной поддержки.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg>
                    <span>WhatsApp: +905370399890</span>
                  </div>
                </div>
              </div>
              <div className="hero-contact-cta">
                <a href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20заказать%20форму.">
                  <div
                    aria-label="Написать в WhatsApp"
                    className="btn btn-primary btn-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                      ></path>
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
            </div>
          </div>
        </section>
        <section className="contact-details-section">
          <div className="contact-details-container">
            <div className="contact-details-grid">
              <div className="contact-info-card">
                <div className="contact-info-header">
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
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </g>
                  </svg>
                  <h3 className="section-title">Часы ответа</h3>
                </div>
                <p className="section-content">Пн–Сб 10:00–19:00 (UTC+3)</p>
                <p className="section-content">
                  {' '}
                  WhatsApp: +905370399890 — доступен для вопросов о товарах,
                  доставке и заказах.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Обычно отвечаем в течение 1–4 часов в рабочее время; возможны
                  задержки в нерабочие часы.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="contact-cta-card">
                <p className="section-content">
                  {' '}
                  Для получения немедленной помощи нажмите кнопку &quot;Написать
                  в WhatsApp&quot; — с предзаполненным сообщением:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="prefilled-message">
                  &quot;Здравствуйте! Хочу заказать форму.&quot;
                </p>
                <a href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20заказать%20форму.">
                  <div className="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                      ></path>
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
            </div>
          </div>
        </section>
        <section className="whatsapp-cta-section">
          <div className="whatsapp-cta-container">
            <a href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20заказать%20форму.">
              <div
                aria-label="Открыть чат WhatsApp с Mold 3000"
                className="whatsapp-main-btn"
              >
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
                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                  ></path>
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
            <p className="whatsapp-microcopy">
              Быстрые ответы Пн–Сб 10:00–19:00 (UTC+3)
            </p>
          </div>
        </section>
        <section className="form-placeholder-section">
          <div className="form-placeholder-container">
            <div className="form-placeholder-content">
              <h2 className="section-title">Форма заявки</h2>
              <p className="section-content">
                {' '}
                Кратко расскажите, что вам нужно — название товара, количество и
                любые особые заметки. Нажмите &quot;Отправить&quot;, чтобы
                открыть WhatsApp и начать заказ.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <form id="contactForm" className="contact-form">
                <div className="form-group">
                  <label htmlFor="productName">Название товара</label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="Например, M3000-001 Роза мини"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Количество</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="1"
                    min="1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Заметки (необязательно)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Дополнительные пожелания или вопросы..."
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="form-submit-btn btn btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Отправить через WhatsApp
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
                <p className="form-disclaimer">
                  {' '}
                  Отправляя форму, вы соглашаетесь на общение через WhatsApp.
                  Платежи на сайте не обрабатываются.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="form-prefilled">
                  {' '}
                  Предзаполненный текст WhatsApp: &quot;Здравствуйте! Хочу
                  заказать форму.&quot; (Вы можете отредактировать после
                  открытия WhatsApp.)
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </form>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="faq-container">
            <div className="faq-header">
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
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                </g>
              </svg>
              <h2 className="section-title">Часто задаваемые вопросы</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">
                  Сколько времени занимает доставка?
                </h3>
                <p className="faq-answer">
                  {' '}
                  Заказы отправляются в течение 1–3 рабочих дней. Итоговое время
                  доставки зависит от выбранной службы доставки и пункта
                  назначения.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Доставляете ли вы за границу?</h3>
                <p className="faq-answer">
                  {' '}
                  Да. Мы осуществляем доставку по Türkiye и международно по
                  запросу. Пожалуйста, свяжитесь с нами в WhatsApp для
                  согласования тарифов и вариантов.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  Как упаковывается каждый товар?
                </h3>
                <p className="faq-answer">
                  {' '}
                  Каждая форма заворачивается в пузырчатую пленку и помещается в
                  защитную коробку для предотвращения деформации во время
                  транспортировки.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  Как рассчитывается стоимость доставки?
                </h3>
                <p className="faq-answer">
                  {' '}
                  Стоимость доставки определяется перевозчиком и маршрутом. Мы
                  предоставим точную стоимость, когда вы свяжетесь с нами в
                  WhatsApp.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Получу ли я трек-номер?</h3>
                <p className="faq-answer">
                  {' '}
                  Да. Трек-номер отправляется вам через WhatsApp после отправки
                  заказа.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {' '}
                  Что делать, если посылка пришла поврежденной?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="faq-answer">
                  {' '}
                  Осмотрите посылку при получении. Если она повреждена, сделайте
                  фото или видео и сразу напишите нам в WhatsApp для быстрой
                  поддержки.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  Могу ли я вернуть или обменять товар?
                </h3>
                <p className="faq-answer">
                  {' '}
                  Возврат или обмен принимается в течение 14 дней, если форма
                  сохраняет первоначальное состояние. Индивидуальные или
                  персонализированные товары возврату не подлежат.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Какие у вас часы поддержки?</h3>
                <p className="faq-answer">
                  {' '}
                  Поддержка доступна понедельник–суббота 10:00–19:00 (UTC+3)
                  через WhatsApp.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">
                  {' '}
                  Как запросить детали доставки или стоимость?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="faq-answer">
                  {' '}
                  Используйте кнопку &quot;Написать в WhatsApp&quot;, чтобы
                  отправить предзаполненное сообщение. Все общение, связанное с
                  покупкой, ведется там.
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
        <section className="location-section">
          <div className="location-container">
            <div className="location-content">
              <div className="location-info">
                <div className="location-header">
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
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    ></path>
                  </svg>
                  <h2 className="section-title">Местоположение</h2>
                </div>
                <div className="location-details">
                  <h3 className="location-company">Mold 3000 — Türkiye</h3>
                  <p className="section-content">
                    {' '}
                    Мы находимся в Türkiye. Для быстрого сервиса и вопросов по
                    доставке, пожалуйста, свяжитесь с нами в WhatsApp.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="address-card">
                    <h4>Адрес</h4>
                    <p>Mold 3000</p>
                    <p>Türkiye</p>
                    <p className="address-note">
                      {' '}
                      (Точный адрес доступен по запросу через WhatsApp)
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="hours-card">
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
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </g>
                    </svg>
                    <div>
                      <h4>Часы работы</h4>
                      <p>Часы ответа: Пн–Сб 10:00–19:00 (UTC+3)</p>
                    </div>
                  </div>
                  <div className="privacy-note">
                    <p className="section-content">
                      {' '}
                      Все запросы клиентов, заказы и детали адреса
                      обрабатываются исключительно через WhatsApp для
                      обеспечения безопасного, персонального ответа.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <p className="section-content">
                      {' '}
                      Нужны детали доставки или самовывоза? Нажмите кнопку
                      WhatsApp, чтобы получить точные направления, варианты
                      перевозчиков и заметки об упаковке.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="location-map">
                <div className="map-placeholder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    ></path>
                  </svg>
                  <p>Интерактивная карта</p>
                  <p>Показывает расположение компании в Türkiye</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="page1-container5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="page1-icon36"
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
            <span className="page1-text25">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .page1-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .page1-container2 {
            display: none;
          }
          .page1-container3 {
            display: contents;
          }
          .page1-container5 {
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
          .page1-icon36 {
            width: 24px;
            margin-right: 4px;
          }
          .page1-text25 {
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

export default Page1
