export const content = {
  es: {
    hero: {
      title: "Repostería artesanal con amor",
      description:
        "Tartas personalizadas, bizcochos artesanales y galletas hechas a mano en Madrid. Cada dulce está elaborado con ingredientes de calidad y dedicación.",
      cta: "Ver catálogo",
    },
    catalog: {
      title: "Nuestro catálogo",
      subtitle: "Cada dulce es una creación única",
    },
    philosophy: {
      title: "Nuestra filosofía",
      text:
        "En Yes and Cakes creemos en la repostería hecha con calma y dedicación. Cada dulce es elaborado a mano con ingredientes de primera calidad, sin prisas, con el tiempo que merece cada creación.",
    },
    contact: {
      title: "Hablemos de tu próximo dulce",
      text:
        "Trabajamos por encargo. Contacta con nosotros por WhatsApp o Instagram para crear algo especial juntos.",
    },
  },

  en: {
    hero: {
      title: "Artisan pastries made with love",
      description:
        "Custom cakes, artisan sponge cakes, and handmade cookies in Madrid. Every treat is crafted with quality ingredients and dedication.",
      cta: "View catalog",
    },
    catalog: {
      title: "Our catalog",
      subtitle: "Each treat is a unique creation",
    },
    philosophy: {
      title: "Our philosophy",
      text:
        "At Yes and Cakes we believe in pastry made with calm and dedication. Each treat is handcrafted with the finest ingredients, with the time each creation deserves.",
    },
    contact: {
      title: "Let’s talk about your next treat",
      text:
        "We work by order. Contact us via WhatsApp or Instagram to create something special together.",
    },
  },
} as const

export const catalogContent = {
  es: {
    title: "Nuestro catálogo",
    subtitle: "Cada dulce es una creación única",
    items: [
      {
        title: "Tartas personalizadas",
        description:
          "Diseños únicos para celebraciones especiales. Creamos la tarta perfecta para cada ocasión.",
        image: "/images/catalog/custom-cakes.jpg",
        alt: "Tartas personalizadas",
      },
      {
        title: "Bizcochos artesanales",
        description:
          "Esponjosos y deliciosos, elaborados con recetas tradicionales y los mejores ingredientes.",
        image: "/images/catalog/sponge-cakes.jpg",
        alt: "Bizcochos artesanales",
      },
      {
        title: "Galletas",
        description:
          "Crujientes y llenas de sabor, perfectas para acompañar un café o para regalar.",
        image: "/images/catalog/cookies.jpg",
        alt: "Galletas artesanales",
      },
    ],
  },
  en: {
    title: "Our catalog",
    subtitle: "Each treat is a unique creation",
    items: [
      {
        title: "Custom cakes",
        description:
          "Unique designs for special celebrations. We create the perfect cake for every occasion.",
        image: "/images/catalog/custom-cakes.jpg",
        alt: "Custom cakes",
      },
      {
        title: "Artisan sponge cakes",
        description:
          "Fluffy and delicious, made with traditional recipes and the finest ingredients.",
        image: "/images/catalog/sponge-cakes.jpg",
        alt: "Artisan sponge cakes",
      },
      {
        title: "Cookies",
        description:
          "Crispy and full of flavor, perfect to enjoy with coffee or as a gift.",
        image: "/images/catalog/cookies.jpg",
        alt: "Cookies",
      },
    ],
  },
} as const

export const philosophyContent = {
  es: {
    title: "Nuestra filosofía",
    text:
      "En Yes and Cakes creemos en la repostería hecha con calma y dedicación. Cada dulce es elaborado a mano con ingredientes de primera calidad, sin prisas, con el tiempo que merece cada creación. Nos inspira la tradición artesanal y el deseo de crear momentos dulces que perduren en la memoria.",
  },
  en: {
    title: "Our philosophy",
    text:
      "At Yes and Cakes we believe in pastry made with calm and dedication. Each treat is handcrafted with the finest ingredients, without haste, with the time each creation deserves. We are inspired by artisan tradition and the desire to create sweet moments that linger in memory.",
  },
} as const
