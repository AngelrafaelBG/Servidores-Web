import { Code2, Cloud, Rocket } from 'lucide-react';

export default function ExamplesSection() {
  const examples = [
    {
      icon: Code2,
      title: 'Servidor Apache en Linux',
      language: 'bash',
      code: `# Instalar Apache
sudo apt update
sudo apt install apache2

# Iniciar el servicio
sudo systemctl start apache2

# Habilitar inicio automático
sudo systemctl enable apache2

# Verificar estado
sudo systemctl status apache2`,
      description: 'Apache es uno de los servidores web más utilizados en el mundo.'
    },
    {
      icon: Rocket,
      title: 'Servidor Nginx',
      language: 'bash',
      code: `# Instalar Nginx
sudo apt install nginx

# Iniciar Nginx
sudo systemctl start nginx

# Configurar sitio
sudo nano /etc/nginx/sites-available/default

# Recargar configuración
sudo nginx -s reload`,
      description: 'Nginx es conocido por su alto rendimiento y eficiencia.'
    },
    {
      icon: Cloud,
      title: 'Servidor Express (Node.js)',
      language: 'javascript',
      code: `const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando!');
});

app.listen(port, () => {
  console.log(\`Servidor en http://localhost:\${port}\`);
});`,
      description: 'Express es un framework minimalista y flexible para Node.js.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Ejemplos Prácticos
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Aquí tienes algunos ejemplos de código para levantar diferentes tipos
            de servidores web
          </p>
        </div>

        <div className="space-y-8">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{example.title}</h3>
                      <p className="text-blue-100 mt-1">{example.description}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 p-6 overflow-x-auto">
                  <pre className="text-sm text-green-400 font-mono">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
