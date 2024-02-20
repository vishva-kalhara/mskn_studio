/* eslint-disable no-unused-vars */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "ar",
        returnObjects: true,
        resources: {
            en: {
                translation: {
                    signIn: "Sign In",
                    inputPlacceholder:
                        "General tips for the architectural plan of a reinforced house",
                    searchBtn: "Search",
                    instructions: {
                        heading:
                            "These tips constitute good starting points for designing a successful armed house architectural plan.",
                        line1: "1. Consult architects and civil engineers: Collaborate with professional engineers to ensure that the design meets building and construction standards. The house may need special designs that vary depending on environmental and geological conditions.",
                        line2: "2. Determine needs and desires: Before starting the design, clearly define your needs and desires. Do you need large family rooms, open spaces, or a place to work from home?",
                        line3: "3. Geographic and environmental trends: Important geological and geotechnical considerations in the architectural design of reinforced houses. Location and local terrain must be considered to determine the best placement of the building and to design strong foundation systems.",
                        line4: "4. Paying attention to internal distribution and planning: Determine how the rooms and internal spaces will be distributed in the house so that it provides the appropriate internal layout for your daily needs.",
                        line5: "5. Taking the building structure into account: In the case of reinforced construction, the structural design of the building must be considered and the external and internal loads and forces must be properly directed.",
                        final: "These tips constitute good starting points for designing a successful armed house architectural plan.",
                    },
                    subHeading1: `Hire professionals and specialists in the field
                    Help you avoid mistakes and ensure the success of building your home`,
                    shopHeading: "Here is a group of specialists",
                    shopName: "the shop",
                    technitionName: "Technician",
                },
            },
            ar: {
                translation: {
                    signIn: "تسجيل",
                    inputPlacceholder: "نصائح عامة للمخططالمعماري لمنزل مسلح",
                    searchBtn: "بحث",
                    instructions: {
                        heading:
                            "عند تصميم مخطط معماري لمنزل مسلح،هنا بعض النصائح العامة التي يجب أخذها في الاعتبار:",
                        line1: "1. استشر مهندسين معماريين ومهندسينمدنيين: تعاون مع مهندسين محترفين لضمان أن التصميم يفي بالمعايير البنائيةوالانشائية. قد يحتاج المنزل الى تصميمات خاصة تختلف باختلاف الظروف البيئيةوالجيولوجية.",
                        line2: "2. تحديد الاحتياجات والرغبات: قبلبدء التصميم، قم بتحديد احتياجاتك ورغباتك بشكل واضح. هل تحتاج إلى غرف كبيرةللعائلة، مساحات مفتوحة، أو مكان للعمل من المنزل؟",
                        line3: "3. التوجهات الجغرافية والبيئية:اعتبارات جيولوجية وجيوتقنية هامة في التصميم المعماري للمنازل المسلحة. يجبمراعاة الموقع والتضاريس المحلية لتحديد أفضل وضعية للمبنى ولتصميم أنظمة أساسيةقوية.",
                        line4: "4. الاهتمام بالتوزيع الداخليوالتخطيط: حدد كيف سيتم توزيع الغرف والمساحات الداخلية في المنزل بحيث يوفرالتخطيط الداخلي الملائم لاحتياجاتك اليومية.",
                        line5: "5. أخذ بنية المبنى في الاعتبار:في حالة البناء المسلح، يجب النظر في التصميم الهيكلي للمبنى وتوجيه الأعباءوالقوى الخارجية والداخلية بشكل صحيح.",
                        final: "هذه النصائح تشكل نقاط البدايةالجيدة لتصميم مخطط معماري لمنزل مسلح ناجح.",
                    },
                    subHeading1: `الاستعانة بمحترفين ومتخصصين في المجال
                    تساعدك على تجنب الأخطاء وضمان نجاح بناء منزلك`,
                    shopHeading: "هنا مجموعة منالمختصين",
                    shopName: "المتجر",
                    technitionName: "الفنيين",
                },
            },
        },
    });
