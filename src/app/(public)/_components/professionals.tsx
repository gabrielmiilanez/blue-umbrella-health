import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import imgClinica from "../../../../public/foto1.png";
import Link from "next/link";

export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          Clínicas e Profissionais disponíveis
        </h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden py-0">
            <CardContent className="p-0">
              <div>
                <div className="relative h-48">
                  <Image
                    src={imgClinica}
                    alt="Clínica A"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clinica A</h3>
                    <p className="text-sm text-gray-500">Rua 1, nº234</p>
                  </div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <Link
                  href="/clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex justify-center items-center text-center py-2 rounded-md text-sm md:text-base font-medium"
                >
                  Agendar
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden py-0">
            <CardContent className="p-0">
              <div>
                <div className="relative h-48">
                  <Image
                    src={imgClinica}
                    alt="Clínica A"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clinica A</h3>
                    <p className="text-sm text-gray-500">Rua 1, nº234</p>
                  </div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <Link
                  href="/clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex justify-center items-center text-center py-2 rounded-md text-sm md:text-base font-medium"
                >
                  Agendar
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden py-0">
            <CardContent className="p-0">
              <div>
                <div className="relative h-48">
                  <Image
                    src={imgClinica}
                    alt="Clínica A"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clinica A</h3>
                    <p className="text-sm text-gray-500">Rua 1, nº234</p>
                  </div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <Link
                  href="/clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex justify-center items-center text-center py-2 rounded-md text-sm md:text-base font-medium"
                >
                  Agendar
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden py-0">
            <CardContent className="p-0">
              <div>
                <div className="relative h-48">
                  <Image
                    src={imgClinica}
                    alt="Clínica A"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clinica A</h3>
                    <p className="text-sm text-gray-500">Rua 1, nº234</p>
                  </div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <Link
                  href="/clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex justify-center items-center text-center py-2 rounded-md text-sm md:text-base font-medium"
                >
                  Agendar
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
