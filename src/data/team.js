import { Award, Ban, BookOpen, CalendarClock, Code2, Languages, Megaphone, Palette, ShieldCheck, TestTube2 } from 'lucide-react';

export const TEAM_QUOTE =
  'No soy nadie famoso, no tengo una empresa y no soy un experto en nada. Soy una persona normal con un proyecto grande en la cabeza, y necesito un equipo para sacarlo adelante. No voy a mentirle a nadie: no puedo pagar un sueldo. Por eso busco voluntarios, y por eso todo el dinero que se recaude por donativos irá íntegro al desarrollo del proyecto. Lo único que puedo garantizar es trabajo, crédito por escrito y que vuestro esfuerzo no se usará para engañar a nadie.';

export const TEAM_CONDITIONS = [
  {
    icon: Ban,
    title: 'Sin sueldo, y lo digo claro',
    text: 'No hay nómina, ni pago por horas, ni promesas de pagos futuros que no pueda cumplir. No hay empresa detrás: solo una persona, una IA y los donativos que entren.',
  },
  {
    icon: Award,
    title: 'Crédito de verdad, y por escrito',
    text: 'Tu nombre en la sección de equipo de esta web, en los créditos de cada versión en la que participes y en la documentación del proyecto. Se firma antes de empezar, no después.',
  },
  {
    icon: CalendarClock,
    title: 'Compromiso, no buena voluntad',
    text: 'Pido horas a la semana, una permanencia mínima de tres meses, respuesta a los mensajes y plazos que se cumplan. Alguien que desaparece frena el proyecto más que alguien que nunca llega.',
  },
  {
    icon: ShieldCheck,
    title: 'Trato honesto y confidencial',
    text: 'Acuerdo de colaboración voluntaria: qué haces, qué recibes como crédito, confidencialidad sobre el código y tus datos, y cómo salir del equipo avisando con antelación.',
  },
];

export const TEAM_ROLES = [
  {
    icon: Code2,
    title: 'Programación en Python',
    text: 'Motor local, memoria, Guardián de seguridad, integración con Windows y empaquetado del instalador.',
  },
  {
    icon: Palette,
    title: 'Interfaz y diseño',
    text: 'La ventana flotante, la estética de sala de mando, los iconos y el logotipo.',
  },
  {
    icon: TestTube2,
    title: 'Pruebas y calidad',
    text: 'Instalar cada versión en equipos distintos —Windows 10 y 11, micrófonos, tarjetas gráficas, antivirus— y anotar qué se rompe.',
  },
  {
    icon: BookOpen,
    title: 'Documentación y guías',
    text: 'Manual de uso, guía de instalación paso a paso y requisitos, escritos para quien no sabe de informática.',
  },
  {
    icon: Languages,
    title: 'Traducción',
    text: 'Llevar la web, la interfaz y su voz a otros idiomas, empezando por el inglés.',
  },
  {
    icon: Megaphone,
    title: 'Difusión',
    text: 'Contar el proyecto en comunidades y redes, sin inventar ni prometer lo que todavía no existe.',
  },
];

export const AVAILABILITY = [
  'Menos de 4 horas por semana',
  'Entre 4 y 8 horas por semana',
  'Entre 8 y 15 horas por semana',
  'Más de 15 horas por semana',
];

export const CONSENTS = [
  {
    key: 'commitment',
    label: 'Entiendo que es voluntariado sin sueldo y que el reconocimiento es el crédito por escrito.',
  },
  {
    key: 'terms_accepted',
    label: 'He leído y acepto los términos, la confidencialidad y el acuerdo de colaboración.',
  },
  {
    key: 'identity_confirmed',
    label: 'Confirmo que soy mayor de edad y que mis datos y documentos son míos y verdaderos.',
  },
  {
    key: 'data_consent',
    label: 'Autorizo el uso confidencial de mis datos y documentos, solo para valorar mi candidatura.',
  },
];

export const EMPTY_APPLICATION = {
  full_name: '',
  email: '',
  location: '',
  role: TEAM_ROLES[0].title,
  availability: AVAILABILITY[1],
  portfolio_url: '',
  motivation: '',
  commitment: false,
  terms_accepted: false,
  identity_confirmed: false,
  data_consent: false,
};
