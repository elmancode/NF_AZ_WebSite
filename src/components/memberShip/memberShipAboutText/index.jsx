import React, { useEffect } from "react";
import "./index.scss";

const MemberShipAboutPage = ({ setReading }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleClick = () => {
    setReading("sponsor");
  };

  return (
    <div id="memberShipAbout">
      <p>
        Dəyərli dost!
        <br />
        <br />
        Qeydiyyat formunu doldurmamışdan öncə, təşkilatın məqsəd, vəzifələri o
        cümlədən üzvlərin hüquq və vəzifələri ilə tanış ola və razı olduqdan
        sonra aşağıda qeyd edilən RAZIYAM düyməsini tıklayaraq qeydiyyat formuna
        keçid edə bilərsiniz. <br />
        <br />
        <b>1. Təbiət Dostları kimdir?</b> <br />
        <br />
        Azərbaycanda 2008-ci ildən "Yaşıl Velosipedçilər Klubu", “Ekotur
        Azərbaycan” kimi tanınan Təbiət Dostları 2013-cü ildə rəsmi qeydiyyatdan
        keçərək Gənclər Təşkilatı kimi fəaliyyətini davam edir. Təşkilat
        Qafqazda xüsusi ilə də Azərbaycanda ətraf mühitin mühafizəsini təşviqi,
        sağlam həyat tərzinin təbliği, açıq havada təlim və tədrisin inkişafı
        məqsədi ilə yerli və beynəlxalq layihələr icra edir. <br />
        <br />
        <b>2. Təbiət Dostlarının hüquqları:</b> <br />
        <br />
        2.1 Azərbaycanda icra olunan yerli və beynəlxalq layihələrə müraciət
        etmək və iştirak hüququ; <br />
        2.2. Təbiət Dostları tərəfindən təşkil edilən ödənişli hiking, camping
        və digər açıq hava tədbirlərində endirimli iştirak etmək hüququ;
        <br /> 2.3. Təbiət Dostlarının missiyasına dəstək olacaq şəxsi
        təşəbbüsləri təşkilat adından reallaşdırmaq hüququ; <br />
        2.4. On iki aydan çox fəal olan üzvlərin, Təbiət Dostları təşkilatının
        İdarə Heyətinə seçilmək və yeni İdarə Heyətini seçmək hüququ; <br />
        2.5. Təbiət Dostlarının İdarə Heyətinin rüblük toplantılarında
        müşahidəçi qismində iştirak etmək hüququ; <br />
        2.6. Təbiət Dostları üzvləri (üzvlük kartını təqdim etməklə) istər
        Amerika Birləşmiş Ştatlarında (Kaliforniyada) istərsə də Avropanın əksər
        şəhərlərində yerləşən minlərlə Təbiət Dostları Evlərində endirimli
        gecələmək imkanı; <br />
        2.7. Dünyanın digər ölkələrində olan Təbiət Dostları təşkilatlarının
        keçirdiyi tədbirlərdə iştirakçı, təlimçi və təşkilatçı qismində qatılmaq
        hüququ; <br />
        <br />
        <b>3. Təbiət Dostlarının vəzifələri:</b> <br />
        <br />
        3.1. Təşkilatın məqsəd və vəzifələrinə məsuliyyətlə yanaşmaq - Təbiət
        Dostu olmaq;
        <br /> 3.2. Birliyin tədbirlərində online və ya fiziki olaraq fəal olmaq
        <br /> <br />
        <b>
          {" "}
          4. Təbiət Dostlarının üzvlüyünə xitam verilə biləcək hallar:
        </b>{" "}
        <br /> <br />
        4.1. Könüllü olaraq təşkilatın üzvlüyündən çıxdıqda; <br />
        4.2. Üzvlük haqqının müddəti bitdikdə; <br />
        4.3. Təşkilatın xarici və daxili siyasətinə zidd davranış edildiyi
        halda; <br /> <br />
        <b>5. Təbiət Dostlarının üzvlük proseduru və növləri</b> <br /> <br />{" "}
        <b>5.1. Prosedur:</b> Yaşı 16 və yuxarı olan şəxslər Təbiət Dostları
        təşkilatına üzvlük üçün müraciət edə bilər. Müraciətçi qeydiyyat formunu
        doldurduqdan və üzvlük haqqını ödədikdən sonra Üzvlərlə iş Komitəsinin
        qərarı ilə müraciətçi növbəti ayın 1-dən etibarən rəsmi üzv olaraq
        qeydiyata alınır. Üzvlük 12 ay müddətində qüvvədə qalır. <br />{" "}
        <b>5.2. Üzvlük növləri:</b> <br />
        <b>• Fərdi üzv</b> individual olaraq üzv olur və yerli və beynəlxalq
        tədbirlərdə iştirakçı qismində qatılmaq hüququ vardır. <br />{" "}
        <b>• Ailəvi üzv</b> ailəvi üzv olmaq istəyənlər üçündür. Təbiət
        Dostlarını yerli və beynəlxalq tədbirlərdə iştirakçı qismində qatılmaq
        hüququ əldə edir. Eyni zamanda təşkilat tərəfindən keçirilən ailəvi
        tədbirlərdə uşaqlar üçün endirimli və ya ödənişsiz iştirak etmək haqqı
        vardır. <br />
        <b>• Partnyor üzv</b> Təbiət Dostlarını istər təmsil edə istərsə də
        Təbiət Dostları adından hər hansı bir layihəni, təşəbbüsü həyata keçirə
        bilər, yerli və beynəlxalq tədbirlərdə iştirakçı və təşkilatçı qismində
        qatılmaq hüququ vardır. <br />
        <b>• Sponsor üzv**</b> Təbiət Dostlarının məqsəd və fəaliyyətlərinə
        (fiziki və ya hüquqi şəxs olaraq) dəstək olanlar siyahısında yer
        alırlar. Həmçinin partnyor üzvün əldə etdiyi hüquqlara əldə etmiş
        olurlar. <br />
        <br /> 5.3. Üzvlük haqları üçün seçimlər: <br />
        <b>Fərdi üzvlük:</b> Tələbə* 30 ₼, Fərdi üzvlük 40 ₼, Fərdi-partyor üzv
        90 ₼.
        <br />
        <b>Ailəvi üzvlük:</b> Ailəvi üzvlük 70 ₼, Ailəvi-partyor üzv ₼ 100{" "}
        <br />
        <b>Sponsorluq:</b> Sponsor-üzv 500 ₼ + <br />
        <br />* Tələbə bileti təşkilata təqdim edilməlidir. <br />
        <br />
        <b>** QEYD:</b> Sponsor-Üzv olaraq Təbiət Doslarına dəstək olmaq
        istəyənlər bu{" "}
        <a onClick={handleClick} style={{ color: "blue" }}>
          linkdən
        </a>{" "}
        qeydiyyat formuna keçid edə bilərlər.
        <br />
        <br />
        <b>!!! TƏLƏSİN - SON GÜN 30 İYUN !!!</b> <br /> 30 iyun tarixinə kimi
        üzv olan şəxslər 30% endirim əldə etmiş olacaqlar. Belə ki, Tələbələr -
        21 ₼ , Fərdi üzvlük - 28₼ , Fərdi-Partyor üzv - 63 ₼ . Ailəvi üzvlük isə
        - 49 ₼ , Ailəvi-Partyor üzv - 70₼ təşkil edəcək.
      </p>
    </div>
  );
};

export default MemberShipAboutPage;
