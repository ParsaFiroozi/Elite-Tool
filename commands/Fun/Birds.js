const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
        const url = "https://some-random-api.ml/img/birb";
        const facts = "https://some-random-api.ml/facts/bird"

        let replies = [
           'بیش از ۹۵۰۰ گونه پرنده در دنیا وجود دارد. دانشمندان به طور معمول آنها را در ۳۰ دسته طبقه بندی می‌کنند. پرندگان گسترده‌ترین حیوانات در تمام دنیا هستند.',
           'بلندترین پری که تابحال دیده شده متعلق به مرغی در ژاپن بوده. پرهای دم او ۱۰.۵۹ متر درازا داشته‌اند.',
           'اغلب پرندگان برای اینکه وزنشان کم شود مثانه ندارند.',
           'ریه‌های پرندگان پیچیده‌تر و کاراتر از سایر پستاندارن است و حجم بیشتری را نیز اشتغال می‌کنند. مثلا یک بیستم بدن انسان را ریه‌ها اشغال کرده‌اند درحالیکه این مقدار برای پرندگان یک پنجم است.',
           'تقریبا دو سوم گونه‌های پرنده قابل یافت در جنگل‌های بارانی گرمسیری هستند.',
           'جغدها نمی‌توانند چشم‌هایشان را بچرخانند، به همین دلیل برای دیدن پشت سرشان کامل سرشان را می‌چرخانند',
           'در قارهٔ آمریکا سالانه بین ۱.۴ تا ۳.۷ میلیارد پرنده به دست گربه‌ها کشته می‌شود.',
           'تنها پرنده‌ای که در انتهای منقارش سوراخ بینی دارد کیوی است. این سوراخها به او کمک می‌کنند که غذایش، که چیزهایی مانند کرم وحشرات است، را در روی زمین بو بکشد.',
           'برخلاف اکثر پرندگان که آواز می‌خوانند، دارکوب نوکش را روی درخت‌ها میکوبد. دارکوبها یکدیگر را از صدای کوبیدن منقارشان شناسایی می‌کنند.',
           'پرحرف‌ترین طوطی دنیا، طوطی خاکستری آفریقایی است. این طوطی‌ها می‌توانند بیش از ۸۰۰ کلمه صحبت کنند درحالیکه بیشتر گونه‌های طوطی تنها قادر به یاگیری ۵۰ کلمه می‌باشند.',
           'یک دارکوب سبز می‌تواند روزانه ۲ هزار مورچه بخورد.',
           'پر پر ترین پرنده با ۲۵ هزار پر قو بوده و کم پر ترین آنها مرغ مگس خوار با ۱۰۰۰ پر می‌باشد.',
           'بسیاری از پرنده‌ها مانند سار، آوازی می‌خوانند که فراصوت محسوب شده و انسانها قادر به شنیدنش نیستند.',
           'معدنچی‌های ذغالسنگ از قناری برای تشخیص سطوح کربن مونوکسید در معادن استفاده می‌کردند.آنها می‌دانستند که اگر قناری تلف شود آنها هم در خطرند.',
           'منقار کیسه مانند پلیکان می‌تواند در لحظه ۲.۵ گالن آب را در خود داشته باشد.',
           'لاشخوری به نام Lammergeyer با استخوانها به بالا پرواز می‌کند و سپس آنها را بر روی سنگ‌های می‌اندازد. او سپس استخوانهای خرد شده را می‌خورد.',
           'با اینکه بنظر میرسد پرنده‌ها روی زانوهایشان خم می‌شوند، ولی درواقع آن مچ پایشان است. زانوی پرنده‌ها بالاتر، زیر پرهایشان مخفی شده‌است.',
           'بسیاری از دانشمندان بر این باورند که پرندگان در حدود ۱۵۰ میلیون سال پیش و در دوران مزوزوئیک، از دایناسورها تکامل یافتند.',
           'فلامینگوها در تمام عمرشان( بعضی ۵۰ سال) با جفتشان می‌مانند.',
           'وزن پرهای یک پرنده از استخوانهایش بیشتر است.',
           'تقریبا ۷۵٪ از پرندگان در طبیعت کمتر از یک سال عمر می‌کنند. هرچه جثهٔ پرنده بزرگتر باشد، عمرش هم بیشتر می‌شود؛ حتی بعضی پرندگان ۸۰ سال هم عمر می‌کنند.',
           'بلندترین، درازترین و سنگین‌ترین پرندهٔ دنیا شترمرغ است. شتر مرغ نر می‌تواند ۲.۷ متر قد و ۱۶۰ کیلوگرم وزن داشته باشد. چشم آنها از تمام حیوانات روی خشکی و حتی از مغز خودشان بزرگتر است.',
           'شترمرغ تنها پرنده‌ای است که با اراده و تمایل خودش از تخم‌های دیگر پرنده‌ها مراقبت می‌کند.',
           'بزرگ‌ترین پرنده‌ای که تابحال روی زمین وجود داشته پرندهٔ فیلی بی‌پرواز بوده و ۴۵۰ کیلوگرم هم وزن داشته. هر تخم او به اندازه‌ی ۷ تخم شترمرغ بوده. پرنده‌های فیلی ۴۰۰ سال پیش منقرض شدند.',
           'بازی انگری بردز فقط در اپ استور بیش از ۷ میلیون نسخ بفروش رفت. این بازی توسط یک تیم ۴ نفره ساخته شد و در ابتدا انقدر برایشان بی‌اهمیت بود که ۸ ماه طول کشید تا تمامش کنند.',
           'فقط یک پستاندار می‌تواند پرواز کند و آن خفاش است، هرچند نحوهٔ پروازش با پرنده‌ها متفاوت است. حشرات هم الگوی پروازی‌شان با پرنده‌ها متفاوت است.',
           'پنگوئن امپراطور تنها پرنده‌ای است که در وسط زمستان تخم می‌گذارد. با این کار او فرزندش به آسانی بهار و تابستان و پاییز را سر می‌کند و برای جان سالم به در بردن در زمستان بعدی به اندازه‌ی کافی بزرگ شده است.',
           'پرندگان وقتی می‌خوابند از روی شاخهٔ درختها نمی‌افتند چون انگشتانشان به طور خودکار دور شاخه‌ای که رویش ایستاده‌اند می‌پیچد و از آنجا که عمل گرفتن با تاندون‌ها انجام می‌شود نه ماهیچه‌ها، پرنده‌ها می‌توانند بدون خطر افتادن راحت بخوابند.',
           'همهٔ پرندگان استخوان توخالی ندارند، مثلا آنهایی که به زیر آب می‌روند یا خیلی سریع پرواز می‌کنند استخوانهای پرتری دارند.',
           'فانوس‌های دریایی برای پرندگان خطرناک هستند، چراکه آنها، مخصوصا در هوای مه آلود، به سمتشان پرواز می‌کنند و وقتی توی شیشه میروند کشته می‌شوند.',
           'پرندگان فرارسیدن فصل زمستان را با تغییر درهورمونهایی که باعث اضافه شدن چربی در آنها می‌شود، تغییر طول روز و حس کردن تغییرات کوچک در فشار هوا متوجه می‌شوند.',
           'در برخی پرنده‌ها مثل اردک‌ها، چشم‌ها در ۲ طرف سر قرار گرفته تا بتوانند دید ۳۶۰ درجه داشته باشند.',
           'خطرناک‌ترین پرنده‌ی دنیا کاسوآری است که بی‌پرواز است و با یک ضربه دشمنش را می‌کشد.',
           ' بیش از ۱۵۰ نوع پرنده از سال ۱۶۰۰ تابحال منقرض شده‌اند و خیلی پرنده‌های دیگر هم هستند که احتمالا دانشمندان هنوز آنها را شناسایی نکرده‌اند.',
           'با اینکه با اصطلاح« چشماش مثل عقاب تیزه» بنظرمیرسد که عقاب‌ها دیدی خیلی از بهتر از انسانها داشته باشند، اما فقط یک گونه عقاب است که کمی بهتر از انسانها می‌بیند، بقیهٔ عقاب‌ها دیدی همانند انسان دارند.',
           ' بیش از ۱۵۰ نوع پرنده از سال ۱۶۰۰ تابحال منقرض شده‌اند و خیلی پرنده‌های دیگر هم هستند که احتمالا دانشمندان هنوز آنها را شناسایی نکرده‌اند.',
           'با گذشت زمان، تعداد زیادی از پرندگان توانایی پروازشان را از دست دادند. بی‌پرواز بودن چند مزیت دارد، مثلا یک پرندهٔ بی‌پرواز لازم نیست ماهیچه‌های پروازی بزرگی داشته باشد و انرژی‌ای صرف پرواز یا حمل کردن آن ماهیچه‌ها بکند. یک پرندهٔ بی‌پرواز همچنین به غذای کمتری احتیاج دارد که این شانس زنده ماندن او را در مکان‌هایی که تامین غذا با مشکل صورت مواجه است بالامیبرد.'
      ]
      let result = Math.floor((Math.random() * replies.length));
        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
        .setTitle(`عکس رندوم به همراه یک دانستی درباره پرندگان `)
            .setColor(`#33908b`)
            .setDescription(`${replies[result]}`)
            .setImage(image.link)

        await message.channel.send(embed)
    }

    module.exports.help = {
        name:"bird",
        aliases: ["bir"]
      }