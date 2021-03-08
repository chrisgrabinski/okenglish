import Image from "next/image";

import Badge from "components/Badge";
import ButtonLink from "components/ButtonLink";
import Card from "components/Card";
import Container from "components/Container";
import Emphasis from "components/Emphasis";
import Layout from "components/Layout";
import Section from "components/Section";
import Stack from "components/Stack";
import Usp from "components/Usp";

export default function Home() {
  return (
    <Layout>
      <Stack>
        <Section>
          <Container>
            <div className="max-w-3xl mx-auto pt-12 md:pt-24 text-center">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
                Treningi angielskiej konwersacji, które zmienią{" "}
                <Emphasis>Twój język</Emphasis> na&nbsp;dobre
              </h1>
              <p className="mt-4 sm:mt-8 text-lg sm:text-xl md:text-2xl">
                Nie pozwól aby strach przed mówieniem blokował Cię przed
                spełnieniem marzeń o świetnie płatnej pracy, podróżach i
                rozwojem własnego biznesu.
              </p>
              <div className="mt-8">
                <ButtonLink href="/#oferta" size="large">
                  Zobacz nasze oferty
                </ButtonLink>
              </div>
            </div>
          </Container>
        </Section>
        <Section id="usps">
          <Container>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <li>
                <Usp
                  title="Przełam bariery"
                  description="już od pierwszej lekcji"
                />
              </li>
              <li>
                <Usp
                  title="Skup się na konwersacji"
                  description="bez tracenia czasu na teorię"
                />
              </li>
              <li>
                <Usp
                  title="Materiały autentyczne"
                  description="bez sztampowych ćwiczeń"
                />
              </li>
              <li>
                <Usp
                  title="Indywidualne podejście"
                  description="Zapomnij o masówce"
                />
              </li>
            </ul>
          </Container>
        </Section>
        <Section id="misja">
          <Card isHighlight>
            <Container>
              <div className="py-8 md:py-16 mx-auto max-w-3xl text-center">
                <h2 className="font-medium text-secondary-400 tracking-wide">
                  Misja
                </h2>
                <p className="mt-4 text-4xl sm:text-5xl">
                  <strong className="font-bold">
                    “Chcemy wspierać <Emphasis>Twoje ambicje</Emphasis>{" "}
                    i&nbsp;towarzyszyć Ci w zdobywaniu nowych szczytów.”
                  </strong>
                </p>
                <p className="mt-4 text-lg sm:text-xl">
                  Umożliwiamy Ci dokonanie tego na swoich własnych zasadach,
                  oszczędzając czas i nerwy. Możesz uczyć się w wybranym przez
                  siebie czasie z dowolnego zakątka na ziemi. Nasi trenerzy
                  dopasują system nauki do Twoich celów i potrzeb, byś mógł bez
                  przeszkód spełniać swoje marzenie o swobodnej konwersacji w
                  języku angielskim.
                </p>
                <div className="mt-16">
                  <Image
                    className="rounded-2xl"
                    src="/images/joanna-horanin-avatar.png"
                    width="72"
                    height="72"
                    alt=""
                  />
                  <p className="font-medium text-lg text-secondary-400">
                    Joanna Horanin
                  </p>
                  <p>
                    <small className="text-sm opacity-75">
                      Założycielka OK English
                    </small>
                  </p>
                </div>
              </div>
            </Container>
          </Card>
        </Section>
        <Section id="for-you">
          <Container>For you</Container>
        </Section>
        <Section id="oferta">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-medium text-secondary-500 tracking-wide">
                Oferta
              </h2>
              <p className="mt-4 text-3xl sm:text-4xl">
                <strong className="font-bold">
                  Nauka angielskiej konwersacji dostosowany&nbsp;do{" "}
                  <Emphasis>Twoich potrzeb</Emphasis>
                </strong>
              </p>
              <p className="mt-4 text-lg sm:text-xl">
                Idealne dla tych, którzy są zmęczeni tradycyjnymi metodami
                nauczania, które nie&nbsp;przynoszą wymiernych efektów.
              </p>
            </div>
          </Container>
          <Container>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-3">
                <Card isHighlight>
                  <div className="grid md:grid-cols-2 items-center gap-8">
                    <div>
                      <h3 className="font-bold text-3xl leading-tight">
                        Treningi z native speakerem
                      </h3>
                      <p className="mt-4 text-lg">
                        Nasi native speakerzy zmienią Twoje nastawienie do
                        języka, zmotywują do rozmowy i pomogą usystematyzować
                        wiedzę bez nudy i frustracji.
                      </p>
                      <p className="mt-auto pt-12 font-medium sm:text-lg">
                        Dowiedz się więcej <span aria-hidden>→</span>
                      </p>
                    </div>
                    <div className="-mx-6 md:-ml-0 -mb-8 md:-my-8">
                      <div className="-mx-8 md:-ml-0 -mb-8 md:-my-6">
                        <Image
                          src="/images/native-speaker-trainers.png"
                          width="496"
                          height="384"
                          alt=""
                          className="w-full"
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="md:col-span-1">
                <Card>
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label="Military helmet"
                  >
                    🪖
                  </span>
                  <h3 className="mt-2 font-bold text-2xl leading-tight">
                    Boot Camp <Badge>Marzec 2021</Badge>
                  </h3>
                  <p className="mt-4">
                    Indywidualny, 4-tygodniowy trening konwersacji z native
                    speakerem. Dla tych, co pragną przełamać barierę w mówieniu
                    szybko i efektywnie{" "}
                  </p>
                  <p className="mt-auto pt-12 font-medium">
                    Dowiedz się więcej <span aria-hidden>→</span>
                  </p>
                </Card>
              </div>
              <div className="md:col-span-1">
                <Card>
                  <span className="text-3xl" role="img" aria-label="Tent">
                    ⛺️
                  </span>
                  <h3 className="mt-2 font-bold text-2xl leading-tight">
                    Summer Camp <Badge>Lato 2021</Badge>
                  </h3>
                  <p className="mt-4">
                    Indywidualny, 4-tygodniowy trening konwersacji z native
                    speakerem. Dla tych, co pragną przełamać barierę w mówieniu
                    szybko i efektywnie{" "}
                  </p>
                  <p className="mt-auto pt-12 font-medium">
                    More information soon
                  </p>
                </Card>
              </div>
              <div className="md:col-span-1">
                <Card>
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label="Polish flag"
                  >
                    🇵🇱
                  </span>
                  <h3 className="mt-2 font-bold text-2xl leading-tight">
                    Treningi z polskim lektorem
                  </h3>
                  <p className="mt-4">
                    Zajęcia angielskiej konwersacji jeden na jeden, nastawione
                    na Twoje cele. Idealne dla tych, którzy chcą przygotować się
                    do rozmowy z native speakerem.
                  </p>
                  <p className="mt-auto pt-12 font-medium">
                    Dowiedz się więcej <span aria-hidden>→</span>
                  </p>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
        <Section id="recenzje">
          <Container>
            <div className="md:grid md:grid-cols-12 md:gap-8">
              <div className="md:col-start-2 md:col-end-12">
                <div className="grid items-center md:grid-cols-2 gap-8">
                  <div className="md:order-last flex justify-center">
                    <div className="mx-auto max-w-xs md:max-w-none">
                      <Image
                        src="/images/testimonials.png"
                        alt=""
                        width="352"
                        height="448"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="font-medium text-secondary-400 tracking-wide">
                      Recenzje
                    </h2>
                    <p className="mt-4 text-3xl sm:text-4xl">
                      <strong className="font-bold">
                        Nie wierz nam na&nbsp;słowo
                      </strong>
                    </p>
                    <p className="mt-4 sm:text-xl">
                      Szczęście klienta jest naszym priorytetem i nasi studenci
                      mogą o&nbsp;tym&nbsp;zaświadczyć.
                    </p>
                    <div className="mt-8">
                      <ButtonLink href="/recenzje">
                        Zobacz, co mówią nasi studenci
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Stack>
    </Layout>
  );
}
