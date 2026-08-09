import { permanentRedirect } from "next/navigation";

export default function MeditationsRedirectPage() {
  permanentRedirect("/quotes");
}
