/* eslint-disable react-hooks/rules-of-hooks */
// Select the correct database
use('nomads-path');

// Insert event documents
db.getCollection('events').insertMany([
  {
    title: {
      en: "Naadam Festival",
      mn: "Наадмын баяр"
    },
    shortDescription: {
      en: "Mongolia's biggest traditional celebration.",
      mn: "Монголын хамгийн том уламжлалт баяр."
    },
    fullDescription: {
      en: "The Naadam Festival features wrestling, horse racing, and archery — celebrated every July.",
      mn: "Наадмын баяраар бөх, хурдан морь, сурын тэмцээн болдог бөгөөд жил бүрийн 7 сард тэмдэглэдэг."
    },
    image: "/images/naadam.jpg"
  },
  {
    title: {
      en: "Ice Festival at Khuvsgul Lake",
      mn: "Хөвсгөл нуурын мөсний наадам"
    },
    shortDescription: {
      en: "Frozen lake fun in northern Mongolia.",
      mn: "Хөвсгөлд өвлийн мөсөн баяр."
    },
    fullDescription: {
      en: "Held every March, the festival includes ice sculpting, sleigh rides, and traditional performances.",
      mn: "Жил бүрийн 3 сард зохион байгуулагддаг энэхүү наадамд мөсөн баримал, морин чарганы уралдаан, ардын урлагийн тоглолт багтдаг."
    },
    image: "/images/khuvsgul.jpg"
  },
  {
    title: {
      en: "Golden Eagle Festival",
      mn: "Алтан бүргэдийн баяр"
    },
    shortDescription: {
      en: "Kazakh eagle hunters gather in Bayan-Ölgii.",
      mn: "Баян-Өлгийд бүргэдчид цуглардаг."
    },
    fullDescription: {
      en: "Every October, hunters demonstrate their eagle training skills with competitions and cultural displays.",
      mn: "Аравдугаар сард бүргэдийн уралдаан, урлагийн тоглолт зэрэг арга хэмжээнүүд болдог."
    },
    image: "/images/eagle.jpg"
  },
  {
    title: {
      en: "PlayTime Festival",
      mn: "PlayTime хөгжмийн наадам"
    },
    shortDescription: {
      en: "A festival for children and families.",
      mn: "Гэр бүл, хүүхдүүдэд зориулсан баяр."
    },
    fullDescription: {
      en: "This festival includes games, performances, and activities designed for children and families.",
      mn: "Хүүхэд, гэр бүлд зориулсан тоглоом, тоглолт, үйл ажиллагааг багтаадаг."
    },
    image: "/images/playtime.jpg"
  },
  {
    title: {
      en: "Mongolian Horse Festival",
      mn: "Монгол адууны баяр"
    },
    shortDescription: {
      en: "Celebrating the horse culture of Mongolia.",
      mn: "Монголын морин соёлыг тэмдэглэдэг баяр."
    },
    fullDescription: {
      en: "This festival showcases horse racing, traditional games, and cultural performances.",
      mn: "Морин уралдаан, үндэсний тоглоом, соёлын тоглолт үзүүлдэг."
    },
    image: "/images/horse-festival.jpg"
  }
]);

// Insert place documents
db.getCollection('places').insertMany([
  {
    title: {
      en: "Gorkhi-Terelj National Park",
      mn: "Горхи-Тэрэлж Үндэсний Парк"
    },
    shortDescription: {
      en: "A scenic park near Ulaanbaatar.",
      mn: "Улаанбаатарын ойролцоох үзэсгэлэнт парк."
    },
    fullDescription: {
      en: "Known for its granite rock formations, Buddhist temples, and open valleys perfect for hiking and horseback riding.",
      mn: "Хад чулуу, хийд, морь унах болон алхахад тохиромжтой хөндий газраараа алдартай."
    },
    image: "/images/terelj.png",
    lat: 47.805,
    lng: 107.436
  },
  {
    title: {
      en: "Genghis Khan Equestrian Statue",
      mn: "Чингис хааны морьт хөшөө"
    },
    shortDescription: {
      en: "The world’s largest equestrian statue.",
      mn: "Дэлхийн хамгийн том морьт хөшөө."
    },
    fullDescription: {
      en: "Located east of Ulaanbaatar, this massive statue of Chinggis Khaan is 40 meters tall and a popular photo spot.",
      mn: "Улаанбаатараас зүүн тийш орших энэ хөшөө нь 40 метр өндөртэй бөгөөд зураг авахад тохиромжтой газар юм."
    },
    image: "/images/khaan.jpg",
    lat: 47.8021,
    lng: 107.5358
  },
  {
    title: {
      en: "Khövsgöl Lake",
      mn: "Хөвсгөл нуур"
    },
    shortDescription: {
      en: "Mongolia’s largest freshwater lake.",
      mn: "Монголын хамгийн том цэнгэг уст нуур."
    },
    fullDescription: {
      en: "Also called the ‘Blue Pearl’, Khövsgöl is a pristine alpine lake in northern Mongolia surrounded by forests and mountains.",
      mn: "‘Хөх сувд’ хэмээн нэрлэгддэг энэхүү нуур нь хойд Монголын үзэсгэлэнт ой мод, уулсаар хүрээлэгдсэн байдаг."
    },
    image: "/images/khuvsgul-lake.jpg",
    lat: 51.4982,
    lng: 100.5684
  },
  {
    title: {
      en: "Orkhon Valley",
      mn: "Орхоны хөндий"
    },
    shortDescription: {
      en: "A UNESCO World Heritage Site.",
      mn: "ЮНЕСКО-ийн дэлхийн өвд багтсан газар."
    },
    fullDescription: {
      en: "Rich in archaeological sites, temples, and ancient Turkic monuments, the Orkhon Valley is a cradle of Mongolian civilization.",
      mn: "Эртний түрэг дурсгал, хийд, археологийн олдворуудаар баялаг энэ хөндий нь Монголын соёл иргэншлийн өлгий нутаг юм."
    },
    image: "/images/orkhon.jpg",
    lat: 47.0591,
    lng: 102.8231
  },
  {
    title: {
      en: "Bayanzag (Flaming Cliffs)",
      mn: "Баянзаг (Гал улаан хад)"
    },
    shortDescription: {
      en: "Famous for dinosaur fossils.",
      mn: "Динозаврын чулуужсан үлдэгдлээрээ алдартай."
    },
    fullDescription: {
      en: "These red sandstone cliffs in the Gobi Desert are where dinosaur eggs and fossils were first discovered in Mongolia.",
      mn: "Говийн улаан хаданд динозаврын өндөг болон чулуужсан яснууд анх олдсон юм."
    },
    image: "/images/flaming-cliffs.jpg",
    lat: 44.1967,
    lng: 103.5274
  }
]);
