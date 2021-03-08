module.exports = {
  images: {
    domains: ["okenglish.eu", "i.ytimg.com"],
  },
  async rewrites() {
    return [
      {
        source: "/biblioteka",
        destination: "https://okenglish.eu/biblioteka/",
      },
      {
        source: "/biblioteka/:slug",
        destination: "https://okenglish.eu/biblioteka/:slug/",
      },
      {
        source: "/blog",
        destination: "https://okenglish.eu/blog/",
      },
      {
        source: "/bootcamp",
        destination: "https://okenglish.eu/bootcamp/",
      },
      {
        source: "/challenge",
        destination: "https://okenglish.eu/challenge/",
      },
      {
        source: "/kontakt",
        destination: "https://okenglish.eu/kontakt/",
      },
      {
        source: "/lekcje-angielskiego-z-native-speakerem",
        destination:
          "https://okenglish.eu/lekcje-angielskiego-z-native-speakerem/",
      },
      {
        source: "/lekcje-jezyka-angielskiego-online",
        destination: "https://okenglish.eu/lekcje-jezyka-angielskiego-online/",
      },
      {
        source: "/o-mnie",
        destination: "https://okenglish.eu/o-mnie/",
      },
      {
        source: "/polityka-prywatnosci",
        destination: "https://okenglish.eu/polityka-prywatnosci/",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/jak-sie-witac-po-angielsku",
        destination: "/blog/jak-sie-witac-po-angielsku",
        permanent: true,
      },
      {
        source: "/nauka-angielskiego-przez-internet",
        destination: "/blog/nauka-angielskiego-przez-internet",
        permanent: true,
      },
      {
        source: "/nauka-angielskiego-kiedy-jest-za-pozno",
        destination: "/blog/nauka-angielskiego-kiedy-jest-za-pozno",
        permanent: true,
      },
      {
        source: "/ucz-sie-angielskiego-dzieki-czterem-umiejetnosciom",
        destination: "/blog/ucz-sie-angielskiego-dzieki-czterem-umiejetnosciom",
        permanent: true,
      },
      {
        source: "/nauka-angielskiego-podcasty",
        destination: "/blog/nauka-angielskiego-podcasty",
        permanent: true,
      },
      {
        source: "/seriale-nauka-angielskiego",
        destination: "/blog/seriale-nauka-angielskiego",
        permanent: true,
      },
      {
        source: "/jak-uczyc-sie-jezyka-angielskiego-z-filmow",
        destination: "/blog/jak-uczyc-sie-jezyka-angielskiego-z-filmow",
        permanent: true,
      },
      {
        source: "/nauka-angielskiego-na-wiosne",
        destination: "/blog/nauka-angielskiego-na-wiosne",
        permanent: true,
      },
      {
        source: "/nauka-angielskiego-przed-wakacjami",
        destination: "/blog/nauka-angielskiego-przed-wakacjami",
        permanent: true,
      },
      {
        source: "/jak-zaczac-nauke-jezyka-angielskiego",
        destination: "/blog/jak-zaczac-nauke-jezyka-angielskiego",
        permanent: true,
      },
      {
        source: "/dzien-matki-wielka-brytania",
        destination: "/blog/dzien-matki-wielka-brytania",
        permanent: true,
      },
      {
        source: "/powody-dla-ktorych-warto-uczyc-sie-jezyka-angielskiego",
        destination:
          "/blog/powody-dla-ktorych-warto-uczyc-sie-jezyka-angielskiego",
        permanent: true,
      },
      {
        source: "/angielskie-wyrazenia-zainspirowane-wiosna-i-latem",
        destination: "/blog/angielskie-wyrazenia-zainspirowane-wiosna-i-latem",
        permanent: true,
      },
      {
        source: "/bank-holiday-anglia",
        destination: "/blog/bank-holiday-anglia",
        permanent: true,
      },
      {
        source: "/kwietniowe-inspiracje",
        destination: "/blog/kwietniowe-inspiracje",
        permanent: true,
      },
      {
        source: "/dlaczego-ciezko-jest-ci-mowic-po-angielsku-pomimo-nauki",
        destination:
          "/blog/dlaczego-ciezko-jest-ci-mowic-po-angielsku-pomimo-nauki",
        permanent: true,
      },
      {
        source: "/jak-cwiczyc-angielski-wakacje-za-granica",
        destination: "/blog/jak-cwiczyc-angielski-wakacje-za-granica",
        permanent: true,
      },
      {
        source: "/jak-nawiazac-przyjaznie-podczas-wakacji-za-granica",
        destination: "/blog/jak-nawiazac-przyjaznie-podczas-wakacji-za-granica",
        permanent: true,
      },
      {
        source: "/majowe-inspiracje",
        destination: "/blog/majowe-inspiracje",
        permanent: true,
      },
      {
        source: "/jak-nie-zwiedzac-jak-turysta",
        destination: "/blog/jak-nie-zwiedzac-jak-turysta",
        permanent: true,
      },
      {
        source: "/ucz-sie-przyjemniej-przydatne-linki-z-czerwca",
        destination: "/blog/ucz-sie-przyjemniej-przydatne-linki-z-czerwca",
        permanent: true,
      },
      {
        source: "/jak-nauka-tajskiego-pozwala-mi-byc-lepsza-nauczycielka",
        destination:
          "/blog/jak-nauka-tajskiego-pozwala-mi-byc-lepsza-nauczycielka",
        permanent: true,
      },
      {
        source: "/miedzynarodowa-konferencja-jak-sie-przygotowac",
        destination: "/blog/miedzynarodowa-konferencja-jak-sie-przygotowac",
        permanent: true,
      },
      {
        source:
          "/najczesciej-popelniane-bledy-przez-polakow-rodzajniki-a-an-the",
        destination:
          "/blog/najczesciej-popelniane-bledy-przez-polakow-rodzajniki-a-an-the",
        permanent: true,
      },
      {
        source: "/najczesciej-popelniane-bledy-przez-polakow-listen-oraz-hear",
        destination:
          "/blog/najczesciej-popelniane-bledy-przez-polakow-listen-oraz-hear",
        permanent: true,
      },
      {
        source: "/business-english-angielski-dla-przedsiebiorcow",
        destination: "/blog/business-english-angielski-dla-przedsiebiorcow",
        permanent: true,
      },
      {
        source: "/cyfrowy-nomada-jezyk-angielski",
        destination: "/blog/cyfrowy-nomada-jezyk-angielski",
        permanent: true,
      },
      {
        source: "/strach-przed-konwersacja-po-angielsku-jak-walczyc",
        destination: "/blog/strach-przed-konwersacja-po-angielsku-jak-walczyc",
        permanent: true,
      },
      {
        source: "/brytyjski-slang",
        destination: "/blog/brytyjski-slang",
        permanent: true,
      },
      {
        source: "/jak-nauczylam-sie-mowic-po-angielsku",
        destination: "/blog/jak-nauczylam-sie-mowic-po-angielsku",
        permanent: true,
      },
      {
        source: "/6-podstaw-udanej-konwersacji",
        destination: "/blog/6-podstaw-udanej-konwersacji",
        permanent: true,
      },
      {
        source: "/ksiazki-po-angielsku",
        destination: "/blog/ksiazki-po-angielsku",
        permanent: true,
      },
      {
        source: "/small-talk-po-angielsku-tematy-rozmow-pytania-i-duzo-wiecej",
        destination:
          "/blog/small-talk-po-angielsku-tematy-rozmow-pytania-i-duzo-wiecej",
        permanent: true,
      },
      {
        source: "/jak-zaczac-konwersacje-po-angielsku",
        destination: "/blog/jak-zaczac-konwersacje-po-angielsku",
        permanent: true,
      },
      {
        source: "/dlaczego-warto-czytac-po-angielsku",
        destination: "/blog/dlaczego-warto-czytac-po-angielsku",
        permanent: true,
      },
      {
        source: "/skad-brac-tanie-ksiazki-po-angielsku",
        destination: "/blog/skad-brac-tanie-ksiazki-po-angielsku",
        permanent: true,
      },
      {
        source: "/jak-czytac-po-angielsku",
        destination: "/blog/jak-czytac-po-angielsku",
        permanent: true,
      },
      {
        source: "/angielskie-slowka-jesien",
        destination: "/blog/angielskie-slowka-jesien",
        permanent: true,
      },
      {
        source: "/halloween-slowka",
        destination: "/blog/halloween-slowka",
        permanent: true,
      },
      {
        source: "/dialog-halloween",
        destination: "/blog/dialog-halloween",
        permanent: true,
      },
      {
        source: "/dlaczego-warto-cwiczyc-rozumienie-ze-sluchu",
        destination: "/blog/dlaczego-warto-cwiczyc-rozumienie-ze-sluchu",
        permanent: true,
      },
      {
        source: "/sluchanie-pasywne-aktywne-jezyk-angielski",
        destination: "/blog/sluchanie-pasywne-aktywne-jezyk-angielski",
        permanent: true,
      },
      {
        source: "/angielskie-wyrazenia-zima",
        destination: "/blog/angielskie-wyrazenia-zima",
        permanent: true,
      },
      {
        source: "/past-simple-present-perfect",
        destination: "/blog/past-simple-present-perfect",
        permanent: true,
      },
      {
        source: "/karta-swiateczna-po-angielsku-jak-napisac",
        destination: "/blog/karta-swiateczna-po-angielsku-jak-napisac",
        permanent: true,
      },
      {
        source: "/swieta-w-anglii-tradycje-i-zwyczaje",
        destination: "/blog/swieta-w-anglii-tradycje-i-zwyczaje",
        permanent: true,
      },
      {
        source: "/swiateczne-wyrazenia-i-slowka",
        destination: "/blog/swiateczne-wyrazenia-i-slowka",
        permanent: true,
      },
      {
        source: "/cwiczenie-rozumienia-ze-sluchu-metody",
        destination: "/blog/cwiczenie-rozumienia-ze-sluchu-metody",
        permanent: true,
      },
      {
        source: "/nauka-angielskiego-motywacja",
        destination: "/blog/nauka-angielskiego-motywacja",
        permanent: true,
      },
      {
        source: "/postanowienie-noworoczne-angielski",
        destination: "/blog/postanowienie-noworoczne-angielski",
        permanent: true,
      },
      {
        source: "/najlepsze-kanaly-na-youtube-do-nauki-angielskiego",
        destination: "/blog/najlepsze-kanaly-na-youtube-do-nauki-angielskiego",
        permanent: true,
      },
      {
        source: "/i-love-you-i-nie-tylko-czyli-jak-wyznac-milosc-po-angielsku",
        destination:
          "/blog/i-love-you-i-nie-tylko-czyli-jak-wyznac-milosc-po-angielsku",
        permanent: true,
      },
      {
        source: "/angielskieg-slownictwo-zwiazki-milosc",
        destination: "/blog/angielskieg-slownictwo-zwiazki-milosc",
        permanent: true,
      },
      {
        source: "/filmy-ktore-lubisz-zastosowanie-czasu-present-perfect",
        destination:
          "/blog/filmy-ktore-lubisz-zastosowanie-czasu-present-perfect",
        permanent: true,
      },
      {
        source: "/wielkanoc-w-anglii-zwyczaje-i-slownictwo",
        destination: "/blog/wielkanoc-w-anglii-zwyczaje-i-slownictwo",
        permanent: true,
      },
      {
        source:
          "/swieconka-i-smingus-dyngus-jak-mowic-o-polskiej-wielkanocy-po-angielsku",
        destination:
          "/blog/swieconka-i-smingus-dyngus-jak-mowic-o-polskiej-wielkanocy-po-angielsku",
        permanent: true,
      },
      {
        source: "/samodzielna-nauka-jezyka-angielskiego-czy-to-w-ogole-mozliwe",
        destination:
          "/blog/samodzielna-nauka-jezyka-angielskiego-czy-to-w-ogole-mozliwe",
        permanent: true,
      },
      {
        source: "/konwersacja-po-angielsku-w-polsce-jak-ja-cwiczyc",
        destination: "/blog/konwersacja-po-angielsku-w-polsce-jak-ja-cwiczyc",
        permanent: true,
      },
      {
        source: "/pisanie-po-angielsku-czy-to-dobra-metoda-nauki",
        destination: "/blog/pisanie-po-angielsku-czy-to-dobra-metoda-nauki",
        permanent: true,
      },
      {
        source: "/jak-cwiczyc-pisanie-po-angielsku",
        destination: "/blog/jak-cwiczyc-pisanie-po-angielsku",
        permanent: true,
      },
      {
        source: "/holiday-czy-holidays-jak-mowic-o-wakacjach-po-angielsku",
        destination:
          "/blog/holiday-czy-holidays-jak-mowic-o-wakacjach-po-angielsku",
        permanent: true,
      },
      {
        source: "/najlepsze-ksiazki-po-angielsku-ktore-przeczytalam-w-lipcu",
        destination:
          "/blog/najlepsze-ksiazki-po-angielsku-ktore-przeczytalam-w-lipcu",
        permanent: true,
      },
      {
        source: "/czy-twoj-biznes-mowi-po-angielsku",
        destination: "/blog/czy-twoj-biznes-mowi-po-angielsku",
        permanent: true,
      },
      {
        source: "/zycz-innym-udanych-wakacji",
        destination: "/blog/zycz-innym-udanych-wakacji",
        permanent: true,
      },
      {
        source: "/its-getting-hot-in-here",
        destination: "/blog/its-getting-hot-in-here",
        permanent: true,
      },
      {
        source: "/najlepsze-ksiazki-po-angielsku-z-sierpnia",
        destination: "/blog/najlepsze-ksiazki-po-angielsku-z-sierpnia",
        permanent: true,
      },
      {
        source: "/angielskie-wyrazenia-na-poczatek-spotkania-biznesowego",
        destination:
          "/blog/angielskie-wyrazenia-na-poczatek-spotkania-biznesowego",
        permanent: true,
      },
      {
        source: "/najlepsze-ksiazki-po-angielsku-z-wrzesnia",
        destination: "/blog/najlepsze-ksiazki-po-angielsku-z-wrzesnia",
        permanent: true,
      },
      {
        source: "/angielskie-slownictwo-w-biznesie-tego-musisz-sie-nauczyc",
        destination:
          "/blog/angielskie-slownictwo-w-biznesie-tego-musisz-sie-nauczyc",
        permanent: true,
      },
      {
        source: "/jak-tworzyc-pytania-w-jezyku-angielskim",
        destination: "/blog/jak-tworzyc-pytania-w-jezyku-angielskim",
        permanent: true,
      },
      {
        source: "/swieto-zmarlych-po-angielsku",
        destination: "/blog/swieto-zmarlych-po-angielsku",
        permanent: true,
      },
      {
        source: "/mowa-zalezna",
        destination: "/blog/mowa-zalezna",
        permanent: true,
      },
      {
        source: "/pytania-posrednie-w-jezyku-angielskim",
        destination: "/blog/pytania-posrednie-w-jezyku-angielskim",
        permanent: true,
      },
      {
        source: "/angielskie-ksiazki-z-pazdziernika-jodi-picoult",
        destination: "/blog/angielskie-ksiazki-z-pazdziernika-jodi-picoult",
        permanent: true,
      },
      {
        source: "/swiateczne-prezenty-dla-bookoholikow",
        destination: "/blog/swiateczne-prezenty-dla-bookoholikow",
        permanent: true,
      },
      {
        source: "/ksiazka-listopada-dale-carnegie",
        destination: "/blog/ksiazka-listopada-dale-carnegie",
        permanent: true,
      },
      {
        source: "/jak-znalezc-czas-na-nauke-jezyka-angielskiego",
        destination: "/blog/jak-znalezc-czas-na-nauke-jezyka-angielskiego",
        permanent: true,
      },
      {
        source: "/ksiazki-po-angielsku-ksiazka-grudnia-heads-you-win",
        destination: "/blog/ksiazki-po-angielsku-ksiazka-grudnia-heads-you-win",
        permanent: true,
      },
      {
        source: "/najlepsze-ksiazki-do-samodzielnej-nauki-jezyka-angielskiego",
        destination:
          "/blog/najlepsze-ksiazki-do-samodzielnej-nauki-jezyka-angielskiego",
        permanent: true,
      },
      {
        source:
          "/as-cool-as-a-cucumber-owoce-i-warzywa-w-angielskich-wyrazeniach",
        destination:
          "/blog/as-cool-as-a-cucumber-owoce-i-warzywa-w-angielskich-wyrazeniach",
        permanent: true,
      },
      {
        source: "/czasownik-z-ing-jak-uzywac",
        destination: "/blog/czasownik-z-ing-jak-uzywac",
        permanent: true,
      },
      {
        source: "/lekcje-z-native-speakerem-czy-sa-dla-ciebie",
        destination: "/blog/lekcje-z-native-speakerem-czy-sa-dla-ciebie",
        permanent: true,
      },
      {
        source: "/gerund-infinitive",
        destination: "/blog/gerund-infinitive",
        permanent: true,
      },
      {
        source: "/o-okresie-po-angielsku",
        destination: "/blog/o-okresie-po-angielsku",
        permanent: true,
      },
      {
        source: "/przedimek-the-w-nazwach-wlasnych",
        destination: "/blog/przedimek-the-w-nazwach-wlasnych",
        permanent: true,
      },
      {
        source: "/przerwa-w-nauce-jezyka-angielskiego",
        destination: "/blog/przerwa-w-nauce-jezyka-angielskiego",
        permanent: true,
      },
      {
        source: "/strach-przed-lekcjami-z-nativem",
        destination: "/blog/strach-przed-lekcjami-z-nativem",
        permanent: true,
      },
      {
        source: "/motywacja-to-bzdura-ucz-sie-angielskiego-bez-niej",
        destination: "/blog/motywacja-to-bzdura-ucz-sie-angielskiego-bez-niej",
        permanent: true,
      },
      {
        source: "/angielski-w-pracy-namow-szefa-na-lekcje",
        destination: "/blog/angielski-w-pracy-namow-szefa-na-lekcje",
        permanent: true,
      },
      {
        source: "/wywiad-z-jeanem-nauczycielem-w-ok-english",
        destination: "/blog/wywiad-z-jeanem-nauczycielem-w-ok-english",
        permanent: true,
      },
      {
        source: "/jezyk-angielski-w-pracy-freelancera",
        destination: "/blog/jezyk-angielski-w-pracy-freelancera",
        permanent: true,
      },
      {
        source: "/jak-przestac-sie-bac-i-zaczac-mowic-po-angielsku",
        destination: "/blog/jak-przestac-sie-bac-i-zaczac-mowic-po-angielsku",
        permanent: true,
      },
      {
        source: "/other-i-another-podstawowa-roznica-i-zastosowanie",
        destination: "/blog/other-i-another-podstawowa-roznica-i-zastosowanie",
        permanent: true,
      },
      {
        source: "/przymiotniki-zakonczone-na-ed-i-ing-roznica-i-zastosowanie",
        destination:
          "/blog/przymiotniki-zakonczone-na-ed-i-ing-roznica-i-zastosowanie",
        permanent: true,
      },
      {
        source: "/angielski-w-doroslym-zyciu-pokonaj-trudy-nauki",
        destination: "/blog/angielski-w-doroslym-zyciu-pokonaj-trudy-nauki",
        permanent: true,
      },
      {
        source: "/idziemy-na-zakupy-jak-to-powiedziec-po-angielsku",
        destination: "/blog/idziemy-na-zakupy-jak-to-powiedziec-po-angielsku",
        permanent: true,
      },
      {
        source: "/home-i-house-jaka-jest-roznica",
        destination: "/blog/home-i-house-jaka-jest-roznica",
        permanent: true,
      },
      {
        source: "/najwazniejsze-wyrazenia-z-get",
        destination: "/blog/najwazniejsze-wyrazenia-z-get",
        permanent: true,
      },
      {
        source: "/zaplanuj-nauke-angielskiego-wytrwaj-w-postanowieniach",
        destination:
          "/blog/zaplanuj-nauke-angielskiego-wytrwaj-w-postanowieniach",
        permanent: true,
      },
      {
        source: "/metoda-5-slow",
        destination: "/blog/metoda-5-slow",
        permanent: true,
      },
      {
        source: "/5-prawd-o-nauce-jezyka-angielskiego",
        destination: "/blog/5-prawd-o-nauce-jezyka-angielskiego",
        permanent: true,
      },
      {
        source: "/najlepsze-aplikacje-do-nauki-angielskiego",
        destination: "/blog/najlepsze-aplikacje-do-nauki-angielskiego",
        permanent: true,
      },
      {
        source: "/wszystko-o-business-english",
        destination: "/blog/wszystko-o-business-english",
        permanent: true,
      },
      {
        source: "/swieto-niepodleglosci-po-angielsku",
        destination: "/blog/swieto-niepodleglosci-po-angielsku",
        permanent: true,
      },
      {
        source: "/polak-czy-native-ktorego-nauczyciela-wybrac",
        destination: "/blog/polak-czy-native-ktorego-nauczyciela-wybrac",
        permanent: true,
      },
      {
        source:
          "/intensywne-treningi-konwersacji-z-nativem-twoja-szansa-na-szybka-poprawe-jezyka",
        destination:
          "/blog/intensywne-treningi-konwersacji-z-nativem-twoja-szansa-na-szybka-poprawe-jezyka",
        permanent: true,
      },
      {
        source: "/jak-zaczac-mowic-po-angielsku",
        destination: "/blog/jak-zaczac-mowic-po-angielsku",
        permanent: true,
      },
      {
        source: "/wywiad-z-karen-parks-trenerka-konwersacji-w-ok-english",
        destination:
          "/blog/wywiad-z-karen-parks-trenerka-konwersacji-w-ok-english",
        permanent: true,
      },
      {
        source: "/pomysly-na-prezenty-dla-kochajacych-angielski",
        destination: "/blog/pomysly-na-prezenty-dla-kochajacych-angielski",
        permanent: true,
      },
      {
        source:
          "/jezykowa-extravaganza-ok-english-wywiady-z-jezykowymi-ekspertami",
        destination:
          "/blog/jezykowa-extravaganza-ok-english-wywiady-z-jezykowymi-ekspertami",
        permanent: true,
      },
      {
        source: "/bootcamp-ok-english-styczen-2020-podsumowanie",
        destination: "/blog/bootcamp-ok-english-styczen-2020-podsumowanie",
        permanent: true,
      },
      {
        source: "/wear-i-dress-podstawowa-roznica-i-uzycie",
        destination: "/blog/wear-i-dress-podstawowa-roznica-i-uzycie",
        permanent: true,
      },
      {
        source: "/jak-uzywac-wish-teoria-zastosowanie-praktyka",
        destination: "/blog/jak-uzywac-wish-teoria-zastosowanie-praktyka",
        permanent: true,
      },
      {
        source: "/zwroty-plynna-konwersacja-po-angielsku",
        destination: "/blog/zwroty-plynna-konwersacja-po-angielsku",
        permanent: true,
      },
      {
        source: "/wywiad-z-alana-trenerka-konwersacji-w-ok-english",
        destination: "/blog/wywiad-z-alana-trenerka-konwersacji-w-ok-english",
        permanent: true,
      },
      {
        source: "/kto-to-jest-native-speaker",
        destination: "/blog/kto-to-jest-native-speaker",
        permanent: true,
      },
      {
        source: "/wywiad-daniel",
        destination: "/blog/wywiad-daniel",
        permanent: true,
      },
      {
        source:
          "/co-to-jest-bieglosc-i-inne-jezykowe-zagadnienia-wywiad-z-jagoda-ratajczak-autorka-ksiazki-jezyczni",
        destination:
          "/blog/co-to-jest-bieglosc-i-inne-jezykowe-zagadnienia-wywiad-z-jagoda-ratajczak-autorka-ksiazki-jezyczni",
        permanent: true,
      },
      {
        source: "/prawdziwa-konwersacja-ucz-sie-angielskiego-w-praktyce",
        destination:
          "/blog/prawdziwa-konwersacja-ucz-sie-angielskiego-w-praktyce",
        permanent: true,
      },
      {
        source: "/nauka-angielskiego-od-native-speakera-zalety",
        destination: "/blog/nauka-angielskiego-od-native-speakera-zalety",
        permanent: true,
      },
      {
        source:
          "/co-zrobic-kiedy-w-nowej-pracy-wymagaja-angielskiego-wywiad-z-edyta-lesniewska-z-hc-advisor",
        destination:
          "/blog/co-zrobic-kiedy-w-nowej-pracy-wymagaja-angielskiego-wywiad-z-edyta-lesniewska-z-hc-advisor",
        permanent: true,
      },
      {
        source: "/jak-przygotowac-sie-na-rozmowe-kwalifikacyjna-po-angielsku",
        destination:
          "/blog/jak-przygotowac-sie-na-rozmowe-kwalifikacyjna-po-angielsku",
        permanent: true,
      },
      {
        source: "/jak-mowic-o-dzieciach-i-dorastaniu-po-angielsku",
        destination: "/blog/jak-mowic-o-dzieciach-i-dorastaniu-po-angielsku",
        permanent: true,
      },
      {
        source: "/angielskie-idiomy-zwiazane-z-dziecmi",
        destination: "/blog/angielskie-idiomy-zwiazane-z-dziecmi",
        permanent: true,
      },
      {
        source: "/czasowniki-modalne-jak-uzywac",
        destination: "/blog/czasowniki-modalne-jak-uzywac",
        permanent: true,
      },
      {
        source:
          "/nauka-jezyka-na-emigracji-rozmowa-z-ania-aftowicz-biznes-i-mindset-coachem",
        destination:
          "/blog/nauka-jezyka-na-emigracji-rozmowa-z-ania-aftowicz-biznes-i-mindset-coachem",
        permanent: true,
      },
      {
        source: "/okenglish-heroes-magda-golub",
        destination: "/blog/okenglish-heroes-magda-golub",
        permanent: true,
      },
      {
        source: "/wady-zajec-z-native-speakerem",
        destination: "/blog/wady-zajec-z-native-speakerem",
        permanent: true,
      },
      {
        source: "/bootcamp-ok-english-edycja-2-podsumowanie",
        destination: "/blog/bootcamp-ok-english-edycja-2-podsumowanie",
        permanent: true,
      },
      {
        source: "/ucz-sie-angielskiego-z-konwersacji-podroz-do-tajlandii",
        destination:
          "/blog/ucz-sie-angielskiego-z-konwersacji-podroz-do-tajlandii",
        permanent: true,
      },
      {
        source: "/zajecia-z-nativem-jak-wygladaja",
        destination: "/blog/zajecia-z-nativem-jak-wygladaja",
        permanent: true,
      },
      {
        source:
          "/poszukiwanie-pracy-a-znajomosc-angielskiego-rozmowa-z-weronika-kotyza-z-talent-place",
        destination:
          "/blog/poszukiwanie-pracy-a-znajomosc-angielskiego-rozmowa-z-weronika-kotyza-z-talent-place",
        permanent: true,
      },
      {
        source:
          "/would-have-could-have-should-have-czasowniki-modalne-w-czasie-przeszlym",
        destination:
          "/blog/would-have-could-have-should-have-czasowniki-modalne-w-czasie-przeszlym",
        permanent: true,
      },
      {
        source: "/polityczna-poprawnosc-po-angielsku",
        destination: "/blog/polityczna-poprawnosc-po-angielsku",
        permanent: true,
      },
      {
        source: "/czy-dasz-sobie-rade-na-lekcjach-z-native-speakerem",
        destination: "/blog/czy-dasz-sobie-rade-na-lekcjach-z-native-speakerem",
        permanent: true,
      },
      {
        source: "/angielski-na-wakacje-startujemy",
        destination: "/blog/angielski-na-wakacje-startujemy",
        permanent: true,
      },
      {
        source: "/jak-mowic-o-planach-na-wakacje-po-angielsku",
        destination: "/blog/jak-mowic-o-planach-na-wakacje-po-angielsku",
        permanent: true,
      },
      {
        source: "/jak-zyczyc-komus-szerokiej-drogi-po-angielsku",
        destination: "/blog/jak-zyczyc-komus-szerokiej-drogi-po-angielsku",
        permanent: true,
      },
      {
        source: "/trzy-wyrazenia-zwiazane-z-latem-ktorych-byc-moze-nie-znasz",
        destination:
          "/blog/trzy-wyrazenia-zwiazane-z-latem-ktorych-byc-moze-nie-znasz",
        permanent: true,
      },
      {
        source: "/straciles-prace-co-teraz",
        destination: "/blog/straciles-prace-co-teraz",
        permanent: true,
      },
      {
        source: "/mini-lekcja-ok-english-frieburg-the-most-liveable-city",
        destination:
          "/blog/mini-lekcja-ok-english-frieburg-the-most-liveable-city",
        permanent: true,
      },
      {
        source: "/tomek-maciejewski",
        destination: "/blog/tomek-maciejewski",
        permanent: true,
      },
      {
        source: "/czasownik-to-be-podstawowe-czasy",
        destination: "/blog/czasownik-to-be-podstawowe-czasy",
        permanent: true,
      },
      {
        source: "/bootcamp-mission-possible-jak-dziala",
        destination: "/blog/bootcamp-mission-possible-jak-dziala",
        permanent: true,
      },
      {
        source: "/strach-przed-wysmianiem-mowienie-po-angielsku",
        destination: "/blog/strach-przed-wysmianiem-mowienie-po-angielsku",
        permanent: true,
      },
      {
        source:
          "/mini-lekcja-jak-mowic-o-strajku-kobiet-i-protestach-po-angielsku",
        destination:
          "/blog/mini-lekcja-jak-mowic-o-strajku-kobiet-i-protestach-po-angielsku",
        permanent: true,
      },
      {
        source: "/bootcamp-mission-possible-edycja-3-podsumowanie",
        destination: "/blog/bootcamp-mission-possible-edycja-3-podsumowanie",
        permanent: true,
      },
      {
        source:
          "/ok-english-hero-jezyk-jest-moja-przyjemnoscia-magda-dembinska",
        destination:
          "/blog/ok-english-hero-jezyk-jest-moja-przyjemnoscia-magda-dembinska",
        permanent: true,
      },
      {
        source: "/present-simple-i-present-continuous-mini-lekcja",
        destination: "/blog/present-simple-i-present-continuous-mini-lekcja",
        permanent: true,
      },
      {
        source: "/jak-mowic-o-pogodzie-po-angielsku",
        destination: "/blog/jak-mowic-o-pogodzie-po-angielsku",
        permanent: true,
      },
      {
        source: "/jak-wiedziec-czy-jestes-gotowy-na-rozmowe-po-angielsku",
        destination:
          "/blog/jak-wiedziec-czy-jestes-gotowy-na-rozmowe-po-angielsku",
        permanent: true,
      },
      {
        source: "/jak-zaplanowac-nauke-jezyka-angielskiego-na-caly-rok",
        destination:
          "/blog/jak-zaplanowac-nauke-jezyka-angielskiego-na-caly-rok",
        permanent: true,
      },
    ];
  },
};
