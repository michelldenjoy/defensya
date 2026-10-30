import QuienesSomos from "@/components/empresa/about/QuienesSomos";
import AboutIdentity from "@/components/empresa/about/AboutIdentity";
import MisionVision from "@/components/empresa/about/MisionVision";
import TimelineSection from "@/components/home/TimelineSection";

export default function page() {
  return (
    <div>
      <AboutIdentity />
      <MisionVision />
      <QuienesSomos />
      <TimelineSection />
    </div>
  );
}
