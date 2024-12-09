// Example of centralized data file

export const categories = [
  {
    id: 0,
    name: "Oturacaq",
    description: "Qonaq otağı və mətbəx üçün seçimlər.",
    image: "/image/Vizyon1.JPG",
  },
  {
    id: 1,
    name: "Masa",
    description: "Müxtəlif ölçü və üslubda təklif olunan modellərimiz, həm kiçik, həm də geniş məkanlarda rahatlıq və zəriflik təmin edir.",
    image: "/image/masa foto.jpg",
  },
  {
    id: 2,
    name: "Bağ Mebeli",
    description: "Bağınız üçün zövqlü və funksional mebel dəstləri!",
    image: "/image/bag desti.jpg",

  },
  {
    id: 3,
    name: "TV stend",
    description: "Məkanınıza modern və funksional toxunuş əlavə etmək üçün ideal seçim!",
    image: "/image/tv.jpg",
  },
  {
    id: 4,
    name: "Bar Oturacağı",
    description: "Zövqlü və funksional bar oturacaqları, istər evdəki mətbəx barı, istər restoran və ya kafe üçün mükəmməl seçimdir.",
    image: "/image/Bar oturacaq.jpg",
  },
  {
    id: 5,
    name: "Yataq Mebeli",
    description:"Yataq otağınız üçün zərif və funksional mebel dəstləri",
    image: "/image/yataq.jpg",
  },
  {
    id: 6,
    name: "Qəhvə masası",
    description: "Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.",
    image: "/image/Qehve masa 1.jpg",
  },
  {
    id: 7,
    name: "Müştəri evindən foto",
    description:"Bizim üçün ən vacib olan müştərilərimizin məmnuniyyətidir.Onların evlərinə əlavə etdiyimiz hər bir toxunuş, onların rahatlığı və zövqü üçün hazırlanır.",
    image: "/image/musteri.jpg",
  },

];

