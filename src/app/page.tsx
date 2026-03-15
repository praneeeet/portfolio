import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Praneet G | Creative Developer",
  description: "I build intelligent digital systems combining backend engineering, data analytics and machine learning.",
};

export default function Home() {
  return (
    <main className="w-full flex-col font-[family-name:var(--font-inter)]">
      {/* Scroll Sequence Section */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* Main Content Section */}
      <div className="relative z-10 w-full overflow-hidden">
        <Projects />
      </div>
    </main>
  );
}
