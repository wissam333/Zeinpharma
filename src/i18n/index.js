import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      Home: 'Home',
      Product: 'Product',
      News: 'News',
      Partners: 'Partners',
      Jobs: 'Jobs',
      Gallery: 'Gallery',
      Contact: 'Contact Us',
      About: 'About Us'
    },
    mainSlider: {
      mainText: 'At ZeinPharma We Are Reimagining Medicine'
    },
    generalInfo: {
      whoWeAre: 'Who We Are',
      whatWeDo: 'What We Do',
      paragraph:
        'Learning methods vary depending on learners’ purposes. If you struggle to learn new words and want to level up your writing and speaking skills quickly, you can try to work on random English words. Daily incidental English word pop-up learning'
    },
    products: {
      header: 'Our Products',
      product1: 'Lipid-lowering Drugs',
      product2: 'Antihypertensive Drugs',
      product3: 'Drugs That Affect The Blood',
      product4: 'Vitamins-Minerals',
      product5: 'Gastro IntestInal Drugs',
      product6: 'Analgesics-Antipyretics',
      product7: 'Respiratory Drugs',
      product8: 'Muscle Relaxants',
      product9: 'Neurological Drugs',
      product10: 'Cardiovascular Drugs',
      button: 'See More'
    },
    latestNews: {
      header: 'Our Lateset News',
      newsTitle: 'latest News',
      newsText:
        'English is a compulsory language in many educational systems around the world. Learning English nowadays is much easier',
      button: 'Read More'
    }
  },
  ar: {
    nav: {
      Home: 'الرئيسية',
      Product: 'المنتجات',
      News: 'الأخبار',
      Partners: 'الشركاء',
      Jobs: 'الوظائف',
      Gallery: 'المعرض',
      Contact: 'اتصل بنا',
      About: 'من نحن'
    },
    mainSlider: {
      mainText: 'في زين فارما نحن نعيد تصور الطب'
    },
    generalInfo: {
      whoWeAre: 'من نحن',
      whatWeDo: 'ماذا نفعل',
      paragraph:
        'تختلف طرق التعلم اعتمادًا على أغراض المتعلمين. إذا كنت تواجه صعوبة في تعلم كلمات جديدة وترغب في رفع مستوى مهاراتك في الكتابة والتحدث بسرعة ، يمكنك محاولة العمل على كلمات إنجليزية عشوائية. اليومية المنبثقة كلمة إنجليزية عرضية التعلم'
    },
    products: {
      header: 'منتجاتنا',
      product1: 'الأدوية الخافضة للدهون',
      product2: 'الأدوية الخافضة للضغط',
      product3: 'الأدوية التي تؤثر على الدم',
      product4: 'فيتامينات - معادن',
      product5: 'أدوية الجهاز الهضمي',
      product6: 'المسكنات - خافضات الحرارة',
      product7: 'أدوية الجهاز التنفسي',
      product8: 'مرخيات العضلات',
      product9: 'الأدوية العصبية',
      product10: 'أدوية القلب والأوعية الدموية',
      button: 'مشاهدة المزيد'
    },
    latestNews: {
      header: 'آخر أخبارنا',
      newsTitle: 'أحدث الأخبار',
      newsText:
        'اللغة الإنجليزية هي لغة إلزامية في العديد من الأنظمة التعليمية حول العالم. تعلم اللغة الإنجليزية في الوقت الحاضر أسهل بكثير',
      button: 'اقرأ أكثر'
    }
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
  legacy: false, // <--- 3
  globalInjection: true,
  messages
})
