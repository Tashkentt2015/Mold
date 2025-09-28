import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Page = (props) => {
  return (
    <>
      <div className="page-container1">
        <Head>
          <title>Page - Inborn Ethical Vulture</title>
          <meta property="og:title" content="Page - Inborn Ethical Vulture" />
        </Head>
        <Navigation></Navigation>
        <div className="page-container2">
          <div className="page-container3">
            <Script
              html={`<script defer data-name="catalog page functionality">
(function(){
  // Search functionality
  const searchInput = document.getElementById("catalogSearch")
  const productCards = document.querySelectorAll(".product-card")
  const resultsCount = document.getElementById("resultsCount")
  const emptyState = document.getElementById("emptyState")
  const gridContainer = document.querySelector(".grid-container")

  // Filter functionality
  const filterChips = document.querySelectorAll(".filter-chip")
  const clearFiltersBtn = document.getElementById("clearFilters")

  let currentFilter = "all"
  let currentSearch = ""

  function updateResults() {
    let visibleCount = 0

    productCards.forEach((card) => {
      const category = card.dataset.category
      const name = card.dataset.name.toLowerCase()

      const matchesFilter =
        currentFilter === "all" || category === currentFilter
      const matchesSearch =
        currentSearch === "" || name.includes(currentSearch.toLowerCase())

      if (matchesFilter && matchesSearch) {
        card.style.display = "block"
        visibleCount++
      } else {
        card.style.display = "none"
      }
    })

    // Update results count
    const itemText =
      visibleCount === 1 ? "товар" : visibleCount < 5 ? "товара" : "товаров"
    resultsCount.textContent = \`\${visibleCount} \${itemText}\`

    // Show/hide empty state
    if (visibleCount === 0) {
      gridContainer.style.display = "none"
      emptyState.style.display = "block"
    } else {
      gridContainer.style.display = "grid"
      emptyState.style.display = "none"
    }
  }

  // Search input handler with debouncing
  let searchTimeout
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      currentSearch = e.target.value.trim()
      updateResults()
    }, 300)
  })

  // Filter chip handlers
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Remove active class from all chips
      filterChips.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked chip
      chip.classList.add("active")

      // Update current filter
      currentFilter = chip.dataset.filter
      updateResults()
    })
  })

  // Clear filters handler
  clearFiltersBtn.addEventListener("click", () => {
    // Reset filter to 'all'
    filterChips.forEach((chip) => {
      chip.classList.remove("active")
      if (chip.dataset.filter === "all") {
        chip.classList.add("active")
      }
    })

    // Reset search
    searchInput.value = ""

    // Reset variables
    currentFilter = "all"
    currentSearch = ""

    updateResults()
  })

  // Initialize results
  updateResults()

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Add loading states for images
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", () => {
      img.style.opacity = "1"
    })

    img.style.opacity = "0"
    img.style.transition = \`opacity \${getComputedStyle(
      document.documentElement
    ).getPropertyValue("--animation-duration-standard")} \${getComputedStyle(
      document.documentElement
    ).getPropertyValue("--animation-curve-primary")}\`
  })

  // Preserve scroll position when returning to page
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("catalogScrollPosition", window.scrollY)
  })

  window.addEventListener("load", () => {
    const scrollPosition = sessionStorage.getItem("catalogScrollPosition")
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition))
      sessionStorage.removeItem("catalogScrollPosition")
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <section id="hero" className="hero">
          <div className="hero-content1">
            <div className="hero-text">
              <h1 className="hero-title">
                Силиконовые формы для гипса и свечей
              </h1>
              <p className="hero-subtitle">
                {' '}
                Профессиональные формы для чистого повторяемого литья. Поиск по
                названию или фильтр по назначению — связь через WhatsApp для
                заказов и вопросов.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="search-container">
                <div className="search-wrapper">
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
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    placeholder="Поиск товара: название, код или ключевое слово — например, M3000-001"
                    id="catalogSearch"
                    className="search-input"
                  />
                </div>
              </div>
              <div className="quick-links">
                <a href="#new-arrivals">
                  <div className="btn btn-primary">
                    <span>Новинки</span>
                  </div>
                </a>
                <a href="#product-grid">
                  <div className="btn btn-secondary">
                    <span>Полный каталог</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-background">
            <img
              src="https://images.pexels.com/photos/7221109/pexels-photo-7221109.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
              alt="Craftswoman examining ceramic molds in workshop"
              loading="lazy"
            />
            <div className="hero-overlay"></div>
          </div>
        </section>
        <section id="filters" className="filters">
          <div className="filter-container">
            <div className="filter-group">
              <h3 className="section-title">Назначение</h3>
              <p className="section-subtitle">
                {' '}
                Фильтр по предназначению для быстрого поиска идеальной формы
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="filter-chips">
                <button data-filter="all" className="filter-chip active">
                  Все товары
                </button>
                <button data-filter="plaster" className="filter-chip">
                  Для гипса
                </button>
                <button data-filter="candles" className="filter-chip">
                  Для свечей
                </button>
                <button data-filter="universal" className="filter-chip">
                  {' '}
                  Универсальные
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="search-info">
              <div className="results-count">
                <span id="resultsCount">6 товаров</span>
              </div>
              <div className="clear-filters">
                <button id="clearFilters" className="btn btn-link">
                  Сбросить фильтры
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="product-grid" className="product-grid">
          <div className="grid-container">
            <article
              data-category="plaster"
              data-name="M3000-001 Роза мини"
              className="product-card1"
            >
              <div className="product-image">
                <img
                  src="https://images.pexels.com/photos/27298415/pexels-photo-27298415.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="M3000-001 Роза мини - форма для гипсовых декоративных фигур"
                  loading="lazy"
                />
                <div className="product-badge1 new">
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
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Новинка
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title1">M3000-001 Роза мини</h3>
                <p className="product-description">
                  Для гипсовых декоративных фигур
                </p>
                <div className="product-specs1">
                  <span className="dimensions">Ø 60 мм × В 35 мм</span>
                  <span className="weight">
                    Вес формы 120 г • Отливка ~90 г
                  </span>
                </div>
                <div className="product-footer1">
                  <span className="product-price1">350 TRY</span>
                  <a
                    href="https://wa.me/905370399890?text=Интересует%20M3000-001%20Роза%20мини"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary"
                    >
                      <span>
                        {' '}
                        Спросить в WhatsApp
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
            <article
              data-category="candles"
              data-name="M3000-014 Свеча-столб 50×100"
              className="product-card1"
            >
              <div className="product-image">
                <img
                  src="https://images.pexels.com/photos/27046151/pexels-photo-27046151.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="M3000-014 Свеча-столб - форма для свечей-столбов"
                  loading="lazy"
                />
                <div className="product-badge1 hit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                  <span>
                    {' '}
                    Хит
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title1">M3000-014 Свеча-столб 50×100</h3>
                <p className="product-description">Для свечей-столбов</p>
                <div className="product-specs1">
                  <span className="dimensions">50×50×100 мм</span>
                  <span className="weight">Вес формы 280 г • Свеча ~180 г</span>
                </div>
                <div className="product-footer1">
                  <span className="product-price1">650 TRY</span>
                  <a
                    href="https://wa.me/905370399890?text=Интересует%20M3000-014%20Свеча-столб%2050×100"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary"
                    >
                      <span>
                        {' '}
                        Спросить в WhatsApp
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
            <article
              data-category="plaster"
              data-name="M3000-032 Барельеф Лист"
              className="product-card1"
            >
              <div className="product-image">
                <img
                  src="https://images.pexels.com/photos/16125025/pexels-photo-16125025.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="M3000-032 Барельеф Лист - форма для гипсовых барельефов"
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title1">M3000-032 Барельеф Лист</h3>
                <p className="product-description">Для гипсовых барельефов</p>
                <div className="product-specs1">
                  <span className="dimensions">150×90×15 мм</span>
                  <span className="weight">
                    Вес формы 210 г • Отливка ~160 г
                  </span>
                </div>
                <div className="product-footer1">
                  <span className="product-price1">590 TRY</span>
                  <a
                    href="https://wa.me/905370399890?text=Интересует%20M3000-032%20Барельеф%20Лист"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary"
                    >
                      <span>
                        {' '}
                        Спросить в WhatsApp
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
            <article
              data-category="universal"
              data-name="M3000-045 Сердце рельефное"
              className="product-card1"
            >
              <div className="product-image">
                <img
                  src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="M3000-045 Сердце рельефное - универсальная форма для декора"
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title1">M3000-045 Сердце рельефное</h3>
                <p className="product-description">
                  {' '}
                  Универсальная форма для декора и подарков
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="product-specs1">
                  <span className="dimensions">80×75×30 мм</span>
                  <span className="weight">
                    Вес формы 190 г • Отливка ~140 г
                  </span>
                </div>
                <div className="product-footer1">
                  <span className="product-price1">520 TRY</span>
                  <a
                    href="https://wa.me/905370399890?text=Интересует%20M3000-045%20Сердце%20рельефное"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary"
                    >
                      <span>
                        {' '}
                        Спросить в WhatsApp
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
            <article
              data-category="candles"
              data-name="M3000-057 Свеча-винтаж Ø70"
              className="product-card1"
            >
              <div className="product-image">
                <img
                  src="https://images.pexels.com/photos/26796157/pexels-photo-26796157.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="M3000-057 Свеча-винтаж - форма для винтажных свечей"
                  loading="lazy"
                />
                <div className="product-badge1 new">
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
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </g>
                  </svg>
                  <span>
                    {' '}
                    Новинка
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title1">M3000-057 Свеча-винтаж Ø70</h3>
                <p className="product-description">Для винтажных свечей</p>
                <div className="product-specs1">
                  <span className="dimensions">Ø 70 мм × В 90 мм</span>
                  <span className="weight">Вес формы 320 г • Свеча ~200 г</span>
                </div>
                <div className="product-footer1">
                  <span className="product-price1">740 TRY</span>
                  <a
                    href="https://wa.me/905370399890?text=Интересует%20M3000-057%20Свеча-винтаж%20Ø70"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary"
                    >
                      <span>
                        {' '}
                        Спросить в WhatsApp
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
            <article
              data-category="plaster"
              data-name="M3000-073 Панно Гео 200"
              className="product-card1"
            >
              <div className="product-image">
                <img
                  src="https://images.pexels.com/photos/15352967/pexels-photo-15352967.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="M3000-073 Панно Гео - форма для гипсовых панно и настенного декора"
                  loading="lazy"
                />
                <div className="product-badge1 hit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                  <span>
                    {' '}
                    Хит
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title1">M3000-073 Панно Гео 200</h3>
                <p className="product-description">
                  {' '}
                  Для гипсовых панно и настенного декора
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="product-specs1">
                  <span className="dimensions">Ø 200 мм × Толщина 20 мм</span>
                  <span className="weight">
                    Вес формы 600 г • Отливка ~450 г
                  </span>
                </div>
                <div className="product-footer1">
                  <span className="product-price1">980 TRY</span>
                  <a
                    href="https://wa.me/905370399890?text=Интересует%20M3000-073%20Панно%20Гео%20200"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary"
                    >
                      <span>
                        {' '}
                        Спросить в WhatsApp
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
          <div id="emptyState" className="page-empty-state empty-state">
            <div className="empty-content">
              <p className="section-content">
                Товары не найдены — спросите нас в WhatsApp
              </p>
              <a
                href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20заказать%20форму."
                target="_blank"
                rel="noreferrer noopener"
              >
                <div target="_blank" rel="noopener" className="btn btn-primary">
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
        </section>
        <section id="whatsapp-cta" className="whatsapp-cta">
          <div className="cta-container">
            <div className="cta-content1">
              <h2 className="section-title">Есть вопрос о форме?</h2>
              <p className="section-content">
                {' '}
                Напишите нам в WhatsApp для быстрой персональной помощи и точных
                замеров. Спросите о наличии, упаковке, вариантах доставки или
                запросите дополнительные фото — один тап и мы ответим.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-simple">
                <p className="section-subtitle">ПРОСТОЕ ДЕЙСТВИЕ — БЕЗ ФОРМ</p>
                <p className="section-content">
                  <span>
                    {' '}
                    Откройте WhatsApp и отправьте:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="page-text25">
                    Здравствуйте! Хочу заказать форму.
                  </span>
                </p>
              </div>
              <div className="cta-action">
                <a
                  href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20заказать%20форму."
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    target="_blank"
                    rel="noopener"
                    className="whatsapp-btn btn btn-primary"
                  >
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
                <p className="contact-info">+905370399890</p>
              </div>
            </div>
          </div>
        </section>
        <section id="new-arrivals" className="new-arrivals">
          <div className="arrivals-container">
            <div className="section-header1">
              <h2 className="section-title">
                {' '}
                Новинки — подобранные последние силиконовые формы
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-subtitle">
                {' '}
                Откройте для себя шесть самых последних добавлений в наш
                каталог. Чистые линии, точные детали, профессиональная
                производительность литья.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="arrivals-grid">
              <article className="arrival-card">
                <div className="arrival-image">
                  <img
                    src="https://images.pexels.com/photos/15352967/pexels-photo-15352967.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="M3000-073 Панно Гео - новинка в каталоге"
                    loading="lazy"
                  />
                  <div className="arrival-badge">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="arrival-content">
                  <h3 className="arrival-title">M3000-073 Панно Гео 200</h3>
                  <p className="arrival-purpose">Для гипсовых панно</p>
                  <div className="arrival-specs">
                    <span>Ø 200 мм × 20 мм</span>
                    <span>Вес 600 г • Отливка ~450 г</span>
                  </div>
                  <div className="arrival-footer">
                    <span className="arrival-price">980 TRY</span>
                    <a href="#product-grid">
                      <div className="btn btn-link">
                        <span>Подробнее</span>
                      </div>
                    </a>
                  </div>
                </div>
              </article>
              <article className="arrival-card">
                <div className="arrival-image">
                  <img
                    src="https://images.pexels.com/photos/26796157/pexels-photo-26796157.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="M3000-057 Свеча-винтаж - новинка в каталоге"
                    loading="lazy"
                  />
                  <div className="arrival-badge">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="arrival-content">
                  <h3 className="arrival-title">M3000-057 Свеча-винтаж Ø70</h3>
                  <p className="arrival-purpose">Для свечей</p>
                  <div className="arrival-specs">
                    <span>Ø 70 мм × 90 мм</span>
                    <span>Вес 320 г • Отливка ~200 г</span>
                  </div>
                  <div className="arrival-footer">
                    <span className="arrival-price">740 TRY</span>
                    <a href="#product-grid">
                      <div className="btn btn-link">
                        <span>Подробнее</span>
                      </div>
                    </a>
                  </div>
                </div>
              </article>
              <article className="arrival-card">
                <div className="arrival-image">
                  <img
                    src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="M3000-045 Сердце рельефное - новинка в каталоге"
                    loading="lazy"
                  />
                  <div className="arrival-badge">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="arrival-content">
                  <h3 className="arrival-title">M3000-045 Сердце рельефное</h3>
                  <p className="arrival-purpose">Универсальная</p>
                  <div className="arrival-specs">
                    <span>80 × 75 × 30 мм</span>
                    <span>Вес 190 г • Отливка ~140 г</span>
                  </div>
                  <div className="arrival-footer">
                    <span className="arrival-price">520 TRY</span>
                    <a href="#product-grid">
                      <div className="btn btn-link">
                        <span>Подробнее</span>
                      </div>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="arrivals-footer">
              <p className="section-content">
                {' '}
                Посмотрите все новинки в каталоге или откройте любой товар для
                полной галереи и деталей. Все запросы открывают WhatsApp с
                предварительно заполненным сообщением: Здравствуйте! Хочу
                заказать форму.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a
                href="https://wa.me/905370399890?text=Здравствуйте!%20Хочу%20заказать%20форму."
                target="_blank"
                rel="noreferrer noopener"
              >
                <div target="_blank" rel="noopener" className="btn btn-primary">
                  <span>
                    {' '}
                    Спросить в WhatsApp
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
        </section>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="page-container4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="page-icon42"
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
            <span className="page-text37">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .page-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .page-container2 {
            display: none;
          }
          .page-container3 {
            display: contents;
          }
          .page-empty-state {
            display: none;
          }
          .page-text25 {
            font-weight: 700;
          }
          .page-container4 {
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
          .page-icon42 {
            width: 24px;
            margin-right: 4px;
          }
          .page-text37 {
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

export default Page
