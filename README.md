# جنگل تمرکز (اپ مستقل)

فایل‌ها: index.html (خود برنامه)، manifest.webmanifest و sw.js (نصب به‌صورت اپ و کار آفلاین)، icon-192.png و icon-512.png.
نیازی به سرور یا نصب چیزی ندارد؛ فقط باید روی یک میزبان HTTPS گذاشته شود.

## ۱. گذاشتن روی اینترنت (رایگان، ۲ دقیقه)
روش ساده: وارد app.netlify.com/drop شو و کل پوشه forest-app را بکش و رها کن. یک آدرس https می‌دهد.
(اگر حساب Netlify نسازی، سایت موقتی است؛ با ساخت حساب رایگان و claim کردن دائمی می‌شود.)
روش‌های دیگر: GitHub Pages، Cloudflare Pages یا Vercel، با همین فایل‌ها.

## ۲. نصب روی دستگاه‌ها
- کروم (ویندوز، مک، لینوکس، اندروید): بعد از باز کردن آدرس، دکمه «⬇️ نصب برنامه» پایین منوی کناری ظاهر می‌شود؛ یا آیکون نصب در نوار آدرس، یا منو و Install app.
- شرط نصب: آدرس باید https باشد (Netlify و بقیه این را خودکار می‌دهند). فایل را مستقیم از روی کامپیوتر باز کنی نصب نمی‌شود.
- آیفون: در Safari آدرس را باز کن، Share و بعد Add to Home Screen.
- اندروید: در Chrome منو و بعد Install app.
- ویندوز و مک: آیکون نصب در نوار آدرس Chrome یا Edge.

## ۳. همگام‌سازی گوشی و لپ‌تاپ (اختیاری)
بدون این مرحله برنامه کامل کار می‌کند و اطلاعات روی همان دستگاه می‌ماند (پشتیبان JSON هم در تنظیمات هست).
1. در supabase.com یک پروژه رایگان بساز.
2. در SQL Editor این را اجرا کن:

create table user_state(user_id uuid primary key references auth.users on delete cascade, data jsonb not null, ts bigint not null);
alter table user_state enable row level security;
create policy own on user_state for all using (auth.uid()=user_id) with check (auth.uid()=user_id);

3. در Authentication، گزینه Confirm email را برای راحتی خاموش کن.
4. از Project Settings و API، مقدار Project URL و کلید Publishable (که با sb_publishable_ شروع می‌شود، یا اگر نبود anon public) را بردار و در تنظیمات برنامه وارد کن.
5. با ایمیل و رمز حساب بساز و روی همه دستگاه‌ها با همان وارد شو. هر نفر حساب جدا دارد و داده‌اش از بقیه جداست.
