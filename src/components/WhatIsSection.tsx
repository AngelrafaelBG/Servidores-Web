import { Database, Globe, HardDrive } from 'lucide-react';

export default function WhatIsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            ¿Qué es un Servidor Web?
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Un <span className="font-semibold text-blue-600">servidor web</span> es
              un software que se ejecuta en una computadora y tiene como función principal
              procesar solicitudes HTTP y entregar contenido web a los usuarios.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Cuando escribes una dirección web en tu navegador, tu computadora envía
              una solicitud a un servidor web, que procesa la petición y devuelve el
              contenido solicitado: páginas HTML, imágenes, videos, archivos, etc.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              El servidor actúa como un intermediario entre los usuarios y los recursos
              que necesitan, gestionando múltiples peticiones simultáneamente y asegurando
              que cada usuario reciba el contenido correcto.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Protocolo HTTP/HTTPS
                  </h3>
                  <p className="text-slate-600">
                    Utiliza estos protocolos para comunicarse con navegadores y aplicaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-100 rounded-lg">
                  <Database className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Gestión de Recursos
                  </h3>
                  <p className="text-slate-600">
                    Administra y distribuye archivos, bases de datos y contenido dinámico.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <HardDrive className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">
                    Procesamiento
                  </h3>
                  <p className="text-slate-600">
                    Ejecuta código del lado del servidor y genera respuestas personalizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
