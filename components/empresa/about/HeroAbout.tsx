import Image from "next/image"

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  image?: string;
  video?: string;
};


export default function HeroAbout({
    title,
    subtitle,
    children,
    image, 
    video
  }: HeroProps) {
    return (
      <section className="relative w-full min-h-[60vh] flex items-center border-b border-white/8 bg-[#080A0E] overflow-hidden">
  
        {/* VIDEO  */}
        {video && (
          <video className="absolute inset-0 w-full h-full object-cover opacity-20" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        )}
  
        {/* LOGOTIPO */}
        {image && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="relative w-full h-full max-w-350 mx-auto opacity-80">
              <Image 
                src={image} 
                alt="Defensya Logo Background" 
                fill
                className="object-contain p-20" 
                priority
              />
            </div>
          </div>
        )}
  
        {/* OVERLAYS  */}
        <div className="absolute inset-0 bg-linear-to-r from-[#080A0E] via-transparent to-transparent z-10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4FAAFF]/20 to-transparent" />
  
      
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1] uppercase ">
              {title}
            </h1>
  
            {subtitle && (
              <p className="mt-8 text-lg text-zinc-400 leading-relaxed border-l-2 border-defensya-sky/30 pl-6">
                {subtitle}
              </p>
            )}
  
            {children && (
              <div className="mt-10 flex items-center gap-4 flex-wrap">
                {children}
              </div>
            )}
          </div>
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </section>
    )
  }