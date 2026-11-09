import {
  Mic,
  ListChecks,
  Brain,
  Library,
  Globe,
  MonitorCog,
  ShieldCheck,
  Lightbulb,
  Cpu,
  ShieldAlert,
  HardDrive,
  Orbit,
  AudioLines,
  GraduationCap,
  Smartphone,
} from 'lucide-react';

export const VERSION = '0.33.0-beta «Cámbialo»';

// ─── Ajustes que tiene que rellenar Atlas ──────────────────────────────────────────────
// Enlace de donación (Ko-fi, PayPal.me, Buy Me a Coffee…). Mientras esté vacío, el botón
// «Donar» explica que los donativos vuelven en unos días. Ejemplo: 'https://ko-fi.com/alfa'.
export const DONATE_URL = '';

// Correo público donde llegan los mensajes del formulario de contacto y las candidaturas.
// Mientras esté vacío, los formularios avisan de que el buzón se está mudando.
export const CONTACT_EMAIL = '';

// Cifras de donativos que se muestran en la web. Ya no hay base de datos: se actualizan a mano
// (o en la rutina diaria) leyendo el panel de Ko-fi o PayPal.
export const DONATION_STATS = {
  total: 0,
  supporters: 0,
  updated: '4 nov 2026',
};
// ────────────────────────────────────────────────────────────────────────────────────────

const IMG = `${import.meta.env.BASE_URL}img/`;

export const IMAGES = {
  core: `${IMG}core.png`,
  hero: `${IMG}hero.jpg`,
  hood: `${IMG}hood.jpg`,
  team: `${IMG}team.jpg`,
};

export const HERO_STATS = [
  { value: '33', label: 'versiones entregadas' },
  { value: '15.839', label: 'líneas de código Python' },
  { value: '77', label: 'módulos propios' },
  { value: '0', label: 'cuotas para el usuario' },
];

export const HERO_CONSOLE = [
  { prompt: 'alfa, ¿qué tengo hoy?', lines: ['viernes 6 de noviembre · 14 grados y nublado', '2 tareas: pan a las 09:15 · médico a las 10:00'] },
  { prompt: 'abre el navegador y busca el tiempo en Madrid', lines: ['[guardian] seguro · ejecutando'] },
  { prompt: 'apunta que el jueves tengo revisión', lines: ['guardado en memoria · lo recordaré'] },
];

export const CAPABILITIES = [
  {
    icon: Mic,
    title: 'Habla y escucha',
    text: 'Atiende órdenes por voz desde la palabra «Alfa» o por escrito, y responde en pantalla con una voz femenina realista generada en tu propio PC.',
  },
  {
    icon: ListChecks,
    title: 'Tareas y recordatorios',
    text: 'Crea, guarda y te avisa en voz alta cuando toca, también cada día, cada lunes o cada mes. Pregúntale «¿qué tengo hoy?», «¿qué tengo mañana?» o «¿qué tengo esta semana?» y te lo cuenta; por la mañana te da los buenos días y por la noche te repasa el día siguiente.',
  },
  {
    icon: Brain,
    title: 'Memoria permanente',
    text: 'Recuerda lo que le cuentas y lo mantiene entre sesiones, guardado en tu propio ordenador.',
  },
  {
    icon: Library,
    title: 'Base de conocimiento',
    text: 'Indexa tus documentos, apuntes y webs y los consulta cuando le preguntas, con búsqueda híbrida.',
  },
  {
    icon: Globe,
    title: 'Internet sin cuentas',
    text: 'Busca y lee información en la web, el tiempo y las noticias, sin claves ni registros.',
  },
  {
    icon: MonitorCog,
    title: 'Control del ordenador',
    text: 'Abre programas, webs y carpetas, gestiona ventanas y procesos y ejecuta órdenes, siempre con el Guardián por delante.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad del equipo',
    text: 'Vigila el ordenador apoyándose en Windows Defender, sin instalar nada ajeno al sistema.',
  },
  {
    icon: Lightbulb,
    title: 'Toma la iniciativa',
    text: 'Vive en una ventana flotante sobre tus programas y toma la palabra cuando tiene algo útil que decir.',
  },
];

