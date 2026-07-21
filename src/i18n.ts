import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      seo: {
        title: "Professional Deep Cleaning Services Klang Valley | i-Cuzi4U",
        meta_desc: "i-Cuzi4U deep cleaning services in Klang Valley. Clinical-grade mattress, sofa, curtain, carpet, and car seat extraction & sanitization using eco-friendly, child-safe German Kärcher® technology.",
        mattress_alt: "Deep mattress cleaning KL and professional dust mite removal Malaysia - i-Cuzi4U",
        sofa_alt: "Sofa cleaning service Selangor and professional couch extraction PJ - i-Cuzi4U",
        "car-seat_alt": "Professional car seat sanitization and upholstery wash Klang Valley - i-Cuzi4U",
        curtain_alt: "On-site high-temperature steam curtain cleaning and sanitization - i-Cuzi4U",
        carpet_alt: "Commercial and residential carpet cleaning service in Klang Valley - i-Cuzi4U",
        "hood-hob_alt": "Professional kitchen hood and hob degreasing service Selangor - i-Cuzi4U"
      },
      nav: {
        services: 'Services',
        packages: 'Packages',
        about: 'About',
        whatsapp: 'WhatsApp Us',
      },
      hero: {
        badge: "HYGIENE EXPERTS IN KLANG VALLEY",
        title1: 'Professional Deep Cleaning Services In Klang Valley',
        title2: 'Specialized 4U.',
        slogan: '"Cleaning is Our Responsibility. i-Cuzi4U Je!"',
        desc: 'We specialize in Mattress, Sofa, Curtain, Carpet, and Car Seat hygiene. Using German Kärcher® technology and Child-Safe & Eco-Friendly chemicals for a truly clean home.',
        cta_quote: 'Get Instant Quote',
        cta_services: 'View Services',
      },
      trust: {
        staff: 'Local Trained Staff',
        tech: 'German Kärcher® Tech',
        chemicals: 'Child-Safe & Eco-Friendly Chemicals',
        satisfaction: '100% Satisfaction',
      },
      services: {
        title: 'Our Core Services',
        desc: 'We deliver clinical-grade hygiene and specialized deep cleaning across Klang Valley. Our core expertise covers Mattress Cleaning, Sofa Cleaning, Car Seat Cleaning, Curtain Cleaning, Carpet Cleaning, and Kitchen Hood & Hob Cleaning—all powered by German Kärcher® technology and 100% Child-Safe & Eco-Friendly solutions.',
        book_now: 'Book Now',
        from: 'From',
        mattress: {
          title: 'Mattress Cleaning',
          desc: "i-Cuzi4U's mattress cleaning combines Karcher deep extraction and steam technology to completely eradicate dust mites, bed bugs, stains, and bacteria—leaving your bed sterile, fresh, and spotless.",
        },
        sofa: {
          title: 'Sofa Cleaning',
          desc: 'i-Cuzi4U offers expert leather and fabric sofa cleaning. Our advanced deep-cleaning technology removes tough stains, sanitizes, and extends the lifespan of your favorite furniture.',
        },
        'car-seat': {
          title: 'Car Seat Cleaning',
          desc: "i-Cuzi4U deep-cleans both leather and fabric car seats, expertly removing tough stains, dust mites, and bacteria for a sanitized, pristine interior.",
        },
        curtain: {
          title: 'Curtain Cleaning',
          desc: 'i-Cuzi4U offers premium curtain cleaning services for homes and offices. Using effective, fabric-safe techniques, we completely remove stubborn stains, dust, and trapped odors.',
        },
        carpet: {
          title: 'Carpet Cleaning',
          desc: 'i-Cuzi4U delivers expert carpet cleaning tailored to your specific fabric. Using professional shampooing and deep-washing techniques, we revitalize your carpets for a spotless, fresh, and healthy environment.',
        },
        'hood-hob': {
          title: 'Kitchen Hood & Hob Cleaning',
          desc: 'i-Cuzi4U provide professional degreasing, carbon removal, and complete sanitization for your kitchen stovetop, exhaust ventilation, and filters.',
        },
      },
      process: {
        title: 'The i-Cuzi4U 6-Stage Process',
        guarantee_title: 'Hygiene Guaranteed',
        guarantee_desc: 'Our process ensures your home is not just visually clean, but clinically hygienic.',
        karcher_tech: 'Kärcher® Tech',
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
        serving: 'Serving KL, Selangor, PJ, Subang, Shah Alam, Rawang & more.',
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
        desc: 'Join thousands of satisfied customers in Klang Valley. Get a free quote within minutes via WhatsApp.',
        whatsapp: 'WhatsApp Us Now',
        call: 'Call +6011-6263 8228',
      }
    }
  },
  ms: {
    translation: {
      seo: {
        title: "Servis Pembersihan Mendalam Profesional Lembah Klang | i-Cuzi4U",
        meta_desc: "Servis pembersihan mendalam i-Cuzi4U di Lembah Klang. Servis basuh dan sanitasi tilam, sofa, langsir, permaidani, dan kusyen kereta menggunakan teknologi Jerman Kärcher® yang selamat untuk anak & mesra alam.",
        mattress_alt: "Servis cuci tilam dalaman dan basmi hama habuk rumah di KL Selangor - i-Cuzi4U",
        sofa_alt: "Servis cuci sofa Selangor KL dan pengekstrakan kusyen sofa PJ - i-Cuzi4U",
        "car-seat_alt": "Servis cuci kusyen kereta dan sanitasi dalaman kenderaan Lembah Klang - i-Cuzi4U",
        curtain_alt: "Servis cuci langsir stim suhu tinggi tanpa buka di Lembah Klang - i-Cuzi4U",
        carpet_alt: "Servis cuci karpet pejabat dan kediaman gred industri di Lembah Klang - i-Cuzi4U",
        "hood-hob_alt": "Servis cuci hood dan hob dapur, cuci berminyak profesional Selangor - i-Cuzi4U"
      },
      nav: {
        services: 'Perkhidmatan',
        packages: 'Pakej',
        about: 'Tentang Kami',
        whatsapp: 'WhatsApp Kami',
      },
      hero: {
        badge: "PAKAR KEBERSIHAN DI LEMBAH KLANG",
        title1: 'Pembersihan Dalaman Profesional Di Lembah Klang.',
        title2: 'Dikhususkan Untuk Anda.',
        slogan: '"Pembersihan adalah Tanggungjawab Kami. i-Cuzi4U Je!"',
        desc: 'Kami pakar dalam kebersihan Tilam, Sofa, Langsir, Permaidani, dan Kerusi Kereta. Menggunakan teknologi Kärcher® Jerman dan bahan kimia selamat untuk kanak-kanak & mesra alam untuk rumah yang benar-benar bersih.',
        cta_quote: 'Dapatkan Sebut Harga',
        cta_services: 'Lihat Perkhidmatan',
      },
      trust: {
        staff: 'Kakitangan Tempatan Terlatih',
        tech: 'Teknologi Kärcher® Jerman',
        chemicals: 'Bahan Kimia Selamat Kanak-Kanak & Mesra Alam',
        satisfaction: '100% Kepuasan',
      },
      services: {
        title: 'Perkhidmatan Teras Kami',
        desc: 'Kami menawarkan kebersihan gred klinikal dan pembersihan dalaman khusus di seluruh Lembah Klang. Kepakaran teras kami merangkumi Pembersihan Tilam, Pembersihan Sofa, Pembersihan Kerusi Kereta, Pembersihan Langsir, Pembersihan Permaidani, dan Pembersihan Hood & Hob Dapur—dikuasakan oleh teknologi Kärcher® Jerman dan larutan 100% selamat untuk kanak-kanak & mesra alam.',
        book_now: 'Tempah Sekarang',
        from: 'Dari',
        mattress: {
          title: 'Pembersihan Tilam',
          desc: "Pembersihan tilam i-Cuzi4U menggabungkan pengekstrakan mendalam Karcher dan teknologi stim untuk menghapuskan sepenuhnya hama habuk, pepijat katil, kotoran, dan bakteria—menjadikan katil anda steril, segar, dan bersih tanpa noda.",
        },
        sofa: {
          title: 'Pembersihan Sofa',
          desc: 'i-Cuzi4U menawarkan pembersihan sofa kulit dan fabrik yang pakar. Teknologi pembersihan mendalam termaju kami menyingkirkan kotoran degil, mensanitasi, dan memanjangkan jangka hayat perabot kegemaran anda.',
        },
        'car-seat': {
          title: 'Pembersihan Kerusi Kereta',
          desc: 'i-Cuzi4U membersih secara mendalam kerusi kereta jenis kulit dan fabrik, menyingkirkan kotoran degil, hama habuk, dan bakteria secara pakar untuk dalaman yang bersih dan sanitasi sepenuhnya.',
        },
        curtain: {
          title: 'Pembersihan Langsir',
          desc: 'i-Cuzi4U menawarkan perkhidmatan pembersihan langsir premium untuk rumah dan pejabat. Menggunakan teknik yang berkesan dan selamat untuk fabrik, kami menyingkirkan sepenuhnya kotoran degil, habuk, dan bau yang terperangkap.',
        },
        carpet: {
          title: 'Pembersihan Permaidani',
          desc: 'i-Cuzi4U menawarkan perkhidmatan pembersihan permaidani pakar yang disesuaikan dengan jenis fabrik anda. Menggunakan teknik syampu profesional dan basuhan mendalam, kami menghidupkan semula permaidani anda untuk persekitaran yang bersih tanpa noda, segar, dan sihat.',
        },
        'hood-hob': {
          title: 'Pembersihan Hood & Hob Dapur',
          desc: 'i-Cuzi4U menyediakan penyahgrisan profesional, penyingkiran karbon, dan sanitasi lengkap untuk dapur memasak, sistem pengudaraan ekzos, dan penapis anda.',
        },
      },
      process: {
        title: 'Proses 6-Peringkat i-Cuzi4U',
        guarantee_title: 'Kebersihan Dijamin',
        guarantee_desc: 'Proses kami memastikan rumah anda bukan sahaja bersih secara visual, tetapi bersih secara klinikal.',
        karcher_tech: 'Teknologi Kärcher®',
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
        serving: 'Berkhidmat di KL, Selangor, PJ, Subang, Shah Alam, Rawang & banyak lagi.',
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
        desc: 'Sertai beribu-ribu pelanggan yang berpuas hati di Lembah Klang. Dapatkan sebut harga percuma dalam masa beberapa minit melalui WhatsApp.',
        whatsapp: 'WhatsApp Kami Sekarang',
        call: 'Hubungi +6011-6263 8228',
      }
    }
  },
  zh: {
    translation: {
      seo: {
        title: "巴生谷专业深层清洁服务 | i-Cuzi4U",
        meta_desc: "i-Cuzi4U 巴生谷专业深层清洁服务。采用安全环保的德国 Kärcher® 技术，为您提供床垫、沙发、窗帘、地毯及汽车座椅的深层抽吸与除螨消毒服务。",
        mattress_alt: "吉隆坡除尘螨服务与雪兰莪深层床垫清洗消毒 - i-Cuzi4U",
        sofa_alt: "巴生谷专业沙发清洗与雪兰莪布艺及真皮沙发深度去污 - i-Cuzi4U",
        "car-seat_alt": "巴生谷汽车座椅消毒与汽车织物及皮革座椅深层清洗抽吸 - i-Cuzi4U",
        curtain_alt: "巴生谷免拆卸上门高温蒸汽窗帘除尘消毒服务 - i-Cuzi4U",
        carpet_alt: "巴生谷专业地毯清洁与商用及家用重度污渍除螨清洗 - i-Cuzi4U",
        "hood-hob_alt": "雪兰莪厨房抽油烟机与灶台深度去油污和高温杀菌服务 - i-Cuzi4U"
      },
      nav: {
        services: '服务项目',
        packages: '优惠套餐',
        about: '关于我们',
        whatsapp: '联系我们',
      },
      hero: {
        badge: "巴生谷卫生专家",
        title1: '巴生谷专业深层清洁服务。',
        title2: '为您量身定制。',
        slogan: '"清洁是我们的责任。i-Cuzi4U Je!"',
        desc: '我们专注于床垫、沙发、窗帘、地毯和汽车座椅的卫生。采用德国 Kärcher® 技术和儿童安全与环保化学品，为您打造真正干净的家。',
        cta_quote: '立即获取报价',
        cta_services: '查看服务',
      },
      trust: {
        staff: '本地受训员工',
        tech: '德国 Kärcher® 技术',
        chemicals: '儿童安全与环保清洁剂',
        satisfaction: '100% 满意度',
      },
      services: {
        title: '我们的核心服务',
        desc: '我们为巴生谷地区提供临床级的专业深层清洁解决方案。核心服务涵盖床垫清洁、沙发清洁、汽车座椅清洁、窗帘清洁、地毯清洁以及厨房抽油烟机与灶台清洁——全程采用德国 Kärcher® 顶尖设备与 100% 儿童安全与环保清洁剂。',
        book_now: '立即预订',
        from: '起',
        mattress: {
          title: '床垫清洁',
          desc: 'i-Cuzi4U 的床垫清洁结合了 Karcher 深层抽吸与蒸汽技术，彻底根除尘螨、床虱、污渍和细菌，让您的床垫恢复无菌、清新且洁净无瑕。',
        },
        sofa: {
          title: '沙发清洁',
          desc: 'i-Cuzi4U 提供专业的真皮与布艺沙发清洁。我们先进的深层清洁技术能有效去除顽固污渍、进行深度消毒，并延长您心爱家具的使用寿命。',
        },
        'car-seat': {
          title: '汽车座椅清洁',
          desc: 'i-Cuzi4U 专业深层清洁皮质和布艺汽车座椅，高效去除顽固污渍、尘螨和细菌，为您打造无菌且整洁如新的车内空间。',
        },
        curtain: {
          title: '窗帘清洁',
          desc: 'i-Cuzi4U 为住宅和办公室提供优质的窗帘清洁服务。我们采用高效且对面料安全的专业技术，彻底清除顽固污渍、灰尘和残留异味。',
        },
        carpet: {
          title: '地毯清洁',
          desc: 'i-Cuzi4U 提供针对您特定材质量身定制的专业地毯清洁服务。我们采用专业的清洗与深层洗涤技术，让您的地毯焕然一新，为您营造洁净、清新且健康的居家环境。',
        },
        'hood-hob': {
          title: '厨房抽油烟机与灶台清洁',
          desc: 'i-Cuzi4U 提供专业的去油污、去碳化和全面消毒服务，适用于您的厨房炉灶、排烟通风系统和过滤网。',
        },
      },
      process: {
        title: 'i-Cuzi4U 6步清洁流程',
        guarantee_title: '卫生保障',
        guarantee_desc: '我们的流程确保您的家不仅视觉上干净，而且达到临床级别的卫生。',
        karcher_tech: 'Kärcher® 技术',
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
        serving: '服务范围包括吉隆坡、雪兰莪、八打灵再也、梳邦、莎阿南、万挠等。',
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
        desc: '加入巴生谷数千名满意的客户。通过 WhatsApp 在几分钟内获取免费报价。',
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
