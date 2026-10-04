"use client"

import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"

/**
 * Legal notice + privacy policy (Oct 2026). Describes what the code actually
 * does -- keep it in sync when that changes:
 * - /api/contact (contact form, newsletter, freebie requests) emails the
 *   submission to Dhia's inbox through Resend and sends the visitor a
 *   confirmation; nothing is written to a database.
 * - /api/chat forwards chat messages to OpenRouter to generate a reply.
 * - Vercel hosts the site; Vercel Web Analytics / Speed Insights are
 *   cookie-free and aggregate.
 * - localStorage only holds language, theme and unlocked freebies.
 */

type Lang = "en" | "fr" | "ar"
type Section = { h: string; p: string[] }

const UPDATED = { en: "Last updated: 4 October 2026", fr: "Dernière mise à jour : 4 octobre 2026", ar: "آخر تحديث: 4 أكتوبر 2026" }

const TITLE = { en: "Legal notice & privacy", fr: "Mentions légales & confidentialité", ar: "الإشعار القانوني والخصوصية" }

const INTRO = {
  en: "This site is a personal portfolio. It collects as little as possible: only what you choose to send, and anonymous visit statistics.",
  fr: "Ce site est un portfolio personnel. Il collecte le moins possible : uniquement ce que vous choisissez d'envoyer, et des statistiques de visite anonymes.",
  ar: "هذا الموقع ملف أعمال شخصي. يجمع أقل قدر ممكن من البيانات: فقط ما تختار إرساله، وإحصائيات زيارة مجهولة الهوية.",
}