export const HOOD = [
  {
    icon: Cpu,
    tag: '[ LOCAL ]',
    title: 'Motor propio, cero cuotas',
    text: 'Razona con ALFA-Core, el modelo propio de ALFA derivado de Qwen3 (licencia Apache-2.0), servido en tu equipo. Sin cuentas y sin servicios de pago: el razonamiento, la memoria y la voz funcionan sin conexión.',
  },
  {
    icon: ShieldAlert,
    tag: '[ GUARDIÁN ]',
    title: 'Cuatro niveles antes de tocar nada',
    text: 'Cada orden del sistema se clasifica antes de ejecutarse: bloqueado, crítico, peligroso o seguro. Lo crítico siempre pide permiso y se explica en lenguaje llano, con los riesgos concretos.',
  },
  {
    icon: HardDrive,
    tag: '[ MEMORIA ]',
    title: 'Todo queda en tu carpeta',
    text: 'La memoria vive en los archivos JSON de ALFA con escritura atómica, copias diarias en ZIP y copias cifradas con AES-256-GCM cuando lo activas.',
  },
  {
    icon: Orbit,
    tag: '[ NÚCLEO ]',
    title: 'Reflexión en segundo plano',
    text: 'Cada diez minutos reúne lo que ha pasado, saca lecciones y pequeños cambios de estado, y cuando no la usas estudia sola temas nuevos. Es experimental y el propio programa declara que no es consciencia real.',
  },
  {
    icon: AudioLines,
    tag: '[ VOZ ]',
    title: 'Una voz que no suena a robot',
    text: 'Desde la versión 0.27 habla con una voz femenina realista que se genera en tu propio PC con un modelo de voz abierto (Pocket TTS, licencia CC-BY-4.0), y el ojo de la interfaz se anima al ritmo de lo que dice. Los sonidos, la estética de sala de mando y la tríada LÓGICA·1 / CAUTELA·2 / INTUICIÓN·3 son originales.',
  },
  {
    icon: GraduationCap,
    tag: '[ APRENDIZAJE ]',
    title: 'Aprende de lo que vive',
    text: 'Cada intercambio se registra y se valora después. Al «dormir», lo bueno se convierte en ejemplos y lo problemático en lecciones. Reentrenar su modelo es siempre decisión tuya.',
  },
];

export const MOBILE = {
  icon: Smartphone,
  title: 'ALFA Móvil, el mando a distancia',
  text: 'Aplicación para Android que muestra y edita las tareas, la memoria y el diario de ALFA, te deja hablarle desde el teléfono y ver el estado de tu PC y del Núcleo. El razonamiento sigue ocurriendo en el ordenador; los mensajes viajan firmados y las acciones peligrosas se confirman siempre en el PC.',
};

export const FUNDING_USE = [
  {
    num: '01',
    title: 'Equipo para entrenar ALFA-Core',
    text: 'El modelo propio se reentrena con lo que ALFA ha aprendido. Sin una tarjeta gráfica en condiciones, cada entrenamiento se hace a ciegas y a la mitad.',
  },
  {
    num: '02',
    title: 'Créditos de IA para seguir programando',
    text: 'Cada versión la escribe una IA trabajando codo con codo con el autor. Los créditos de programación son, literalmente, horas de desarrollo.',
  },
  {
    num: '03',
    title: 'Instalador firmado y distribución',
    text: 'Un certificado de firma de código para que Windows no avise con sustos al instalar ALFA, y para publicar el instalador sin fricción.',
  },
  {
    num: '04',
    title: 'Pruebas en equipos reales',
    text: 'Probar en ordenadores, micrófonos y tarjetas gráficas distintas: lo que se rompe en un PC ajeno es lo que hay que arreglar aquí.',
  },
];

