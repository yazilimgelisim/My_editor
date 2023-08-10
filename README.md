### My_editor
CkEditor gibi editörlerin alternatifi olarak tasarlanmıştır.

## Kullanılan paketler
```
  "dependencies": {
    "body-parser": "^1.20.2",
    "dotenv": "^16.3.0",
    "express": "^4.18.2",
    "express-handlebars": "^6.0.6",
    "jsdom": "^22.1.0",
    "mongoose": "^7.3.0"
  }
```
- package.json dosyası incelendiğinde yukarıdaki paketlerin kullanıldığı görülecektir.
### Paketlerin kullanım amaçları:
- [body-parser](https://www.npmjs.com/package/body-parser): Gönderilen verilerin ayrıştırılmasını sağlayan paket
  olarak kullanılmıştır.
- [dotenv](https://www.npmjs.com/package/dotenv): Çevresel değişkenlerimiz olan `PORT` ve `DB_URL` gibi değerlerin
  bilgilerini içerisinde barındırmaktadır.
- [express](https://www.npmjs.com/package/express): Node.js'in genel yönetimini sağlayan pakettir.
- [express-handlebars](https://www.npmjs.com/package/express-handlebars): Sayfanın görüntü motoru olarak kullanılmıştır.
- [jsdom](https://www.npmjs.com/package/jsdom): Veri tabanına kayıt edilen HTML bilgilerinin kontrol edilmesini sağlamaktadır.
  Sadece belirlenen HTML elementlerinin veri tabanına kayıt edilmesine imkan verir.
- [mongoose](https://www.npmjs.com/package/mongoose): Veri tabanımız ile bağlantı kurmamızı, işlem gerçekleştirmemizi sağlayan
  paketimizdir.

## Kullanımı hakkında:
- Template Engine olarak `express-handlebars` kullanıldığından yine `express-handlebars` paketini aktif olarak kullandığınız
  projeler için kullanmanız gerekmektedir.
- 
