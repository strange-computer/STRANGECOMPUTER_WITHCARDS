import { ImageWithFallback } from './figma/ImageWithFallback'

const serviceImages = [
  {
    image: "/images/strange_perfume.png",
    title: "Web Development"
  },
  {
    image: "/images/u2718133965_Wide-angle_cinematic_POV_from_inside_a_wicker_bas_370236e3-3dc9-44ef-a370-c5d86ada723f_0.gif",
    title: "Brand Identity"
  },
  {
    image: "/images/DOGHOLE_GOOD.png",
    title: "Mobile Apps"
  },
  {
    image: "/images/STRANGE_MOBILE_DEMO.png",
    title: "Social Marketing"
  },
  {
    image: "/images/jebusx5_Pixel_art_animation_of_a_Las_Angeles_subway_scene_16-_0a6b4923-64de-4cd2-aacf-69e63fa6fcfe_2.gif",
    title: "E-commerce"
  },
  {
    image: "/images/IKNOWWHATYOUDID.png",
    title: "Graphic Design"
  },
  {
    image: "/images/OCCRCREMIX_example.png",
    title: "Digital Strategy"
  },
  {
    image: "/images/fourdemos_clouds_blackbackground.png",
    title: "UX Design"
  },
  {
    image: "/images/Strange_anime_demo.png",
    title: "Content Creation"
  }
]

export function BusinessServicesGrid() {
  return (
    <section className="px-8 lg:px-16 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Panel - Text Content */}
          <div className="flex-1 lg:max-w-lg">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-foreground">
              <span className="italic font-medium">What</span>
              <span className="font-normal"> does your business </span>
              <span className="font-semibold">need</span>
              <span className="font-normal">?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Agency & Design using modern tools and tactics
            </p>
          </div>
          
          {/* Right Panel - 3x3 Services Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4 lg:gap-6 max-w-md mx-auto">
              {serviceImages.map((service, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-muted hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {service.title === "Brand Identity" ? (
                    <video
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    >
                      <source src="/images/jebusx5_beautiful_night_sky_petunia_--ar_11_--motion_low_--vi_7f2f2a53-7eed-4107-975c-97f08b6976bf_3.mp4" type="video/mp4" />
                    </video>
                  ) : service.title === "E-commerce" ? (
                    <video
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    >
                      <source src="/images/d3fin3d_cinematic_shot_of_a_man_wearing_athletic_gear_riding__1da639d1-0edd-4868-869b-341bbc949f09_0.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <span className="text-white text-xs font-medium text-center px-2">
                      {service.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}