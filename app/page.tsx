// ===== ข้อมูลร้าน (แก้ที่นี่ที่เดียว) =====
const SHOP = {
  name: "Beauty",
  price: 199,
  lineId: "99999", // ข้อความตัวอย่าง: ใส่ LINE ID จริง
  phone: "99999", // ข้อความตัวอย่าง: ใส่เบอร์จริง
  facebook: "9999", // ข้อความตัวอย่าง: ใส่ชื่อเพจ Facebook จริง
  instagram: "99999", // ข้อความตัวอย่าง: ใส่ IG จริง
  address: "999999", // ข้อความตัวอย่าง: ใส่ที่อยู่จริง
  hours: "เปิด 24 ชั่วโมง",
  cta: "ทักไลน์เลย",
};

const lineUrl = `https://line.me/R/ti/p/~${SHOP.lineId}`;
const phoneUrl = `tel:${SHOP.phone}`;
const fbUrl = `https://www.facebook.com/${SHOP.facebook}`;
const igUrl = `https://www.instagram.com/${SHOP.instagram}`;

const features = [
  {
    emoji: "🎨",
    title: "สีสันพาสเทลสวยงาม",
    text: "เขียวมิ้นต์และชมพูหวาน แพ็กเกจน่ารัก วางโชว์ก็สวย ถ่ายรูปก็ปัง",
    tone: "bg-mint-100",
  },
  {
    emoji: "🛍️",
    title: "เข้าถึงง่าย",
    text: "ทักไลน์ได้เลย เปิดตลอด 24 ชั่วโมง ราคาเริ่มต้นแค่ 199 บาทต่อชิ้น",
    tone: "bg-pink-100",
  },
  {
    emoji: "👀",
    title: "เน้นสินค้าเห็นชัด",
    text: "ดูสินค้าและราคาได้ชัดเจน ไม่ต้องเดา ไม่ต้องอ่านยาว เห็นแล้วเลือกได้เลย",
    tone: "bg-mint-100",
  },
];

const faqs = [
  {
    q: "สั่งซื้ออย่างไร?",
    a: "กดปุ่ม “ทักไลน์เลย” แล้วบอกว่าต้องการสินค้าตัวไหน ทีมงานจะตอบกลับและแจ้งขั้นตอนให้ค่ะ",
  },
  {
    q: "สินค้าราคาเท่าไหร่?",
    a: "ครีมทาหน้าและน้ำหอม ราคาชิ้นละ 199 บาทค่ะ",
  },
  {
    q: "ทักไลน์ได้ตอนไหนบ้าง?",
    a: "ทักได้ตลอด 24 ชั่วโมงค่ะ",
  },
  {
    q: "มีสินค้าให้เลือกกี่แบบ?",
    a: "ตอนนี้มีครีมทาหน้าและน้ำหอม สอบถามรายละเอียดและตัวเลือกเพิ่มเติมได้ทางไลน์ค่ะ",
  },
];