export const products = [
  {
    id: 0,
    name: 'Elma sandalye',
    category: "Oturacaq",
    price: 100,
    discountedPrice: 0, // Discounted price
    longDescription: " Bu müasir və rahat oturacaq, interyerinizə zərif bir toxunuş əlavə etmək üçün ideal seçimdir. Yüksək keyfiyyətli parça ilə örtülmüşdür və yumşaq oturacaq hissəsi uzun müddət oturma zamanı komfort təmin edir. Arxa dayağı erqonomik dizaynı ilə dəstəklənmişdir, bu da düzgün duruşu qorumağa kömək edir. Uzunömürlü və davamlı material, asan təmizlənən səth, müasir interyerlərlə uyğun dizayn.",
    images: [
      "/image/eboz.png",
    ],
    colors: [
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [
          "/image/Vizyon2.JPG",
          "/image/Vizyon3.JPG",
          "/image/Vlog vizyon.JPG",
          "/image/Vlog v 1.JPG",
          "/image/Vlog v 2.JPG",

        ],
        defaultColorImage:'/image/Vizyon1.JPG',
      },
      {
        name: "Çəhrayı",
        code: "#FFC0CB",
        images: [
          "/image/epembe.JPG",
          "/image/epembe1.JPG",
          "/image/epembe2.jpg",
          "/image/epembe4.jpg",
        ],
        defaultColorImage:'/image/epembe1.jpg'
      },
      {
        name: "Qara",
        code: "#000000",
        images: [
          "/image/eqara.jpg",         
        ],
        defaultColorImage:'/image/eqara1.png'
      },
      {
        name: "Ağ",
        code: "#F5F5DC",
        images: [
          "/image/eag.JPG", 
        ],
        defaultColorImage:'/image/eag.JPG'
      },
      {
        name: "Qəhvəyi",
        code: "#8B4513",
        images: [
          "/image/eqehve.jpg",
        ],
        defaultColorImage:'/image/eqehve.jpg'
      },
    ],
    defaultImage:
      "/image/b3.jpg",
    description:
    "Həm yemək, həm də iş masaları üçün uyğundur",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "bəli",
  },
  
  {
    id: 1,
    name: `Riva sandalye`,
    category: "Oturacaq",
    price: 105,
    discountedPrice:105, // Discounted price
    longDescription: " Bu gözoxşayan və komfortlu oturacaq, modern və eleqant dizaynı ilə diqqət çəkir. Yumşaq və keyfiyyətli parça döşəməsi sayəsində bu oturacaq, uzun müddət oturma zamanı maksimum rahatlıq təmin edir. İstənilən məkanı zəriflik və rahatlıqla tamamlayacaq bir mebel parçasıdır. Yumşaq döşəməsi və incə, vertikal tikiş detallarına malik arxa dayaq hissəsi, oturacağa həm rahatlıq, həm də estetik gözəllik qatır.",
    
    images: [
       "/image/rantrasit.JPG",
       "/image/rkerm.JPG"
    ],
    colors: [

      {
        name: "Vizon",
        code: "#D2B48C",
        images: [
          "/image/rvizon1.JPG",
          "/image/rvizon2.JPG",
          "/image/rvizon3.JPG",
          "/image/rvizon4.JPG",
        ],
        defaultColorImage:'/image/rvizon.JPG',
      },
      {
        name: "Çəhrayı",
        code: "#FFC0CB",
        images: [
          "/image/rpembe1.JPG",
          "/image/rpembe2.JPG",
          "/image/rpembe4.JPG",
        ],
        defaultColorImage:'/image/rpembe.JPG'
      },
      
      {
        name: "Yaşıl",
        code: "#228B22",
        images: [
          "/image/ryasil.JPG",
        ],
        defaultColorImage:'/image/ryasil.JPG'
      },
    ],
    defaultImage: "/image/b1.jpg",
    description:
      "Bu cür oturacaqlar adətən yemək otaqlarında, mətbəxlərdə, ofislərdə və ya istirahət zonalarında istifadə olunur. Onlar həm funksional, həm də dekorativ element kimi xidmət edə bilər.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 2,
    name: "Defne sandalye",
    category: "Oturacaq",
    price: 100,
    discountedPrice: 100, // Discounted price
    longDescription:
      "Şık və rahat oturacaq axtarırsınızsa, bu model mükəmməl seçimdir. Məxməri üzlüklə örtülmüş oturacaq, zərif və müasir dizaynı ilə interyerinizə fərqli bir hava qatır. Rahat oturacaq hissəsi və arxa dayaq dəstəyi, uzun müddət oturarkən belə rahat qalmanıza imkan verir.",
      images: [
        "/image/defnes.jpg",
        "/image/dgoy.jpg",
        "/image/dgri.jpg",
        "/image/dsiyah.jpg",
     ],
    colors: [
      {
        name: "Çəhrayı",
        code: "#FFC0CB",
        images: [
      "/image/dpembe1.png", "/image/dpembe2.png",  
        ],
        defaultColorImage:'/image/dpembe.png'
      },
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [     
        ],
        defaultColorImage:'/image/dvizon.jpg'
      },
      {
        name: "Ağ",
        code: "#F5F5DC",
        images: 
        [     
        ],
        defaultColorImage:`/image/dkrem.jpg`
      },      
    ],
    defaultImage: "/image/defneb.jpg",
    description:"Oturacağın üst hissəsi yumuşaq, babyface parçadan hazırlanır. Ayaqları ilə dayanıqlı olan bu oturacaq, uzunmüddətli istifadə üçün nəzərdə tutulmuşdur.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 3,
    name: "Limon",
    category: "Oturacaq",
    price: 160,
    discountedPrice: 160, // Discounted price
    longDescription:
      "Bu yüksək keyfiyyətli oturacaq, həm rahatlıq, həm də estetik görünüş baxımından mükəmməl seçimdir. Sadə və zərif dizaynı ilə interyerinizi müasir tərzlə tamamlayır.",
      images: [
        "/image/lv.jpg",
     ],
    colors: [
      {
        name: "Boz",
        code: "#808080",
        images: [
          "/image/lgr1.jpg", 
          "/image/lgr2.jpg", 
        ],
        defaultColorImage:`/image/lgr.jpg` 
      },      
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
          "/image/lk.jpg", 
          "/image/lk2.jpg", 
        ],
        defaultColorImage:`/image/lk1.jpg` 
      },
    ],
    defaultImage: "/image/limonb.jpg",
    description:"Oturacağın üst hissəsi yumuşaq, babyface parçadan hazırlanır. Ayaqları ilə dayanıqlı olan bu oturacaq, uzunmüddətli istifadə üçün nəzərdə tutulmuşdur.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 4,
    name: "Lincoln Sandalye ",
    category: "Oturacaq",
    price: 160,
    discountedPrice: 160, // Discounted price
    longDescription:
       "Modern və zərif dizayna malik bu oturacaq, interyerinizə sadə, amma şık bir toxunuş gətirir. ",
    images: [
      "/image/ling.jpg",
    ],    
    colors: [
     {
        name: "Vizon",
        code: "#D2B48C",
        images: [           
        ],
        defaultColorImage:`/image/linv.jpg` 
      },
      {
        name: "Yaşıl",
        code: "#228B22",
        images: [          
        ],
        defaultColorImage:`/image/liny.jpg` 
      },
      {
        name: "Qara",
        code: "#000000",
        images: [          
        ],
        defaultColorImage:`/image/lina.jpg` 
      },
      {
        name: "Qəhvəyi",
        code: "#8B4513",
        images: [          
        ],
        defaultColorImage:'/image/linka.jpg'
      },      
    ],
    defaultImage: "/image/Lincoln.jpg",
    description:
      "Neytral tonlu yumşaq məxməri üzlük, hər məkanda uyumlu görünüş təmin edərkən, geniş və rahat oturacaq dizaynı sayəsində uzun müddətli oturuşlar üçün idealdır. ",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bu həftə",
  },
  {
    id: 5,
    name: "Ay Sandalye ",
    category: "Oturacaq",
    price: 100,
    discountedPrice: 95, // Discounted price
    longDescription:
       "Oturacaq minimalist və şık bir dizayna malikdir. Arxa hissəsində metal çubuqlardan ibarət açıq konstruksiya var ki, bu da ona yüngül və modern bir görünüş qazandırır. Türkiyə fabrik istehsalıdır. Metal ayaqlar və incə arxa dayaq çubuqları, modern sənaye üslubu ilə minimalist tərzin harmoniya içində olduğunu nümayiş etdirir. ",
    images: [
      "/image/ayb.jpg",
    ],    
    colors: [
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
          "/image/ayag1.jpg", 
          "/image/ayag2.jpg",   
        ],
        defaultColorImage:`/image/ayag.jpg` 
      },
      {
        name: "Boz",
        code: "#808080",
        images: [          
          "/image/aygri1.jpg", 
          "/image/aygri2.jpg",
          "/image/ayqri3.jpg", 
        ],
        defaultColorImage:`/image/aygri.jpg` 
      },
    ],
    defaultImage: "/image/aybb.jpg",
    description:
      "Müxrəlif rəng seçimləri ilə həm ev, həm də kafe və restoran kimi ictimai məkanlar üçün ideal seçimdir.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 6,
    name: "Loren Sandalye ",
    category: "Oturacaq",
    price: 100,
    discountedPrice: 100, // Discounted price
    longDescription:
       "Zərif görünüşü, rahat oturma təcrübəsi və keyfiyyətli materialları ilə həm estetikanı, həm də funksionallığı bir araya gətirir. Zərif və minimalist dizayn. Uzunömürlü və keyfiyyətli materiallardan hazırlanmışdır. Asan təmizləmə və baxım.  ",
    images: [
      "/image/Lorbb.jpg",
    ],    
    colors: [
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
          "/image/lork.jpg", 
          "/image/lork2.jpg",   
        ],
        defaultColorImage:`/image/lork1.jpg` 
      },
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [  "/image/lorv1.jpg",          
        ],
        defaultColorImage:`/image/Lorv.jpg` 
      },
      {
        name: "Boz",
        code: "#808080",
        images: [          
        ],
        defaultColorImage:`/image/Lorgri.jpg` 
      },

    ],
    defaultImage: "/image/lorenb.jpg",
    description:
      "İstər ev, istər ofis, istərsə də restoran və kafelər üçün əvəzolunmaz seçimdir.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 7,
    name: "Bahar Sandalye ",
    category: "Oturacaq",
    price: 95,
    discountedPrice: 90, // Discounted price
    longDescription:
       "Sadə, zərif və funksional olan bu oturacaq, müxtəlif məkanlarda həm estetik, həm də rahatlıq təmin edir. X şəklində arxa dəstək dizaynı, möhkəm metal konstruksiya və yumşaq oturacaq hissəsi ilə ideal seçimdir.",
    images: [
      "/image/baharb.jpg",
    ],    
    colors: [
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
        ],
        defaultColorImage:`/image/bah1.jpg` 
      },
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [       
        ],
        defaultColorImage:`/image/bahv.jpg` 
      },
      {
        name: "Qırmızı",
        code: "#FF0000",
        images: [         
        ],
        defaultColorImage:`/image/bahq.jpg` 
      },
      {
        name: "Boz",
        code: "#808080",
        images: [   "/image/bqeh.jpg"       
        ],
        defaultColorImage:`/image/bah.jpg` 
      },
      
    ],
    defaultImage: "/image/baharb1.jpg",
    description:
      "Yemək otağı masaları ilə uyğun gəlir. Restoran və kafelərdə müasir və klassik atmosfer yaradır. Geniş qonaq otaqlarında əlavə oturacaq kimi istifadə edilə bilər.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 8,
    name: "Örme ay Sandalye ",
    category: "Oturacaq",
    price: 100,
    discountedPrice: 100, // Discounted price
    longDescription:
"Lüks və zərif dizayna malik bu oturacaq, məxməri oturacaq hissəsi və metal çərçivəsi ilə interyerinizə xüsusi bir toxunuş əlavə edir. Arxa dayaqdakı bükülmüş detalları ilə diqqət çəkən bu model, müasir və qlamur görünüşü ilə göz oxşayır.",
    images: [
      "/image/oayb.jpg",
      "/image/oaya.jpg",
    ],    
    colors: [
      {
        name: "Qara",
        code: "#000000",
        images: [
      "/image/oayq1.jpg", 
      "/image/oayq2.jpg",  
        ],
        defaultColorImage:'/image/oayq.jpg'
      },
      {
        name: "Çəhrayı",
        code: "#FFC0CB",
        images: [
        ],
        defaultColorImage:'/image/oayp.jpg'
      },
      
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [       
        ],
        defaultColorImage:`/image/oayv.jpg` 
      },
      
    ],
    defaultImage: "/image/oayb1.jpg",
    description:
      "Bu oturacaq həm yemək masası ətrafında, həm də xüsusi tədbir və qəbul otaqlarında dəbli bir seçim olaraq özünü göstərir ",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 9,
    name: "Nil Sandalye ",
    category: "Oturacaq",
    price: 95,
    discountedPrice: 85, // Discounted price
    longDescription:
" Rahat oturacaq və arxa dəstək hissəsi ilə uzun müddət oturmağı komfortlu edir. Geniş istifadəyə uyğun olan bu model yemək otaqları, ofislər, restoranlar və qonaq otaqları üçün ideal seçimdir. Yüksək keyfiyyətli parça ilə örtülmüşdür. Bu örtük toxunuşa yumşaqdır və təmizlənməsi asandır.",
    images: [
      "/image/nil.jpg",
      "/image/nil.jpg",
    ],    
    colors: [
      {
        name: "Qara",
        code: "#000000",
        images: [
        ],
        defaultColorImage:'/image/nilsiyah.jpg'
      },      
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [       
        ],
        defaultColorImage:`/image/nilv.jpg` 
      }, 
      {
        name: "Boz",
        code: "#808080",
        images: [       
        ],
        defaultColorImage:`/image/nilqri.jpg` 
      },     
    ],
    defaultImage: "/image/nil1.jpg",
    description:
      "Mətbəx masalarının ətrafında tamamlayıcı kimi istifadə edilə bilər. Restoran və kafelər üçün müasir və eleqant atmosfer təmin edir. Ofis və ya gözləmə otaqlarında qonaq oturacağı kimi mükəmməl seçimdir.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 10,
    name: "Ayla Sandalye ",
    category: "Oturacaq",
    price: 190,
    discountedPrice: 170, // Discounted price
    longDescription:
