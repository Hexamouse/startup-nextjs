import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Fitur Unggulan untuk Meningkatkan Pembelajaran Anda"
            paragraph="EduCraft AI menawarkan pengalaman belajar cerdas yang dirancang untuk menyesuaikan dengan kecepatan, tujuan, dan gaya belajar unik Anda. Jelajahi fitur-fitur utama yang mewujudkan pendidikan personal."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
