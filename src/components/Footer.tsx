import { Server, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Server className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">Servidores Web</h3>
          </div>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Una guía completa para entender cómo funcionan los servidores web,
            su importancia en la infraestructura de internet y cómo configurar el tuyo.
          </p>
          <div className="flex items-center justify-center space-x-2 text-slate-500">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>para aprender sobre tecnología</span>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-slate-600 text-sm">
            © 2026 Guía de Servidores Web
          </div>
        </div>
      </div>
    </footer>
  );
}