export const MILESTONES = [
  {
    version: '0.33.0-beta',
    name: '«Cámbialo»',
    status: 'entregada',
    text: 'Cambia tus recordatorios hablando: «cambia lo del pan a las 8» o «ya no me recuerdes el gimnasio cada lunes». ALFA cambia la tarea que ya tienes en vez de crear otra.',
  },
  {
    version: '0.32.0-beta',
    name: '«Cada lunes»',
    status: 'entregada',
    text: 'Recordatorios que se repiten: «recuérdame el gimnasio cada lunes a las 19» o «la pastilla todos los días a las 9». Te avisa cada vez y deja programada la siguiente.',
  },
  {
    version: '0.31.0-beta',
    name: '«Mi semana»',
    status: 'entregada',
    text: 'Pregúntale «¿qué tengo esta semana?» y te cuenta día a día lo que tienes apuntado. Los lunes, además, te lo adelanta ella sola en el saludo de la mañana.',
  },
  {
    version: '0.30.0-beta',
    name: '«Buenas noches»',
    status: 'entregada',
    text: 'Si estás con ella por la noche, una vez te repasa lo que te queda de hoy y cómo viene mañana: el tiempo y lo que tienes apuntado con sus horas.',
  },
  {
    version: '0.29.0-beta',
    name: '«Mi día»',
    status: 'entregada',
    text: 'Pregúntale «¿qué tengo hoy?» o «¿qué tengo mañana?» a cualquier hora y te cuenta el día: fecha, tiempo donde estás, tus tareas con su hora y una noticia, sin inventarse nada.',
  },
  {
    version: '0.28.0-beta',
    name: '«Buenos días»',
    status: 'entregada',
    text: 'Cada mañana, la primera vez que estás con ella, ALFA te dice qué día es, qué tiempo hace donde estás, lo que tienes apuntado para hoy y una noticia. Y ya conoce su propia web para compartirla.',
  },
  {
    version: '0.27.0-beta',
    name: '«Voz real»',
    status: 'entregada',
    text: 'Voz femenina realista generada en local, ojo que se anima con la voz, razonamiento a fondo y un Núcleo que estudia solo. Se suma a la ventana flotante, la memoria permanente, el Guardián de cuatro niveles y ALFA Móvil sincronizado con el PC.',
  },
  {
    version: 'beta cerrada',
    name: 'Con usuarios reales',
    status: 'en curso',
    text: 'Abrir ALFA a un grupo reducido para que la use en su día a día y detectar lo que solo se ve fuera de mi ordenador.',
  },
  {
    version: 'ALFA-Core',
    name: 'Reentrenamiento del modelo propio',
    status: 'necesita financiación',
    text: 'Entrenar el modelo con los ejemplos y las lecciones acumuladas, para que su voz y su criterio sean suyos por completo.',
  },
  {
    version: 'instalador',
    name: 'Instalación sin sustos',
    status: 'necesita financiación',
    text: 'Firmar el paquete de instalación para que cualquier persona con Windows pueda probar ALFA con un doble clic.',
  },
  {
    version: '1.0',
    name: 'Primera versión pública',
    status: 'siguiente',
    text: 'Descarga abierta, guía de instalación y lista de requisitos para Windows 10 y 11.',
  },
];

export const TIERS = [
  { id: 'chispa', key: 'CHISPA', amount: 3, text: 'Un café para la sesión de trabajo de hoy.' },
  { id: 'impulso', key: 'IMPULSO', amount: 10, text: 'Créditos de IA para escribir la próxima versión.' },
  { id: 'modulo', key: 'MÓDULO', amount: 25, text: 'Horas de pruebas y depuración en equipos reales.' },
  { id: 'nucleo', key: 'NÚCLEO', amount: 60, text: 'Un paso más hacia el equipo de entrenamiento.' },
];

