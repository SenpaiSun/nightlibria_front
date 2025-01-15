'use client'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { Container, useMantineColorScheme } from '@mantine/core'
import { CarouselSlide } from './carousel-slide/carouselSlide'

export const CarouselComponent: React.FC = () => {
    const { colorScheme } = useMantineColorScheme()
  return (
    <Container>
      <Carousel
        withIndicators
        draggable={true}
        height={'max-content'}
        slideSize='25%'
        slideGap='0px'
        styles={{
          indicators: {
            color: 'black',
          },
          indicator: {
            backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
          },
        }}
        style={{ padding: '30px 40px 20px' }}
        loop
        align='start'
        slidesToScroll={4}
      >
        <CarouselSlide data={array} />
      </Carousel>
    </Container>
  )
}

const array = [
  {
    id: 9821,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2024,
    name: {
      main: 'О движении Земли',
      english: 'Chi.: Chikyuu no Undou ni Tsuite',
      alternative: null,
    },
    alias: 'chi-chikyuu-no-undou-ni-tsuite',
    season: {
      value: 'autumn',
      description: 'Осень',
    },
    poster: {
      src: '/storage/releases/posters/9821/7FpmtsdtDAVNEvyQTzVRRLsU1T7ZemAo.jpg',
      thumbnail: '/storage/releases/posters/9821/oG8AEKJg5pv1SUZC6x1gt8oX8FC7VTgN.jpg',
      optimized: {
        src: '/storage/releases/posters/9821/A5pVpdtZP5v7buxh8zc2KCyzCe8tua0a.webp',
        thumbnail: '/storage/releases/posters/9821/BVXxQcKY9XtXWl6i1pgtq1EtNzzirFeV.webp',
      },
    },
    fresh_at: '2025-01-14T19:57:02+00:00',
    created_at: '2024-09-12T08:26:31+00:00',
    updated_at: '2025-01-15T04:46:57+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 3,
      description: 'Среда',
    },
    description:
      'XV век вошёл в историю Европы как время культурного ренессанса и великих географических открытий. Но за большими прорывами в науке и искусстве скрывался серьёзный кризис веры, и в людских сердцах медленно зрел протест против контроля церкви над всеми сферами жизни.\r\nРафал, одарённый молодой человек, интересующийся теологией, встречает таинственного незнакомца, который открывает ему глаза на истинное устройство Вселенной, идущее вразрез с официальной доктриной церкви.\r\nНо в Средневековье любое инакомыслие беспощадно каралось, а все еретики немедленно отправлялись на костёр. Инквизиция не дремлет, и молодому учёному приходится столкнуться с выбором: сохранить свои открытия в тайне или рискнуть всем ради истины и будущего науки.',
    notification: null,
    episodes_total: 24,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: false,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 6508,
    average_duration_of_episode: 25,
    genres: [
      {
        id: 5,
        name: 'Сейнен',
        image: {
          preview: '/storage/anime/genres/images/5/ekFrF3Puccsi75ngq0fzd4fUbnXiGCnn.jpg',
          thumbnail: '/storage/anime/genres/images/5/CfIxntJmgBabUiBQChxB0WZHdSF5L87K.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/5/sTleU4eW0CiqDIiiyRniPJIQlB8HZagG.webp',
            thumbnail: '/storage/anime/genres/images/5/RsbTRZ6lb0zhLCP033o9PEmsFRwVqLp5.webp',
          },
        },
        total_releases: 170,
      },
      {
        id: 8,
        name: 'Драма',
        image: {
          preview: '/storage/anime/genres/images/8/zsAUP1RD6fLnJXMwTnH3awJNY0F3qlc3.jpg',
          thumbnail: '/storage/anime/genres/images/8/rQWlDbZpCDJroKwGrKMmCTAxjJ4gAsdQ.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/8/xAYRsKLcdinBkDAPNaTPTw67CDx6C6y4.webp',
            thumbnail: '/storage/anime/genres/images/8/xL6iOX6aTj5swKxJdCPeucQnUc8Ka4ho.webp',
          },
        },
        total_releases: 346,
      },
      {
        id: 26,
        name: 'Исторический',
        image: {
          preview: '/storage/anime/genres/images/26/lkX06fFnPHXl7H3GCuYwqtLCPDWvoEcu.jpg',
          thumbnail: '/storage/anime/genres/images/26/WFR11q1ZIYPRRZ0yx61pZgWgnqvqkPyV.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/26/rU3zWwD9jZyQHqXhE0qOEyd9mDnT5K9x.webp',
            thumbnail: '/storage/anime/genres/images/26/FVN9zAt3JC74IXtGVWobFDmZhwpYdc6l.webp',
          },
        },
        total_releases: 85,
      },
    ],
    latest_episode: {
      id: '9df7d3f7-3864-4eab-9dd7-1758cc637f09',
      name: null,
      ordinal: 16,
      opening: {
        stop: 381,
        start: 291,
      },
      ending: {
        stop: 1499,
        start: 1411,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9821/16/0TWUbMBFvKSrFBwv.jpg',
        thumbnail: '/storage/releases/episodes/previews/9821/16/0TWUbMBFvKSrFBwv__b5fd003d78bee8b96b054301fdeb233e.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9821/16/0TWUbMBFvKSrFBwv__a09fbbea9202bf4de0954abd667122a5.webp',
          thumbnail: '/storage/releases/episodes/previews/9821/16/0TWUbMBFvKSrFBwv__fcdcaaa8572d6b5817806b98c881d657.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9821/16/480/6354afe0c7a9f792568a88f2dedc51b6.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9821/16/720/8319f60eda34976eddfa3e9efd027da1.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9821/16/1080/3f252f8553cb951e41e9eda3af77413c.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1502,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-14T20:01:48+00:00',
      sort_order: 16,
      name_english: null,
    },
  },
  {
    id: 9875,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Медалистка',
      english: 'Medalist',
      alternative: null,
    },
    alias: 'medalist',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9875/YC9Mzl5haJ9iz9jRgxDaOwcFqoHHWAKQ.jpg',
      thumbnail: '/storage/releases/posters/9875/8crFciD1Vn5TWfOHnqAAlJpKWCDQ7kRK.jpg',
      optimized: {
        src: '/storage/releases/posters/9875/KxkJihDukGncdCrvAUHsUFoKYiElP9oz.webp',
        thumbnail: '/storage/releases/posters/9875/FIDw1BDB56oqtgkIWxOIuuVt7Cj0juYv.webp',
      },
    },
    fresh_at: '2025-01-14T15:47:02+00:00',
    created_at: '2024-11-20T16:14:58+00:00',
    updated_at: '2025-01-15T03:11:14+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 7,
      description: 'Воскресенье',
    },
    description:
      'Если, услышав слова "тулуп" и "циркуль", вы подумали не о шубе с воротом и инструменте для черчения, ну а звонкий скрежет стали по льду звучит в ваших ушах подобно музыке, то это аниме точно для вас!\r\nЕщё будучи подростком Цукаса мечтал стать олимпийским чемпионом, но фигурное катание — спорт жестокий. Начав кататься в таком позднем возрасте, шансов обойти тех, кто свои первые шаги делал уже на льду, попросту нет. В результате к двадцати шести годам Цукаса остался и не только без заветного титула, но и вообще без работы.\r\nНо вот однажды, придя на каток, он увидел необычную картину — десятилетняя девочка Инори пыталась тайком пробраться ко льду! Увидев её искреннюю любовь к фигурному катанию, Цукаса твёрдо решил, что поможет девочке освоить этот тяжёлый спорт, и обязательно поднимет её на самую вершину!',
    notification: null,
    episodes_total: 13,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: false,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 971,
    average_duration_of_episode: 23,
    genres: [
      {
        id: 5,
        name: 'Сейнен',
        image: {
          preview: '/storage/anime/genres/images/5/ekFrF3Puccsi75ngq0fzd4fUbnXiGCnn.jpg',
          thumbnail: '/storage/anime/genres/images/5/CfIxntJmgBabUiBQChxB0WZHdSF5L87K.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/5/sTleU4eW0CiqDIiiyRniPJIQlB8HZagG.webp',
            thumbnail: '/storage/anime/genres/images/5/RsbTRZ6lb0zhLCP033o9PEmsFRwVqLp5.webp',
          },
        },
        total_releases: 170,
      },
      {
        id: 8,
        name: 'Драма',
        image: {
          preview: '/storage/anime/genres/images/8/zsAUP1RD6fLnJXMwTnH3awJNY0F3qlc3.jpg',
          thumbnail: '/storage/anime/genres/images/8/rQWlDbZpCDJroKwGrKMmCTAxjJ4gAsdQ.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/8/xAYRsKLcdinBkDAPNaTPTw67CDx6C6y4.webp',
            thumbnail: '/storage/anime/genres/images/8/xL6iOX6aTj5swKxJdCPeucQnUc8Ka4ho.webp',
          },
        },
        total_releases: 346,
      },
      {
        id: 12,
        name: 'Спорт',
        image: {
          preview: '/storage/anime/genres/images/12/TxMhknclj7wLbtAvQxfiwL0UmfNYR56a.jpg',
          thumbnail: '/storage/anime/genres/images/12/NXe6wrQ6G04B3QG8emhM408DDuNVD3Xk.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/12/bmLvq05JfkwQkR5fbdBDzaXmFYaDAPkE.webp',
            thumbnail: '/storage/anime/genres/images/12/RArCZYAfNKkSYXdED8xkVZtIZ9cKiPeK.webp',
          },
        },
        total_releases: 48,
      },
    ],
    latest_episode: {
      id: '9df7a003-0fdd-4835-8b96-0e83a4f15124',
      name: 'Квалификационный зачет для начинающих',
      ordinal: 2,
      opening: {
        stop: 184,
        start: 94,
      },
      ending: {
        stop: 1381,
        start: 1291,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9875/2/RAK3s4CW2y6N1qYA.jpg',
        thumbnail: '/storage/releases/episodes/previews/9875/2/RAK3s4CW2y6N1qYA__fc851980d10ca3c33827d77588a1e28c.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9875/2/RAK3s4CW2y6N1qYA__c139624bbf10713c3802878332d901fe.webp',
          thumbnail: '/storage/releases/episodes/previews/9875/2/RAK3s4CW2y6N1qYA__f78e51b375d07e4defb7c6f6f9776721.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9875/2/480/8182bb28043581cf822f65f82d6c6b9b.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9875/2/720/100d4585d8ad1d8f6fca6e1ed7e01f67.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9875/2/1080/757856a3f2d6c4150c85a110d13971a1.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1382,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-14T15:52:45+00:00',
      sort_order: 2,
      name_english: null,
    },
  },
  {
    id: 9840,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Сто девушек, которые очень-очень-очень-очень-очень сильно тебя любят 2',
      english: 'Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo 2nd Season',
      alternative: null,
    },
    alias: 'kimi-no-koto-ga-daidaidaidaidaisuki-na-100-nin-no-kanojo-2nd-season',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9840/qQ3fR6UXNcEyg79tDNmvsR8e8fgEmyO0.jpg',
      thumbnail: '/storage/releases/posters/9840/zuyQZYtXdmcMh5xk3w8UXQgrMOZm39en.jpg',
      optimized: {
        src: '/storage/releases/posters/9840/iRP1mAPG9bQtTwqfTwbZlgW3opDJU8Sc.webp',
        thumbnail: '/storage/releases/posters/9840/nmnZaz1O1WAkD5RZpoiv7e0aeqd4roY8.webp',
      },
    },
    fresh_at: '2025-01-14T13:33:59+00:00',
    created_at: '2024-11-20T15:31:13+00:00',
    updated_at: '2025-01-14T15:11:51+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 2,
      description: 'Вторник',
    },
    description:
      'Рэнтаро достойно встретил вызов судьбы и смело открыл своё сердце, приняв в семью шесть девушек из ста. Добрая и любвеобильная Хакари, энергичная и решительная Каранэ, скромная и застенчивая Шидзука, умная и хладнокровная Нано, весёлая и изобретательная Кусури, а также заботливая и прекрасная Хахари — каждая суженая любит своего избранника искренне и всей душой.\r\nНо пока счастливый герой-любовник с доблестью настоящего рыцаря решает всё более абсурдные ситуации, где-то рядом ждут своего часа ещё девяносто четыре незамеченные девушки, мечтающие о взаимной любви.\r\nКармическую справедливость никто не отменял, и над оставшимися сужеными по-прежнему висит страшное проклятие: если Рэнтаро не ответит им взаимностью, их ждут ужасные несчастья. Благо, с будущим парнем им повезло, и Рэнтаро уже доказал, что надёжнее него в таком запутанном любовном многоугольнике человека не найти.',
    notification: null,
    episodes_total: 12,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: true,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 2002,
    average_duration_of_episode: 24,
    genres: [
      {
        id: 5,
        name: 'Сейнен',
        image: {
          preview: '/storage/anime/genres/images/5/ekFrF3Puccsi75ngq0fzd4fUbnXiGCnn.jpg',
          thumbnail: '/storage/anime/genres/images/5/CfIxntJmgBabUiBQChxB0WZHdSF5L87K.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/5/sTleU4eW0CiqDIiiyRniPJIQlB8HZagG.webp',
            thumbnail: '/storage/anime/genres/images/5/RsbTRZ6lb0zhLCP033o9PEmsFRwVqLp5.webp',
          },
        },
        total_releases: 170,
      },
      {
        id: 1,
        name: 'Комедия',
        image: {
          preview: '/storage/anime/genres/images/1/U1sFaXCMz3PE7nxORf5D8qhN0tX2reqW.jpg',
          thumbnail: '/storage/anime/genres/images/1/QBNpOye0tk9DVySvQN1wz9j3iZdZhvZp.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/1/2jgEuWgDWkIK1ucumMsWv1EzGy5jOT5j.webp',
            thumbnail: '/storage/anime/genres/images/1/2HNoBbkhXvWQwzF4WyYZwc6bMdaeRy47.webp',
          },
        },
        total_releases: 648,
      },
      {
        id: 11,
        name: 'Романтика',
        image: {
          preview: '/storage/anime/genres/images/11/IMvKVBJEa0oQTnJSTRzUO2Q5GcO8W3yh.jpg',
          thumbnail: '/storage/anime/genres/images/11/PH6VnfrPncIW3BiYjNEBIWPtL4jQLNz9.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/11/4hYmrD37aIKEiQcHr48fiKPe8PaW01uk.webp',
            thumbnail: '/storage/anime/genres/images/11/UkFZNGtVyzN0oC3X1xGxn859frg2R8Xj.webp',
          },
        },
        total_releases: 429,
      },
      {
        id: 7,
        name: 'Школа',
        image: {
          preview: '/storage/anime/genres/images/7/LRSTYD3YNqQiGfAbE0Dye5FNVJMBY2ih.jpg',
          thumbnail: '/storage/anime/genres/images/7/UMsCXNUT2PakaYm7bB3W9H7p6Wp5w4bt.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/7/wCSSNPj1KFzJXkvO75DoBE6f1Ub4KebO.webp',
            thumbnail: '/storage/anime/genres/images/7/94FrNkc6i8GZvXSaN5UMDJeZQPUEjaeA.webp',
          },
        },
        total_releases: 330,
      },
    ],
    latest_episode: {
      id: '9df76506-37f9-4682-af41-dcb9e613e135',
      name: 'Голодный кохай',
      ordinal: 1,
      opening: {
        stop: 160,
        start: 71,
      },
      ending: {
        stop: 1430,
        start: 1340,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9840/1/KPx75RLpsCzHopzf.jpg',
        thumbnail: '/storage/releases/episodes/previews/9840/1/KPx75RLpsCzHopzf__cf7e4544cd2c5d68f50207229ed21093.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9840/1/KPx75RLpsCzHopzf__ea77c1e1dd2b45f88be10b2e3def8605.webp',
          thumbnail: '/storage/releases/episodes/previews/9840/1/KPx75RLpsCzHopzf__bad53f26414ab2c511b67f356081e353.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9840/1/480/a22a0f989b8112e8ce808624f8a98ce5.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9840/1/720/c0a37b482c6fb7b8ca1d68160b467d2b.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9840/1/1080/9c679a3f953e3cc6d00a83d21da4c165.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1430,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-14T13:34:11+00:00',
      sort_order: 1,
      name_english: null,
    },
  },
  {
    id: 9858,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'История о служащем, который стал одним из четырёх Небесных Царей, когда отправился в другой мир',
      english: 'Salaryman ga Isekai ni Ittara Shitennou ni Natta Hanashi',
      alternative: null,
    },
    alias: 'salaryman-ga-isekai-ni-ittara-shitennou-ni-natta-hanashi',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9858/tYnZY0GvmsmBS984hTAXEmG5skbrX43I.jpg',
      thumbnail: '/storage/releases/posters/9858/joVTiS9CiHBQix9X2NwXuOcbGAG0yH7d.jpg',
      optimized: {
        src: '/storage/releases/posters/9858/iZ4i5TLR6xN3AjxI3oWTPiorKB5cy28i.webp',
        thumbnail: '/storage/releases/posters/9858/cYZondLHEkzEtYi1h6OyUtRzq60NNw9E.webp',
      },
    },
    fresh_at: '2025-01-14T10:59:21+00:00',
    created_at: '2024-11-20T15:46:24+00:00',
    updated_at: '2025-01-14T12:02:37+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 4,
      description: 'Четверг',
    },
    description:
      'Любому, даже самому могущественному правителю, не справиться без действительно сильных подчинённых. Четыре Небесных Короля — так именуют главных слуг Повелителя Демонов, правящих далёким и чуждым нам миром.\r\nТрое из них уже заняли свою должность, и вот настаёт момент, когда будет избран последний, четвёртый король! И им становится... Ючимура Дэнуске, обычный офисный работник из Японии. Назначенный на должность лично самим Повелителем Демонов, Ючимура, ещё не успев даже привыкнуть к своему неожиданному повышению, понимает, что впредь каждый день для него будет как последний! А всё дело в том, что он не обладает никакими особыми силами, и все трудности, которые ему бросает фэнтезийный мир, он должен будет преодолевать полагаясь только на свой опыт и навыки офисного планктона!',
    notification: null,
    episodes_total: 12,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: true,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 7740,
    average_duration_of_episode: 24,
    genres: [
      {
        id: 27,
        name: 'Приключения',
        image: {
          preview: '/storage/anime/genres/images/27/bcU7byqneZPf1E3qj3g94enAUtoRUr9A.jpg',
          thumbnail: '/storage/anime/genres/images/27/dkzAZJGJI45REJTjVMNAJXNi4wHo0AOS.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/27/z4kgvrZz4JSSy0G1EtWBDSH1SA76Aex1.webp',
            thumbnail: '/storage/anime/genres/images/27/lEZNqdhonXq9BAejItNKgPTv1XLFbwdD.webp',
          },
        },
        total_releases: 443,
      },
      {
        id: 1,
        name: 'Комедия',
        image: {
          preview: '/storage/anime/genres/images/1/U1sFaXCMz3PE7nxORf5D8qhN0tX2reqW.jpg',
          thumbnail: '/storage/anime/genres/images/1/QBNpOye0tk9DVySvQN1wz9j3iZdZhvZp.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/1/2jgEuWgDWkIK1ucumMsWv1EzGy5jOT5j.webp',
            thumbnail: '/storage/anime/genres/images/1/2HNoBbkhXvWQwzF4WyYZwc6bMdaeRy47.webp',
          },
        },
        total_releases: 648,
      },
      {
        id: 29,
        name: 'Фэнтези',
        image: {
          preview: '/storage/anime/genres/images/29/BqPfwYPC7STQ0lsv6LsdyDm594Tnz2N5.jpg',
          thumbnail: '/storage/anime/genres/images/29/bkKObn59vWFAd8wcAPINJnI8EZLZB8gH.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/29/BayKuKbzHQkKMlfFyUTZAoExCjqkHDfh.webp',
            thumbnail: '/storage/anime/genres/images/29/yVUCPUfGguBeZ280YyS5UhawlR3F1fS0.webp',
          },
        },
        total_releases: 580,
      },
    ],
    latest_episode: {
      id: '9df733ba-ee99-4837-8445-1ffba6fdc122',
      name: null,
      ordinal: 3,
      opening: {
        stop: 199,
        start: 109,
      },
      ending: {
        stop: 1414,
        start: 1325,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9858/3/VI1kS34F9FenxL6s.jpg',
        thumbnail: '/storage/releases/episodes/previews/9858/3/VI1kS34F9FenxL6s__6366eb77ae75c73513e877c45d553396.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9858/3/VI1kS34F9FenxL6s__4ac18bccd920bdf2f13b25cacf1eef6e.webp',
          thumbnail: '/storage/releases/episodes/previews/9858/3/VI1kS34F9FenxL6s__89ff22c7931a40f60411ce7fa5c90b58.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9858/3/480/c80e2f44cbdf6a560b961e481ea33d9e.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9858/3/720/be43126a2405f9aeec668137c6d5366f.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9858/3/1080/30f63de6f3ec602beb3198e85516dade.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1430,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-14T11:45:27+00:00',
      sort_order: 3,
      name_english: null,
    },
  },
  {
    id: 9868,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Девушка, в которую я влюбился на Окинаве, говорит на диалекте, и с ней трудно иметь дело',
      english: 'Okinawa de Suki ni Natta Ko ga Hougen Sugite Tsurasugiru',
      alternative: null,
    },
    alias: 'okinawa-de-suki-ni-natta-ko-ga-hougen-sugite-tsurasugiru',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9868/8RFaqKr9U1IEWqldzn8ZKWnsbE14KKlY.jpg',
      thumbnail: '/storage/releases/posters/9868/cIYQbBjLqomzt2mLfdmFZPjdKw5mHG0D.jpg',
      optimized: {
        src: '/storage/releases/posters/9868/od3etG6t9HstRiYtP6fvUSR6qMBFzuNx.webp',
        thumbnail: '/storage/releases/posters/9868/vq4o4lL87h2U77OSmKDWFrZYiuX8x47A.webp',
      },
    },
    fresh_at: '2025-01-14T07:05:45+00:00',
    created_at: '2024-11-20T15:58:13+00:00',
    updated_at: '2025-01-14T07:43:52+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 1,
      description: 'Понедельник',
    },
    description:
      'Накамура Тэруаки только-только переехал из Токио на Окинаву, но в новой школе уже умудрился втрескаться в девочку из параллели, Хину. И вот незадача: он совершенно не понимает, о чём она говорит, ведь разговаривает его пассия не на японском, а на окинавском!\r\nБлаго, на помощь влюблённому пареньку приходит его новоиспечённая одноклассница Кана, у которой, правда, не совсем чистые мотивы. На самом деле, она тоже тайно влюблена в нашего героя, и именно поэтому соглашается стать этаким переводчиком в их любовном теперь уже треугольнике.',
    notification: null,
    episodes_total: 12,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: false,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 2638,
    average_duration_of_episode: 24,
    genres: [
      {
        id: 1,
        name: 'Комедия',
        image: {
          preview: '/storage/anime/genres/images/1/U1sFaXCMz3PE7nxORf5D8qhN0tX2reqW.jpg',
          thumbnail: '/storage/anime/genres/images/1/QBNpOye0tk9DVySvQN1wz9j3iZdZhvZp.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/1/2jgEuWgDWkIK1ucumMsWv1EzGy5jOT5j.webp',
            thumbnail: '/storage/anime/genres/images/1/2HNoBbkhXvWQwzF4WyYZwc6bMdaeRy47.webp',
          },
        },
        total_releases: 648,
      },
      {
        id: 11,
        name: 'Романтика',
        image: {
          preview: '/storage/anime/genres/images/11/IMvKVBJEa0oQTnJSTRzUO2Q5GcO8W3yh.jpg',
          thumbnail: '/storage/anime/genres/images/11/PH6VnfrPncIW3BiYjNEBIWPtL4jQLNz9.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/11/4hYmrD37aIKEiQcHr48fiKPe8PaW01uk.webp',
            thumbnail: '/storage/anime/genres/images/11/UkFZNGtVyzN0oC3X1xGxn859frg2R8Xj.webp',
          },
        },
        total_releases: 429,
      },
      {
        id: 7,
        name: 'Школа',
        image: {
          preview: '/storage/anime/genres/images/7/LRSTYD3YNqQiGfAbE0Dye5FNVJMBY2ih.jpg',
          thumbnail: '/storage/anime/genres/images/7/UMsCXNUT2PakaYm7bB3W9H7p6Wp5w4bt.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/7/wCSSNPj1KFzJXkvO75DoBE6f1Ub4KebO.webp',
            thumbnail: '/storage/anime/genres/images/7/94FrNkc6i8GZvXSaN5UMDJeZQPUEjaeA.webp',
          },
        },
        total_releases: 330,
      },
    ],
    latest_episode: {
      id: '9df6e105-0652-4a45-852d-a9c0c51ccca4',
      name: 'Пляжная вечеринка с классом',
      ordinal: 2,
      opening: {
        stop: 141,
        start: 51,
      },
      ending: {
        stop: 1282,
        start: 1215,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9868/2/iTe4Ov9VHV1exdR4.jpg',
        thumbnail: '/storage/releases/episodes/previews/9868/2/iTe4Ov9VHV1exdR4__6aa633f46ae371457983873b99af667e.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9868/2/iTe4Ov9VHV1exdR4__ced0c18774842db6c36d64d2ec8d4b00.webp',
          thumbnail: '/storage/releases/episodes/previews/9868/2/iTe4Ov9VHV1exdR4__9233e3c98e5b9288efcb4d62ec9bdd47.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9868/2/480/4a21f4f225acf5bda4d6277e1b156132.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9868/2/720/1c7b06492465b0aa0dfdedab617cc412.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9868/2/1080/a5a9edad3f3fd4ff11af1d05b7102ed5.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1422,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-14T07:00:27+00:00',
      sort_order: 2,
      name_english: null,
    },
  },
  {
    id: 8693,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2004,
    name: {
      main: 'Девы Розена',
      english: 'Rozen Maiden',
      alternative: null,
    },
    alias: 'rozen-maiden',
    season: {
      value: 'autumn',
      description: 'Осень',
    },
    poster: {
      src: '/storage/releases/posters/8693/U9sRnevmTnDjlVibdMBvvtNfytFpmD3S.jpg',
      thumbnail: '/storage/releases/posters/8693/lvQreoTgLg9AjtwbRiVr9owzKbReRzy9.jpg',
      optimized: {
        src: '/storage/releases/posters/8693/aLHoUMcSeanxeUa3DWhBMhGm69itKKZn.webp',
        thumbnail: '/storage/releases/posters/8693/yQkkpAMkra2zLYisawI2I1JJ3Taf8BVd.webp',
      },
    },
    fresh_at: '2025-01-13T20:09:21+00:00',
    created_at: null,
    updated_at: '2025-01-14T13:46:52+00:00',
    is_ongoing: false,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 1,
      description: 'Понедельник',
    },
    description:
      'Дзюн Сакурада проводит все свои дни, сидя за компьютером и заказывая всё мистическое, что приглянется ему в Интернете, в итоге каждый раз возвращая покупки до того, как придётся заплатить. Из-за психологической травмы, полученной в школе, Дзюн старается не общаться с другими людьми. \r\n Однажды Дзюн попадает на странный сайт, в котором содержится инструкция «Положить в ящик стола» и вопрос «Повернёшь? Или нет?». Думая, что всё это шутка, он нажимает на «Повернёшь», а его заказ исчезает из его стола. В пришедшей посылке он находит красивую куклу. После того, как мальчик заводит её прилагавшимся ключиком, кукла оживает. К несчастью Дзюна, она воспринимает его как слугу. Однако, несмотря на постоянные приказы и требования куклы Синку, она медленно, но верно избавляет его от страха перед другими людьми, а также защищает от смертельных сражений, которые приходят в его жизнь с её появлением.',
    notification: null,
    episodes_total: 12,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: false,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 1090,
    average_duration_of_episode: 24,
    genres: [
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
      {
        id: 1,
        name: 'Комедия',
        image: {
          preview: '/storage/anime/genres/images/1/U1sFaXCMz3PE7nxORf5D8qhN0tX2reqW.jpg',
          thumbnail: '/storage/anime/genres/images/1/QBNpOye0tk9DVySvQN1wz9j3iZdZhvZp.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/1/2jgEuWgDWkIK1ucumMsWv1EzGy5jOT5j.webp',
            thumbnail: '/storage/anime/genres/images/1/2HNoBbkhXvWQwzF4WyYZwc6bMdaeRy47.webp',
          },
        },
        total_releases: 648,
      },
      {
        id: 8,
        name: 'Драма',
        image: {
          preview: '/storage/anime/genres/images/8/zsAUP1RD6fLnJXMwTnH3awJNY0F3qlc3.jpg',
          thumbnail: '/storage/anime/genres/images/8/rQWlDbZpCDJroKwGrKMmCTAxjJ4gAsdQ.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/8/xAYRsKLcdinBkDAPNaTPTw67CDx6C6y4.webp',
            thumbnail: '/storage/anime/genres/images/8/xL6iOX6aTj5swKxJdCPeucQnUc8Ka4ho.webp',
          },
        },
        total_releases: 346,
      },
      {
        id: 5,
        name: 'Сейнен',
        image: {
          preview: '/storage/anime/genres/images/5/ekFrF3Puccsi75ngq0fzd4fUbnXiGCnn.jpg',
          thumbnail: '/storage/anime/genres/images/5/CfIxntJmgBabUiBQChxB0WZHdSF5L87K.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/5/sTleU4eW0CiqDIiiyRniPJIQlB8HZagG.webp',
            thumbnail: '/storage/anime/genres/images/5/RsbTRZ6lb0zhLCP033o9PEmsFRwVqLp5.webp',
          },
        },
        total_releases: 170,
      },
      {
        id: 18,
        name: 'Магия',
        image: {
          preview: '/storage/anime/genres/images/18/PLNSkafhrBJZCq5DxwF5Cb4qnspuf6oa.jpg',
          thumbnail: '/storage/anime/genres/images/18/GsWCdh8tU4gpo7Qak5dYp1ME9RyG8HwH.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/18/RobrOxFOHf3c50ajtuwZFZgZu4hVnP94.webp',
            thumbnail: '/storage/anime/genres/images/18/H7U9l12KXTdn6fG7VuzzK2WOpzNoVfRn.webp',
          },
        },
        total_releases: 117,
      },
    ],
    latest_episode: {
      id: '9df5fa3c-a93d-4ae2-896a-7b05d73f1f71',
      name: null,
      ordinal: 5,
      opening: {
        stop: 90,
        start: 1,
      },
      ending: {
        stop: 1419,
        start: 1330,
      },
      preview: {
        src: '/storage/releases/episodes/previews/8693/5/m0at45RST5bsWzGp.jpg',
        thumbnail: '/storage/releases/episodes/previews/8693/5/m0at45RST5bsWzGp__c89bdc5c0ea6e47445ccc98931898afe.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/8693/5/m0at45RST5bsWzGp__f57f605e6d0a7238a8a6c0e193eb66d4.webp',
          thumbnail: '/storage/releases/episodes/previews/8693/5/m0at45RST5bsWzGp__92a4c0818353d81dbc45f5a38ea82b51.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/8693/5/480/43757afeff79a125eb75fca5933ed3e8.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/8693/5/720/4eae507954ea65eb6665fc4e25547cd5.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: null,
      duration: 1451,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-13T20:08:39+00:00',
      sort_order: 5,
      name_english: null,
    },
  },
  {
    id: 9879,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Мгновение Лили',
      english: 'Momentary Lily',
      alternative: null,
    },
    alias: 'momentary-lily',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9879/5NoDRy0TvwxogCKsIdg5SDSF6c9ugd9e.jpg',
      thumbnail: '/storage/releases/posters/9879/s0EEx7oBe6E0bKNaWqGFwPtIvuwunwlA.jpg',
      optimized: {
        src: '/storage/releases/posters/9879/ozgd31gp8B1EGlIXFWxwOKqBmvXcenMm.webp',
        thumbnail: '/storage/releases/posters/9879/D17aEhCOI7bRzepmBIjRH2R0MBycwGlk.webp',
      },
    },
    fresh_at: '2025-01-13T16:32:17+00:00',
    created_at: '2024-11-20T16:18:47+00:00',
    updated_at: '2025-01-13T16:01:38+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 1,
      description: 'Понедельник',
    },
    description:
      'На опустошённой неизвестными захватчиками Земле небольшой группе девочек приходится каждый день сражаться со страшными механическими монстрами.\r\nЗвучит, как история о выживании в постапокалиптическом мире, но это совсем не так! Дома и улицы здесь выглядят совершенно нетронутыми, ну а чтобы, например, приготовить на ужин чего-нибудь вкусненького, совершенно не обязательно прочёсывать километр за километром в поисках ингредиентов, а достаточно просто собраться всем вместе!\r\nТак что скорее пристегните ремни: скучать будет некогда, ведь милые девочки уже подготовили для нас свежую порцию отборной милоты!',
    notification: null,
    episodes_total: null,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: true,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 1249,
    average_duration_of_episode: 24,
    genres: [
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
      {
        id: 22,
        name: 'Фантастика',
        image: {
          preview: '/storage/anime/genres/images/22/SkMfGTRw25vgROZYw2ckIFThCj6vieKr.jpg',
          thumbnail: '/storage/anime/genres/images/22/ITIPuxUQTOmgnVdrWsKsvpHILkKC8XKf.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/22/eWMwlRJdiIp9AVbEBvc3uNoJtPoNZZtb.webp',
            thumbnail: '/storage/anime/genres/images/22/BsPOUSqL5Fmd8opLAAnnv8g9B86U3iyb.webp',
          },
        },
        total_releases: 253,
      },
    ],
    latest_episode: {
      id: '9df5a79a-d266-4e3e-9171-e07e3395853f',
      name: 'Консервированная скумбрия в томатном соусе по-итальянски',
      ordinal: 2,
      opening: {
        stop: 286,
        start: 197,
      },
      ending: {
        stop: null,
        start: null,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9879/2/G2MadXHZPfxYWv53.jpg',
        thumbnail: '/storage/releases/episodes/previews/9879/2/G2MadXHZPfxYWv53__ae5582bc1a1ef465794266de48e61b06.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9879/2/G2MadXHZPfxYWv53__7e7c99238a4df5fec03110dbaeba9ffa.webp',
          thumbnail: '/storage/releases/episodes/previews/9879/2/G2MadXHZPfxYWv53__b0a083b8ef5f6d024a01e906f4d2c3d0.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9879/2/480/3aec1c4d71cb5bc95be02c2bdad64782.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9879/2/720/592451155db78d54ad0d8f5445d59290.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9879/2/1080/d7255e0db39612878722ffc5cda178e8.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1420,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-13T16:44:44+00:00',
      sort_order: 2,
      name_english: null,
    },
  },
  {
    id: 9874,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Полное исследование',
      english: 'Zenshuu.',
      alternative: null,
    },
    alias: 'zenshuu',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9874/oHdvkhDkkLavxOBhV6ML9bKERDv7dnTT.jpg',
      thumbnail: '/storage/releases/posters/9874/z52fJhciL0eXVKTwmz5M5MGrRnl2SX1d.jpg',
      optimized: {
        src: '/storage/releases/posters/9874/0O2UH5KjEcKrrAohX5Kitdo2WQMpPGQ7.webp',
        thumbnail: '/storage/releases/posters/9874/TnSk70HZCiP335Godanmf0kTtXZQNuLo.webp',
      },
    },
    fresh_at: '2025-01-13T15:28:12+00:00',
    created_at: '2024-11-20T16:14:28+00:00',
    updated_at: '2025-01-14T11:18:29+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 4,
      description: 'Четверг',
    },
    description:
      'Только выпустившись из средней школы, Нацуко Хиросэ устроилась работать художником-аниматором. Благодаря своему необыкновенному таланту она сразу же начала делать большие успехи, и довольно быстро добралась до места режиссера.\r\nЕё первое аниме стало настоящим хитом, вызвав общественный резонанс, что в итоге принесло ей признание и статус гениального молодого специалиста. И вот, следующим её проектом должен стать романтический комедийный фильм о первой любви. Однако Нацуко, которая из-за постоянной работы сама никогда не влюблялась, совсем не понимает, что такое эта ваша "первая любовь", и поэтому даже не знает, с чего ей начать работу!',
    notification: null,
    episodes_total: 12,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: false,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 2469,
    average_duration_of_episode: 24,
    genres: [
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
      {
        id: 29,
        name: 'Фэнтези',
        image: {
          preview: '/storage/anime/genres/images/29/BqPfwYPC7STQ0lsv6LsdyDm594Tnz2N5.jpg',
          thumbnail: '/storage/anime/genres/images/29/bkKObn59vWFAd8wcAPINJnI8EZLZB8gH.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/29/BayKuKbzHQkKMlfFyUTZAoExCjqkHDfh.webp',
            thumbnail: '/storage/anime/genres/images/29/yVUCPUfGguBeZ280YyS5UhawlR3F1fS0.webp',
          },
        },
        total_releases: 580,
      },
      {
        id: 34,
        name: 'Исекай',
        image: {
          preview: '/storage/anime/genres/images/34/kojD1QCZq7E1EiHEYIlXqpqPl387Mdq0.jpg',
          thumbnail: '/storage/anime/genres/images/34/bavMvL2OgW8ujeidmM3GZ7rY20lopGNo.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/34/HUewoXUZAlHsb9KrW432Q6R3zLBSV63h.webp',
            thumbnail: '/storage/anime/genres/images/34/7yEEgekS9jZq0FSqcMtRBp8lCOU2SRy2.webp',
          },
        },
        total_releases: 26,
      },
    ],
    latest_episode: {
      id: '9df597f6-2f45-459c-bab7-af5d5f085bc3',
      name: 'Выстоять.',
      ordinal: 2,
      opening: {
        stop: 161,
        start: 72,
      },
      ending: {
        stop: 1427,
        start: 1328,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9874/2/ejOmXG2oP2TzoSdl.jpg',
        thumbnail: '/storage/releases/episodes/previews/9874/2/ejOmXG2oP2TzoSdl__5b1fb3f2eed6ffc89c84b455ac4b388d.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9874/2/ejOmXG2oP2TzoSdl__3822e877a604162200600a3a0862a88e.webp',
          thumbnail: '/storage/releases/episodes/previews/9874/2/ejOmXG2oP2TzoSdl__2c864f37396e833b11db1c69dfd1edea.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9874/2/480/4fe5fb06c820effbdbb77a546302aceb.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9874/2/720/d0adf73700904dbce82231fa9e88d82e.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9874/2/1080/eca00698e694f5ee512b5d0c52d8234e.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1436,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-13T15:37:03+00:00',
      sort_order: 2,
      name_english: null,
    },
  },
  {
    id: 9855,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Синий Экзорцист: Вся ночь',
      english: 'Ao no Exorcist: Yosuga-hen',
      alternative: null,
    },
    alias: 'ao-no-exorcist-yosuga-hen',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9855/nVi1fUbqlXcKMuo8PaxYInPeF63QM4Ux.jpg',
      thumbnail: '/storage/releases/posters/9855/II2g49vaR98Duq1YxWudEpMVIyFR3ozf.jpg',
      optimized: {
        src: '/storage/releases/posters/9855/RXxOynfVaEnqiiNG8N5QpP1FS0JZ9WXv.webp',
        thumbnail: '/storage/releases/posters/9855/8rRMIbkXdBIoFI1iL0tbsbQPLVDa78cE.webp',
      },
    },
    fresh_at: '2025-01-13T12:30:24+00:00',
    created_at: '2024-11-20T15:43:28+00:00',
    updated_at: '2025-01-13T14:37:37+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 3,
      description: 'Среда',
    },
    description:
      'Братья Окумура оказались по разные стороны баррикад. Юкио всё-таки поддался искушению Люцифера: в погоне за силой и шансом раскрыть возможности своих глаз, он предал Орден и вступил в Иллюминаты.\r\nК тому же, как оказалось, у Мориямы Сиэми тоже есть свои секреты — её неожиданно прямо из больницы забирают Григори и увозят к себе в Ватикан.\r\nКусочки пазла потихоньку начинают вставать на свои места, а это значит, что пора раскрыть самую главную тайну — что же произошло в ту самую Синюю ночь? Чтобы найти ответ на этот вопрос, Рину придётся с головой окунуться в далёкое-далёкое прошлое.',
    notification: null,
    episodes_total: null,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: true,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 1774,
    average_duration_of_episode: null,
    genres: [
      {
        id: 4,
        name: 'Сёнен',
        image: {
          preview: '/storage/anime/genres/images/4/0m2m6ZJvFDf4exm6fTohtHwo8PoEqzIX.jpg',
          thumbnail: '/storage/anime/genres/images/4/UD4NKYAngvBtHS2hkcPUNQ9iKBFcotVi.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/4/f1t40ahbG7mzcmZfhxlVdkC0DtY2vOQ9.webp',
            thumbnail: '/storage/anime/genres/images/4/SVJm7UTSTS3flVrQttsOD1d3iUoRp00B.webp',
          },
        },
        total_releases: 289,
      },
      {
        id: 28,
        name: 'Сверхъестественное',
        image: {
          preview: '/storage/anime/genres/images/28/pUwDuFHdJkJpibQwKoROuz99Ayg0MV2t.jpg',
          thumbnail: '/storage/anime/genres/images/28/OOnUfzM433g7kC6Guz4uohiBCPeENqQx.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/28/m0P5nQwrDSKuvXrLnutlKqhweVc1MLXN.webp',
            thumbnail: '/storage/anime/genres/images/28/7zjjRP4Cu91AdJDp9cdUEA7Au3fVrAfv.webp',
          },
        },
        total_releases: 301,
      },
      {
        id: 7,
        name: 'Школа',
        image: {
          preview: '/storage/anime/genres/images/7/LRSTYD3YNqQiGfAbE0Dye5FNVJMBY2ih.jpg',
          thumbnail: '/storage/anime/genres/images/7/UMsCXNUT2PakaYm7bB3W9H7p6Wp5w4bt.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/7/wCSSNPj1KFzJXkvO75DoBE6f1Ub4KebO.webp',
            thumbnail: '/storage/anime/genres/images/7/94FrNkc6i8GZvXSaN5UMDJeZQPUEjaeA.webp',
          },
        },
        total_releases: 330,
      },
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
    ],
    latest_episode: {
      id: '9df551fd-94a6-43cb-8b85-43325a55fc69',
      name: 'Правда',
      ordinal: 2,
      opening: {
        stop: 190,
        start: 101,
      },
      ending: {
        stop: 1414,
        start: 1325,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9855/2/740CIlscJlsCqw6W.jpg',
        thumbnail: '/storage/releases/episodes/previews/9855/2/740CIlscJlsCqw6W__bcc723c237842147236cd1c569dd674b.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9855/2/740CIlscJlsCqw6W__5a5da9607c958ed4fd84495b0c718c5c.webp',
          thumbnail: '/storage/releases/episodes/previews/9855/2/740CIlscJlsCqw6W__f512c8f57b85663236d86e56d8a17be9.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9855/2/480/67d8da36cc04d42177b7cdc2589d4dfb.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9855/2/720/3e6251fcde602dd486b151c0419faa1e.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9855/2/1080/3b4c51896723043fb46f1b80109b0725.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1420,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-13T12:34:51+00:00',
      sort_order: 2,
      name_english: null,
    },
  },
  {
    id: 9787,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2024,
    name: {
      main: 'Рубеж Шангри-Ла: Любитель игрошлака бросает вызов топ-игре 2',
      english: 'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su 2nd Season',
      alternative: null,
    },
    alias: 'shangri-la-frontier-kusoge-hunter-kamige-ni-idoman-to-su-2nd-season',
    season: {
      value: 'autumn',
      description: 'Осень',
    },
    poster: {
      src: '/storage/releases/posters/9787/Gjamhk2MIJgoJaraY3pQhZiwsPfZocQu.jpg',
      thumbnail: '/storage/releases/posters/9787/vaJy8ozmJWr5y606C6r3kieQfZtUlz81.jpg',
      optimized: {
        src: '/storage/releases/posters/9787/Th7qfWTBpXv2GOz4PlaQY8XyZDl1qO5R.webp',
        thumbnail: '/storage/releases/posters/9787/lE7y8kNj1XTCy3VsLmplHEnMbQ0SXSLV.webp',
      },
    },
    fresh_at: '2025-01-13T11:54:37+00:00',
    created_at: '2024-09-12T06:53:27+00:00',
    updated_at: '2025-01-13T15:47:08+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 1,
      description: 'Понедельник',
    },
    description:
      'Мечты об ММО с полным погружением всегда занимали умы геймеров. Красивые миры, где можно найти всё, что угодно и делать всё, что вздумается, будоражат воображение как простых отаку, так и любителей устроить себе нереальный челлендж. Рубеж Шангри-Ла, новая VR игра, стала настоящим апогеем этой мечты. А что касается новоявленной гильдии "Волчья стая", которую создали трое хардкорных игроков после победы над Уэзермоном, то эти ребята всего-то решили победить семь колоссов — семерых уникальных боссов, сильнейших во всей игре, убийство которых напрямую влияет на ход игровой истории.  Это вам не какой-то там дарк соулс на бананах пройти, тут всё куда круче...',
    notification: null,
    episodes_total: 25,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: false,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 11654,
    average_duration_of_episode: null,
    genres: [
      {
        id: 4,
        name: 'Сёнен',
        image: {
          preview: '/storage/anime/genres/images/4/0m2m6ZJvFDf4exm6fTohtHwo8PoEqzIX.jpg',
          thumbnail: '/storage/anime/genres/images/4/UD4NKYAngvBtHS2hkcPUNQ9iKBFcotVi.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/4/f1t40ahbG7mzcmZfhxlVdkC0DtY2vOQ9.webp',
            thumbnail: '/storage/anime/genres/images/4/SVJm7UTSTS3flVrQttsOD1d3iUoRp00B.webp',
          },
        },
        total_releases: 289,
      },
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
      {
        id: 27,
        name: 'Приключения',
        image: {
          preview: '/storage/anime/genres/images/27/bcU7byqneZPf1E3qj3g94enAUtoRUr9A.jpg',
          thumbnail: '/storage/anime/genres/images/27/dkzAZJGJI45REJTjVMNAJXNi4wHo0AOS.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/27/z4kgvrZz4JSSy0G1EtWBDSH1SA76Aex1.webp',
            thumbnail: '/storage/anime/genres/images/27/lEZNqdhonXq9BAejItNKgPTv1XLFbwdD.webp',
          },
        },
        total_releases: 443,
      },
      {
        id: 29,
        name: 'Фэнтези',
        image: {
          preview: '/storage/anime/genres/images/29/BqPfwYPC7STQ0lsv6LsdyDm594Tnz2N5.jpg',
          thumbnail: '/storage/anime/genres/images/29/bkKObn59vWFAd8wcAPINJnI8EZLZB8gH.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/29/BayKuKbzHQkKMlfFyUTZAoExCjqkHDfh.webp',
            thumbnail: '/storage/anime/genres/images/29/yVUCPUfGguBeZ280YyS5UhawlR3F1fS0.webp',
          },
        },
        total_releases: 580,
      },
    ],
    latest_episode: {
      id: '9df54aff-42f1-41e9-9733-e4bd3e6bbc2a',
      name: 'Прими свет амбиций, часть 4',
      ordinal: 14,
      opening: {
        stop: 184,
        start: 98,
      },
      ending: {
        stop: 1421,
        start: 1333,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9787/14/bB6pgJXIhLpN4yNm.jpg',
        thumbnail: '/storage/releases/episodes/previews/9787/14/bB6pgJXIhLpN4yNm__45d544471e08c42e75ac048c80e03bd4.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9787/14/bB6pgJXIhLpN4yNm__46ab19b8d4f976d0f7c5e909b8bf8470.webp',
          thumbnail: '/storage/releases/episodes/previews/9787/14/bB6pgJXIhLpN4yNm__207575cea3e91dc4788e6e7cc4437f66.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9787/14/480/69d3208596c91ea9395787cffe56accc.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9787/14/720/8d815881a34e8200369a8e42cd7bb105.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9787/14/1080/4edc67d8b2c1a79d973f372337105859.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1422,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-13T12:07:17+00:00',
      sort_order: 14,
      name_english: null,
    },
  },
  {
    id: 9853,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Клинок зла',
      english: 'Übel Blatt',
      alternative: null,
    },
    alias: 'ubel-blatt',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9853/e10FAl4m1L9zpwK1lRfkfNcMbfBG6aN9.jpg',
      thumbnail: '/storage/releases/posters/9853/LOs7qyizWJhe6MjGBc4nDZHt4tr3DgCM.jpg',
      optimized: {
        src: '/storage/releases/posters/9853/WOsdB2dW1omE8DguO4YRvtzW6VrR7eBt.webp',
        thumbnail: '/storage/releases/posters/9853/Op1QhlqMFoNoOUG4WMAt0jf9KBl4YSJm.webp',
      },
    },
    fresh_at: '2025-01-13T07:36:18+00:00',
    created_at: '2024-11-20T15:42:05+00:00',
    updated_at: '2025-01-14T06:18:21+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 1,
      description: 'Понедельник',
    },
    description:
      'Из четырнадцати сильнейших воинов Империи, отправленных на борьбу с силами зла, трое пали, четверо обратились во тьму, а оставшиеся семеро вернулись домой и принесли с собой годы мира и спокойствия.\r\nНо, как известно, мир не может длиться вечно. Империя находится на пороге новой войны, и, по слухам, на этот раз в бой людей ведут те самые четверо предателей, считавшиеся давным давно погибшими.\r\nБлаго, вместе с великим бедствием должен прийти и великий спаситель — искусный мастер меча, который своим клинком цвета ночи проложит путь к светлому будущему. Ну или, по крайней мере, так гласит пророчество. Только людям следует помнить, что иногда добро на своём пути оставляет не меньше трупов, чем самое отъявленное зло.',
    notification: null,
    episodes_total: null,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: true,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 3201,
    average_duration_of_episode: null,
    genres: [
      {
        id: 5,
        name: 'Сейнен',
        image: {
          preview: '/storage/anime/genres/images/5/ekFrF3Puccsi75ngq0fzd4fUbnXiGCnn.jpg',
          thumbnail: '/storage/anime/genres/images/5/CfIxntJmgBabUiBQChxB0WZHdSF5L87K.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/5/sTleU4eW0CiqDIiiyRniPJIQlB8HZagG.webp',
            thumbnail: '/storage/anime/genres/images/5/RsbTRZ6lb0zhLCP033o9PEmsFRwVqLp5.webp',
          },
        },
        total_releases: 170,
      },
      {
        id: 27,
        name: 'Приключения',
        image: {
          preview: '/storage/anime/genres/images/27/bcU7byqneZPf1E3qj3g94enAUtoRUr9A.jpg',
          thumbnail: '/storage/anime/genres/images/27/dkzAZJGJI45REJTjVMNAJXNi4wHo0AOS.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/27/z4kgvrZz4JSSy0G1EtWBDSH1SA76Aex1.webp',
            thumbnail: '/storage/anime/genres/images/27/lEZNqdhonXq9BAejItNKgPTv1XLFbwdD.webp',
          },
        },
        total_releases: 443,
      },
      {
        id: 29,
        name: 'Фэнтези',
        image: {
          preview: '/storage/anime/genres/images/29/BqPfwYPC7STQ0lsv6LsdyDm594Tnz2N5.jpg',
          thumbnail: '/storage/anime/genres/images/29/bkKObn59vWFAd8wcAPINJnI8EZLZB8gH.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/29/BayKuKbzHQkKMlfFyUTZAoExCjqkHDfh.webp',
            thumbnail: '/storage/anime/genres/images/29/yVUCPUfGguBeZ280YyS5UhawlR3F1fS0.webp',
          },
        },
        total_releases: 580,
      },
      {
        id: 23,
        name: 'Этти',
        image: {
          preview: '/storage/anime/genres/images/23/sN8Pat7owH9QKofX4rOHDCt7S8UHie7k.jpg',
          thumbnail: '/storage/anime/genres/images/23/dryNWhLJnAcbGiFZ28wVje72nUBfSYi7.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/23/58oLT8koX09KAKrhx1SBo8ZCNa3nlY79.webp',
            thumbnail: '/storage/anime/genres/images/23/FF93LIaHHqAdK6JIyDzdPQyf3Q4L7JOu.webp',
          },
        },
        total_releases: 126,
      },
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
    ],
    latest_episode: {
      id: '9df4dde1-655c-45f9-b92a-6267c25dcb2c',
      name: 'Прорыв',
      ordinal: 1,
      opening: {
        stop: 174,
        start: 85,
      },
      ending: {
        stop: 1404,
        start: 1315,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9853/1/51flNkj4AN0fjGcn.jpg',
        thumbnail: '/storage/releases/episodes/previews/9853/1/51flNkj4AN0fjGcn__af222086e68b49662303cad0ece941e1.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9853/1/51flNkj4AN0fjGcn__56fb95e6c7cc8876f126c372f72db8aa.webp',
          thumbnail: '/storage/releases/episodes/previews/9853/1/51flNkj4AN0fjGcn__edd4bdbc40839b38cae7cb3fa3facbbd.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9853/1/480/eb0b9fefd0ac0a188489f9379c1f1585.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9853/1/720/5aa3e6cb6e349b1e139fca03840ba3eb.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9853/1/1080/047f6151441f7a719206b8c06a368a7f.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1421,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-14T07:20:46+00:00',
      sort_order: 1,
      name_english: null,
    },
  },
  {
    id: 9801,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2024,
    name: {
      main: 'Бродяга Кэншин: Беспорядки в Киото',
      english: 'Rurouni Kenshin: Meiji Kenkaku Romantan - Kyoto Douran',
      alternative: null,
    },
    alias: 'rurouni-kenshin-meiji-kenkaku-romantan-kyoto-douran',
    season: {
      value: 'autumn',
      description: 'Осень',
    },
    poster: {
      src: '/storage/releases/posters/9801/FWoqT4Eo5MmV5ZQ2aaVtI02gnMTjorRZ.jpg',
      thumbnail: '/storage/releases/posters/9801/sIuRrxRgvtT2XCrRLFuTB88XOF8kJI4T.jpg',
      optimized: {
        src: '/storage/releases/posters/9801/GSxce8CfR2SA1NDCtfuI1pV9USrIzht5.webp',
        thumbnail: '/storage/releases/posters/9801/aZshmwcva4Rx54T1vpf10Qen54O5xXWj.webp',
      },
    },
    fresh_at: '2025-01-12T21:56:23+00:00',
    created_at: '2024-09-12T07:36:32+00:00',
    updated_at: '2025-01-13T11:23:58+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 6,
      description: 'Суббота',
    },
    description:
      'За время, проведённое в додзё Камия, Кеншин повстречал множество людей, и у всех них была своя неповторимая история — зачастую довольно трагичная.\r\nКаждая новая привязанность толкала его на мысль, что имя Хитокири Баттосая притягивает к себе слишком много бед. Решив для себя, что его присутствие навлекает угрозу на близких, Кеншин покидает додзё, чтобы продолжить странствовать и разобраться с главной угрозой в лице Макото Шишио. Но друзья не могут так просто его отпустить, и направляются следом за ним. А что же их поджидает в Киото, это ещё только предстоит узнать!',
    notification: null,
    episodes_total: 23,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: true,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 3380,
    average_duration_of_episode: 25,
    genres: [
      {
        id: 4,
        name: 'Сёнен',
        image: {
          preview: '/storage/anime/genres/images/4/0m2m6ZJvFDf4exm6fTohtHwo8PoEqzIX.jpg',
          thumbnail: '/storage/anime/genres/images/4/UD4NKYAngvBtHS2hkcPUNQ9iKBFcotVi.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/4/f1t40ahbG7mzcmZfhxlVdkC0DtY2vOQ9.webp',
            thumbnail: '/storage/anime/genres/images/4/SVJm7UTSTS3flVrQttsOD1d3iUoRp00B.webp',
          },
        },
        total_releases: 289,
      },
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
      {
        id: 26,
        name: 'Исторический',
        image: {
          preview: '/storage/anime/genres/images/26/lkX06fFnPHXl7H3GCuYwqtLCPDWvoEcu.jpg',
          thumbnail: '/storage/anime/genres/images/26/WFR11q1ZIYPRRZ0yx61pZgWgnqvqkPyV.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/26/rU3zWwD9jZyQHqXhE0qOEyd9mDnT5K9x.webp',
            thumbnail: '/storage/anime/genres/images/26/FVN9zAt3JC74IXtGVWobFDmZhwpYdc6l.webp',
          },
        },
        total_releases: 85,
      },
    ],
    latest_episode: {
      id: '9df417e0-0dbf-41f3-8dd1-9f7adef00e1b',
      name: null,
      ordinal: 13,
      opening: {
        stop: 226,
        start: 136,
      },
      ending: {
        stop: 1365,
        start: 1275,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9801/13/rJZSciJ4xSQ0qeTN.jpg',
        thumbnail: '/storage/releases/episodes/previews/9801/13/rJZSciJ4xSQ0qeTN__7d2c256a0337c05f9e710231f1a16ca7.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9801/13/rJZSciJ4xSQ0qeTN__8cd735e5fc736d59c5f3f3de3723caf5.webp',
          thumbnail: '/storage/releases/episodes/previews/9801/13/rJZSciJ4xSQ0qeTN__551afd994887dc696af0ad86a24b1b67.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9801/13/480/3069f2a9b9ab73f5e82cc4e4508323d9.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9801/13/720/bc0aee8081556a61306b5939642598df.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9801/13/1080/e38c3f93f325455fbae4de7b59346fc6.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1370,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-13T06:46:50+00:00',
      sort_order: 13,
      name_english: null,
    },
  },
  {
    id: 9838,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2013,
    name: {
      main: 'Не моя вина, что я не популярна!',
      english: 'Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!',
      alternative: 'WataMote',
    },
    alias: 'watashi-ga-motenai-no-wa-dou-kangaetemo-omaera-ga-warui',
    season: {
      value: 'summer',
      description: 'Лето',
    },
    poster: {
      src: '/storage/releases/posters/9838/dmVL9oQFmt7E52ZBpaHd90THqpBbL3AA.jpg',
      thumbnail: '/storage/releases/posters/9838/1BSZZldwVWavUOfuNbBT960vGCHQmSvw.jpg',
      optimized: {
        src: '/storage/releases/posters/9838/5ZIMxr8UH0AkclFrNQ9GxHGcgwjiyPIg.webp',
        thumbnail: '/storage/releases/posters/9838/BCDEBcESKjgYaZASMwRgCMKb1yLIMH6S.webp',
      },
    },
    fresh_at: '2025-01-12T19:47:59+00:00',
    created_at: '2024-11-17T09:22:53+00:00',
    updated_at: '2025-01-13T07:09:51+00:00',
    is_ongoing: false,
    age_rating: {
      value: 'R12_PLUS',
      label: '12+',
      is_adult: false,
      description: 'Для детей, достигших возраста двенадцати лет (12+)',
    },
    publish_day: {
      value: 7,
      description: 'Воскресенье',
    },
    description:
      'Прожив 50 симулированных жизней старшеклассницы и встретившись с более чем сотней виртуальных парней, Томоко Куроки уверена, что готова покорить свой первый год в старшей школе. Но она и не подозревает, как сильно ошибается. В действительности же, Томоко — замкнутая и неловкая девушка, и только она сама этого не замечает! Вместе со своей лучшей подруги Ю Нарусэ, а также при поддержке и любви своего брата Томоки, Томоко пытается отважиться войти в новый мир школьной жизни.\r\n\r\n«WataMote» повествует о жизни социально неловкой и почти бездружной школьницы-отаку, которая стремится преодолеть свои личные барьеры, чтобы начать жить полной жизнью.',
    notification: null,
    episodes_total: 12,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: true,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 2455,
    average_duration_of_episode: 24,
    genres: [
      {
        id: 7,
        name: 'Школа',
        image: {
          preview: '/storage/anime/genres/images/7/LRSTYD3YNqQiGfAbE0Dye5FNVJMBY2ih.jpg',
          thumbnail: '/storage/anime/genres/images/7/UMsCXNUT2PakaYm7bB3W9H7p6Wp5w4bt.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/7/wCSSNPj1KFzJXkvO75DoBE6f1Ub4KebO.webp',
            thumbnail: '/storage/anime/genres/images/7/94FrNkc6i8GZvXSaN5UMDJeZQPUEjaeA.webp',
          },
        },
        total_releases: 330,
      },
      {
        id: 1,
        name: 'Комедия',
        image: {
          preview: '/storage/anime/genres/images/1/U1sFaXCMz3PE7nxORf5D8qhN0tX2reqW.jpg',
          thumbnail: '/storage/anime/genres/images/1/QBNpOye0tk9DVySvQN1wz9j3iZdZhvZp.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/1/2jgEuWgDWkIK1ucumMsWv1EzGy5jOT5j.webp',
            thumbnail: '/storage/anime/genres/images/1/2HNoBbkhXvWQwzF4WyYZwc6bMdaeRy47.webp',
          },
        },
        total_releases: 648,
      },
    ],
    latest_episode: {
      id: '9df3dca3-2f54-4722-83ce-5a95a4837b96',
      name: 'Раз я непопулярная, то напущу вид',
      ordinal: 8,
      opening: {
        stop: 189,
        start: 101,
      },
      ending: {
        stop: 1415,
        start: 1325,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9838/8/i9g8CK9oL66hCDmD.jpg',
        thumbnail: '/storage/releases/episodes/previews/9838/8/i9g8CK9oL66hCDmD__a1b5d714432f1ff88b01a3e3ef6aecc4.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9838/8/i9g8CK9oL66hCDmD__7cefa753c9a4e6a5c0e398870c71b36c.webp',
          thumbnail: '/storage/releases/episodes/previews/9838/8/i9g8CK9oL66hCDmD__2e659d75cea8c9ca6a8b18783e5c6f5c.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9838/8/480/8cd830ee2c47bff8ddea312464f536e8.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9838/8/720/9c29af0f40fdc5a34c5d2bcd87c74b55.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9838/8/1080/95db0e885bd37ceca4e9d73d1d032a0b.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1430,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-12T19:54:00+00:00',
      sort_order: 8,
      name_english: null,
    },
  },
  {
    id: 9886,
    type: {
      value: 'TV',
      description: 'ТВ',
    },
    year: 2025,
    name: {
      main: 'Дни Сакамото',
      english: 'Sakamoto Days',
      alternative: null,
    },
    alias: 'sakamoto-days',
    season: {
      value: 'winter',
      description: 'Зима',
    },
    poster: {
      src: '/storage/releases/posters/9886/DSEsJcMrRY8UXZ5hjGx4wvEyCF9TpIpA.jpg',
      thumbnail: '/storage/releases/posters/9886/LuEQ4LYmfrfIWpyWFbF0VhQHVjSOebqU.jpg',
      optimized: {
        src: '/storage/releases/posters/9886/m5rD6TDq7CG5qKCb6wRQug6hKCbMh9UU.webp',
        thumbnail: '/storage/releases/posters/9886/RDYo1T3Na3qjqs1wrm8Rs9LE4Fmbfkxm.webp',
      },
    },
    fresh_at: '2025-01-12T18:31:44+00:00',
    created_at: '2024-11-20T16:25:09+00:00',
    updated_at: '2025-01-12T19:51:42+00:00',
    is_ongoing: true,
    age_rating: {
      value: 'R16_PLUS',
      label: '16+',
      is_adult: false,
      description: 'Для людей, достигших возраста шестнадцати лет (16+)',
    },
    publish_day: {
      value: 7,
      description: 'Воскресенье',
    },
    description:
      'Когда-то Таро Сакамото был прославленным киллером, многими считавшимся лучшим в своём деле. Бандиты трепетали перед ним в животном страхе, коллеги убийцы его буквально боготворили, ну а силовики кусали свои локти и ничего не могли с ним поделать.\r\nНо в какой-то момент он неожиданно пропал с радаров. Как оказалось, он ушёл из криминала, женился, завёл себе ребёнка, и теперь он управляет небольшим магазинчиком. В общем, живёт тихой и спокойной жизнью простого законопослушного гражданина.\r\nНо, как известно, преступников на пенсии не бывает. Как бы он не пытался завязать с криминальным прошлым, оно уже скоро снова его догонит...',
    notification: null,
    episodes_total: 11,
    external_player: null,
    is_in_production: true,
    is_blocked_by_geo: false,
    episodes_are_unknown: false,
    is_blocked_by_copyrights: false,
    added_in_users_favorites: 4948,
    average_duration_of_episode: 25,
    genres: [
      {
        id: 4,
        name: 'Сёнен',
        image: {
          preview: '/storage/anime/genres/images/4/0m2m6ZJvFDf4exm6fTohtHwo8PoEqzIX.jpg',
          thumbnail: '/storage/anime/genres/images/4/UD4NKYAngvBtHS2hkcPUNQ9iKBFcotVi.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/4/f1t40ahbG7mzcmZfhxlVdkC0DtY2vOQ9.webp',
            thumbnail: '/storage/anime/genres/images/4/SVJm7UTSTS3flVrQttsOD1d3iUoRp00B.webp',
          },
        },
        total_releases: 289,
      },
      {
        id: 14,
        name: 'Экшен',
        image: {
          preview: '/storage/anime/genres/images/14/HVxcEvm7oA6JQvnMKKgSdYJ90ab8Zoco.jpg',
          thumbnail: '/storage/anime/genres/images/14/7JeDltmth6vVUs1bG4OHq6ywRYVjbYoY.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/14/FNZP4gLtDFe67Ynbthc08wRsTp5q94sx.webp',
            thumbnail: '/storage/anime/genres/images/14/gfzjNkJYPgeaIyQxXveaP5UblbQWadEF.webp',
          },
        },
        total_releases: 649,
      },
      {
        id: 1,
        name: 'Комедия',
        image: {
          preview: '/storage/anime/genres/images/1/U1sFaXCMz3PE7nxORf5D8qhN0tX2reqW.jpg',
          thumbnail: '/storage/anime/genres/images/1/QBNpOye0tk9DVySvQN1wz9j3iZdZhvZp.jpg',
          optimized: {
            preview: '/storage/anime/genres/images/1/2jgEuWgDWkIK1ucumMsWv1EzGy5jOT5j.webp',
            thumbnail: '/storage/anime/genres/images/1/2HNoBbkhXvWQwzF4WyYZwc6bMdaeRy47.webp',
          },
        },
        total_releases: 648,
      },
    ],
    latest_episode: {
      id: '9df3d75b-c8b0-4fa2-b0dd-325efe3a3c84',
      name: 'Противостояние. Бачо и Сон Хи',
      ordinal: 2,
      opening: {
        stop: 102,
        start: 13,
      },
      ending: {
        stop: 1314,
        start: 1224,
      },
      preview: {
        src: '/storage/releases/episodes/previews/9886/2/X8I4KFAugn2KekLI.jpg',
        thumbnail: '/storage/releases/episodes/previews/9886/2/X8I4KFAugn2KekLI__7b059673b682cc00d2a39bd22e300b72.jpg',
        optimized: {
          src: '/storage/releases/episodes/previews/9886/2/X8I4KFAugn2KekLI__57ac6ab48428c64e1de2f0acf6970091.webp',
          thumbnail: '/storage/releases/episodes/previews/9886/2/X8I4KFAugn2KekLI__675cf2d4807ccfe1998b2fb3b3b9fbaf.webp',
        },
      },
      hls_480: 'https://cache-rfn.libria.fun/videos/media/ts/9886/2/480/f6624e7a5ea9fcc586d2d61e7893066c.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_720: 'https://cache-rfn.libria.fun/videos/media/ts/9886/2/720/411550c2d9730109af52b8eadbb36d8d.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      hls_1080: 'https://cache-rfn.libria.fun/videos/media/ts/9886/2/1080/a2bbcdb374ae70010a076ccf97adc8e3.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0',
      duration: 1426,
      rutube_id: null,
      youtube_id: null,
      updated_at: '2025-01-12T19:37:29+00:00',
      sort_order: 2,
      name_english: null,
    },
  },
]
