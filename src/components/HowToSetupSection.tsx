import { Terminal, Download, Settings, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function HowToSetupSection() {
  const steps = [
    {
      icon: Download,
      title: 'Paso 1: Elegir el Software',
      description: 'Selecciona un servidor web según tus necesidades',
      details: [
        'Apache: El más popular y versátil',
        'Nginx: Rápido y eficiente para alto tráfico',
        'Node.js: Ideal para aplicaciones JavaScript',
        'IIS: Para entornos Windows'
      ]
    },
    {
      icon: Terminal,
      title: 'Paso 2: Instalación',
      description: 'Instala el software en tu sistema operativo',
      details: [
        'Linux: sudo apt install apache2 o nginx',
        'macOS: brew install nginx',
        'Windows: Descarga el instalador oficial',
        'Docker: docker pull nginx:latest'
      ]
    },
    {
      icon: Settings,
      title: 'Paso 3: Configuración',
      description: 'Configura el servidor según tus requisitos',
      details: [
        'Define el puerto (por defecto 80 o 443)',
        'Establece el directorio raíz de archivos',
        'Configura dominios virtuales si necesitas',
        'Ajusta permisos y seguridad'
      ]
    },
    {
      icon: PlayCircle,
      title: 'Paso 4: Iniciar el Servidor',
      description: 'Ejecuta el servidor y verifica su funcionamiento',
      details: [
        'Inicia el servicio: systemctl start apache2',
        'Verifica el estado: systemctl status nginx',
        'Abre tu navegador en localhost',
        'Prueba que responde correctamente'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            ¿Cómo Se Levanta un Servidor Web?
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Configurar tu propio servidor web es más sencillo de lo que piensas.
            Sigue estos pasos:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/70 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500 rounded-lg flex-shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-200">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-600 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Terminal className="w-7 h-7 mr-3" />
            Ejemplo Rápido con Node.js
          </h3>
          <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono">
              <code>{`// Crear un servidor web simple con Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>¡Hola Mundo desde mi servidor!</h1>');
});

server.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});`}</code>
            </pre>
          </div>
          <p className="mt-4 text-blue-100">
            Guarda este código como <code className="bg-slate-800 px-2 py-1 rounded">server.js</code> y
            ejecútalo con <code className="bg-slate-800 px-2 py-1 rounded">node server.js</code>
          </p>
        </div>
      </div>
    </section>
  );
}
