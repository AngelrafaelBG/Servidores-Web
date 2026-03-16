import { Server } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Server className="w-16 h-16" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            Servidores Web
          </h1>
          <p className="text-xl sm:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo funcionan los servidores web, su importancia en internet
            y aprende a configurar tu propio servidor
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}
