import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        services: 'Services',
        packages: 'Packages',
        about: 'About',
        whatsapp: 'WhatsApp Us',
      },
      hero: {
        badge: "KL & SELANGOR'S HYGIENE EXPERTS",
        title1: 'Professional Deep Cleaning.',
        title2: 'Specialized 4U.',
        slogan: '"Cleaning is Our Responsibility. i-Cuzi4U Je!"',
        desc: 'We specialize in Mattress, Sofa, Curtain, Carpet, and Car Seat hygiene. Using German Karcher technology and baby-safe chemicals for a truly clean home.',
        cta_quote: 'Get Instant Quote',
        cta_services: 'View Services',
      },
      trust: {
        staff: 'Local Trained Staff',
        tech: 'German Karcher Tech',
        chemicals: 'Baby-Safe Chemicals',
        satisfaction: '100% Satisfaction',
      },
      services: {
        title: 'Our Core Services',
        desc: 'Specialized deep cleaning solutions for every corner of your home and vehicle.',
        book_now: 'Book Now',
        from: 'From',
        mattress: {
          title: 'Mattress Cleaning',
          desc: 'Dust mite and allergen focus for a healthier sleep.',
        },
        sofa: {
          title: 'Sofa Cleaning',
          desc: 'Specialized tracks for Fabric and Leather upholstery.',
        },
        'car-seat': {
          title: 'Car Seat Deep Cleaning',
          desc: 'Professional sanitisation and odour removal for all vehicle seats and interiors.',
        },
        curtain: {
          title: 'Curtain Steam Cleaning',
          desc: 'On-site steam cleaning without dismantling.',
        },
        carpet: {
          title: 'Carpet Extraction',
          desc: 'Deep extraction for home rugs and office carpets.',
        },
      },
      process: {
        title: 'The i-Cuzi4U 6-Stage Process',
        guarantee_title: 'Hygiene Guaranteed',
        guarantee_desc: 'Our process ensures your home is not just visually clean, but clinically hygienic.',
        karcher_tech: 'Karcher Tech',
        karcher_desc: 'Professional grade equipment for superior results.',
        steps: {
          1: { title: 'Industrial HEPA Vacuuming', desc: 'Removing surface dust and deep-seated particles.' },
          2: { title: 'Pre-treatment/Stain Spray', desc: 'Targeting stubborn stains with specialized solutions.' },
          3: { title: 'Deep Extraction / Steam', desc: 'German technology for deep fiber sanitization.' },
          4: { title: 'Deodorizing', desc: 'Eliminating odors at the source, not just masking them.' },
          5: { title: 'Antibacterial Sterilization', desc: 'Killing 99.9% of germs and bacteria.' },
          6: { title: 'Air Purification', desc: 'Leaving your space fresh and healthy.' },
        }
      },
      packages: {
        title: 'Promo & Packages',
        desc: 'Get more value with our curated cleaning bundles.',
        book_bundle: 'Book Bundle',
        tags: {
          best_seller: 'Best Seller',
          popular: 'Popular',
          essential: 'Essential',
        },
        items: {
          healthy_home: {
            title: 'Healthy Home Bundle',
            desc: '1x Mattress + 1x Sofa',
            discount: 'Save 15%',
          },
          living_room: {
            title: 'Living Room Refresh',
            desc: 'Sofa + Carpet + Curtains',
            discount: 'Value Deal',
          },
          move_in: {
            title: 'New Move-In',
            desc: 'Whole-house fabric sanitization',
            discount: 'Custom Quote',
          }
        }
      },
      footer: {
        desc: 'Professional deep cleaning specialists serving the Klang Valley. Hygiene focused, mobile-first, and customer driven.',
        services: 'Services',
        company: 'Company',
        contact: 'Contact',
        serving: 'Serving KL, Selangor, PJ, Subang, Shah Alam & more.',
        rights: '© 2026 i-Cuzi4U Cleaning Services. All rights reserved.',
      },
      privacy: {
        title: 'Privacy Policy',
        last_updated: 'Last updated: May 20, 2026',
        introduction: 'At i-Cuzi4U, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.',
        sections: {
          collection_title: '1. Information We Collect',
          collection_desc: 'We may collect personal information such as your name, address, phone number, and email when you request a quote or book a service through our platform or WhatsApp.',
          usage_title: '2. How We Use Your Information',
          usage_desc: 'Your information is used purely to provide our deep cleaning services, process your bookings, and communicate with you regarding your service requests.',
          third_party_title: '3. Third-Party Disclosure',
          third_party_desc: 'We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted partners who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.',
          security_title: '4. Security',
          security_desc: 'We implement a variety of security measures to maintain the safety of your personal information.',
          contact_title: '5. Contact Us',
          contact_desc: 'If you have any questions regarding this privacy policy, you may contact us at +6011-6263 8228.',
        }
      },
      cta: {
        title: 'Ready for a Cleaner Home?',
        desc: 'Join thousands of satisfied customers in KL & Selangor. Get a free quote within minutes via WhatsApp.',
        whatsapp: 'WhatsApp Us Now',
        call: 'Call +6011-6263 8228',
      }
    }
  },
  ms: {
    translation: {
      nav: {
        services: 'Perkhidmatan',
        packages: 'Pakej',
        about: 'Tentang Kami',
        whatsapp: 'WhatsApp Kami',
      },
      hero: {
        badge: "PAKAR KEBERSIHAN KL & SELANGOR",
        title1: 'Pembersihan Dalaman Profesional.',
        title2: 'Dikhususkan Untuk Anda.',
        slogan: '"Pembersihan adalah Tanggungjawab Kami. i-Cuzi4U Je!"',
        desc: 'Kami pakar dalam kebersihan Tilam, Sofa, Langsir, Permaidani, dan Kerusi Kereta. Menggunakan teknologi Karcher Jerman dan bahan kimia selamat untuk bayi untuk rumah yang benar-benar bersih.',
        cta_quote: 'Dapatkan Sebut Harga',
        cta_services: 'Lihat Perkhidmatan',
      },
      trust: {
        staff: 'Kakitangan Tempatan Terlatih',
        tech: 'Teknologi Karcher Jerman',
        chemicals: 'Bahan Kimia Selamat Bayi',
        satisfaction: '100% Kepuasan',
      },
      services: {
        title: 'Perkhidmatan Teras Kami',
        desc: 'Penyelesaian pembersihan dalaman khusus untuk setiap sudut rumah dan kenderaan anda.',
        book_now: 'Tempah Sekarang',
        from: 'Dari',
        mattress: {
          title: 'Pembersihan Tilam',
          desc: 'Fokus pada hama habuk dan alergen untuk tidur yang lebih sihat.',
        },
        sofa: {
          title: 'Pembersihan Sofa',
          desc: 'Laluan khusus untuk upholsteri Fabrik dan Kulit.',
        },
        'car-seat': {
          title: 'Pembersihan Dalaman Kerusi Kereta',
          desc: 'Sanitasi profesional dan penyingkiran bau untuk semua jenis kerusi kenderaan.',
        },
        curtain: {
          title: 'Pembersihan Stim Langsir',
          desc: 'Pembersihan stim di lokasi tanpa perlu dibuka.',
        },
        carpet: {
          title: 'Pembersihan Permaidani',
          desc: 'Pengekstrakan dalaman untuk permaidani rumah dan pejabat.',
        },
      },
      process: {
        title: 'Proses 6-Peringkat i-Cuzi4U',
        guarantee_title: 'Kebersihan Dijamin',
        guarantee_desc: 'Proses kami memastikan rumah anda bukan sahaja bersih secara visual, tetapi bersih secara klinikal.',
        karcher_tech: 'Teknologi Karcher',
        karcher_desc: 'Peralatan gred profesional untuk hasil yang unggul.',
        steps: {
          1: { title: 'Vakum HEPA Industri', desc: 'Menghilangkan habuk permukaan dan zarah yang tertanam dalam.' },
          2: { title: 'Pra-rawatan/Semburan Kesan', desc: 'Menyasarkan kesan degil dengan penyelesaian khusus.' },
          3: { title: 'Pengekstrakan Dalam / Stim', desc: 'Teknologi Jerman untuk sanitasi gentian dalam.' },
          4: { title: 'Penyahbauan', desc: 'Menghilangkan bau pada punca, bukan sekadar menutupnya.' },
          5: { title: 'Sterilisasi Antibakteria', desc: 'Membunuh 99.9% kuman dan bakteria.' },
          6: { title: 'Pembersihan Udara', desc: 'Meninggalkan ruang anda segar dan sihat.' },
        }
      },
      packages: {
        title: 'Promo & Pakej',
        desc: 'Dapatkan lebih nilai dengan bundle pembersihan kami.',
        book_bundle: 'Tempah Bundle',
        tags: {
          best_seller: 'Paling Laris',
          popular: 'Popular',
          essential: 'Penting',
        },
        items: {
          healthy_home: {
            title: 'Bundle Rumah Sihat',
            desc: '1x Tilam + 1x Sofa',
            discount: 'Jimat 15%',
          },
          living_room: {
            title: 'Segarkan Ruang Tamu',
            desc: 'Sofa + Permaidani + Langsir',
            discount: 'Tawaran Hebat',
          },
          move_in: {
            title: 'Pindah Masuk Baru',
            desc: 'Sanitasi fabrik seluruh rumah',
            discount: 'Sebut Harga Khas',
          }
        }
      },
      footer: {
        desc: 'Pakar pembersihan dalaman profesional yang berkhidmat di Lembah Klang. Fokus pada kebersihan, mesra mudah alih, dan didorong oleh pelanggan.',
        services: 'Perkhidmatan',
        company: 'Syarikat',
        contact: 'Hubungi',
        serving: 'Berkhidmat di KL, Selangor, PJ, Subang, Shah Alam & banyak lagi.',
        rights: '© 2026 i-Cuzi4U Cleaning Services. Hak cipta terpelihara.',
      },
      privacy: {
        title: 'Dasar Privasi',
        last_updated: 'Terakhir dikemas kini: 20 Mei 2026',
        introduction: 'Di i-Cuzi4U, kami komited untuk melindungi privasi anda dan memastikan maklumat peribadi anda dikendalikan dengan cara yang selamat dan bertanggungjawab.',
        sections: {
          collection_title: '1. Maklumat yang Kami Kumpul',
          collection_desc: 'Kami mungkin mengumpul maklumat peribadi seperti nama, alamat, nombor telefon, dan e-mel anda apabila anda meminta sebut harga atau menempah perkhidmatan melalui platform kami atau WhatsApp.',
          usage_title: '2. Cara Kami Menggunakan Maklumat Anda',
          usage_desc: 'Maklumat anda digunakan semata-mata untuk menyediakan perkhidmatan pembersihan dalaman kami, memproses tempahan anda, dan berkomunikasi dengan anda mengenai permintaan perkhidmatan anda.',
          third_party_title: '3. Pendedahan kepada Pihak Ketiga',
          third_party_desc: 'Kami tidak menjual, berdagang, atau memindahkan maklumat peribadi anda kepada pihak luar. Ini tidak termasuk rakan kongsi yang dipercayai yang membantu kami dalam mengendalikan laman web kami atau menjalankan perniagaan kami, selagi pihak tersebut bersetuju untuk merahsiakan maklumat ini.',
          security_title: '4. Keselamatan',
          security_desc: 'Kami melaksanakan pelbagai langkah keselamatan untuk mengekalkan keselamatan maklumat peribadi anda.',
          contact_title: '5. Hubungi Kami',
          contact_desc: 'Jika anda mempunyai sebarang soalan mengenai dasar privasi ini, anda boleh menghubungi kami di +6011-6263 8228.',
        }
      },
      cta: {
        title: 'Bersedia untuk Rumah yang Lebih Bersih?',
        desc: 'Sertai beribu-ribu pelanggan yang berpuas hati di KL & Selangor. Dapatkan sebut harga percuma dalam masa beberapa minit melalui WhatsApp.',
        whatsapp: 'WhatsApp Kami Sekarang',
        call: 'Hubungi +6011-6263 8228',
      }
    }
  },
  zh: {
    translation: {
      nav: {
        services: '服务项目',
        packages: '优惠套餐',
        about: '关于我们',
        whatsapp: '联系我们',
      },
      hero: {
        badge: "吉隆坡和雪兰莪卫生专家",
        title1: '专业深层清洁。',
        title2: '为您量身定制。',
        slogan: '"清洁是我们的责任。i-Cuzi4U Je!"',
        desc: '我们专注于床垫、沙发、窗帘、地毯和汽车座椅的卫生。采用德国 Karcher 技术和婴儿安全化学品，为您打造真正干净的家。',
        cta_quote: '立即获取报价',
        cta_services: '查看服务',
      },
      trust: {
        staff: '本地受训员工',
        tech: '德国 Karcher 技术',
        chemicals: '婴儿安全清洁剂',
        satisfaction: '100% 满意度',
      },
      services: {
        title: '我们的核心服务',
        desc: '为您家居和车辆的每个角落提供专业的深层清洁解决方案。',
        book_now: '立即预订',
        from: '起',
        mattress: {
          title: '床垫清洁',
          desc: '专注于除尘螨和过敏原，让您睡得更健康。',
        },
        sofa: {
          title: '沙发清洁',
          desc: '针对布艺和皮革家具的专业清洁。',
        },
        'car-seat': {
          title: '汽车座椅深层清洁',
          desc: '专业的座椅消毒与异味去除，为您打造清新的驾驶空间。',
        },
        curtain: {
          title: '窗帘蒸汽清洁',
          desc: '无需拆卸，现场蒸汽清洁。',
        },
        carpet: {
          title: '地毯深层清洁',
          desc: '为家居地毯和办公室地毯提供深层抽吸清洁。',
        },
      },
      process: {
        title: 'i-Cuzi4U 6步清洁流程',
        guarantee_title: '卫生保障',
        guarantee_desc: '我们的流程确保您的家不仅视觉上干净，而且达到临床级别的卫生。',
        karcher_tech: 'Karcher 技术',
        karcher_desc: '专业级设备，确保卓越效果。',
        steps: {
          1: { title: '工业级 HEPA 吸尘', desc: '去除表面灰尘和深层颗粒。' },
          2: { title: '预处理/污渍喷雾', desc: '使用专业溶液针对顽固污渍。' },
          3: { title: '深层抽吸 / 蒸汽', desc: '德国技术，深层纤维消毒。' },
          4: { title: '除臭处理', desc: '从源头消除异味，而非仅仅掩盖。' },
          5: { title: '抗菌消毒', desc: '杀灭 99.9% 的病菌和细菌。' },
          6: { title: '空气净化', desc: '让您的空间清新健康。' },
        }
      },
      packages: {
        title: '促销与套餐',
        desc: '通过我们精心策划的清洁组合获得更多价值。',
        book_bundle: '预订组合',
        tags: {
          best_seller: '畅销',
          popular: '热门',
          essential: '必备',
        },
        items: {
          healthy_home: {
            title: '健康家居组合',
            desc: '1张床垫 + 1套沙发',
            discount: '节省 15%',
          },
          living_room: {
            title: '客厅焕新',
            desc: '沙发 + 地毯 + 窗帘',
            discount: '超值优惠',
          },
          move_in: {
            title: '新居入住',
            desc: '全屋织物消毒',
            discount: '定制报价',
          }
        }
      },
      footer: {
        desc: '服务于巴生谷的专业深层清洁专家。专注于卫生、移动优先、客户驱动。',
        services: '服务',
        company: '公司',
        contact: '联系',
        serving: '服务范围包括吉隆坡、雪兰莪、八打灵再也、梳邦、莎阿南等。',
        rights: '© 2026 i-Cuzi4U 清洁服务。版权所有。',
      },
      privacy: {
        title: '隐私政策',
        last_updated: '最后更新日期：2026年5月20日',
        introduction: '在 i-Cuzi4U，我们致力于保护您的隐私，并确保以安全且负责任的方式处理您的个人信息。',
        sections: {
          collection_title: '1. 我们收集的信息',
          collection_desc: '当您通过我们的平台或 WhatsApp 请求报价或预订服务时，我们可能会收集您的姓名、地址、电话号码和电子邮件等个人信息。',
          usage_title: '2. 我们如何使用您的信息',
          usage_desc: '您的信息仅用于提供我们的深层清洁服务、处理您的预订以及就您的服务请求与您沟通。',
          third_party_title: '3. 第三方披露',
          third_party_desc: '我们不会将您的个人信息出售、交易或以其他方式转让给外部各方。这不包括协助我们运营网站或开展业务的合作伙伴，只要这些各方同意对这些信息保密。',
          security_title: '4. 安全保障',
          security_desc: '我们采取各种安全措施来维护您个人信息的安全。',
          contact_title: '5. 联系我们',
          contact_desc: '如果您对本隐私政策有任何疑问，请致电 +6011-6263 8228 与我们联系。',
        }
      },
      cta: {
        title: '准备好迎接更干净的家了吗？',
        desc: '加入吉隆坡和雪兰莪数千名满意的客户。通过 WhatsApp 在几分钟内获取免费报价。',
        whatsapp: '立即 WhatsApp 我们',
        call: '致电 +6011-6263 8228',
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
