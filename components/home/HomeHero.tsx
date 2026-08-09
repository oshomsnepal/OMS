import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";

type Props = {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
};

export function HomeHero({ title, subtitle, image, imageAlt }: Props) {
  return (
    <PageHero title={title} copy={subtitle} label="Hero Image" image={image} imageAlt={imageAlt} height="min-h-[800px] h-screen" vibrant>
      <Button href="#journey">Explore the School</Button>
      <Button href="/visit" variant="light">Plan Your Visit</Button>
    </PageHero>
  );
}
