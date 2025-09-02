import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImage from "../../../../public/doctor-hero.png";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="max-w-2xl space-y-6 flex-[2] flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl tracking-tight max-w-2xl font-bold mb-4">
              Encontre os melhores profissionais em um só lugar
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Sua saúde é nossa prioridade. Junte-se a nós em nossa missão de
              fornecer cuidados de saúde acessíveis para todos.
            </p>

            <Button className="bg-cyan-700 hover:bg-cyan-950 cursor-pointer w-fit px-6 font-semibold">
              Comece agora
            </Button>
          </article>

          <div className="hidden lg:block">
            <Image
              src={doctorImage}
              alt="Foto ilustrativa de profissional da saúde"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  );
}
