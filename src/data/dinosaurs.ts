import type { Dinosaur } from '../types/dinosaur';

export const dinosaurs: Dinosaur[] = [
  {
    id: 1,
    name: 'Tiranosaurio Rex',
    scientificName: 'Tyrannosaurus rex',
    period: 'Cretácico Superior',
    diet: 'Carnívoro',
    length: '12-13 metros',
    weight: '6-9 toneladas',
    habitat: 'Bosques y llanuras',
    description: 'El rey de los dinosaurios carnívoros, famoso por su enorme cabeza, poderosas mandíbulas y pequeños pero fuertes brazos. Era uno de los depredadores terrestres más grandes que jamás haya existido.',
    imageUrl: 'https://images.newscientist.com/wp-content/uploads/2019/02/08162643/ajrw1j.jpg?width=1674',
    funFacts: [
      'Sus dientes podían medir hasta 20 cm de largo',
      'Tenía un olfato excepcional, mejor que el de un perro actual',
      'Sus brazos, aunque pequeños, podían levantar 200 kg cada uno'
    ]
  },
  {
    id: 2,
    name: 'Triceratops',
    scientificName: 'Triceratops horridus',
    period: 'Cretácico Superior',
    diet: 'Herbívoro',
    length: '8-9 metros',
    weight: '6-12 toneladas',
    habitat: 'Llanuras con vegetación abundante',
    description: 'Dinosaurio herbívoro caracterizado por su gran cabeza con tres cuernos distintivos y un collar óseo. Era uno de los últimos dinosaurios no avianos en existir antes de la extinción masiva.',
    imageUrl: 'https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/01/22/63cd065d4490e.jpeg',
    funFacts: [
      'Su cráneo podía medir hasta 3 metros de largo',
      'Los cuernos eran utilizados para defensa y combates rituales',
      'Tenía un pico similar al de un loro para cortar plantas'
    ]
  },
  {
    id: 3,
    name: 'Brontosaurio',
    scientificName: 'Brontosaurus excelsus',
    period: 'Jurásico Superior',
    diet: 'Herbívoro',
    length: '20-22 metros',
    weight: '15-20 toneladas',
    habitat: 'Llanuras de inundación con coníferas',
    description: 'Dinosaurio saurópodo de cuello largo conocido por su enorme tamaño y su natura gentil. Se alimentaba de plantas altas que otros dinosaurios no podían alcanzar.',
    imageUrl: 'https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=500&h=300&fit=crop',
    funFacts: [
      'Su cuello tenía 15 vértebras y medía hasta 6 metros',
      'Tragaba piedras para ayudar en la digestión',
      'Vivía en manadas para protegerse de depredadores'
    ]
  },
  {
    id: 4,
    name: 'Velociraptor',
    scientificName: 'Velociraptor mongoliensis',
    period: 'Cretácico Superior',
    diet: 'Carnívoro',
    length: '2 metros',
    weight: '15-20 kg',
    habitat: 'Desiertos y zonas áridas',
    description: 'Pequeño dinosaurio carnívoro conocido por su inteligencia, velocidad y la garra curva en forma de hoz en cada pata trasera. Cazaba en grupos coordinados.',
    imageUrl: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=500&h=300&fit=crop',
    funFacts: [
      'Tenía plumas y probablemente era de colores brillantes',
      'Su garra principal medía hasta 6.5 cm',
      'Era del tamaño de un pavo, no como en las películas'
    ]
  },
  {
    id: 5,
    name: 'Stegosaurio',
    scientificName: 'Stegosaurus stenops',
    period: 'Jurásico Superior',
    diet: 'Herbívoro',
    length: '9 metros',
    weight: '2-5 toneladas',
    habitat: 'Bosques de helechos y coníferas',
    description: 'Dinosaurio herbívoro famoso por las placas óseas en su espalda y las púas en su cola. A pesar de su tamaño, tenía un cerebro muy pequeño.',
    imageUrl: 'https://images.unsplash.com/photo-1541688097888-9d18056ba7d4?w=500&h=300&fit=crop',
    funFacts: [
      'Las placas de su espalda podían regular su temperatura corporal',
      'Su cerebro era del tamaño de una nuez',
      'Las púas de su cola se llaman "thagomizer"'
    ]
  },
  {
    id: 6,
    name: 'Pteranodon',
    scientificName: 'Pteranodon longiceps',
    period: 'Cretácico Superior',
    diet: 'Carnívoro',
    length: '6 metros de envergadura',
    weight: '20-30 kg',
    habitat: 'Costas marinas',
    description: 'Reptil volador (no técnicamente un dinosaurio) con una envergadura impresionante. Se alimentaba principalmente de peces que capturaba volando sobre el océano.',
    imageUrl: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&h=300&fit=crop',
    funFacts: [
      'No tenía dientes, sino un pico largo y puntiagudo',
      'Su cresta ósea podía medir hasta 1.8 metros',
      'Podía planear grandes distancias sin batir las alas'
    ]
  }
];
