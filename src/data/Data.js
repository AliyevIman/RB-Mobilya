// Example of centralized data file


export const categories = [
  {
    id: 0,
    name: "Türkiyə İstehsalı Oturacaqlar",
    description: "Qonaq otağı və mətbəx üçün seçimlər.",
    image: "/image/Vizyon1.jpeg",
  },
  {
    id: 1,
    name: "Çin İstehsalı Oturacaqlar",
    description: "Qonaq otağı və mətbəx üçün seçimlər.",
    image: "/image/Cinoturacaqbb.jpeg",
  },
  {
    id: 2,
    name: "Dəstlər",
    description: "Qonaq otağı və mətbəx üçün seçimlər.",
    image: "/image/Destbb.jpeg",
  },
  {
    id: 3,
    name: "Türkiyə İstehsalı Masalar",
    description: "Müxtəlif ölçü və üslubda təklif olunan modellərimiz, həm kiçik, həm də geniş məkanlarda rahatlıq və zəriflik təmin edir.",
    image: "/image/masalarbb.jpg",
  },
  {
    id: 4,
    name: "Çin İstehsalı Masalar",
    description: "Klassik, minimalist, ya da modern üslubda dizayn edilmiş , keyfiyyətli , müxtəliflik və büdcəyə uyğun seçimlər",
    image: "/image/CinBB.jpeg",
  },
  {
    id: 5,
    name: "Bağ Mebeli",
    description: "Bağınız üçün zövqlü və funksional mebel dəstləri!",
    image: "/image/Bagbb.jpeg",
  },
  {
    id: 6,
    name: "Divan və Kreslo",
    description: "Məkanınıza modern və funksional toxunuş əlavə etmək üçün ideal seçim!",
    image: "/image/tv.jpg",
  },
  {
    id: 7,
    name: "Bar Oturacağı",
    description: "Zövqlü və funksional bar oturacaqları, istər evdəki mətbəx barı, istər restoran və ya kafe üçün mükəmməl seçimdir.",
    image: "/image/Bar oturacaq.jpg",
  },
  {
    id: 8,
    name: "Yataq Mebeli",
    description:"Yataq otağınız üçün zərif və funksional mebel dəstləri",
    image: "/image/yataq.jpg",
  },
  {
    id: 9,
    name: "Qəhvə masası",
    description: "Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.",
    image: "/image/Qehve masa 1.jpg",
  },
];
export const products = [
  {
    id: 0,
    name: 'Elma sandalye',
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
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
    category: "Türkiyə İstehsalı Oturacaqlar",
    price: 220,
    discountedPrice: 190, // Discounted price
    longDescription:
" Ev və ofis interyerinizi müasir və klassik üslubun harmoniyası ilə zənginləşdirin. Bu şık məxməri oturacaq, yalnız rahatlıq üçün deyil, həm də zövqlü bir dekor elementi kimi istifadəyə yararlıdır. Müasir detallar və incə klassik naxışlar birləşərək bu məhsulu həm estetik baxımdan diqqətçəkən, həm də funksional hala gətirir.",
    images: [ 
      "/image/İstinyebb1.jpeg",
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
    defaultImage: "/image/İstinyebb.jpeg",
    description:
      "Metal baza strukturun stabilliyini və uzunmüddətli istifadəni təmin edir. Həm yemək masaları, həm də ofis və istirahət məkanları üçün mükəmməldir.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 13,
    name: "Rita Sandalye",
    category: "Türkiyə İstehsalı Oturacaqlar",
    price: 160,
    discountedPrice: 140, // Discounted price
    longDescription:
"Bu məhsul, interyerinizi həm şık, həm də cazibədar bir görünüşlə tamamlayacaq lüks bir oturacaqdır. Onun forması insan anatomiyasına uyğun şəkildə hazırlanmışdır və həm rahatlıq, həm də dəstək təmin edir. Rahat oturuşu ilə yanaşı, estetik görünüşü də məkanınızın dəyərini artıracaq. Arxa hissədəki tufted (düyməli) dizayn klassik zərifliyi əks etdirir, qızıl metal ayaqlar isə müasir və dəbdəbəli bir toxunuş qatır. ",
    images: [ 
      "/image/Ritabb.jpeg",
    ],    
    colors: [ {
        name: "Yaşıl",
        code: "#228B22",
        images: [          
        ],
        defaultColorImage:`/image/Ritay.jpg` 
      },  {
        name: "Boz",
        code: "#808080",
        images: [    
          "/image/ritagri.jpg",
          "/image/Ritagri2.jpg",

        ],
        defaultColorImage:`/image/Ritagri1.jpg` 
      },   
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
        ],
        defaultColorImage:`/image/ritab.jpg` 
      },  
    ],
    defaultImage: "/image/Ritabb1.jpeg",
    description:
      "Yüksək zövqlə hazırlanmış bu oturacaq həm evinizdə, həm də ofis və restoran kimi kommersiya məkanlarında mükəmməl bir seçim olacaqdır.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 14,
    name: "Prag Sandalye",
    category: "Türkiyə İstehsalı Oturacaqlar",
    price: 180,
    discountedPrice: 160, // Discounted price
    longDescription:
"Bu oturacaq modern və zərif dizaynı ilə diqqət çəkir. Oturacaq hissəsi yumşaq və keyfiyyətli parça ilə örtülmüşdür, bu da həm estetik görünüş, həm də rahatlıq təmin edir. Parça sürtünməyə və gündəlik istifadəyə qarşı davamlıdır. Ayaqların yarım dairəvi dizaynı oturacaq üçün əlavə stabillik və modern bir hava təmin edir. Oturacağın arxa dayaq hissəsi əyri forması ilə oturarkən belinizə əlavə dəstək verir, uzun müddət oturma üçün idealdır.",
    images: [ 
      "/image/Pragbb.jpeg",
      "/image/Pragg.jpg",
    ],    
    colors: [  
      {
        name: "Krem",
        code: "#FFFACD",
        images: [`/image/Pragkr1.jpg`, 
          "/image/Pragkr2.jpg",
      

        ],
        defaultColorImage:`/image/Pragkr.jpg` 
      },  
      {
        name: "Qara",
        code: "#000000",
        images: [
        ],
        defaultColorImage:'/image/Pragsi.jpg'
      },  
      {
        name: "Qəhvəyi",
        code: "#8B4513",
        images: [
        ],
        defaultColorImage:'/image/pragqeh.jpg'
      },
    ],
    defaultImage: "/image/Pragbb1.jpeg",
    description:
      "Yüksək zövqlə hazırlanmış bu oturacaq həm evinizdə, həm də ofis və restoran kimi kommersiya məkanlarında mükəmməl bir seçim olacaqdır.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 15,
    name: "Liza Sandalye",
    category: "Türkiyə İstehsalı Oturacaqlar",
    price: 160,
    discountedPrice: 140, // Discounted price
    longDescription:
"Oturacaq sadəliyi və müasir dizaynı ilə seçilən, həm estetik baxımdan cəlbedici, həm də funksional olan yüksək keyfiyyətli bir mebeldir. İstifadə edilən materiallardan dizayn detalları və tətbiq sahələrinə qədər bütün xüsusiyyətləri, onun həm rahat, həm də uzunmüddətli istifadəyə uyğun olduğunu göstərir. Oturacaqın arxalığı və oturma yeri rahatlıq təmin edən yumşaq parça ilə örtülüb, bu da həm müasir görünüş yaradır, həm də istənilən mühitdə harmonik görünür.",
    images: [ 
      "/image/Lizabb.jpeg",
      "/image/lizag.jpg",
      "/image/Lizaant.jpg",   
    ],    
    colors: [  
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [
          `/image/Lizav1.jpg`,
          `/image/Lizav2.jpg`,

        ],
        defaultColorImage:`/image/Lizav.jpg` 
      },
      {
        name: "Qara",
        code: "#000000",
        images: [
        ],
        defaultColorImage:'/image/Lizaq.jpg'
      },  
      {
        name: "Qəhvəyi",
        code: "#8B4513",
        images: [
        ],
        defaultColorImage:'/image/Lizak.jpg'
      },
      
    ],
    defaultImage: "/image/Lizabb2.jpeg",
    description:
      "Zərif və neytral rəngi ilə hər növ masa ilə uyğundur. İş və ya oxu, ya da qonaq otağı üçün istifadə edilə bilər ",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 16,
    name: 'Venus Masa',
    category: "Türkiyə İstehsalı Masalar",
    price: 350,
    discountedPrice: 330, // Discounted price
    longDescription: " Türkiyə istehsalı masa modern və lüks üslubda hazırlanıb. Parlaq səth, zərif xəttlər və minimalistik detallarla bəzədilmişdi. Eni 80 sm, uzunluğu isə 120 sm olub, əlavə olaraq 30 sm böyüyərək daha geniş oturma rahatlığı verir. MDF lak örtüklü material səth davamlılıq və asan qulluq təmin edir.",
    images: [
      "/image/Venusbb1.jpeg",
      "/image/Venusant.jpg",
    ],
    colors: [
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [
          "/image/Venus.jpg",
          "/image/Venus2.jpg",
          
        ],
        defaultColorImage:'/image/Venus1.jpg',
      }, 
      {
        name: "Boz",
        code: "#808080",
        images: [    
          "/image/Venusgr1.jpg",
          "/image/Venusgr2.jpg",
          "/image/Venusgr3.jpg",       
        ],
        defaultColorImage:`/image/Venusgr.jpg` 
      }, 
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
          `/image/Venuskrm1.jpg`, 
          "/image/Venuskrm2.jpg",    
        ],
        defaultColorImage:`/image/Venuskrm.jpg` 
      },  
      {
        name: "Qara",
        code: "#000000",
        images: [
        ],
        defaultColorImage:'/image/Venussiyah.jpg'
      },  
],
defaultImage: "/image/Venusbb.jpeg",
    description:
      "Zərif və neytral rəngi ilə hər növ masa ilə uyğundur. İş və ya oxu, ya da qonaq otağı üçün istifadə edilə bilər ",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",

  },
  {
    id: 17,
    name: 'Valentino Masa 80*130',
    category: "Türkiyə İstehsalı Masalar",
    price: 690,
    discountedPrice: 600, // Discounted price
    longDescription: 
    "  Bu modern dizaynlı yemək masası, genişlənə bilən mexanizmi sayəsində həm gündəlik istifadədə, həm də qonaqlarınızı ağırlamaq üçün ideal bir seçimdir. Çəkilə bilən xüsusiyyəti ilə istədiyiniz zaman əlavə yer əldə edə bilərsiniz. İstehsal Türkiyə, material isə High gloss MDF dir. En 80 sm, uzunluq isə bağlı halda 130sm, açılıdığı zaman isə 160sm uzunluqda olur.",
    images: [
      "/image/Valentinobb.jpeg",
      "/image/Valentino3.jpg",
    ],
    colors: [
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
          `/image/Valentino1.jpg`, 
          "/image/Valentino2.jpg",    
        ],
        defaultColorImage:`/image/Valentino.jpg` 
      },      
      {
        name: "Boz",
        code: "#808080",
        images: [    
          "/image/Valentinogri1.jpg",
          "/image/Valentinogri2.jpg",
          "/image/Valentinogri3.jpg",       
        ],
        defaultColorImage:`/image/Valentinogri.jpg` 
      }, 
      {
        name: "Vizon",
        code: "#D2B48C",
        images: [         
        ],
        defaultColorImage:'/image/Valentinovizyon.jpg',
      },       
      {
        name: "Qara",
        code: "#000000",
        images: [
        ],
        defaultColorImage:'/image/Valentinosiyah.jpg'
      },  
],
defaultImage: "/image/Valentinobb1.jpeg",
    description:
      "Həm gündəlik, həm də qonaq masası kimi istifadə üçün idealdır. Çəkilə bilən mexanizmi asanlıqla istifadə edilə bilər, bu da həm ailə yığıncaqları, həm də geniş qonaq qrupları üçün ideal rahatlıq təmin edir.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
  {
    id: 18,
    name: 'Kütük Masa',
    category: "Türkiyə İstehsalı Masalar",
    price: 500,
    discountedPrice: 480, // Discounted price
    longDescription: 
    "Zərif və modern görünüşə malik olan bu masa, təkcə estetik dəyəri ilə deyil, həm də praktik xüsusiyyətləri ilə seçilir. Gündəlik həyatda istifadə rahatlığını artırmaq məqsədilə xüsusi olaraq gizli saxlama bölmələri ilə təchiz edilmişdir.Üst hissənin qaldırılması ilə daxilində olan bölmələrə asanlıqla çıxış əldə edilir. Bu bölmələr kiçik əşyaların saxlanması üçün ideal seçimdir və mətbəx və ya yemək otaqlarındakı Gündəlik həyatda istifadə rahatlığını artırmaq məqsədilə  təchiz edilmişdir. Bu xüsusiyyət, xüsusilə kiçik mənzillərdə və məkanın məhdud olduğu yerlərdə istifadə üçün çox uyğundur. Masanın gizli saxlama bölmələri həm funksionallıq təmin edir, həm də əlavə şkaf və ya rəfə olan ehtiyacı azaldır.",
    images: [
      "/image/Kutukbb.jpeg",
      "/image/Kutukbey.jpg",
    ],
    colors: [
      {
        name: "Krem",
        code: "#FFFACD",
        images: [
          `/image/Kutuk1.jpg`, 
          "/image/Kutuk2.jpg",    
        ],
        defaultColorImage:`/image/Kutuk.jpg` 
      },      
      {
        name: "Boz",
        code: "#808080",
        images: [    
          "/image/Kutukgri1.jpg",     
        ],
        defaultColorImage:`/image/Kutukgri.jpg` 
      },        
      {
        name: "Qara",
        code: "#000000",
        images: [ 
          "/image/Kutuksiyah1.jpg", 
          "/image/Kutuksiyah2.jpg",   
        ],
        defaultColorImage:'/image/Kutuksiyah.jpg'
      },  
],
defaultImage: "/image/Kutukbb1.jpeg",
    description:
      "Həm estetik cəhətdən zərifliyi, həm də praktik istifadəyə imkan verən dizaynı ilə müasir evlərdə və restoranlarda geniş istifadə olunur.",
    quantity: 10, // The available quantity in stock
    delivery: "1-2 gün", // Delivery time
    stock: "Bəli",
  },
    {
      id: 19,
      name: 'Valentino 90*160',
      category: "Türkiyə İstehsalı Masalar",
      price: 800,
      discountedPrice: 780, // Discounted price
      longDescription: 
      "Bu dəst geniş yemək otaqları, restoranlar, qonaq otaqları və yüksək standartlar tələb edən digər məkanlar üçün idealdır. Lüks və funksionallığı bir araya gətirən bu masa dəsti interyerinizə xüsusi bir təmtəraq qatacaq. Müftəlif rəng seçimləri mövcuddur. Üzəri High gloss MDF dən hazırlanmış olan masamızın eni 90sm, uzunluğu isə 160sm, əlavə olaraq isə 30sm açılaraq istifadə oluna bilər.",
      images: [
        "/image/Valbb.jpeg",
      ],
      colors: [
        {
          name: "Krem",
          code: "#FFFACD",
          images: [
            `/image/Valbeyaz.jpg`,   
          ],
          defaultColorImage:`/image/Valbeyaz1.jpg` 
        },      
        {
          name: "Boz",
          code: "#808080",
          images: [       
          ],
          defaultColorImage:`/image/Valgri.jpg` 
        },        
        {
          name: "Qara",
          code: "#000000",
          images: [ 
            "/image/Valsiyah.jpg", 
            "/image/Valsiyah1.jpg",
            "/image/Valsiyah2.jpg",   
          ],
          defaultColorImage:'/image/Valsiyah3.jpg'
        },  
  ],
  defaultImage: "/image/Valbb1.jpeg",
      description:
        "Çəkilə bilən xüsusiyyəti ilə istədiyiniz zaman əlavə yer əldə edə bilərsiniz. Ailə yığıncaqları və ziyafətlər üçün mükəmməl seçimdir.",
      quantity: 10, // The available quantity in stock
      delivery: "1-2 gün", // Delivery time
      stock: "Bəli",},
      {
        id: 20,
        name: 'Valentino 100*200',
        category: "Türkiyə İstehsalı Masalar",
        price: 1050,
        discountedPrice: 850, // Discounted price
        longDescription: 
        "Bu masa dəsti, müasir interyerlər üçün həm funksionallığı, həm də estetik gözəlliyi bir araya gətirən ideal seçimdir. Masa orta hissəsindən genişlənə biləcək şəkildə dizayn olunub. Bu xüsusiyyət onu daha çox sayda qonaq qəbul etmək üçün əlverişli edir və xüsusi tədbirlər üçün idealdır. Həm ailə yığıncaqları, həm də geniş qonaq qrupları üçün ideal rahatlıq təmin edən masanın eni 100sm, uzunluğu isə 200sm-dir. Əlavə olaraq 40+40sm açılma qabiliyyətinə malikdir.",
        images: [
          "/image/Valebb1.jpeg",
          "/image/Valev.jpg",

        ],
        colors: [
          {
            name: "Krem",
            code: "#FFFACD",
            images: [
              `/image/Valebeyaz1.jpg`, 
              `/image/Valebeyaz2.jpg`,  
              `/image/Valebeyaz4.jpg`,
              `/image/Valebeyaz3.jpg`,
            ],
            defaultColorImage:`/image/Valebeyaz.jpg` 
          },      
          {
            name: "Boz",
            code: "#808080",
            images: [    
                `/image/Valegri1.jpg`, 
                `/image/Valegri2.jpg`, 
            ],
            defaultColorImage:`/image/Valegri.jpg` 
          },        
          {
            name: "Qara",
            code: "#000000",
            images: [ 
              "/image/Valeant.jpg", 
            ],
            defaultColorImage:'/image/Valesiyah.jpg'
          },  
    ],
    defaultImage: "/image/Valebb.jpeg",
        description:
          "Müxtəlif rəng seçimləri ilə, tək qonaq otaqlarında deyil, həmçinin, restoran və kafelərdə də müasir dizayn elementi kimi istifadə oluna bilər.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 21,
        name: 'Sütun Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 850,
        discountedPrice: 750, // Discounted price
        longDescription: 
        "Bu unikal yemək masası müasir üslub və klassik zərifliyin harmoniyasını əks etdirir. Oval formalı bu masa hər növ interyerə uyğunlaşır və yemək otağınıza eleqant bir görünüş gətirir. Masa iki sütun şəklində möhkəm ayaqlarla dəstəklənir. Bu ayaqlar şaquli xəttli naxışlarla bəzədilib, masaya xüsusi bir vizual dərinlik qatır və onun sabitliyini təmin edir. Eni: 90 sm, Uzunluğu: 180 sm.",
        images: [
          "/image/Sutunbb.jpeg",
          "/image/Sutunb.jpg",

        ],
        colors: [     
          {
            name: "Qara",
            code: "#000000",
            images: [ 
              "/image/Sutun3.jpg", 
              "/image/Sutun2.jpg", 
              "/image/Sutun1.jpg", 
    ],
            defaultColorImage:'/image/Sutun.jpg'
          },  
    ],
    defaultImage: "/image/Sutunbb1.jpeg",
        description:
          "Oval formalı dizayn həm estetik gözəllik təqdim edir, həm də masanın ətrafında daha çox yer təmin edir, bu da sosial məclislər üçün idealdır.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 22,
        name: 'Pota Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 850,
        discountedPrice: 750, // Discounted price
        longDescription: 
        "Bu masa dəsti müasir və zərif üslubu ilə interyer dizaynında diqqət çəkən bir mebel nümunəsidir. Dalğalı kənar dizaynı ona unikal və dekorativ görünüş qatır. Metal konstruksiyalı ayaq hissəsi isə estetik və funksional olaraq diqqətəlayiqdir. Hörgü formasında işlənmiş ayaq dizaynı həm dayanıqlı, həm də yüngül görünüşlüdür. Diameteri 90sm",
        images: [
          "/image/Potabb.jpeg",
          "/image/Potaviz.jpg",

        ],
        colors: [ 
          {
            name: "Krem",
            code: "#FFFACD",
            images: [
            ],
            defaultColorImage:`/image/Potabeyaz1.jpg` 
          },     
          {
            name: "Qara",
            code: "#000000",
            images: [ 
    ],
            defaultColorImage:'/image/Potasiyah.jpg'
          },  
    ],
    defaultImage: "/image/Potabb1.jpeg",
        description:
          "Bu masa dəsti, həm müasir yemək otaqları, həm də qonaq otaqları üçün ideal bir seçimdir.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 23,
        name: 'Sütun masa dairəvi',
        category: "Türkiyə İstehsalı Masalar",
        price: 550,
        discountedPrice: 490, // Discounted price
        longDescription: 
        "Tumbalı ayaq, masaya stabil dayanıqlıq təmin edir və oturma rahatlığı yaradır, eyni zamanda müasir və şık bir görünüş qazandırır. Dörd tərəfdən oturma rahatlığı, estetik və funksional quruluş verir. Diametri 104sm dir.",
        images: [
          "/image/Dairebb.jpeg",
        ],
        colors: [ 
          {
            name: "Krem",
            code: "#FFFACD",
            images: [ "/image/daire1.jpg",
            ],
            defaultColorImage:`/image/daire2.jpg` 
          },
    ],
    defaultImage: "/image/Dairebb1.jpeg",
        description:
          "Kompakt ölçüsü sayəsində kiçik məkanlar üçün ideal olub, yemək və ya iş masası kimi istifadə üçün əlverişlidir.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 24,
        name: '120-lik Ortadan Açılan Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 750,
        discountedPrice: 600, // Discounted price
        longDescription: 
        "Müasir və funksional açılan masa həm zəriflik, həm də praktik istifadə rahatlığı qatır. Genişlənə bilən mexanizmi sayəsində, bu masa həm gündəlik istifadəyə, həm də qonaqları rahatlıqla ağırlamaq üçün idealdır. Diametri 120sm, ortadan açılma mexanzmi ilə uzunluğu 150 sm olur.",
        images: [
          "/image/Daireabb.jpeg",
        ],
        colors: [ 
          {
            name: "Krem",
            code: "#FFFACD",
            images: [ "/image/Dairebeyaz2.jpg",
              "/image/Dairebeyaz1.jpg",
              "/image/Dairebeyaza3.jpg",
            ],
            defaultColorImage:`/image/Dairebeyaz.jpg` 
          },
          {
            name: "Antrasit",
            code: "#353C40",
            images: [ "/image/Daireant1.jpg",
              "/image/Daireant2.jpg",
            ],
            defaultColorImage:`/image/Daireant.jpg` 
          },
          {
            name: "Boz",
            code: "#808080",
            images: [ 
                 `/image/Dairegri2.jpg`, 
                `/image/Dairegri1.jpg`, 
            ],
            defaultColorImage:`/image/Dairegri.jpg` 
          },   
    ],
    defaultImage: "/image/Daireabb1.jpeg",
        description:
          "Həm gündəlik, həm də qonaq masası kimi istifadə üçün idealdır",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 25,
        name: '120-lik Yandan Açılan Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 750,
        discountedPrice: 600, // Discounted price
        longDescription: 
        "Yandan açılan mexanizmi ilə bu masa, həm kiçik, həm də geniş məkanlar üçün ideal bir həll təklif edir. Sadə dizaynı və funksional quruluşu ilə istənilən interyerə rahatlıqla uyğunlaşır. Qapalı vəziyyətdə kompakt bir masa kimi istifadə edilə bilən bu model, yan tərəfdən açıldığında dairəvi olaraq qonaq qəbul etmək və ya gündəlik ehtiyaclar üçün idealdır. Çarpaz metal ayaqları ilə möhkəm quruluşu və müasir dizaynı, hər növ interyerə mükəmməl uyğunlaşır. Üzəri High gloss MDF olan bu masanın diametri 120sm dir. Hər iki tərəfdən 25+25 sm olaraq açılıb,bağlana bilir.",
        images: [
          "/image/Darbb.jpeg",
        ],
        colors: [ 
          {
            name: "Krem",
            code: "#FFFACD",
            images: [ "/image/Darbeyaz1.jpg",
              "/image/Darbeyaz2.jpg",
              "/image/Darbeyaz3.jpg",
              "/image/Darbeyaz4.jpg",
            ],
            defaultColorImage:`/image/Darbeyaz.jpg` 
          },
          {
            name: "Qara",
            code: "#000000",
            images: [ "/image/Darsiyah1.jpg",
              "/image/Darsiyah2.jpg",
    ],
            defaultColorImage:'/image/Darsiyah.jpg'
          }, 
          {
            name: "Vizon",
            code: "#D2B48C",
            images: [  "/image/Darviz1.jpg",   
              "/image/Darviz2.jpg",   
              "/image/Darviz3.jpg",     
            ],
            defaultColorImage:'/image/Darviz.jpg',
          }, 
           
    ],
    defaultImage: "/image/Darbb1.jpeg",
        description:
          "Kiçik məkanlarda böyük bir masa təcrübəsi ilə həm gündəlik, həm də qonaq masası kimi istifadə oluna bilər.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 26,
        name: 'Aksu Takım',
        category: "Dəstlər",
        price: 940,
        discountedPrice: 870, // Discounted price
        longDescription: 
        "Dəst, parlaq ağ səthli masa, yumşaq məxmər oturacaqlar və 2 geniş skamya ilə tamamlanmışdır. Metal masa ayaqları, dəstəkli oturacaqlar və gözəl sarı detallar interyerinizə incəlik və müasirlik qatır. Masa  MDF materialdan hazırlanmış və eni 80 sm, uzunluğu isə 120 sm olub, əlavə olaraq 30sm böyüyərək, 150 sm uzunluqda olur.",
        images: [
          "/image/Aksubb.jpeg",
        ],
        colors: [ 
          {
            name: "Boz",
            code: "#808080",
            images: [ 
                 `/image/Aksu1.jpg`, 
                `/image/Aksu2.jpg`,
                `/image/Aksu3.jpg`, 
                `/image/Aksu4.jpg`, 
                `/image/Aksu5.jpg`,  
            ],
            defaultColorImage:`/image/Aksu.jpg` 
          },  
          {
            name: "Krem",
            code: "#FFFACD",
            images: [ 
            ],
            defaultColorImage:`/image/Aksubeyaz.jpg` 
          },
          {
            name: "Qara",
            code: "#000000",
            images: [     ],
            defaultColorImage:'/image/Aksusiyah.jpg'
          },
          {
            name: "Antrasit",
            code: "#353C40",
            images: [ 
            ],
            defaultColorImage:`/image/Aksuant.jpg` 
          },
           
    ],
    defaultImage: "/image/Aksubb1.jpeg",
        description:
          "Restoran, qonaq otağı və ya mətbəx üçün mükəmməl seçimdir. Həm qonaqlarınızı rahatlıqla ağırlamağa, həm də öz ailənizlə komfortlu yemək saatlarının zövqünü yaşamağa imkan yaradır.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 27,
        name: 'Barcelona Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 740,
        discountedPrice: 600, // Discounted price
        longDescription: 
        "Zərif mərmər görünüşlü üst hissəsi və parlaq metal ayaqları ilə bu masa, interyerinizə həm lüks, həm də müasir bir toxunuş əlavə edir. Dizayn, sadəlik və şıklığın mükəmməl harmoniyasını təqdim edir.Bu modern mərmər üslublu masa, dizaynı və funksionallığı ilə məkanınızı dəyişdirmək üçün ideal seçimdir. Onun açılma mexanizmi, yüksək keyfiyyətli materialları və estetik görünüşü, onu həm gündəlik istifadə, həm də xüsusi məqamlar üçün əvəzsiz edir. Masanın eni 80 sm, uzunluğu isə 130 sm olub, əlavə olaraq 30 sm genişlənə bilir.",
        images: [
          "/image/Barcbb.jpeg",
        ],
        colors: [ 
          {
            name: "Boz",
            code: "#808080",
            images: [ 
                 `/image/Barc1.jpg`, 
                 `/image/Barc2.jpg`,
                 `/image/Barc3.jpg`, 
                 `/image/Barcbey.jpg`,
                 `/image/Barcbey1.jpg`,   
              
            ],
            defaultColorImage:`/image/Barc.jpg` 
          },            
    ],
    defaultImage: "/image/Barcbb1.jpeg",
        description:
          "Bu dəst, ailə yeməklərindən dost məclislərinə qədər hər bir anınızı daha da zövqlü etmək üçün hazırlanıb. Zövqlü və funksional bir seçim axtarırsınızsa, bu masa dəsti interyerinizin gözəlliyini ön plana çıxarmaq üçün ideal variantdır.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 28,
        name: 'Anka Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 740,
        discountedPrice: 600, // Discounted price
        longDescription: 
        "Bu yemək masası, dizaynı və funksional xüsusiyyətləri ilə gündəlik həyatı asanlaşdırmaq və məkanınıza estetik bir toxunuş qatmaq üçün nəzərdə tutulub. Onun açılma mexanizmi, kompakt və geniş formatlar arasında rahat keçid təmin edir. Gündəlik istifadə üçün praktik, xüsusi anlar üçün isə eleqant bir həll olan bu masa, interyerinizdə həm rahatlıq, həm də gözəllik üçün ideal seçimdir. Masanın eni 80 sm, uzunluğu 120 sm, əlavə olaraq hər iki tərəfdən 25+25 sm artır.",
        images: [
          "/image/Ankabb.jpeg",
          "/image/Ankakrem.jpg",
        ],
        colors: [ 
          {
            name: "Vizon",
            code: "#D2B48C",
            images: [  "/image/Ankaviz1.jpg",   
              "/image/Ankaviz2.jpg",   
              "/image/Ankaviz3.jpg",     
            ],
            defaultColorImage:'/image/Ankaviz.jpg',
          }, 
          {
            name: "Qara",
            code: "#000000",
            images: [  '/image/Ankasiyah.jpg'   ],
            defaultColorImage:'/image/Ankasiyah1.jpg'
          },
          {
            name: "Boz",
            code: "#808080",
            images: [ 
            ],
            defaultColorImage:`/image/Ankagri.jpg` 
          },            
    ],
    defaultImage: "/image/Ankabb1.jpeg",
        description:
          "Bu masa həm gündəlik ehtiyaclarınıza, həm də xüsusi tədbirlərinizə rahatlıqla uyğunlaşaraq sizə vaxtınıza və məkanınıza dəyər qatacaq. İstər kiçik ailə yeməkləri, istərsə də geniş tədbirlər üçün bu masa sizin üçün mükəmməl yoldaş olacaq.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },   
      {
        id: 29,
        name: 'İnci Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 730,
        discountedPrice: 600, // Discounted price
        longDescription: 
        "Bu masa, modern interyer dizaynına uyğun tərtib edilərək həm estetik gözəllik, həm də praktiklik axtaranlar üçün mükəmməl seçimdir.  Zərif detallarını tamamlayan möhkəm metal ayaqları ilə uzunömürlü və dayanıqlı bir istifadə təmin edir. Bu masa müxtəlif rənglərdə olan stullar ilə ideal şəkildə kombinasiya edilə bilər. Bu masanın ən diqqətçəkən xüsusiyyəti praktiki açılma mexanizmidir. Ortadan sürüşdürülərək genişlənə bilən mexanizmi sayəsində gündəlik istifadə üçün kompakt ölçüdə saxlanılır, lakin qonaq qəbulunda və xüsusi tədbirlərdə daha geniş oturacaq sahəsi təqdim edir. Mexanizm asanlıqla işləyir və uzunmüddətli istifadəyə uyğun olaraq tərtib edilmişdir.",
        images: [
          "/image/İncibb.jpeg",
          "/image/İnciviz.jpg",
        ],
        colors: [ 
          {
            name: "Qəhvəyi",
            code: "#8B4513",
            images: [ "/image/İnci1.jpg",
              "/image/İnci2.jpg",
              "/image/İnci3.jpg",
            ],
            defaultColorImage:'/image/İnci.jpg'
          },        
    ],
    defaultImage: "/image/İncibb1.jpeg",
        description:
          "Bu masa, həm evdə, həm də müxtəlif ictimai və kommersiya məkanlarında, məsələn otel, kafe, restoran və s. geniş istifadə oluna bilər.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },  
      {
        id: 30,
        name: 'Buğra Masa',
        category: "Türkiyə İstehsalı Masalar",
        price: 530,
        discountedPrice: 400, // Discounted price
        longDescription: 
        "Zamansız dizaynla müasir incəliyi birləşdirən bu yemək masası, şık və dəbli bir görünüş təqdim edir. Metal detalları interyerinizə lüks toxunuş əlavə edərkən, geniş oturma imkanı ilə ailə və dost məclislərini rahatlıqla təmin edir. Həm funksional, həm də dekorativ bir element olaraq, hər hansı bir müasir və ya klassik üslublu interyerdə ahəngdar bir şəkildə yerini tapacaq. Asan təmizlənə bilən səthi və dayanıqlı materialları ilə uzunmüddətli istifadəyə uyğun şəkildə dizayn edilmişdir.",
        images: [
          "/image/Bubb.jpeg",
          "/image/Bu.jpg",
        ],
        colors: [ 
          {
            name: "Qara",
            code: "#000000",
            images: [  '/image/Busiyah1.jpg',
              '/image/Busiyah2.jpg',
              '/image/Busiyah3.jpg',
              '/image/Busiyah4.jpg',
               ],
            defaultColorImage:'/image/Busiyah.jpg'
          },    
          {
            name: "Krem",
            code: "#FFFACD",
            images: [ 
            ],
            defaultColorImage:`/image/Bubeyaz.jpg` 
          },   
    ],
    defaultImage: "/image/Bubb1.jpeg",
        description:
          "Bu zərif və funksional yemək masası bir çox fərqli məkan və məqsəd üçün uyğun ola bilər.",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",
      },
      {
        id: 31,
        name: 'Venus Masa 60*100',
        category: "Türkiyə İstehsalı Masalar",
        price: 330,
        discountedPrice: 300, // Discounted price
        longDescription: " Bu kiçik ölçülü masa, həm funksional, həm də estetik baxımdan üstün xüsusiyyətlərə malikdir. Kiçik ölçüsü sayəsində dar mətbəxlər, balkonlar və ya ofislər üçün mükəmməl bir həlldir. Açılıb-yığıla bilən mexanizmi, ehtiyac duyulduğu halda daha geniş bir səth yaratmağa imkan verir. Beləliklə, ailə üzvləriniz və qonaqlarınız üçün əlavə yer təmin etmək mümkün olur. Masanın eni 60sm, uzunluğu isə 100 sm və əlavə olaraq 25 sm olaraq 125 sm uzunluqda olur. ",
        images: [
          "/image/Venbb1.jpeg",
          "/image/Ven.jpg",
        ],
        colors: [
          {
            name: "Vizon",
            code: "#D2B48C",
            images: [
              "/image/Venviz1.jpg",
              "/image/Venviz2.jpg",
              "/image/Venviz3.jpg",       
            ],
            defaultColorImage:'/image/Venviz.jpg',
          },
    ],
    defaultImage: "/image/Venbb.jpeg",
        description:
          "Kiçik mənzillərdə və ya dar yerlərdə praktik həllər hər zaman ön planda olur. Bu masa məhz belə məkanlar üçün xüsusi olaraq nəzərdə tutulmuşdur. Quraşdırılması asandır və çox yer tutmur. ",
        quantity: 10, // The available quantity in stock
        delivery: "1-2 gün", // Delivery time
        stock: "Bəli",  },
        {
          id: 32,
          name: 'Kütük Masa 70*110',
          category: "Türkiyə İstehsalı Masalar",
          price: 450,
          discountedPrice: 400, // Discounted price
          longDescription: 
          "Bu masa istifadədəki rahatlığı ilə fərqlənir. Genişləndirilə bilən mexanizmi sayəsində, gündəlik kompakt ölçüdən ehtiyac yarandıqda daha böyük bir səthə çevrilir. Masanın istehsalında istifadə olunan materiallar onun uzunömürlü olmasını təmin edir. Parlaq üst səthi cızıqlara və ləkələrə qarşı davamlıdır və təmizlənməsi son dərəcə asandır. Metal və möhkəm ayaq hissələri isə stabil və dayanıqlı struktur yaradır. Masanın eni 70 sm, uzunluğu isə 110 sm dır. Əlavə olaraq 30 sm artırıla bilir.",
          images: [
            "/image/Kutbb.jpeg",
          ],
          colors: [
            {
              name: "Antrasit",
              code: "#353C40",
              images: [ "/image/Kut1.jpg",
                "/image/Kut2.jpg",
                "/image/Kut3.jpg",
                "/image/Kut4.jpg",
              ],
              defaultColorImage:`/image/Kut.jpg` 
            },
      ],
      defaultImage: "/image/Kutbb1.jpeg",
          description:
            "Həm gündəlik istifadə, həm də xüsusi tədbirlər üçün ideal olan bu masa, estetik görünüşü və praktik xüsusiyyətləri ilə diqqət çəkir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 33,
          name: 'Elizan Masa Dəsti',
          category: "Dəstlər",
          price: 1700,
          discountedPrice: 1590, // Discounted price
          longDescription: 
          "Bu dəst zəriflik və funksionallığı bir araya gətirən ideal bir seçimdir. dəst yüksək keyfiyyətli materiallardan hazırlanmış, müasir və dəbli bir interyer üçün mükəmməl bir əlavədir. Geniş və səthi hamar olan masa, eni 90 sm, uzunluğu isə 180 sm-dir. Qızılı baza detalları sabitlik və möhkəmlik əlavə edir.",
          images: [
            "/image/Elbb.jpeg",
            '/image/Elgri.jpg',
          ],
          colors: [
            {
              name: "Qara",
              code: "#000000",
              images: [  '/image/Elsiy1.jpg',
                '/image/Elsiy2.jpg',
                 ],
              defaultColorImage:'/image/Elsiy.jpg'
            },    
            {
              name: "Krem",
              code: "#FFFACD",
              images: [ '/image/Elbey1.jpg',
                '/image/Elbey2.jpg',

              ],
              defaultColorImage:`/image/Elbey.jpg` 
            },   
      ],
      defaultImage: "/image/Elbb1.jpeg",
          description:
            "Həm gündəlik istifadə, həm də xüsusi tədbirlər üçün ideal olan bu masa, estetik görünüşü və praktik xüsusiyyətləri ilə diqqət çəkir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 34,
          name: 'MS 040 Masa',
          category: "Türkiyə İstehsalı Masalar",
          price: 1700,
          discountedPrice: 1590, // Discounted price
          longDescription: 
          "Bu masa müasir və lüks dizaynı ilə diqqət çəkir. Masa MDF materialdan hazırlanıb, bu da həm estetik, həm də praktik bir istifadə təmin edir. X şəkilli ayaq dizaynı stabilliyi artırır və metal konstruksiyadan ibarətdir, bu da ona həm möhkəmlik, həm də eleqant bir görünüş qazandırır.",
          images: [
            "/image/Msbb.jpeg",
          ],
          colors: [
            {
              name: "Qara",
              code: "#000000",
              images: [  
                 ],
              defaultColorImage:'/image/Mssiy.jpg'
            },    
            {
              name: "Krem",
              code: "#FFFACD",
              images: [ '/image/Msbey1.jpg',
                '/image/Msbey2.jpg',
              ],
              defaultColorImage:`/image/Msbey.jpg` 
            },   
      ],
      defaultImage: "/image/Msbb1.jpeg",
          description:
            "Zərif və minimalist görüntüsü, interyerə eleqant bir toxunuş qataraq  həm yemək otaqları, həm də ofis mühitləri üçün uyğun ola bilər.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 35,
          name: 'Reyhan Masa Dəsti',
          category: "Dəstlər",
          price: 510,
          discountedPrice: 470, // Discounted price
          longDescription: 
          "Bu dəst müasir dizaynlı masa və stuldan ibarətdir. Masa açılıb bağlana bilən funksionallıqla təchiz olunmuşdur. Ayaqları metal materialdan hazırlanmışdır, bu da dayanıqlığı təmin edir. Stullar yumşaq oturacaqlı və arxalıqlı dizayna sahibdir, müxtəlif rəng seçimləri (bənövşəyi, qırmızı, yaşıl və krem rənglər) ilə təqdim edilir. Dəstə 4 oturacaq daxildir. Ancaq açılan masa olduğu üçün 6 oturacaqlada dəstləşdirə bilərsiniz.",
          images: [
            "/image/Reybb.jpeg",
            "/image/Rey.jpg",
          ],
          colors: [
            {
              name: "Qara",
              code: "#000000",
              images: [   "/image/Reysiy1.jpg",
                 ],
              defaultColorImage:'/image/Reysiy.jpg'
            },    
            {
              name: "Krem",
              code: "#FFFACD",
              images: [ '/image/Rey1.jpg',
                '/image/Rey2.jpg',
                "/image/Reybey.jpg",
                "/image/Reybey2.jpg",
              ],
              defaultColorImage:`/image/Rey3.jpg` 
            },   
            {
              name: "Boz",
              code: "#808080",
              images: [ "/image/Reygri1.jpg",
                "/image/Reygri2.jpg",
              ],
              defaultColorImage:`/image/Reygri.jpg` 
            },
      ],
      defaultImage: "/image/Reybb1.jpeg",
          description:
            " Dəst yemək otağı və ya qonaq otaqları üçün ideal seçimdir, eyni zamanda minimalist və müasir üslubu ilə interyerə estetik qat verir",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 36,
          name: 'XCA 310',
          category: "Bar Oturacağı",
          price: 120,
          discountedPrice: 95, // Discounted price
          longDescription: 
          "Oturacaq və arxa dayağı yumşaq dəri parçadan hazırlanan bar oturacağı müasir və funksional dizayna malikdir. Oturacaq hissəsində döşəkçə formasında yumuşaq dolğu var, bu da əlavə komfort yaradır. Bar oturacağı adətən qaldırılıb-endirilə bilən mexanizmə malikdir.",
          images: [
            "/image/XCBB.png",
            "/image/XC2.jpg",
            "/image/XC3.jpg",
            "/image/XC4.jpg",
          ],
          colors: [
            {
              name: "Qəhvəyi",
              code: "#8B4513",
              images: [
                "/image/XC6.jpg",
                "/image/XC7.jpg",
                "/image/XC1.jpg",
              ],
              defaultColorImage:'/image/XC5.jpg'
            },   
      ],
      defaultImage: "/image/XCBB1.jpeg",
          description:
            "Bu tip oturacaqlar kafe, barlar, mətbəx adaları və digər müasir interyerlərdə istifadə olunur. Rahat və funksional quruluşu ilə diqqət çəkir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 37,
          name: 'XCA 301',
          category: "Bar Oturacağı",
          price: 110,
          discountedPrice: 95, // Discounted price
          longDescription: 
          "Müasir və minimalist üslubda hazırlanan bu oturacaq sadə xətləri və neytral rəng seçimi onu müxtəlif interyer dizaynları ilə uyğunlaşdırır. Ayaq qoymaq üçün dairəvi dayağı və hündürlük tənzimləmə mexanizmi oturacağı daha praktiki edir.",
          images: [
            "/image/XCABB.png",
            "/image/XCA5.jpg",
            "/image/XCA6.jpg",
            "/image/XCA7.jpg",
          ],
          colors: [
            {
              name: "Qara",
              code: "#000000",
              images: [   "/image/XCA1.jpg",
                "/image/XCA2.jpg",
                 ],
              defaultColorImage:'/image/XCA.jpg'
            },   
      ],
      defaultImage: "/image/XCABB1.jpeg",
          description:
            "Estetik görünüşü və erqonomik quruluşu ilə kafe, bar və ev mətbəxləri üçün ideal seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 38,
          name: 'A520',
          category: "Bar Oturacağı",
          price: 110,
          discountedPrice: 95, // Discounted price
          longDescription: 
          "Bu bar oturacağı yüksək keyfiyyətli metal əsas və parlaq xrom örtük, rahatlıq təmin edən yastıqlı oturacaq və arxa dayaqla, müasir interyerlərə uyğun minimalist və eleqant görünüş yaradır. Hündürlüyün tənzimlənməsi üçün qaz mexanizmi və 360 dərəcə fırlanma funksiyası ilə evinizin xüsusi bir əşyasına çevriləcək",
          images: [
            "/image/ABB.jpeg",
            "/image/A4.jpg",
            "/image/A3.jpg",
          ],
          colors: [
            {
              name: "Qara",
              code: "#000000",
              images: [   "/image/A1.jpg",
                "/image/A2.jpg",
                 ],
              defaultColorImage:'/image/A.jpg'
            },   
      ],
      defaultImage: "/image/ABB1.jpeg",
          description:
            "Mətbəx barları, restoranlar, kafeler və ofis qəbul yerləri üçün idealdır.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 39,
          name: 'XCA 306',
          category: "Bar Oturacağı",
          price: 140,
          discountedPrice: 110, // Discounted price
          longDescription: 
          "Məkanınıza həm rahatlıq, həm də zəriflik qatacaq Premium Yastıqlı Bar Taburesi! Yumşaq yastıqlı oturacaq və arxa dayağı ilə uzunmüddətli oturma rahatlığı təmin edir. Təmiz xətləri və müasir dizaynı ilə istənilən interyerə uyğundur.",
          images: [
            "/image/XCA3063BB.jpeg",
            "/image/XCA3063.jpg",
            "/image/XCA3061.jpg",
            "/image/XCA3062.jpg",
          ],
          colors: [
            {
              name: "Mavi",
              code: "#00FFFF",
              images: [   "/image/XCA3064.jpg",
                "/image/XCA3065.jpg",
                 ],
              defaultColorImage:'/image/XCA306.jpg'
            },   
      ],
      defaultImage: "/image/XCA3063BB1.jpeg",
          description:
            "Tənzimlənə bilən hündürlüyü (hidravlik sistem sayəsində) və 360° dönmə qabiliyyəti ilə bilən bu oturacaq ev mətbəxi, restoran və kafelər, barlar, ofis və iş yerləri üçün seçim oluna bilər",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 40,
          name: '2416',
          category: "Bar Oturacağı",
          price: 220,
          discountedPrice: 190, // Discounted price
          longDescription: 
          "Davamlı və möhkəm metal konstruksiya, minimalist və sənaye üslubunda hazırlanmış, asan təmizlənən səthlərlə bu bar oturacağı sabit dəstəyə maylikdir.",
          images: [
            "/image/2416BB.jpeg",
            "/image/2416.jpg",
            "/image/2416a2.jpg",
          ],
          colors: [
            {
              name: "Qara",
              code: "#000000",
              images: [   "/image/2416a1.jpg",
                 ],
              defaultColorImage:'/image/2416a.jpg'
            },  
      ],
      defaultImage: "/image/2416BB1.jpeg",
          description:
            "Müxtəlif rəng seçimlər ilə ev mətbəxi, bar və restoranlar, ofislər və toplantı məkanları üçün ideal seçim olacaq.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 41,
          name: '2420',
          category: "Bar Oturacağı",
          price: 140,
          discountedPrice: 115, // Discounted price
          longDescription: 
          "Rahatlıq, dayanıqlılıq, estetik görünüş. Ev, bar, restoran və ofislər üçün erqonomik oturma sahəsi istifadə rahatlığını təmin edir.",
          images: [
            "/image/2420bb.jpeg",
            "/image/2420b1.jpg",
            "/image/2420c.jpg",
            "/image/2420d.jpg",
          ],
          colors: [
            {
              name: "Ağ",
              code: "#F5F5DC",
              images: 
              [     "/image/2420a.jpg",
            "/image/2420b.jpg",
              ],
              defaultColorImage:`/image/2420.jpg`
            },    
      ],
      defaultImage: "/image/2420bb1.jpeg",
          description:
            "Müxtəlif rəng seçimlər ilə ev mətbəxi, bar və restoranlar, ofislər və toplantı məkanları üçün ideal seçim olacaq.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 42,
          name: 'M seriyası',
          category: "Bar Oturacağı",
          price: 180,
          discountedPrice: 140, // Discounted price
          longDescription: 
          "Taxta çərçivə dizaynı ilə diqqət çəkən bu modelin dizaynı şık və müasir görünüşə malikdir. Alt hissədə parlaq xrom örtüklü metal baza və dayaq hündürlüyü tənzimləmək üçün hidravlik mexanizmə malikdir.",
          images: [
            "/image/Mbb.jpeg",
          ],
          colors: [
            {
              name: "Taxta",
              code: "#B22222",
              images: 
              [     "/image/M1.jpg",
            "/image/M2.jpg",
            "/image/M3.jpg",
            "/image/M4.jpg",
              ],
              defaultColorImage:`/image/M.jpg`
            },    
      ],
      defaultImage: "/image/Mbb1.jpeg",
          description:
            "Bu tabure müasir və dəbli dizaynı ilə restoran, bar və ya mətbəx adası kimi məkanlar üçün idealdır. Həm rahatlığı, həm də estetik görünüşü ilə istifadəçilərin diqqətini çəkir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 43,
          name: '207',
          category: "Çin İstehsalı Oturacaqlar",
          price: 125,
          discountedPrice: 100, // Discounted price
          longDescription: 
          "Müasir və rahat oturacaq, sadə, amma eleqant dizaynı ilə həm vizual gözəllik, həm də funksionallıq təqdim edir. Bel dəstəyi və yumşaq oturacaq sayəsində uzun müddətli oturmaq üçün idealdır. Zərif tikiş detalları və minimalistik dizaynı ilə məkanınıza fərqli bir hava qatacaq.",
          images: [
            "/image/207bb.jpeg",
            "/image/207.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#808080",
              images: 
              [     "/image/207g2.jpg",
            "/image/207g1.jpg",
              ],
              defaultColorImage:`/image/207g.jpg`
            },    
      ],
      defaultImage: "/image/207bb1.jpeg",
          description:
            "Yemək masaları, ofislər və digər müasir məkanlar üçün ideal seçim.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 44,
          name: '926',
          category: "Çin İstehsalı Oturacaqlar",
          price: 130,
          discountedPrice: 120, // Discounted price
          longDescription: 
          "Minimalist üslubu və yüksək keyfiyyətli materialları ilə seçilən bu məhsul həm funksional, həm də estetik görünüşü ilə göz oxşayır. təmizlənməsi asan, dayanıqlı və zövqlü oturacaq, ergonomik bel dəstəyi ilə uzun müddət oturmağa uyğundur.",
          images: [
            "/image/926bb.jpeg",
            "/image/926.jpg",
            "/image/926a.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#808080",
              images: 
              [     "/image/926g.jpg",
              ],
              defaultColorImage:`/image/926g1.jpg`
            },    
      ],
      defaultImage: "/image/926bb1.jpeg",
          description:
            "Bu premium keyfiyyətli stul evinizin və ya ofisinizin dekorasiyasına zəriflik və rahatlıq qatmaq üçün hazırlanmışdır. ",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 45,
          name: 'T-956',
          category: "Çin İstehsalı Oturacaqlar",
          price: 130,
          discountedPrice: 110, // Discounted price
          longDescription: 
          "Bu müasir və eleqant stul zərif dizaynı və yüksək keyfiyyətli materialı ilə istənilən məkana gözəllik qatacaq. Dayanıqlı, ləkəyə davamlı və təmizlənməsi asandır.",
          images: [
            "/image/956bb.jpeg",
            "/image/956b1.jpg",
          ],
          colors: [
            {
              name: "Gri",
              code: "#DCDCDC",
              images: 
              [     "/image/956a.jpg","/image/956b.jpg",
                
              ],
              defaultColorImage:`/image/956.jpg`
            },    
      ],
      defaultImage: "/image/956bb1.jpeg",
          description:
            " Rənglərin harmoniyası və rahatlığı ilə seçilən bu stul həm evdə, həm də ofis mühitində istifadə üçün mükəmməl seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 46,
          name: '920',
          category: "Çin İstehsalı Oturacaqlar",
          price: 125,
          discountedPrice: 110, // Discounted price
          longDescription: 
          "Bu stul öz minimalist görünüşü və rahat oturacaq dizaynı ilə gündəlik istifadənizi daha komfortlu edir. İstənilən məkanda müasir və eleqant ab-hava yaratmaq üçün ideal seçimdir.",
          images: [
            "/image/920bb.jpeg",
            "/image/920g.jpg",
            "/image/920.jpg",

          ],
          colors: [
            {
              name: "Yaşıl",
              code: "#B0A56A",
              images: 
              [     "/image/920a1.jpg","/image/920a2.jpg",
                
              ],
              defaultColorImage:`/image/920a.jpg`
            },    
      ],
      defaultImage: "/image/920bb1.jpeg",
          description:
            "Estetik və funksional stul, sadə və müasir dizaynı ilə yemək otaqları, restoranlar, kafe və ofislər üçün idealdır.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 47,
          name: 'F-17',
          category: "Çin İstehsalı Oturacaqlar",
          price: 100,
          discountedPrice: 90, // Discounted price
          longDescription: 
          "Minimalist dizayn və funksionallığı özündə birləşdirərək istənilən məkan üçün mükəmməl seçimdir. Yumşaq yastıqlanmış oturacaq və arxalıq sizə uzun saatlar rahat oturma imkanı yaradır. ",
          images: [
            "/image/Fbb.jpeg",
            "/image/F1.jpg",
            "/image/F4.jpg",
          ],
          colors: [
            {
              name: "Göy",
              code: "#A3B1C6",
              images: 
              [     "/image/F2.jpg","/image/F3.jpg",
                
              ],
              defaultColorImage:`/image/F.jpg`
            },    
      ],
      defaultImage: "/image/Fbb1.jpeg",
          description:
            "Qonaq otağında, oxu və istirahət guşələrində, toplantı otaqları, işçi sahələri və qəbul otaqlarında rahatlıq və peşəkarlıq qatır.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 48,
          name: 'C-1',
          category: "Çin İstehsalı Oturacaqlar",
          price: 100,
          discountedPrice: 90, // Discounted price
          longDescription: 
          "Bu oturacaq müasir və zərif dizaynı ilə diqqət çəkir. Oturacaq hissəsi yumşaq, döşəmə ilə örtülmüşdür və erqonomik rahatlıq təqdim edir. Xarici çərçivə neytral boz rəngdədir və oturacağın ümumi görünüşünə zəriflik qatır.",
          images: [
            "/image/Cbb.jpeg",
            "/image/C3.jpg",
            "/image/C4.jpg",
          ],
          colors: [
            {
              name: "Yaşıl",
              code: "#9BC2A4",
              images: 
              [     "/image/C1.jpg","/image/C2.jpg",
                
              ],
              defaultColorImage:`/image/C.jpg`
            },    
      ],
      defaultImage: "/image/Cbb1.jpeg",
          description:
            "İstər yemək otaqlarında, istər ofislərdə, istərsə də restoran və kafelərdə istifadəyə uyğun olan bu oturacaq müasir interyer dizaynlarına çox gözəl uyğunlaşır.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 49,
          name: '937',
          category: "Çin İstehsalı Oturacaqlar",
          price: 100,
          discountedPrice: 90, // Discounted price
          longDescription: 
          "Zərif dizaynlı bu oturacaq modeli, müasir interyer üçün ideal seçimdir.Yüksək keyfiyyətli materiallardan hazırlanmışdır və həm rahatlığı, həm də estetik gözəlliyi ilə seçilir.Yumşaq dolğu və erqonomik dizayn sayəsində uzun müddət oturma rahatlığı təmin edir.Qara rəngli nazik ayaqlar həm minimalist, həm də möhkəm konstruksiyaya malikdir.",
          images: [
            "/image/937bb.jpeg",
            "/image/937bb2.jpg",
          ],
          colors: [
            {
              name: "Göy",
              code: "#D3D3D3",
              images: 
              [ "/image/937b.jpg", "/image/937c.jpg",
                
              ],
              defaultColorImage:`/image/937a.jpg`
            },    
      ],
      defaultImage: "/image/937bb1.jpeg",
          description:
            "Yemək otaqları, iş mühiti və ya müasir ev dekorasiyası üçün mükəmməldir və interyerinizə həm funksionallıq, həm də zəriflik qatmaq istəyənlər üçün ideal seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 50,
          name: '342',
          category: "Çin İstehsalı Oturacaqlar",
          price: 115,
          discountedPrice: 105, // Discounted price
          longDescription: 
          "Bu müasir və minimalist oturacaq modeli, interyerinizə həm zəriflik, həm də funksionallıq qatmaq üçün ideal seçimdir. Yumşaq materialları, incə rəng çalarları və dayanıqlı konstruksiyası ilə bu oturacaq, hər növ məkan üçün mükəmməl uyğun gəlir. Arxalığı bir qədər əyri forma verilmişdir, bu da oturma zamanı rahatlıq və dəstək təmin edir. Həm estetik, həm də funksional bir görünüş təqdim edir.",
          images: [
            "/image/342bb.jpeg",
            "/image/342bb2.jpg",
          ],
          colors: [
            {
              name: "Yaşıl",
              code: "#A5A5A5",
              images: 
              [ "/image/342b.jpg", "/image/342c.jpg",
                
              ],
              defaultColorImage:`/image/342a.jpg`
            },    
      ],
      defaultImage: "/image/342bb1.jpeg",
          description:
            "Sadə, lakin müasir görünüşü sayəsində müxtəlif dekorasiya üslubları ilə asanlıqla uyğunlaşır. Yemək otaqları, iş yerləri və ya qonaq otaqları üçün ideal seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 51,
          name: '803',
          category: "Çin İstehsalı Oturacaqlar",
          price: 115,
          discountedPrice: 105, // Discounted price
          longDescription: 
          "Bu oturacaq, müasir interyer dizaynında estetik və funksionallığı birləşdirən şık bir mebel parçasıdır. Yumşaq oturacaq hissəsi, toxumalı və hamar səthlərin harmoniyasını nümayiş etdirərək həm komfort, həm də vizual zövq verir. Arxa dayağın yüngül əyri forması, istifadəçiyə əlavə dəstək təmin edir, uzun müddət oturma zamanı rahatlığı qoruyur.",
          images: [
            "/image/803bb.jpeg",
            "/image/803a.jpg", "/image/803b.jpg",

          ],
          colors: [
            {
              name: "Yaşıl",
              code: "#6E7F78",
              images: 
              [ "/image/803d.jpg", "/image/803f.jpg",
                
              ],
              defaultColorImage:`/image/803c.jpg`
            },    
      ],
      defaultImage: "/image/803bb1.jpeg",
          description:
            "Bu oturacaq həm yemək masası üçün, həm iş sahələri üçün, həm də kafe və restoranlarda istifadə üçün mükəmməl seçimdir. ",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 52,
          name: 'F-57',
          category: "Çin İstehsalı Oturacaqlar",
          price: 105,
          discountedPrice: 90, // Discounted price
          longDescription: 
          "Bu oturacaq, zərif və müasir dizayna malikdir. Toxumalı arxa dayağı estetik naxışlarla bəzədilmiş, həm gözəllik, həm də rahatlıq təmin edir. Oturacaq hissəsi yumşaq və keyfiyyətli materialdan hazırlanmışdır, bu da uzunmüddətli oturma üçün idealdır.",
          images: [
            "/image/F57bb.jpeg",
            "/image/F57b.jpg", "/image/F57b1.jpg",

          ],
          colors: [
            {
              name: "Krem",
              code: "#D9CFC2",
              images: 
              [ "/image/F57a.jpg",
                
              ],
              defaultColorImage:`/image/F57.jpg`
            },    
      ],
      defaultImage: "/image/F57bb1.jpeg",
          description:
            "Tünd metal ayaqları dayanıqlı və sabit quruluşa sahibdir, bu da oturacağı həm ev, həm də kommersiya mühitində istifadə üçün mükəmməl edir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 53,
          name: '#6',
          category: "Çin İstehsalı Oturacaqlar",
          price: 105,
          discountedPrice: 95, // Discounted price
          longDescription: 
          "Bu oturacaq, sadəlik və funksionallığı birləşdirən müasir dizayna malikdir.Dekorativ tikiş detalları oturacağa incə və zərif bir görünüş qatır. Ayaqları möhkəm metal materialdan hazırlanmışdır və tünd rəngi ilə oturacaqla mükəmməl uyğunluq yaradır.",
          images: [
            "/image/6bb1.png",
            "/image/6b.jpg", "/image/6b1.jpg",

          ],
          colors: [
            {
              name: "Göy",
              code: "#5A646F",
              images: 
              [ "/image/6.jpg",
                
              ],
              defaultColorImage:`/image/6a.jpg`
            },    
      ],
      defaultImage: "/image/6bb.png",
          description:
            "Minimalist dizaynı onu həm yemək otaqları, həm də ofis və kafe mühitləri üçün ideal bir seçim halına gətirir. ",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 54,
          name: 'F-55',
          category: "Çin İstehsalı Oturacaqlar",
          price: 90,
          discountedPrice: 85, // Discounted price
          longDescription: 
          "Keyfiyyətli materiallardan hazırlanmış bu oturacaqlar həm rahatlıq, həm də estetik görünüş təqdim edir. Yumşaq oturacaq və bel dəstəyi uzunmüddətli istifadə üçün idealdır. Dayanıqlı konstruksiya və asan təmizlənə bilən döşəməyə malikdir. Rəng, model və ölçü baxımından zəngin seçimləri vardır.",
          images: [
            "/image/F55bb1.jpeg",
            "/image/Fb55.jpg", "/image/Fb155.jpg",

          ],
          colors: [
            {
              name: "Yaşıl",
              code: "#4A646C",
              images: 
              [ "/image/F155.jpg",
                
              ],
              defaultColorImage:`/image/F55.jpg`
            },    
      ],
      defaultImage: "/image/F55bb.jpeg",
          description:
            "Sadə və zərif üslub oturacaqlarımız yemək otağı, ofis, istirahət məkanı və ya qonaq otaqları üçün ideal seçimdir və hər məkana uyğun gəlir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 55,
          name: 'F-65',
          category: "Çin İstehsalı Oturacaqlar",
          price: 90,
          discountedPrice: 85, // Discounted price
          longDescription: 
          "Zərif dizaynı ilə fərqlənən bu oturacaq, istənilən interyerə mükəmməl uyğunlaşır. Yüksək keyfiyyətli dəriyə bənzər örtüyü, arxa hissəsindəki metal tutacağı və möhkəm qara ayaqları ilə həm funksional, həm də estetik baxımdan idealdır.",
          images: [
            "/image/F65BB1.jpeg",
          ],
          colors: [
            {
              name: "Yaşıl",
              code: "#4C6363",
              images: 
              [ "/image/F651.jpg", "/image/F652.jpg","/image/F65a.jpg","/image/F65b.jpg",
                
              ],
              defaultColorImage:`/image/F65.jpg`
            },    
      ],
      defaultImage: "/image/F65BB.jpeg",
          description:
            "İstər yemək otağı, istər ofis, istərsə də digər məkanlar üçün mükəmməl seçimdir. Müxtəlif rəng seçimləri mövcuddur.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 56,
          name: 'Ağac Modellər',
          category: "Çin İstehsalı Oturacaqlar",
          price: 160,
          discountedPrice: 140, // Discounted price
          longDescription: 
          "Təbii ağacdan hazırlanmış bu stul, müasir və minimalistik dizaynı ilə yemək otaqlarında rahatlıq və estetik təqdim edir. Arxalığı və oturacaq hissəsi hamar və erqonomik formada hazırlanıb, neytral rəng tonları isə interyerə istilik və harmoniya qatır. Yüksək keyfiyyətli təbii ağac materialı dayanıqlığı və uzunömürlülüyü təmin edir.",
          images: [
            "/image/TBB1.jpeg",
          ],
          colors: [
            {
              name: "Qəhvəyi",
              code: "#958e7d",
              images: 
              [ "/image/T3.jpg", "/image/T4.jpg","/image/T.jpg","/image/T1.jpg","/image/T2.jpg","/image/T5.jpg",
                
              ],
              defaultColorImage:`/image/T6.jpg`
            },    
      ],
      defaultImage: "/image/TBB.jpeg",
          description:
            "Sadə və zərif görünüşü ilə müxtəlif dekor üslublarına uyğunlaşır. Yemək masası ilə mükəmməl uyğunlaşan bu stul həm funksional, həm də dekorativ bir seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 57,
          name: '410',
          category: "Çin İstehsalı Oturacaqlar",
          price: 125,
          discountedPrice: 115, // Discounted price
          longDescription: 
          "Bu müasir dizayna malik oturacaq, interyerinizə zəriflik və rahatlıq qatacaq. Keyfiyyətli parça üzlük və möhkəm metal ayaqlar ilə istehsal edilmişdir. Aşınmaya və gündəlik istifadəyə qarşı davamlı materiallardan hazırlanmışdır.",
          images: [
            "/image/410bb1.jpeg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#85807B",
              images: 
              [ "/image/410b.jpg", "/image/410.jpg","/image/410c.jpg","/image/410d.jpg",                
              ],
              defaultColorImage:`/image/410a.jpg`
            },    
      ],
      defaultImage: "/image/410bb.jpeg",
          description:
            "Minimalist və eleqant görünüşü sayəsində həm ev, həm də ofis, restoran və kafelər üçün mükəmməl seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 58,
          name: '583',
          category: "Çin İstehsalı Oturacaqlar",
          price: 150,
          discountedPrice: 135, // Discounted price
          longDescription: 
          "Zərif dizaynlı müasir stul modeli. Yumşaq, yüksək keyfiyyətli parça oturacaq və arxalıq ilə təmin olunmuş, qara incə ayaqları ilə şık və rahat oturma təcrübəsi təqdim edir. ",
          images: [
            "/image/583bb1.jpeg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/410b.jpg", "/image/410.jpg","/image/410c.jpg","/image/410d.jpg",                
              ],
              defaultColorImage:`/image/410a.jpg`
            },    
      ],
      defaultImage: "/image/583bb.jpeg",
          description:
            "Mətbəx, yemək otağı və ya ofis mühitiniz üçün ideal seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        
         {
          id: 59,
          name: 'Terazzi',
          category: "Bağ Mebeli",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          "Terazzi olaraq, sizə yalnız mebel deyil, bağınızda dincəlmək və istirahət etmək üçün unudulmaz məkanlar təqdim edirik. Keyfiyyətli materiallar, müasir dizayn və uzunömürlü həllər burada bir araya gəlir.",
          images: [
            "/image/Terazzi1.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/Terazzi3.webp","/image/Terazzi4.png", "/image/Terazzi5.png", "/image/Terazzi6.png", "/image/Terazzi7.jpg",               
              ],
              defaultColorImage:`/image/Terazzi.jpg`
            },    
      ],
      defaultImage: "/image/terazzi2.jpg",
          description:
            "Terazzi bağ mebelləri paslanmaya davamlı alüminiumdan və İroko ağacından hazırlanır. Bu material sayəsində həm uzunömürlü, həm də istənilən hava şəraitinə uyğun məhsullar təqdim edirik.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
{
          id: 60,
          name: 'Novussi',
          category: "Bağ Mebeli",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          "Hər məkan üçün uyğun, hər zövqə uyğun.Minimalist tərzdə hazırlanmış bu divan dəsti həm estetik, həm funksionaldır.",
          images: [
            "/image/nov7.jpeg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/nov.jpg", "/image/nov3.jpg", "/image/nov4.jpg","/image/nov5.jpg", "/image/nov2.jpg",           
              ],
              defaultColorImage:`/image/nov1.jpg`
            },    
      ],
      defaultImage: "/image/nov6.jpg",
          description:
            "Evinizdə və ya bağınızda rahatlığın yeni ünvanı!",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 61,
          name: 'Flexy',
          category: "Bağ Mebeli",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          "Günün yorğunluğunu atmaq üçün ideal seçim – Flexy bağ mebeli. Yüksək keyfiyyətli materiallardan hazırlanmışdır. Uzun ömürlü, paslanmaz və hava şəraitinə davamlı dizayn ilə bağınıza xüsusi bir rəng qatacaq!",
          images: [
            "/image/Flexy5.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/Flexy4.jpg", "/image/Flexy3.jpg", "/image/Flexy2.jpg","/image/Flexy1.jpg",           
              ],
              defaultColorImage:`/image/Flexy.jpg`
            },    
      ],
      defaultImage: "/image/Flexy6.png",
          description:
            "Terras, bağça və balkonlar üçün mükəmməl uyğunluq.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 62,
          name: 'Bahçemo',
          category: "Bağ Mebeli",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          "Zərif dizaynı, yumşaq yastıqları və möhkəm konstruksiyası ilə açıq hava istirahətini keyfiyyətə çevirin.",
          images: [
            "/image/Bahce5.webp",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/Bahce.webp", "/image/Bahce1.webp", "/image/Bahce3.webp","/image/Bahce4.webp",           
              ],
              defaultColorImage:`/image/Flexy.jpg`
            },
                
      ],
      defaultImage: "/image/Bahce6.jpg",
          description:
            "Zamansız dizayn və möhkəm materiallarla açıq hava məkanınıza dəyər qatın.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 63,
          name: 'Yellənçəklər',
          category: "Bağ Mebeli",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          "Alüminium çərçivə və yumşaq elyaf döşəkçələr ilə həm tək, həm də iki nəfərlik modellərdə təqdim olunan yellənçəklər, açıq hava məkanlarınıza rahatlıq və estetik qatır.",
          images: [
            "/image/yel1.png",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/yel2.jpg","/image/yel3.jpg", "/image/yel4.jpg",            
              ],
              defaultColorImage:`/image/yel8.jpg`
            },
                
      ],
      defaultImage: "/image/yel.png",
          description:
            "Yüngül, davamlı alüminium konstruksiya və rahat oturuşlu döşəkçələri ilə bu yellənçək istirahətinizi tamamlamaq üçün ideal seçimdir.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },

         {
          id: 64,
          name: 'Çəkməcəli Masalar',
          category: "Çin İstehsalı Masalar",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          "Çəkməcəli Çin istehsalı mərmər və kermoqranit masa dəsti – həm estetik, həm də keyfiyyətli seçim! Çəkməcənin olması isə daha funksionallıq yaradacaq.",
          images: [
           "/image/Sir2.jpg","/image/Sir1.jpg","/image/Sir.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [  "/image/Sirbck1.jpg", "/image/Sir3.jpg","/image/Sir4.jpg","/image/Sir5.jpg","/image/Sir7.jpg","/image/Sir8.jpg",           
              ],
              defaultColorImage:`/image/Sir6.jpg`
            },
                
      ],
      defaultImage: "/image/Sirbck.png",
          description:
            "Ev, ofis və ictimai məkanlar üçün ideal seçimdir. Yemək otaqları, mətbəxlər, kafe və restoranlar, görüş otaqları və istirahət guşələrində həm funksional, həm də dekorativ məqsədlə istifadə oluna bilər.",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },

         {
          id: 65,
          name: '80*140 sm ',
          category: "Çin İstehsalı Masalar",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          'Evinizə modern və şık bir toxunuş qatmaq istəyirsinizsə, bu yemək masası ideal seçimdir. Zərif mərmər naxışlı üst səthi və keyfiyyətli materialdan hazırlanmış ayaqları ilə həm estetik, həm də funksional bir dizayn təqdim edir. Hər məhsulun qiyməti müxtəlifdir. Qiymət və məhsullar haqqında ətraflı məlumat üçün əlaqə saxlaya bilərsiniz.',
          images: [
           "/image/140bck1.jpg","/image/140bck2.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/140a1.jpg","/image/140b.jpg","/image/140b1.jpg","/image/140c.jpg","/image/140c1.jpg", "/image/140d.jpg", "/image/140d1.jpg", "/image/140e.jpg", "/image/140e1.jpg", "/image/140f1.jpg", "/image/140f1.jpg", "/image/140g.jpg","/image/140g.jpg","/image/140g1.jpg", "/image/140h.jpg","/image/140h1.jpg","/image/140h2.jpg","/image/140h3.jpg","/image/140h4.jpg",           
              ],
              defaultColorImage:`/image/140a.jpg`
            },
      ],
      defaultImage: "/image/140bck.png",
          description:
           "Zərif mərmər üstlük (80×140 sm) və metal və ya taxta ayaqlar ilə həm möhkəm, həm də dəbli. İstər klassik, istər modern interyerə uyğun ideal seçim!",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 66,
          name: '80*130 sm ',
          category: "Çin İstehsalı Masalar",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          'Zərif mərmər naxışlı üst səthi və keyfiyyətli materialdan hazırlanmış ayaqları ilə həm estetik, həm də funksional bir dizayn təqdim edir. Hər məhsulun qiyməti müxtəlifdir. Qiymət və məhsullar haqqında ətraflı məlumat üçün əlaqə saxlaya bilərsiniz.',
          images: [
           "/image/130bck1.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/130b.jpg",
              ],
              defaultColorImage:`/image/130a.jpg`
            },
      ],
      defaultImage: "/image/130bck.png",
          description:
           "Zərif mərmər üstlük (80×130 sm) taxta ayaqlar ilə həm möhkəm, həm də dəbli. İstər klassik, istər modern interyerə uyğun ideal seçim!",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
{
          id: 67,
          name: '80*135 sm ',
          category: "Çin İstehsalı Masalar",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          'Zərif mərmər naxışlı üst səthi və keyfiyyətli materialdan hazırlanmış ayaqları ilə həm estetik, həm də funksional bir dizayn təqdim edir. Hər məhsulun qiyməti müxtəlifdir. Qiymət və məhsullar haqqında ətraflı məlumat üçün əlaqə saxlaya bilərsiniz.',
          images: [
           "/image/135bck1.jpg","/image/135bck2.jpg","/image/135bck3.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/135b.jpg","/image/135c.jpg",
              ],
              defaultColorImage:`/image/135a.jpg`
            },
      ],
      defaultImage: "/image/135bck.png",
          description:
           "Zərif mərmər üstlük (80×135 sm) taxta ayaqlar ilə həm möhkəm, həm də dəbli. İstər klassik, istər modern interyerə uyğun ideal seçim!",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },
        {
          id: 68,
          name: '90*180 sm ',
          category: "Çin İstehsalı Masalar",
          price: 0,
          discountedPrice: 0, // Discounted price
          longDescription: 
          'Zərif mərmər naxışlı üst səthi və keyfiyyətli materialdan hazırlanmış ayaqları ilə həm estetik, həm də funksional bir dizayn təqdim edir. Hər məhsulun qiyməti müxtəlifdir. Qiymət və məhsullar haqqında ətraflı məlumat üçün əlaqə saxlaya bilərsiniz.',
          images: [
           "/image/180b1.jpg","/image/180b.jpg",
          ],
          colors: [
            {
              name: "Boz",
              code: "#E0E0E0",
              images: 
              [ "/image/1800.jpg","/image/180a.jpg","/image/180a1.jpg","/image/180c.jpg","/image/180c1.jpg",
              ],
              defaultColorImage:`/image/180.jpg`
            },
      ],
      defaultImage: "/image/180b.png",
          description:
           "Zərif mərmər üstlük (90×180 sm), metal və ya taxta ayaqlar ilə həm möhkəm, həm də dəbli. İstər klassik, istər modern interyerə uyğun ideal seçim!",
          quantity: 10, // The available quantity in stock
          delivery: "1-2 gün", // Delivery time
          stock: "Bəli",
        },

        //Çin İstehsalı Masalar
];
export const Mycolors = [
  { name: "Ağ", code: "#fff" },
  { name: "Qara", code: "#000" },
  { name: "Boz", code: "#999" },
  { name: "Qırmızı", code: "#f00" },
  { name: "Yaşıl", code: "#0f0" },
];
