import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";

export function HomeHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <PageHero title={title} copy={subtitle} label="Hero Image" height="min-h-[800px] h-screen" vibrant>
      <Button href="#journey">Explore the School</Button>
      <Button href="/visit" variant="light">Plan Your Visit</Button>
    </PageHero>
  );
}
