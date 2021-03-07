import Container from "components/Container";
import Stack from "components/Stack";
import Section from "components/Section";

export default function Home() {
  return (
    <Stack>
      <Section>
        <Container>Hero</Container>
      </Section>
      <Section>
        <Container>USPs</Container>
      </Section>
      <Section className="py-16 md:py-32 bg-primary-900 text-white">
        <Container>Mission</Container>
      </Section>
      <Section>
        <Container>For you</Container>
      </Section>
      <Section>
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-start-2 md:col-end-12">Offer</div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-start-2 lg:col-start-3 md:col-end-12 lg:col-end-11">
              Testimonials
            </div>
          </div>
        </Container>
      </Section>
      <Section className="py-16 md:py-32 bg-primary-900 text-white">
        <Container>How to</Container>
      </Section>
      <Section>
        <Container>Resources</Container>
      </Section>
    </Stack>
  );
}