const SECTIONS = (email: string): Record<Lang, Section[]> => ({
  en: [
    { h: "Who runs this site", p: [`Mohamed Dhia Arfa, independent designer, trainer and web developer based in Tunisia. Publication director and data controller: Mohamed Dhia Arfa. Contact: ${email}.`] },
    { h: "Hosting", p: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States (vercel.com)."] },
    { h: "What is collected, and why", p: [
      "Contact form: your name, email, the service you pick and your message, used only to answer you.",
      "Newsletter and free resources: your email (and name if given), used to send what you asked for and, for the newsletter, occasional updates. You can unsubscribe at any time by replying to any email or writing to me.",
      "Chat assistant: the messages you type, used only to generate a reply. Do not share sensitive personal information in the chat.",
      "Visit statistics: anonymous, aggregate page views and performance measures (Vercel Web Analytics and Speed Insights). No advertising or tracking cookies are used.",
    ] },
    { h: "Who processes the data", p: [
      "Resend (email delivery) sends form submissions to my inbox and confirmations to you. OpenRouter routes chat messages to the AI model that answers. Vercel hosts the site and produces the anonymous statistics. Booking a call happens on Cal.com, under Cal.com's own privacy policy.",
      "Nothing is sold or shared for advertising.",
    ] },
    { h: "How long it is kept", p: ["Messages stay in my email inbox for as long as needed to follow up with you, and are deleted on request. Newsletter addresses are kept until you unsubscribe. The site itself keeps no database of submissions."] },
    { h: "Stored on your device", p: ["Your browser's local storage remembers your language, light or dark theme, and which free resources you unlocked. You can clear it at any time in your browser settings."] },
    { h: "Your rights", p: [`You can ask to access, correct or delete your data, or object to its use, by writing to ${email}. These rights apply under Tunisian Organic Law No. 2004-63 on personal data protection and, for visitors in the European Union, under the GDPR. You can also complain to your data protection authority (INPDP in Tunisia, CNIL in France).`] },
    { h: "Content", p: ["Texts, designs and photos on this site belong to Mohamed Dhia Arfa or to the clients credited with them, and may not be reused without permission. Client names and logos are shown as references for work carried out."] },
  ],
  fr: [
    { h: "Éditeur du site", p: [`Mohamed Dhia Arfa, designer, formateur et développeur web indépendant basé en Tunisie. Directeur de la publication et responsable du traitement : Mohamed Dhia Arfa. Contact : ${email}.`] },
    { h: "Hébergement", p: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com)."] },
    { h: "Données collectées et finalités", p: [
      "Formulaire de contact : votre nom, votre email, le service choisi et votre message, utilisés uniquement pour vous répondre.",
      "Newsletter et ressources gratuites : votre email (et votre nom s'il est indiqué), pour vous envoyer ce que vous avez demandé et, pour la newsletter, des nouvelles occasionnelles. Vous pouvez vous désabonner à tout moment en répondant à un email ou en m'écrivant.",
      "Assistant de discussion : les messages que vous écrivez, utilisés uniquement pour générer une réponse. N'y partagez pas d'informations personnelles sensibles.",
      "Statistiques de visite : pages vues et mesures de performance anonymes et agrégées (Vercel Web Analytics et Speed Insights). Aucun cookie publicitaire ou de suivi n'est utilisé.",
    ] },
    { h: "Sous-traitants", p: [
      "Resend (envoi d'emails) transmet les formulaires à ma boîte mail et vous envoie les confirmations. OpenRouter transmet les messages du chat au modèle d'IA qui répond. Vercel héberge le site et produit les statistiques anonymes. La prise de rendez-vous se fait sur Cal.com, selon sa propre politique de confidentialité.",
      "Aucune donnée n'est vendue ni partagée à des fins publicitaires.",
    ] },
    { h: "Durée de conservation", p: ["Les messages restent dans ma boîte mail le temps nécessaire au suivi de votre demande et sont supprimés sur simple demande. Les adresses de la newsletter sont conservées jusqu'au désabonnement. Le site ne conserve aucune base de données des envois."] },
    { h: "Stockage sur votre appareil", p: ["Le stockage local de votre navigateur mémorise votre langue, le thème clair ou sombre et les ressources gratuites débloquées. Vous pouvez l'effacer à tout moment dans les réglages du navigateur."] },
    { h: "Vos droits", p: [`Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou vous opposer à leur utilisation, en écrivant à ${email}. Ces droits s'appliquent au titre de la loi organique tunisienne n° 2004-63 sur la protection des données personnelles et, pour les visiteurs de l'Union européenne, du RGPD. Vous pouvez aussi saisir votre autorité de protection des données (INPDP en Tunisie, CNIL en France).`] },
    { h: "Propriété du contenu", p: ["Les textes, créations et photos de ce site appartiennent à Mohamed Dhia Arfa ou aux clients crédités, et ne peuvent être réutilisés sans autorisation. Les noms et logos de clients figurent à titre de références de travaux réalisés."] },
  ],
  ar: [
    { h: "ناشر الموقع", p: [`محمد ضياء عرفة، مصمم ومدرّب ومطوّر ويب مستقل مقيم في تونس. مدير النشر والمسؤول عن معالجة البيانات: محمد ضياء عرفة. للتواصل: ${email}.`] },
    { h: "الاستضافة", p: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723، الولايات المتحدة (vercel.com)."] },
    { h: "البيانات التي تُجمع ولماذا", p: [
      "نموذج التواصل: اسمك وبريدك الإلكتروني والخدمة التي تختارها ورسالتك، وتُستعمل فقط للرد عليك.",
      "النشرة البريدية والموارد المجانية: بريدك الإلكتروني (واسمك إن أدخلته)، لإرسال ما طلبته، وللنشرة تحديثات من حين لآخر. يمكنك إلغاء الاشتراك في أي وقت بالرد على أي رسالة أو بمراسلتي.",
      "مساعد المحادثة: الرسائل التي تكتبها، وتُستعمل فقط لتوليد الرد. لا تشارك فيه معلومات شخصية حساسة.",
      "إحصائيات الزيارة: عدد مشاهدات الصفحات وقياسات الأداء بشكل مجهول ومجمّع (Vercel Web Analytics وSpeed Insights). لا تُستعمل أي ملفات تعريف ارتباط إعلانية أو للتتبّع.",
    ] },
    { h: "من يعالج البيانات", p: [
      "Resend (إرسال البريد) ينقل النماذج إلى بريدي ويرسل لك التأكيدات. OpenRouter ينقل رسائل المحادثة إلى نموذج الذكاء الاصطناعي الذي يجيب. Vercel يستضيف الموقع وينتج الإحصائيات المجهولة. حجز المكالمات يتم على Cal.com وفق سياسة الخصوصية الخاصة به.",
      "لا تُباع أي بيانات ولا تُشارك لأغراض إعلانية.",
    ] },
    { h: "مدة الاحتفاظ", p: ["تبقى الرسائل في بريدي الإلكتروني للمدة اللازمة لمتابعة طلبك، وتُحذف عند الطلب. تُحفظ عناوين النشرة البريدية حتى إلغاء الاشتراك. الموقع نفسه لا يحتفظ بأي قاعدة بيانات للإرسالات."] },
    { h: "ما يُخزَّن على جهازك", p: ["يحفظ التخزين المحلي في متصفحك اللغة، والمظهر الفاتح أو الداكن، والموارد المجانية التي فتحتها. يمكنك مسحه في أي وقت من إعدادات المتصفح."] },
    { h: "حقوقك", p: [`يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها، أو الاعتراض على استعمالها، بالكتابة إلى ${email}. تُطبَّق هذه الحقوق بموجب القانون الأساسي التونسي عدد 63 لسنة 2004 المتعلق بحماية المعطيات الشخصية، وبالنسبة لزوار الاتحاد الأوروبي بموجب اللائحة العامة لحماية البيانات (GDPR). يمكنك أيضاً تقديم شكوى إلى هيئة حماية البيانات (الهيئة الوطنية لحماية المعطيات الشخصية في تونس، أو CNIL في فرنسا).`] },
    { h: "ملكية المحتوى", p: ["النصوص والتصاميم والصور في هذا الموقع ملك لمحمد ضياء عرفة أو للعملاء المذكورين معها، ولا يجوز إعادة استعمالها دون إذن. تُعرض أسماء العملاء وشعاراتهم كمراجع لأعمال منجزة."] },
  ],
})

export default function PrivacyContent() {
  const { language } = useLanguage()
  const lang: Lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const sections = SECTIONS(siteConfig.email)[lang]

  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-[6.5rem]">
      <h1 className="mb-3 text-3xl font-bold md:text-4xl">{TITLE[lang]}</h1>
      <p className="mb-2 text-muted-foreground">{INTRO[lang]}</p>
      <p className="mb-10 text-sm text-muted-foreground">{UPDATED[lang]}</p>
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="mb-2 text-lg font-semibold">{s.h}</h2>
            <div className="space-y-2 leading-relaxed text-muted-foreground">
              {s.p.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