" Oturacaq modern və lüks dizaynı ilə seçilir. Oturacağın arxa hissəsi kvadrat naxışlarla işlənmişdir. Oturacağın arxa hissəsində metal halqa dekorasiyası əlavə olunub ki, bu da ona şık və prestijli bir görünüş verir. Halqa detayı həm funksional, həm də estetik bir vurğudur.",
    images: [
      "/image/aylab.jpg",
      "/image/aylgri.jpg",
      "/image/Aylpem.jpg",
    ],    
    colors: [
      {
        name: "Antasit",
        code: "#393D47",
        images: [ "/image/aylant1.jpg",
        ],
        defaultColorImage:'/image/aylant.jpg'
      },   
      {
        name: "Krem",
        code: "#FFFACD",
        images: ["/image/aylkr1.jpg",
        ],
        defaultColorImage:`/image/aylkr.jpg` 
      },   
       
    ],
    defaultImage: "/image/aylabb.jpg",
    description:
      " Yumşaq və erqonomik oturacaq dizaynı uzun müddət oturmaq üçün ideald olduğundan yemək otaqları, qonaq otaqları, ofis və iş məkanları, otellər və restoranlar üçün əvəzolunmaz seçimdir.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 11,
    name: "Emircan Sandalye ",
    category: "Oturacaq",
    price: 220,
    discountedPrice: 190, // Discounted price
    longDescription:
" Yalnız müasir görünüşü ilə deyil, həm də rahatlığı ilə seçilən bu oturacaq uzun müddət oturuş üçün ideal dizayn edilmiş, hər detalı isə zərifliklə tamamlanmışdır. Kürək dəstəyinə tam uyğun olaraq erqonomik əyrilərlə dizayn edilib.  Şık və estetik görünüşü minimalist və modern interyerlərə uyğunlaşır.",
    images: [
    ],    
    colors: [{
        name: "Boz",
        code: "#808080",
        images: [    
          "/image/emrgri.png",
        ],
        defaultColorImage:`/image/emrgri1.png` 
      },  
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [   "/image/emrv.jpg", 
          "/image/emrv2.jpg",   
        ],
        defaultColorImage:`/image/emrv1.jpg` 
      }, 
         
    ],
    defaultImage: "/image/Emirgan.jpg",
    description:
      "Ev və ofis interyerinizə dəbdəbə qatacaq bu şık oturacaqla rahatlıq və dizaynı birləşdirin!",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 12,
    name: "İstinye Sandalye",
    category: "Oturacaq",
    price: 220,
    discountedPrice: 190, // Discounted price
    longDescription:
" Ev və ofis interyerinizi müasir və klassik üslubun harmoniyası ilə zənginləşdirin. Bu şık məxməri oturacaq, yalnız rahatlıq üçün deyil, həm də zövqlü bir dekor elementi kimi istifadəyə yararlıdır. Müasir detallar və incə klassik naxışlar birləşərək bu məhsulu həm estetik baxımdan diqqətçəkən, həm də funksional hala gətirir.",
    images: [ 
      "/image/istv.jpg",
      "/image/istka.jpg",
    ],    
    colors: [ {
        name: "Yaşıl",
        code: "#228B22",
        images: [          
        ],
        defaultColorImage:`/image/isty.png` 
      },  {
        name: "Boz",
        code: "#808080",
        images: [    
          "/image/istg.jpg",    
        ],
        defaultColorImage:`/image/istg1.jpg` 
      },   
      {
        name: "Krem",
        code: "#FFFACD",
        images: [ "/image/istkr1.jpg",
        ],
        defaultColorImage:`/image/istkr.jpg` 
      },  
    ],
    defaultImage: "/image/istinyebb.png",
    description:
      "Metal baza strukturun stabilliyini və uzunmüddətli istifadəni təmin edir. Həm yemək masaları, həm də ofis və istirahət məkanları üçün mükəmməldir.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  // Add more products as needed #393D47
];
export const Mycolors = [
  { name: "Ağ", code: "#fff" },
  { name: "Qara", code: "#000" },
  { name: "Boz", code: "#999" },
  { name: "Qırmızı", code: "#f00" },
  { name: "Yaşıl", code: "#0f0" },
];
