import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@400;500&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="css/styles.css" />
        {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title</title>
      </head>
      <body className="body">
        <header className="header" id='header'>
          <div className="container">
            <div className="header__body">
              <Link href="/">
                <a className="header__logo"></a>
              </Link>
              <button className="header__burger" type="button" id='btn-menu'>
                <span></span>
              </button>
              <nav className="header__menu" id='head-menu'>
                <ul className="header__list">
                  <li className="header__list-element">
                    <a href="#section-welcome" className="header__link">Главная</a>
                  </li>
                  <li className="header__list-element">
                    <a href="#section-sightseens" className="header__link">Достопремечательности</a>
                  </li>
                  <li className="header__list-element">
                    <a href="#section-tour" className="header__link">Туры</a>
                  </li>
                  <li className="header__list-element">
                    <a href="#section-contacts" className="header__link">Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <section className="section-welcome" id="section-welcome">
          <div className="content">
            <div className="content__title">
              <h1 className="content__title-titl">ХАКАСИЯ</h1>
              <p className="content__title-ltitl">Туристическое Агенство Республики Хакасия</p>
            </div>
            <a className="content__button" href="#section-sightseens"></a>
          </div>
        </section>


        <section className="section-sightseens" id="section-sightseens">
          <div className="container">
            <h2 className="main-title">Достопремечательности</h2>
            <div className="main-sightseens">

              <div className="sightseens">
                <img src="img/sightseens.png" alt="" className="sightseens__img" />
                <div className="sightseens__text">
                  <h3 className="sightseens__name">Тропа предков</h3>
                  <p className="sightseens__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare
                    condimentum
                    fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae
                    nisi
                    ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem
                    luctus
                    velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat
                    felis, pharetra vitae libero eu, posuere accumsan odio...
                    <br />
                    <br />
                    <span className="more-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velit
                      odit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquam
                      deserunt quam quod deleniti molestias earum perspiciatis?
                      Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas deleniti
                      minus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officia
                      deserunt amet.
                      Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias iste
                      doloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,
                      tempore molestias blanditiis expedita mollitia?
                      Quidem nemo ullam dicta dolor voluptas?
                    </span>
                  </p>
                </div>
              </div>
              <div className="sightseens">
                <img src="img/sightseens.png" alt="" className="sightseens__img" />
                <div className="sightseens__text">
                  <h3 className="sightseens__name">Тропа предков</h3>
                  <p className="sightseens__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare
                    condimentum
                    fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae
                    nisi
                    ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem
                    luctus
                    velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat
                    felis, pharetra vitae libero eu, posuere accumsan odio...
                    <br />
                    <br />
                    <span className="more-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velit
                      odit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquam
                      deserunt quam quod deleniti molestias earum perspiciatis?
                      Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas deleniti
                      minus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officia
                      deserunt amet.
                      Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias iste
                      doloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,
                      tempore molestias blanditiis expedita mollitia?
                      Quidem nemo ullam dicta dolor voluptas?
                    </span>
                  </p>
                </div>
              </div>
              <div className="sightseens">
                <img src="img/sightseens.png" alt="" className="sightseens__img" />
                <div className="sightseens__text">
                  <h3 className="sightseens__name">Приисковый</h3>
                  <p className="sightseens__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare
                    condimentum
                    fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae
                    nisi
                    ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem
                    luctus
                    velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat
                    felis, pharetra vitae libero eu, posuere accumsan odio...
                    <br />
                    <br />
                    <span className="more-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velit
                      odit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquam
                      deserunt quam quod deleniti molestias earum perspiciatis?
                      Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas deleniti
                      minus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officia
                      deserunt amet.
                      Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias iste
                      doloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,
                      tempore molestias blanditiis expedita mollitia?
                      Quidem nemo ullam dicta dolor voluptas?
                    </span>
                  </p>
                </div>
              </div>
              <div className="sightseens">
                <img src="img/sightseens.png" alt="" className="sightseens__img" />
                <div className="sightseens__text">
                  <h3 className="sightseens__name">Сундуки</h3>
                  <p className="sightseens__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare
                    condimentum
                    fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae
                    nisi
                    ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem
                    luctus
                    velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat
                    felis, pharetra vitae libero eu, posuere accumsan odio...
                    <br />
                    <br />
                    <span className="more-text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velit
                      odit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquam
                      deserunt quam quod deleniti molestias earum perspiciatis?
                      Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas deleniti
                      minus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officia
                      deserunt amet.
                      Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias iste
                      doloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,
                      tempore molestias blanditiis expedita mollitia?
                      Quidem nemo ullam dicta dolor voluptas?
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tour" id="section-tour">
          <div className="container">
            <h2 className="main-title">Туры</h2>
            <div className="main">
              <div className="main-tour">
                <img src="img/tour.jpg" alt="" className="main-tour__img" />
                <div className="main-tour__text">
                  <h3 className="main-tour__text-name">Название</h3>
                  <p className="main-tour__text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque.
                  </p>
                  <p className="main-tour__text-price">
                    От <b>10000</b> руб.
                  </p>
                  <button className="but-buy">
                    <p className="but-buy_text">Купить</p>
                  </button>
                </div>
              </div>
              <div className="main-tour">
                <img src="img/tour.jpg" alt="" className="main-tour__img" />
                <div className="main-tour__text">
                  <h3 className="main-tour__text-name">Название</h3>
                  <p className="main-tour__text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque.
                  </p>
                  <p className="main-tour__text-price">
                    От <b>10000</b> руб.
                  </p>
                  <button className="but-buy">
                    <p className="but-buy_text">Купить</p>
                  </button>
                </div>
              </div>
              <div className="main-tour   main-tour--hidden">
                <img src="img/tour.jpg" alt="" className="main-tour__img" />
                <div className="main-tour__text">
                  <h3 className="main-tour__text-name">Название</h3>
                  <p className="main-tour__text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque.
                  </p>
                  <p className="main-tour__text-price">
                    От <b>10000</b> руб.
                  </p>
                  <button className="but-buy">
                    <p className="but-buy_text">Купить</p>
                  </button>
                </div>
              </div>
              <div className="main-tour   main-tour--hidden">
                <img src="img/tour.jpg" alt="" className="main-tour__img" />
                <div className="main-tour__text">
                  <h3 className="main-tour__text-name">Название</h3>
                  <p className="main-tour__text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque.
                  </p>
                  <p className="main-tour__text-price">
                    От <b>10000</b> руб.
                  </p>
                  <button className="but-buy">
                    <p className="but-buy_text">Купить</p>
                  </button>
                </div>
              </div>
              <div className="main-tour   main-tour--hidden">
                <img src="img/tour.jpg" alt="" className="main-tour__img" />
                <div className="main-tour__text">
                  <h3 className="main-tour__text-name">Название</h3>
                  <p className="main-tour__text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque.
                  </p>
                  <p className="main-tour__text-price">
                    От <b>10000</b> руб.
                  </p>
                  <button className="but-buy">
                    <p className="but-buy_text">Купить</p>
                  </button>
                </div>
              </div>
              <div className="main-tour   main-tour--hidden">
                <img src="img/tour.jpg" alt="" className="main-tour__img" />
                <div className="main-tour__text">
                  <h3 className="main-tour__text-name">Название</h3>
                  <p className="main-tour__text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    pretium
                    orci at rutrum pellentesque.
                  </p>
                  <p className="main-tour__text-price">
                    От <b>10000</b> руб.
                  </p>
                  <button className="but-buy">
                    <p className="but-buy_text">Купить</p>
                  </button>
                </div>
              </div>
              <div className="more">
                <button type="button" className="more__btn">Больше туров</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-contacts" id="section-contacts">
          <div className="container">
            <h2 className="main-title">Контакты</h2>
            <div className="block-contacts">
              <div className="block-contacts__text">
                <div className="box-contact">
                  <div className="box-contact__img">
                    <img src="img/vectormap.png" alt="" />
                  </div>
                  <span className="box-contact__text">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</span>
                </div>
                <div className="box-contact">
                  <div className="box-contact__img">
                    <img src="img/vectorphone.png" alt="" />
                  </div>
                  <span className="box-contact__text">8 (3902) 22-53-35 </span>
                  <br />
                  <span className="box-contact__text">8 (3902) 24-30-71</span>

                </div>
                <div className="box-contact">
                  <div className="box-contact__img">
                    <img src="img/vectormail.png" alt="" />
                  </div>
                  <span className="box-contact__text">kancler@vskhakasia.ru</span>
                </div>
              </div>
              <div className="map-desktop">
                <div className="map-block__map">
                  {/* <script type="text/javascript" charset="utf-8" async
                                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A74ef7033502c6da5c07e9c9a62bb1ab5b4b96aac41cd93d97906f2020bd639bd&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script> */}
                </div>
              </div>
            </div>
          </div>
          <div className="map-block">
            <div className="map-block__map">
              {/* <script type="text/javascript" charset="utf-8" async
                            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A74ef7033502c6da5c07e9c9a62bb1ab5b4b96aac41cd93d97906f2020bd639bd&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script> */}
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="block-footer">
              <div className="block-footer__menu">
                <p className="block-footer__title">Меню</p>
                <nav className="footer__menu">
                  <ul className="footer__list">
                    <li className="footer__list-element">
                      <a href="#section-welcome" className="footer__link">Главная</a>
                    </li>
                    <li className="footer__list-element">
                      <a href="#section-sightseens" className="footer__link">Достопремечательности</a>
                    </li>
                    <li className="footer__list-element">
                      <a href="#section-tour" className="footer__link">Туры</a>
                    </li>
                    <li className="footer__list-element">
                      <a href="#section-contacts" className="footer__link">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="block-footer__contact">
                <p className="block-footer__title">Контакты</p>
                <div className="block-footer__text">
                  655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67<br />Справочная служба: 8 (3902) 22-53-35,
                  факс: 8
                  (3902) 24-30-71<br />Электронная почта: kancler@vskhakasia.ru
                </div>
              </div>
              <div className="block-footer__text">
                Официальный сайт Агенства Туризма Республики Хакасия © 2021
              </div>
            </div>
          </div>
        </footer>
      </body>

    </div>
  )
}

export default Home
