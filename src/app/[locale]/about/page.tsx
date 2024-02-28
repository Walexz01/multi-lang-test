import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <>
      <h3>About</h3>
    </>
  );
}
