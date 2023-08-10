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


## Nasıl Kullanılır?
-  Projeyi `localhost`'ta doğrudan kullanmanız için ilk olarak herhangi bir klasör içerisine girip terminal alanına şu kodu yapıştırıyoruz:
  ```
  git clone https://github.com/yazilimgelisim/My_editor.git
  ```
- Daha sonra gerekli paketlerin indirilmesi için `npm install` komutu ile gerekli paketleri indiriyoruz.
```
npm install
```
- Gerekli paketler indirildi ve artık tek yapmamız gereken [.env](https://www.npmjs.com/package/dotenv) dosyası oluşturup içerisine `PORT` ve `DB_URL` ismine sahip çevresel değişkenlerini eklemek olacaktır.
```
DB_URL = 'mongodb://127.0.0.1:27017'
PORT = 3000
```
- Çerversel değişkenleri de oluşturduğumuza göre artık projemizi sorunsuz bir şekilde çalıştırmak için `npm start` komutunu terminale yerleştirip projeyi ayağa kaldırabiliriz. [localhost](http://127.0.0.1:3000/) alanımıza gittiğimize karşımıza ``Page is not found` şeklinde bir yazının geldiğini göreceğiz.
 ![alt_Text](https://i.hizliresim.com/37h2ck0.png)
- Editör sayfasına gitmek için URL alanına `editor` diyerek [editor](http://127.0.0.1:3000/editor) sayfasının açılmasını sağlıyoruz.
 ![alt_Text](https://i.hizliresim.com/efv01me.png)

- Editör sayfasından istediğimiz yazıları ekledikten sonra eklenen yazıların çıktısını görmek için URL ile `pages` alanına bir istek atık eklenen [yazıları](http://127.0.0.1:3000/pages) görebiliriz.

### Sunucuya Gönderilen Veriyi Nasıl Görürüm?
- Sunucuya gönderilen veri form yapısı aracılığı ile gönderildiğinde .handlebars dosyası incelendiğinde isteğidin `add` alanına atıldığı görülecektir.
- Projeyi geliştirmek, özelleştirmek tümüyle sizin elinizdedir.
- İyi günler dilerim...


## Kullanım Detayları:
- Template Engine olarak `express-handlebars` kullanıldığından yine `express-handlebars` paketi ile çalıştığınız projelerde kullanmanız tavsiye edilmektedir.
- Projeyi doğrudan test edebilemek için bilgisayarınızda kurulu olan [Node.js](https://nodejs.org/tr)'in versiyonun 16.0.0 ve üzeri olması gerekmektedir. `express-handlebars`'ın kullanılan sürümü `node.js`'in 14. ve daha altı sürümlerinde çalışmamaktadır. Ayrıca `jsdom` paketi de eski `node.js` versiyonlarında hata vermektedir.


## Destek İçin Ne Yapabilirsiniz?
- Youtube'nin çöplüğe dönüştüğü günümüzde bu ve benzeri içeriklere bol bol yorum yaparak etkileşimi arttırabilir, abone olarak destek olabilirsiniz.
- Güzel günlerde görüşmek dileğiyle...
- Youtube: [Yazılım ve Gelişim](https://www.youtube.com/@yazilimvegelisim)
- Instagram: [Muhammet Çelik](https://www.instagram.com/muhammt.celik/)
- Song: [:)](https://www.youtube.com/watch?v=-s-IAcGvCDw)
  
  




