import { ShoppingCart, Mail, FileText, Users, Lock, Zap } from 'lucide-react';

export default function PurposeSection() {
  const purposes = [
    {
      icon: ShoppingCart,
      title: 'Comercio Electrónico',
      description: 'Alojar tiendas online, procesar pagos y gestionar inventarios.',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: FileText,
      title: 'Sitios Web Corporativos',
      description: 'Presentar información de empresas, productos y servicios.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Aplicaciones Web',
      description: 'Ejecutar aplicaciones interactivas y plataformas colaborativas.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Servicios de Email',
      description: 'Gestionar correo electrónico y comunicaciones corporativas.',
      color: 'from-cyan-400 to-teal-600'
    },
    {
      icon: Lock,
      title: 'APIs y Servicios',
      description: 'Proveer interfaces de programación para otras aplicaciones.',
      color: 'from-slate-600 to-slate-800'
    },
    {
      icon: Zap,
      title: 'Procesamiento en Tiempo Real',
      description: 'Manejar datos en vivo, streaming y notificaciones instantáneas.',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            ¿Para Qué Sirve un Servidor Web?
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Los servidores web son fundamentales para prácticamente todo lo que hacemos
            en internet. Aquí están sus principales usos:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {purposes.map((purpose, index) => {
            const Icon = purpose.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${purpose.color} mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {purpose.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {purpose.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
