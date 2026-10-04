import { priceAmount as p } from "@/lib/pricing"
import type { InsightContentLocale } from "@/lib/insights-content"

/**
 * Three long-form pricing guides (Oct 2026), written from the market research
 * in docs/pricing-research-2026.md. Market ranges are quoted as ranges seen
 * in published price lists, never as exact facts; Dhia's own prices come from
 * lib/pricing.ts so they can't drift from the rest of the site.
 */
export const pricingGuideContent: Record<string, Record<InsightContentLocale, string>> = {
  "website-cost-tunisia-2026": {
    en: `"How much for a website?" is the question I get most, and the honest answer is a range. Here is what that range looks like in Tunisia in 2026, where the money actually goes, and how to tell a fair quote from a cheap one that will cost you more later.

## What Tunisian agencies publish

I went through the public price lists of Tunisian web agencies and freelance listings in 2025 and 2026. They line up more than you would expect:

- **Showcase site (5 to 8 pages, one language):** usually 1,200 to 4,500 TND. The low end is almost always a WordPress template with your logo and texts dropped in.
- **E-commerce site:** usually 1,800 to 7,000 TND for a standard shop, and 8,000 TND and far beyond for custom work.
- **Trilingual site (Arabic, French, English):** agencies typically add 15 to 25% to the price of the single-language version.
- **Hosting and domain:** roughly 100 to 250 TND a year. Maintenance plans start around 150 TND a month.

For comparison, French freelancers usually start showcase sites around €500 to €1,500, and the average project on French marketplaces sits near €1,800.

## Where the money goes

A website price is mostly time. The parts that take the most are rarely the ones clients expect:

**1. Content and structure.** Deciding what each page says, in which order, for which visitor. A site with unclear content stays unclear however well it is built.

**2. Arabic done properly.** A right-to-left layout is not a mirrored left-to-right one. Menus, icons, numbers, forms and mixed Arabic and French lines all need care. This is the work most often skipped on cheap trilingual sites, and visitors notice.

**3. Mobile speed.** Most Tunisian visitors arrive on a phone, often on mobile data. Compressed images, fewer scripts and fast hosting are invisible line items that decide whether people wait for your page.

**4. Everything after launch.** Updates, small changes, backups, renewing the domain. Ask who does this and what it costs before you sign.

## Cheap, fair, overpriced: how to read a quote

A quote is fair when it says, in writing, how many pages, which languages, who writes and translates the content, whether hosting is included and for how long, how many rounds of changes you get, and who owns the site at the end.

Be careful when a quote is very low and very vague. The usual pattern is a template, no real Arabic version, and a site you cannot edit without paying again.

A high price is not automatically better either. Agency overhead is real, and a 10,000 TND showcase site should come with something you can name: strategy, copywriting, photography, custom design.

## My own starting prices

For transparency, here is where I start. I build by hand in Next.js rather than from templates, so sites stay fast and easy to grow:

- **Landing page:** from ${p("landingPage", "en")}
- **Showcase website:** from ${p("showcaseSite", "en")}
- **Arabic / French / English website:** from ${p("multilingualSite", "en")}
- **Maintenance:** from ${p("maintenance", "en")}

The TND price is for clients in Tunisia and the EUR price for clients abroad. You always get a written quote before any work starts.

> **Planning a site and want a straight answer on budget?** Tell me what you need and I will tell you what it costs. [See development work](/developer) or [book a free call](https://calendly.com/benarfa367/30min).`,
    fr: `« Combien coûte un site web ? » est la question qu'on me pose le plus, et la réponse honnête est une fourchette. Voici à quoi elle ressemble en Tunisie en 2026, où va réellement l'argent, et comment distinguer un devis juste d'un devis bon marché qui vous coûtera plus cher ensuite.

## Ce que publient les agences tunisiennes

J'ai parcouru les grilles tarifaires publiques d'agences web tunisiennes et d'annonces de freelances en 2025 et 2026. Elles se recoupent plus qu'on ne le pense :

- **Site vitrine (5 à 8 pages, une langue) :** en général de 1 200 à 4 500 DT. Le bas de la fourchette est presque toujours un modèle WordPress avec votre logo et vos textes.
- **Site e-commerce :** en général de 1 800 à 7 000 DT pour une boutique standard, et à partir de 8 000 DT, bien au-delà, pour du sur-mesure.
- **Site trilingue (arabe, français, anglais) :** les agences ajoutent en général 15 à 25 % au prix de la version en une langue.
- **Hébergement et nom de domaine :** environ 100 à 250 DT par an. Les forfaits de maintenance démarrent autour de 150 DT par mois.

À titre de comparaison, les freelances français démarrent souvent un site vitrine entre 500 et 1 500 €, et le projet moyen sur les plateformes françaises tourne autour de 1 800 €.

## Où va l'argent

Le prix d'un site, c'est surtout du temps. Les étapes les plus longues sont rarement celles qu'on imagine :

**1. Le contenu et la structure.** Décider ce que dit chaque page, dans quel ordre, pour quel visiteur. Un site au contenu flou reste flou, aussi bien construit soit-il.

**2. L'arabe bien fait.** Une mise en page de droite à gauche n'est pas une page de gauche à droite inversée. Menus, icônes, chiffres, formulaires, lignes mêlant arabe et français : tout demande du soin. C'est le travail le plus souvent sacrifié sur les sites trilingues bon marché, et les visiteurs le voient.

**3. La vitesse sur mobile.** La plupart des visiteurs tunisiens arrivent sur téléphone, souvent en données mobiles. Images compressées, moins de scripts, hébergement rapide : des lignes invisibles du devis qui décident si l'on attend votre page.

**4. Tout ce qui suit la mise en ligne.** Mises à jour, petites modifications, sauvegardes, renouvellement du domaine. Demandez qui s'en charge et combien cela coûte avant de signer.

## Bon marché, juste, trop cher : lire un devis

Un devis est juste quand il précise par écrit le nombre de pages, les langues, qui rédige et traduit le contenu, si l'hébergement est inclus et pour combien de temps, combien de séries de modifications sont prévues, et à qui appartient le site à la fin.

Méfiez-vous d'un devis très bas et très vague. Le schéma habituel : un modèle, pas de vraie version arabe, et un site que vous ne pouvez pas modifier sans repayer.

Un prix élevé n'est pas forcément meilleur non plus. Les frais d'agence sont réels, et un site vitrine à 10 000 DT doit apporter quelque chose de nommable : stratégie, rédaction, photographie, design sur mesure.

## Mes prix de départ

Par transparence, voici où je commence. Je développe à la main en Next.js plutôt qu'à partir de modèles, pour des sites rapides et faciles à faire évoluer :

- **Page d'atterrissage :** à partir de ${p("landingPage", "fr")}
- **Site vitrine :** à partir de ${p("showcaseSite", "fr")}
- **Site arabe / français / anglais :** à partir de ${p("multilingualSite", "fr")}
- **Maintenance :** à partir de ${p("maintenance", "fr")}

Le prix en dinars concerne les clients en Tunisie, le prix en euros les clients à l'étranger. Vous recevez toujours un devis écrit avant tout démarrage.

> **Vous préparez un site et voulez une réponse claire sur le budget ?** Dites-moi ce dont vous avez besoin, je vous dis ce que cela coûte. [Voir mes réalisations web](/developer) ou [réserver un appel gratuit](https://calendly.com/benarfa367/30min).`,
    ar: `«كم يكلّف الموقع؟» هو السؤال الذي يُطرح عليّ أكثر من غيره، والجواب الصادق هو نطاق أسعار. إليك كيف يبدو هذا النطاق في تونس سنة 2026، وأين يذهب المال فعلاً، وكيف تميّز عرض السعر العادل من العرض الرخيص الذي سيكلّفك أكثر لاحقاً.

## ما تنشره الوكالات التونسية

راجعت قوائم الأسعار المنشورة لوكالات ويب تونسية وإعلانات مستقلين في 2025 و2026، وهي متقاربة أكثر مما تتوقع:

- **موقع تعريفي (من 5 إلى 8 صفحات، لغة واحدة):** عادة بين 1,200 و4,500 د.ت. والحد الأدنى غالباً قالب WordPress مع شعارك ونصوصك.
- **متجر إلكتروني:** عادة بين 1,800 و7,000 د.ت لمتجر عادي، وابتداءً من 8,000 د.ت وأكثر بكثير للعمل المخصص.
- **موقع بثلاث لغات (عربية، فرنسية، إنجليزية):** تضيف الوكالات عادة من 15 إلى 25% إلى سعر النسخة ذات اللغة الواحدة.
- **الاستضافة واسم النطاق:** حوالي 100 إلى 250 د.ت سنوياً. وتبدأ باقات الصيانة من حوالي 150 د.ت شهرياً.

للمقارنة، يبدأ المستقلون في فرنسا الموقع التعريفي عادة بين 500 و1,500 €، ومتوسط المشروع على المنصات الفرنسية حوالي 1,800 €.

## أين يذهب المال

سعر الموقع هو في الأساس وقت. والمراحل الأطول نادراً ما تكون تلك التي يتوقعها العميل:

**1. المحتوى والهيكلة.** تحديد ما تقوله كل صفحة، وبأي ترتيب، ولأي زائر. الموقع ذو المحتوى الغامض يبقى غامضاً مهما كان بناؤه جيداً.

**2. العربية بشكل صحيح.** التخطيط من اليمين إلى اليسار ليس صفحة معكوسة. القوائم والأيقونات والأرقام والنماذج والأسطر التي تمزج العربية بالفرنسية، كلها تحتاج عناية. وهذا أكثر ما يُهمل في المواقع ثلاثية اللغة الرخيصة، والزوار يلاحظون ذلك.

**3. السرعة على الهاتف.** معظم الزوار في تونس يصلون عبر الهاتف، وغالباً ببيانات الجوال. صور مضغوطة، سكربتات أقل، استضافة سريعة: بنود غير مرئية في عرض السعر تحدد إن كان الزائر سينتظر صفحتك.

**4. كل ما بعد الإطلاق.** التحديثات، التعديلات الصغيرة، النسخ الاحتياطية، تجديد النطاق. اسأل من يتولى ذلك وكم يكلّف قبل التوقيع.

## رخيص، عادل، مبالغ فيه: كيف تقرأ عرض السعر

يكون عرض السعر عادلاً حين يحدد كتابياً عدد الصفحات، واللغات، ومن يكتب المحتوى ويترجمه، وهل الاستضافة مشمولة ولأي مدة، وعدد جولات التعديل، ولمن يعود الموقع في النهاية.

احذر من عرض منخفض جداً وغامض جداً. النمط المعتاد: قالب جاهز، دون نسخة عربية حقيقية، وموقع لا يمكنك تعديله دون أن تدفع من جديد.

والسعر المرتفع ليس أفضل بالضرورة. تكاليف الوكالات حقيقية، وموقع تعريفي بـ10,000 د.ت يجب أن يقدّم شيئاً يمكن تسميته: استراتيجية، كتابة محتوى، تصوير، تصميم مخصص.

## أسعاري الابتدائية

من باب الشفافية، هذه نقطة انطلاقي. أبني المواقع يدوياً بـNext.js بدل القوالب، لتبقى سريعة وسهلة التطوير:

- **صفحة هبوط:** ابتداءً من ${p("landingPage", "ar")}
- **موقع تعريفي:** ابتداءً من ${p("showcaseSite", "ar")}
- **موقع بالعربية والفرنسية والإنجليزية:** ابتداءً من ${p("multilingualSite", "ar")}
- **الصيانة:** ابتداءً من ${p("maintenance", "ar")}

السعر بالدينار للعملاء في تونس، وباليورو للعملاء في الخارج. تستلم دائماً عرض سعر مكتوباً قبل بدء أي عمل.

> **تخطط لموقع وتريد جواباً واضحاً عن الميزانية؟** أخبرني بما تحتاجه وسأخبرك بتكلفته. [شاهد أعمال التطوير](/developer) أو [احجز مكالمة مجانية](https://calendly.com/benarfa367/30min).`,
  },

  "trainer-fees-tunisia": {
    en: `NGOs, schools and companies often ask me the same thing before anything else: what does a trainer cost? Here is how trainer fees are usually set in Tunisia and in donor-funded programmes, what a fair day rate includes, and the reimbursement rule many Tunisian companies forget to use.

## How trainers price their work

Almost everyone in this field prices by the **training day**, usually counted as 6 hours of delivery. Hourly rates exist, but organisers budget in days, and so do donors.

A half-day workshop is rarely half the price of a full day. Preparation, travel and the needs analysis take nearly as long for three hours as for six, so half-days typically cost 55 to 60% of a day rate.

## What the market pays

From published calls for trainers, official fee scales and rate surveys in 2024 to 2026:

- **Tunisian donor-funded programmes:** recent calls from business and NGO programmes offered about 500 to 670 TND per day worked, often as a flat fee covering preparation and delivery.
- **Junior and senior freelance trainers in Tunisia:** roughly 300 to 400 TND a day early on, and 700 TND or more for senior consultants.
- **European youth programmes:** the Council of Europe's trainers pool, for example, pays junior trainers around €160 and senior trainers around €300 a day.
- **International organisations:** UN consultant scales run from about $190 a day for junior profiles to over $1,000 a day for senior experts.
- **French corporate trainers:** commonly €400 to €550 a day after a few years of experience.

## The CNFCPP rule Tunisian companies should know

Companies that pay the training tax (TFP) can have in-house training reimbursed by the CNFCPP. Under its published rules, the reimbursement for an outside trainer is capped per training hour at a share of the minimum wage (SMIG), which in 2026 works out to roughly 110 TND an hour, or about 660 TND for a 6-hour day.

In practice, a day rate at or under that cap can cost the company close to nothing in the end. Check the current CNFCPP guide and the filing conditions before you budget, as the rules and the SMIG change over time.

## What a fair day rate should include

When you compare quotes, check what each one covers:

- **A needs analysis** before the session is designed. Without it you are buying a generic workshop.
- **Design time** for activities and materials adapted to your group's level and language.
- **Delivery,** in the language your participants actually use.
- **A written report** after the session: what was done, what participants said, what to do next. Funders ask for it, and it is the only proof the training happened.
- **Travel and accommodation,** stated separately when the session is away from the trainer's city.

## My own starting prices

- **Half-day workshop:** from ${p("halfDayWorkshop", "en")}
- **Training day (multi-session programmes):** from ${p("trainingDay", "en")}
- **Train-the-trainer:** from ${p("totDay", "en")}
- **Keynote:** from ${p("keynote", "en")}

The TND price is for organisations in Tunisia, the EUR price for programmes abroad. Every offer starts with a needs analysis and ends with a report, and you get a written quote first.

> **Planning a training or a programme?** Tell me about your group and your goals. [See training work](/trainer) or [book a free call](https://calendly.com/benarfa367/30min).`,
    fr: `ONG, écoles et entreprises me posent souvent la même question avant toute autre : combien coûte un formateur ? Voici comment se fixent les honoraires de formation en Tunisie et dans les programmes financés par des bailleurs, ce que doit inclure un tarif journalier juste, et la règle de remboursement que beaucoup d'entreprises tunisiennes oublient d'utiliser.

## Comment les formateurs fixent leurs prix

Presque tout le monde dans ce métier facture à la **journée de formation**, généralement comptée comme 6 heures d'animation. Les tarifs horaires existent, mais les organisateurs budgètent en jours, et les bailleurs aussi.

Un atelier d'une demi-journée coûte rarement la moitié d'une journée. La préparation, le déplacement et l'analyse des besoins prennent presque autant de temps pour trois heures que pour six : une demi-journée représente en général 55 à 60 % du tarif journalier.

## Ce que paie le marché

D'après des appels à formateurs publiés, des barèmes officiels et des enquêtes de tarifs entre 2024 et 2026 :

- **Programmes tunisiens financés par des bailleurs :** des appels récents de programmes entrepreneuriaux et associatifs proposaient environ 500 à 670 DT par jour travaillé, souvent en forfait couvrant préparation et animation.
- **Formateurs freelances en Tunisie :** environ 300 à 400 DT par jour en début de parcours, 700 DT et plus pour les consultants seniors.
- **Programmes jeunesse européens :** le pool de formateurs du Conseil de l'Europe, par exemple, rémunère les formateurs juniors autour de 160 € et les seniors autour de 300 € par jour.
- **Organisations internationales :** les barèmes de consultants de l'ONU vont d'environ 190 $ par jour pour les profils juniors à plus de 1 000 $ pour les experts seniors.
- **Formateurs en entreprise en France :** couramment 400 à 550 € par jour après quelques années d'expérience.

## La règle du CNFCPP que les entreprises tunisiennes devraient connaître

Les entreprises qui paient la taxe de formation professionnelle (TFP) peuvent se faire rembourser leurs formations internes par le CNFCPP. Selon ses règles publiées, le remboursement pour un formateur externe est plafonné par heure de formation à une part du SMIG, ce qui correspond en 2026 à environ 110 DT de l'heure, soit environ 660 DT pour une journée de 6 heures.

Concrètement, un tarif journalier égal ou inférieur à ce plafond peut ne presque rien coûter à l'entreprise au final. Vérifiez le guide CNFCPP en vigueur et les conditions de dépôt avant de budgéter : les règles et le SMIG évoluent.

## Ce que doit inclure un tarif journalier juste

En comparant des devis, vérifiez ce que chacun couvre :

- **Une analyse des besoins** avant la conception. Sans elle, vous achetez un atelier générique.
- **Du temps de conception** pour des activités et supports adaptés au niveau et à la langue du groupe.
- **L'animation,** dans la langue que vos participants utilisent vraiment.
- **Un rapport écrit** après la session : ce qui a été fait, ce qu'en disent les participants, la suite à donner. Les bailleurs le demandent, et c'est la seule preuve que la formation a eu lieu.
- **Le déplacement et l'hébergement,** indiqués à part quand la session a lieu hors de la ville du formateur.

## Mes prix de départ

- **Atelier d'une demi-journée :** à partir de ${p("halfDayWorkshop", "fr")}
- **Journée de formation (programmes multi-sessions) :** à partir de ${p("trainingDay", "fr")}
- **Formation de formateurs :** à partir de ${p("totDay", "fr")}
- **Conférence :** à partir de ${p("keynote", "fr")}

Le prix en dinars concerne les organisations en Tunisie, le prix en euros les programmes à l'étranger. Chaque offre commence par une analyse des besoins et se termine par un rapport, et vous recevez d'abord un devis écrit.

> **Vous préparez une formation ou un programme ?** Parlez-moi de votre groupe et de vos objectifs. [Voir mon travail de formateur](/trainer) ou [réserver un appel gratuit](https://calendly.com/benarfa367/30min).`,
    ar: `كثيراً ما تسألني الجمعيات والمدارس والشركات السؤال نفسه قبل أي شيء: كم يكلّف المدرّب؟ إليك كيف تُحدَّد أتعاب التدريب في تونس وفي البرامج الممولة من المانحين، وما الذي يجب أن يشمله سعر اليوم العادل، وقاعدة الاسترجاع التي تنسى كثير من الشركات التونسية استعمالها.

## كيف يسعّر المدربون عملهم

يكاد الجميع في هذا المجال يسعّر حسب **اليوم التدريبي**، ويُحتسب عادة 6 ساعات من التنشيط. الأسعار بالساعة موجودة، لكن المنظمين يضعون ميزانياتهم بالأيام، وكذلك المانحون.

ونادراً ما تكلّف ورشة نصف اليوم نصف سعر اليوم الكامل. فالتحضير والتنقل وتحليل الاحتياجات تأخذ تقريباً الوقت نفسه لثلاث ساعات أو لست ساعات، لذلك يمثّل نصف اليوم عادة من 55 إلى 60% من سعر اليوم.

## ما يدفعه السوق

حسب نداءات مدربين منشورة وسلالم أتعاب رسمية واستطلاعات أسعار بين 2024 و2026:

- **برامج تونسية ممولة من المانحين:** عرضت نداءات حديثة لبرامج ريادة أعمال وجمعيات حوالي 500 إلى 670 د.ت لكل يوم عمل، غالباً كمبلغ جزافي يشمل التحضير والتنشيط.
- **مدربون مستقلون في تونس:** حوالي 300 إلى 400 د.ت يومياً في البداية، و700 د.ت أو أكثر للمستشارين ذوي الخبرة.
- **برامج الشباب الأوروبية:** يدفع مجمع مدربي مجلس أوروبا مثلاً حوالي 160 € يومياً للمدرب المبتدئ وحوالي 300 € للمدرب الخبير.
- **المنظمات الدولية:** تتراوح سلالم أتعاب مستشاري الأمم المتحدة من حوالي 190 $ يومياً للمبتدئين إلى أكثر من 1,000 $ للخبراء.
- **مدربو الشركات في فرنسا:** عادة من 400 إلى 550 € يومياً بعد بضع سنوات من الخبرة.

## قاعدة CNFCPP التي يجب أن تعرفها الشركات التونسية

يمكن للشركات التي تدفع معلوم التكوين المهني (TFP) استرجاع تكاليف التدريب الداخلي من المركز الوطني للتكوين المستمر والترقية المهنية (CNFCPP). وحسب قواعده المنشورة، يُسقَّف الاسترجاع لمدرب خارجي في كل ساعة تدريب بنسبة من الأجر الأدنى المضمون (SMIG)، وهو ما يعادل في 2026 حوالي 110 د.ت للساعة، أي حوالي 660 د.ت ليوم من 6 ساعات.

عملياً، سعر يومي في حدود هذا السقف أو أقل قد لا يكلّف الشركة شيئاً تقريباً في النهاية. تحقّق من دليل CNFCPP الساري وشروط تقديم الملف قبل وضع الميزانية، فالقواعد والأجر الأدنى يتغيران.

## ما يجب أن يشمله سعر اليوم العادل

عند مقارنة العروض، تحقّق مما يغطيه كل عرض:

- **تحليل للاحتياجات** قبل تصميم الجلسة. من دونه تشتري ورشة عامة.
- **وقت للتصميم** لأنشطة ومواد تناسب مستوى المجموعة ولغتها.
- **التنشيط** باللغة التي يستعملها المشاركون فعلاً.
- **تقرير مكتوب** بعد الجلسة: ما الذي أُنجز، وماذا قال المشاركون، وما الخطوة التالية. يطلبه المانحون، وهو الدليل الوحيد على أن التدريب حصل.
- **التنقل والإقامة** مذكورة على حدة عندما تكون الجلسة خارج مدينة المدرب.

## أسعاري الابتدائية

- **ورشة نصف يوم:** ابتداءً من ${p("halfDayWorkshop", "ar")}
- **يوم تدريبي (البرامج متعددة الجلسات):** ابتداءً من ${p("trainingDay", "ar")}
- **تدريب المدربين:** ابتداءً من ${p("totDay", "ar")}
- **كلمة رئيسية:** ابتداءً من ${p("keynote", "ar")}

السعر بالدينار للمنظمات في تونس، وباليورو للبرامج في الخارج. يبدأ كل عرض بتحليل للاحتياجات وينتهي بتقرير، وتستلم أولاً عرض سعر مكتوباً.

> **تخطط لتدريب أو برنامج؟** حدّثني عن مجموعتك وأهدافك. [شاهد أعمال التدريب](/trainer) أو [احجز مكالمة مجانية](https://calendly.com/benarfa367/30min).`,
  },

  "brand-identity-cost-tunisia": {
    en: `A logo can cost 50 TND or 5,000 TND, and both prices are real. The difference is not the drawing; it is what comes with it. Here is what logos and brand identities cost in Tunisia in 2026, and what you should get at each level.

## The three levels you will see

Looking at Tunisian agency price lists and freelance listings from 2025 and 2026:

- **Logo only:** about 190 to 350 TND at the budget end, 400 to 1,200 TND in the middle, and 2,000 TND and up from established agencies.
- **Logo plus identity (colours, fonts, usage rules):** usually 1,500 to 2,500 TND in the middle of the market, and 4,500 to 8,000 TND or more for full agency branding.
- **Global marketplaces:** logos from $30 to $150 are common. That is the commodity end, where the same templates are sold to many clients.

For comparison, French freelance designers usually charge €300 to €2,500 for a logo and €800 to €5,000 for a full identity.

## What separates a logo from an identity

A logo is one file. An identity is the system that makes a brand look like itself everywhere:

**1. A logo suite,** not a single version: horizontal, stacked, icon only, light and dark backgrounds.

**2. Colours and fonts, written down,** with the exact codes for print and screen, so the printer and the social media manager use the same green.

**3. Templates** for the things you produce every week: posts, stories, price lists, menus.

**4. A short usage guide** that someone who never met the designer can follow.

Without these, the logo is redrawn, stretched and recoloured within a year, and the brand stops looking consistent.

## Arabic and Latin: the Tunisian question

Many Tunisian brands speak to customers in Arabic and French. A good bilingual identity designs both versions together, with matching weight, rhythm and spacing, rather than typing the name in an Arabic font next to the Latin one. It takes more time, and it is usually priced 15 to 25% above a single-script identity.

## How to brief and compare quotes

Before asking for prices, write down who your customers are, where the brand will appear (shopfront, Instagram, packaging, uniforms) and two or three brands you like and why. Then compare quotes on what is delivered: number of concepts, rounds of revisions, file formats, templates, the guide, and who owns the final files.

## My own starting prices

- **Logo:** from ${p("logo", "en")}
- **Brand identity (logo suite, colours and fonts, templates, usage guide):** from ${p("brandIdentity", "en")}
- **Arabic + Latin identity:** from ${p("bilingualIdentity", "en")}
- **Social media templates:** from ${p("socialTemplates", "en")}

The TND price is for clients in Tunisia, the EUR price for clients abroad. You get a written quote after a free call, before any work starts.

> **Building or refreshing a brand?** Show me where it lives today and I will tell you what it needs. [See design work](/designer) or [book a free call](https://calendly.com/benarfa367/30min).`,
    fr: `Un logo peut coûter 50 DT ou 5 000 DT, et les deux prix existent. La différence n'est pas le dessin, c'est ce qui l'accompagne. Voici ce que coûtent un logo et une identité de marque en Tunisie en 2026, et ce que vous devriez obtenir à chaque niveau.

## Les trois niveaux du marché

D'après les grilles tarifaires d'agences tunisiennes et des annonces de freelances en 2025 et 2026 :

- **Logo seul :** environ 190 à 350 DT en entrée de gamme, 400 à 1 200 DT en milieu de marché, et 2 000 DT et plus chez les agences établies.
- **Logo et identité (couleurs, typographies, règles d'usage) :** en général 1 500 à 2 500 DT en milieu de marché, et 4 500 à 8 000 DT ou plus pour un branding complet en agence.
- **Plateformes internationales :** des logos à 30 à 150 $ sont courants. C'est le marché de masse, où les mêmes modèles sont vendus à de nombreux clients.

À titre de comparaison, les graphistes freelances français facturent en général 300 à 2 500 € un logo et 800 à 5 000 € une identité complète.

## Ce qui distingue un logo d'une identité

Un logo, c'est un fichier. Une identité, c'est le système qui fait qu'une marque se ressemble partout :

**1. Des déclinaisons du logo,** pas une seule version : horizontale, empilée, icône seule, fonds clairs et foncés.

**2. Des couleurs et typographies écrites,** avec les codes exacts pour l'impression et l'écran, pour que l'imprimeur et le community manager utilisent le même vert.

**3. Des modèles** pour ce que vous produisez chaque semaine : publications, stories, listes de prix, menus.

**4. Un court guide d'utilisation** que quelqu'un qui n'a jamais rencontré le designer peut suivre.

Sans cela, le logo est redessiné, étiré et recoloré en moins d'un an, et la marque perd sa cohérence.

## Arabe et latin : la question tunisienne

Beaucoup de marques tunisiennes s'adressent à leurs clients en arabe et en français. Une bonne identité bilingue conçoit les deux versions ensemble, avec la même graisse, le même rythme et les mêmes espacements, au lieu de taper le nom dans une police arabe à côté du latin. Cela demande plus de temps, et se facture en général 15 à 25 % de plus qu'une identité dans un seul alphabet.

## Rédiger un brief et comparer les devis

Avant de demander des prix, notez qui sont vos clients, où la marque apparaîtra (devanture, Instagram, emballages, tenues) et deux ou trois marques que vous aimez, et pourquoi. Comparez ensuite les devis sur ce qui est livré : nombre de pistes, séries de retouches, formats de fichiers, modèles, guide, et à qui appartiennent les fichiers finaux.

## Mes prix de départ

- **Logo :** à partir de ${p("logo", "fr")}
- **Identité de marque (déclinaisons du logo, couleurs et typographies, modèles, guide) :** à partir de ${p("brandIdentity", "fr")}
- **Identité arabe + latin :** à partir de ${p("bilingualIdentity", "fr")}
- **Modèles pour les réseaux sociaux :** à partir de ${p("socialTemplates", "fr")}

Le prix en dinars concerne les clients en Tunisie, le prix en euros les clients à l'étranger. Vous recevez un devis écrit après un appel gratuit, avant tout démarrage.

> **Vous créez ou rafraîchissez une marque ?** Montrez-moi où elle vit aujourd'hui, je vous dis ce dont elle a besoin. [Voir mes créations](/designer) ou [réserver un appel gratuit](https://calendly.com/benarfa367/30min).`,
    ar: `قد يكلّف الشعار 50 د.ت أو 5,000 د.ت، وكلا السعرين موجود فعلاً. الفرق ليس في الرسم، بل فيما يرافقه. إليك تكلفة الشعار والهوية البصرية في تونس سنة 2026، وما الذي يجب أن تحصل عليه في كل مستوى.

## المستويات الثلاثة في السوق

حسب قوائم أسعار وكالات تونسية وإعلانات مستقلين في 2025 و2026:

- **شعار فقط:** حوالي 190 إلى 350 د.ت في الفئة الاقتصادية، و400 إلى 1,200 د.ت في وسط السوق، و2,000 د.ت فأكثر لدى الوكالات المعروفة.
- **شعار مع هوية (ألوان، خطوط، قواعد استعمال):** عادة 1,500 إلى 2,500 د.ت في وسط السوق، و4,500 إلى 8,000 د.ت أو أكثر لهوية كاملة لدى وكالة.
- **المنصات العالمية:** شعارات بـ30 إلى 150 $ شائعة. هذا هو السوق الجماهيري، حيث تُباع القوالب نفسها لعملاء كثيرين.

للمقارنة، يتقاضى المصممون المستقلون في فرنسا عادة من 300 إلى 2,500 € للشعار، ومن 800 إلى 5,000 € لهوية كاملة.

## ما الفرق بين الشعار والهوية

الشعار ملف واحد. أما الهوية فهي النظام الذي يجعل العلامة تشبه نفسها في كل مكان:

**1. نسخ متعددة من الشعار** لا نسخة واحدة: أفقية، عمودية، أيقونة فقط، على خلفيات فاتحة وداكنة.

**2. ألوان وخطوط مكتوبة** بالرموز الدقيقة للطباعة والشاشة، حتى يستعمل المطبعي ومسيّر صفحات التواصل الأخضر نفسه.

**3. قوالب** لما تنتجه كل أسبوع: منشورات، قصص، قوائم أسعار، قوائم طعام.

**4. دليل استخدام قصير** يمكن لشخص لم يلتقِ المصمم أبداً أن يتبعه.

من دون ذلك، يُعاد رسم الشعار ويُمدَّد وتتغير ألوانه في أقل من سنة، وتفقد العلامة تناسقها.

## العربية واللاتينية: السؤال التونسي

كثير من العلامات التونسية تخاطب زبائنها بالعربية والفرنسية. الهوية ثنائية اللغة الجيدة تصمّم النسختين معاً، بالسماكة والإيقاع والمسافات نفسها، بدل كتابة الاسم بخط عربي بجانب النسخة اللاتينية. يتطلب ذلك وقتاً أطول، ويُسعَّر عادة أعلى بـ15 إلى 25% من هوية بأبجدية واحدة.

## كيف تكتب الموجز وتقارن العروض

قبل طلب الأسعار، اكتب من هم زبائنك، وأين ستظهر العلامة (الواجهة، إنستغرام، التغليف، الأزياء)، وعلامتين أو ثلاثاً تعجبك ولماذا. ثم قارن العروض حسب ما يُسلَّم: عدد المقترحات، جولات التعديل، صيغ الملفات، القوالب، الدليل، ولمن تعود الملفات النهائية.

## أسعاري الابتدائية

- **شعار:** ابتداءً من ${p("logo", "ar")}
- **هوية بصرية (نسخ الشعار، الألوان والخطوط، قوالب، دليل استخدام):** ابتداءً من ${p("brandIdentity", "ar")}
- **هوية عربية + لاتينية:** ابتداءً من ${p("bilingualIdentity", "ar")}
- **قوالب التواصل الاجتماعي:** ابتداءً من ${p("socialTemplates", "ar")}

السعر بالدينار للعملاء في تونس، وباليورو للعملاء في الخارج. تستلم عرض سعر مكتوباً بعد مكالمة مجانية، قبل بدء أي عمل.

> **تبني علامة أو تجدّدها؟** أرني أين تظهر اليوم وسأخبرك بما تحتاجه. [شاهد أعمال التصميم](/designer) أو [احجز مكالمة مجانية](https://calendly.com/benarfa367/30min).`,
  },
}