function CreamJar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} role="img" aria-label="ภาพประกอบครีมทาหน้า">
      <ellipse cx="80" cy="146" rx="52" ry="8" fill="#2b2433" opacity=".08" />
      <rect x="24" y="62" width="112" height="78" rx="22" fill="#ffb3d3" />
      <rect x="24" y="62" width="112" height="78" rx="22" fill="url(#jg)" />
      <rect x="30" y="34" width="100" height="36" rx="14" fill="#a8e6c1" />
      <rect x="30" y="34" width="100" height="12" rx="6" fill="#dcf6e6" opacity=".7" />
      <circle cx="80" cy="102" r="20" fill="#fff3f8" />
      <path d="M80 92c-5 0-9 4-9 9 0 7 9 13 9 13s9-6 9-13c0-5-4-9-9-9z" fill="#ee5a9b" />
      <defs>
        <linearGradient id="jg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PerfumeBottle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} role="img" aria-label="ภาพประกอบน้ำหอม">
      <ellipse cx="80" cy="148" rx="46" ry="7" fill="#2b2433" opacity=".08" />
      <rect x="64" y="10" width="32" height="22" rx="8" fill="#ee5a9b" />
      <rect x="72" y="30" width="16" height="14" fill="#ffb3d3" />
      <rect x="28" y="42" width="104" height="100" rx="26" fill="#a8e6c1" />
      <rect x="28" y="42" width="104" height="100" rx="26" fill="url(#pg)" />
      <rect x="46" y="76" width="68" height="44" rx="12" fill="#fff3f8" />
      <path d="M80 86l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#ee5a9b" />
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".4" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-mint-500 px-8 py-3 text-lg font-semibold text-white shadow-[0_8px_0_var(--mint-700)] transition active:translate-y-1 active:shadow-[0_4px_0_var(--mint-700)] hover:brightness-105 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-pink-500 ${className}`}
    >
      <span aria-hidden="true">💬</span>
      {SHOP.cta}
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* ส่วนหัว */}
      <header className="relative overflow-hidden bg-gradient-to-b from-pink-100 via-pink-50 to-paper px-5 pb-20 pt-10 md:pb-28 md:pt-16">
        <div aria-hidden="true" className="absolute -left-16 top-24 h-52 w-52 rounded-full bg-mint-300/50 blur-2xl" />
        <div aria-hidden="true" className="absolute -right-12 top-4 h-60 w-60 rounded-full bg-pink-300/50 blur-2xl" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="mb-4 inline-block rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-pink-700">
              ✨ สกินแคร์ & น้ำหอม สไตล์เจน Z
            </p>
            <h1 className="text-hero font-bold leading-[1.1] text-ink">
              <span className="text-pink-500">{SHOP.name}</span>
              <br />
              สวยใส ใส่ใจผิว
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft md:mx-0">
              ครีมทาหน้าและน้ำหอมสีพาสเทลสุดน่ารัก เหมาะกับทุกวัย ตั้งแต่วัยเรียนจนถึงวัยทำงาน
              ชิ้นละ {SHOP.price} บาท
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <LineButton />
            </div>
          </div>
          <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80" aria-hidden="false">
            <div className="absolute inset-6 rounded-[3rem] bg-mint-100" />
            <CreamJar className="floaty absolute bottom-4 left-0 w-44 sm:w-52 [--r:-6deg]" />
            <PerfumeBottle className="floaty absolute right-0 top-2 w-40 [animation-delay:1s] sm:w-48 [--r:6deg]" />
          </div>
        </div>
      </header>

      {/* จุดเด่น */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-2xl font-bold">ทำไมต้อง {SHOP.name}?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className={`rounded-3xl p-7 ${f.tone}`}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm" aria-hidden="true">
                {f.emoji}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-ink-soft">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* สินค้า */}
      <section className="bg-mint-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">สินค้าของเรา</h2>
          <p className="mt-2 text-center text-ink-soft">ทุกชิ้นราคาเดียว เลือกง่าย</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { name: "ครีมทาหน้า", desc: "สกินแคร์สำหรับผิวหน้า สีพาสเทลน่าใช้", bg: "bg-pink-100", Art: CreamJar },
              { name: "น้ำหอม", desc: "กลิ่นสดใส ขวดน่ารัก พกง่าย", bg: "bg-mint-100", Art: PerfumeBottle },
            ].map(({ name, desc, bg, Art }) => (
              <article key={name} className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-12px_rgba(238,90,155,0.35)]">
                <div className={`flex h-56 items-center justify-center ${bg}`}>
                  <Art className="h-44 w-44" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="mt-1 text-ink-soft">{desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-pink-700">
                      {SHOP.price} <span className="text-base font-medium text-ink-soft">บาท / ชิ้น</span>
                    </p>
                    <a
                      href={lineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full bg-pink-500 px-5 text-sm font-semibold text-white hover:brightness-105 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-mint-500"
                    >
                      สั่งทางไลน์
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* คำถามที่พบบ่อย */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center text-2xl font-bold">คำถามที่พบบ่อย</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-pink-50 p-5 open:bg-pink-100">
              <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span aria-hidden="true" className="text-pink-500 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ติดต่อเรา */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-gradient-to-br from-mint-100 to-pink-100 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold">ติดต่อเรา</h2>
          <p className="mt-2 text-ink-soft">{SHOP.hours} ทักมาได้เลย</p>
          <div className="mt-6 flex justify-center">
            <LineButton />
          </div>
          <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <li>
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-white px-5 py-3 hover:bg-mint-50">
                <span className="text-sm text-ink-soft">LINE ID</span>
                <br />
                <span className="font-semibold">{SHOP.lineId}</span>
              </a>
            </li>
            <li>
              <a href={phoneUrl} className="block rounded-2xl bg-white px-5 py-3 hover:bg-mint-50">
                <span className="text-sm text-ink-soft">โทร</span>
                <br />
                <span className="font-semibold">{SHOP.phone}</span>
              </a>
            </li>
            <li>
              <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-white px-5 py-3 hover:bg-mint-50">
                <span className="text-sm text-ink-soft">Facebook</span>
                <br />
                <span className="font-semibold">{SHOP.facebook}</span>
              </a>
            </li>
            <li>
              <a href={igUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-white px-5 py-3 hover:bg-mint-50">
                <span className="text-sm text-ink-soft">Instagram</span>
                <br />
                <span className="font-semibold">{SHOP.instagram}</span>
              </a>
            </li>
            <li className="rounded-2xl bg-white px-5 py-3 sm:col-span-2">
              <span className="text-sm text-ink-soft">ที่อยู่</span>
              <br />
              <span className="font-semibold">{SHOP.address}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ส่วนท้าย */}
      <footer className="bg-ink px-5 py-8 text-center text-sm text-white/80">
        <p className="font-semibold text-white">{SHOP.name}</p>
        <p className="mt-1">{SHOP.hours}</p>
        <p className="mt-3">© 2026 {SHOP.name}. สงวนลิขสิทธิ์</p>
      </footer>
    </main>
  );
}