export const FAQ = [
  {
    tag: 'tecnología',
    q: '¿Qué es exactamente ALFA?',
    a: 'Un asistente personal de inteligencia artificial para Windows. Se instala en tu ordenador, vive en una ventana flotante sobre tus programas, arranca con Windows y te atiende por voz o por escrito: conversa, gestiona tareas y recordatorios, recuerda lo que le cuentas, consulta tus documentos, busca en internet, controla el equipo con permiso y vigila su seguridad.',
  },
  {
    tag: 'propósito',
    q: 'Si funciona sin cuotas, ¿para qué hacen falta donativos?',
    a: 'Porque ALFA no cobra por usarse, pero desarrollar sí cuesta. Los donativos pagan el equipo con el que se entrena su modelo, los créditos de IA con los que se escribe cada versión, la firma del instalador y las pruebas en equipos reales. No hay empresa, inversores ni nóminas detrás: hay una persona y una IA, y se buscan voluntarios que colaboren a cambio de crédito, no de dinero. Por eso todo lo que entra va íntegro al desarrollo.',
  },
  {
    tag: 'tecnología',
    q: '¿Necesito un ordenador potente?',
    a: 'Windows 10 u 11 de 64 bits. Lo recomendable son 16 GB de RAM y una tarjeta gráfica con 8 GB de memoria, además de micrófono y altavoces para el uso por voz. El instalador prepara Python 3.12 si no lo tienes y el motor de IA se ejecuta en tu propio equipo.',
  },
  {
    tag: 'tecnología',
    q: '¿Mis datos salen de mi ordenador?',
    a: 'No. La memoria, el razonamiento y la voz funcionan sin conexión, y todo se guarda en tu carpeta de ALFA en tu propio disco. Solo se conecta a internet para buscar información, leer noticias y descargar el modelo la primera vez.',
  },
  {
    tag: 'propósito',
    q: '¿Quién está detrás de ALFA?',
    a: 'Una persona, que firma como «Atlas», y una IA. Él concibe la obra, decide cómo se comporta, la prueba en su equipo y valida cada versión; la IA escribe la mayor parte del código siguiendo sus indicaciones. Las ideas son humanas, el código es de la máquina, y no hay empresa ni famosos: es una persona normal con un proyecto grande. El programa está en trámite de registro como obra de programa de ordenador, con su código fuente y su logotipo.',
  },
  {
    tag: 'donativos',
    q: '¿Qué recibo a cambio de mi donativo?',
    a: 'Nada material: es un donativo voluntario, puntual y sin contrapartidas. Lo que sostienes, en realidad, es que la próxima versión exista antes y que el proyecto siga siendo independiente.',
  },
  {
    tag: 'colaborar',
    q: '¿Se puede colaborar con el proyecto?',
    a: 'Sí, y es lo que más falta hace. Se buscan voluntarios para programar en Python, diseñar la interfaz, probar cada versión en equipos distintos, documentar, traducir y difundir. La candidatura pide una carta de presentación, un CV y un documento que demuestre que eres una persona real; todo se trata de forma confidencial y solo se usa para verificar la identidad.',
  },
  {
    tag: 'colaborar',
    q: '¿Vas a pagar a los que colaboren?',
    a: 'No, y lo digo antes de que nadie pierda el tiempo: no hay sueldo, ni pago por horas, ni promesas de pagos futuros. No tengo empresa ni ingresos, y todo el dinero que entra por donativos va al desarrollo. A cambio, el equipo recibe crédito por escrito: su nombre en esta web, en los créditos de las versiones en las que participa y en la documentación del proyecto.',
  },
  {
    tag: 'tecnología',
    q: '¿ALFA funciona con ChatGPT o con alguna nube?',
    a: 'No. Razona con ALFA-Core, el modelo propio de pesos abiertos derivado de Qwen3 (licencia Apache-2.0) que se ejecuta en tu equipo. Ni cuenta, ni clave, ni cuota: si se cae internet, ALFA sigue respondiendo. Solo se conecta para buscar información, leer noticias y descargar el modelo la primera vez.',
  },
  {
    tag: 'tecnología',
    q: '¿Puede ALFA hacer lo que quiera en mi ordenador?',
    a: 'No sin tu permiso. Cada orden pasa antes por el Guardián, que la clasifica en cuatro niveles: bloqueado, crítico, peligroso o seguro. Lo crítico siempre pide permiso y se explica en lenguaje llano, con los riesgos concretos. Las acciones peligrosas se confirman siempre en el PC, nunca desde el móvil.',
  },
  {
    tag: 'tecnología',
    q: '¿ALFA es consciente?',
    a: 'No, y el propio programa lo declara. El Núcleo es un experimento: cada diez minutos reúne lo que ha pasado, saca lecciones y pequeños cambios de estado. Es reflexión en segundo plano, no consciencia real.',
  },
  {
    tag: 'propósito',
    q: '¿Por qué existe esta web si ALFA se instala en el PC?',
    a: 'Porque ALFA no se vende: no hay tienda ni empresa detrás. Esta página existe para contar qué es y en qué se está trabajando, para que quien quiera pueda empujar el desarrollo con un donativo y para que quien quiera construirlo pueda ofrecerse. Es el expediente público de un proyecto independiente.',
  },
  {
    tag: 'propósito',
    q: '¿Qué pasa con mis datos si dono o me apunto?',
    a: 'Nada tuyo se publica. De los donativos solo se muestran cifras agregadas: cuánto se ha reunido y cuántos apoyos, nunca quién ha dado ni cuánto ha dado cada persona. El pago se hace en la plataforma de donativos (Ko-fi o PayPal), así que los datos de la tarjeta nunca pasan por esta web, y las candidaturas de voluntariado se tratan de forma confidencial y solo se usan para valorarlas.',
  },
  {
    tag: 'propósito',
    q: '¿Cuándo podré descargar ALFA?',
    a: 'La beta está cerrada y ALFA todavía se prueba en el ordenador del autor. Las dos etapas que faltan son un instalador firmado, para que Windows no avise con sustos, y la primera versión pública de descarga. Van en ese orden y dependen de la financiación.',
  },
];
