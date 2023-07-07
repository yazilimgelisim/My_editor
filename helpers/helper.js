module.exports = {
    yakala: (text) => {
        const jsdom = require('jsdom');
        const { JSDOM } = jsdom;

        // Sunucudan gelen veri
        const veri = text

        // İzin verilen elementler ve özellikler
        const allowedElements = [
            { tag: 'a', allowedAttributes: ['href'] },
            { tag: 'b', allowedAttributes: [] },
            { tag: 'i', allowedAttributes: [] },
            { tag: 'u', allowedAttributes: [] },
            { tag: 'span', allowedAttributes: ['style'] },
            { tag: 'pre', allowedAttributes: ['class'] },
            { tag: 'code', allowedAttributes: [] }
        ];

        // İzin verilen CSS stilleri
        const allowedStyles = /^color:\s*#[0-9a-fA-F]{3,6};$/;

        // HTML ayrıştırma işlemi
        const dom = new JSDOM(veri);
        const document = dom.window.document;

        // Tüm elementleri dolaşma
        const elements = document.body.getElementsByTagName('*');
        for (let i = elements.length - 1; i >= 0; i--) {
            const element = elements[i];
            const allowedElement = allowedElements.find(e => e.tag === element.tagName.toLowerCase());

            // İzin verilen bir elementse
            if (allowedElement) {
                // İzin verilen özellikleri kontrol etme
                const allowedAttributes = allowedElement.allowedAttributes;
                const attributes = element.attributes;
                for (let j = attributes.length - 1; j >= 0; j--) {
                    const attribute = attributes[j];
                    if (!allowedAttributes.includes(attribute.name.toLowerCase())) {
                        element.removeAttribute(attribute.name); // İzin verilmeyen özelliği kaldırma
                    }
                }

                // style özelliğini kontrol etme
                if (element.hasAttribute('style')) {
                    const styleValue = element.getAttribute('style');
                    if (!allowedStyles.test(styleValue)) {
                        element.removeAttribute('style'); // İzin verilmeyen stil özelliğini kaldırma
                    }
                }
            } else {
                element.remove(); // İzin verilmeyen elementi kaldırma
            }
        }

        // Temizlenmiş veriyi alın
        const cleanVeri = document.body.innerHTML;
        return cleanVeri
    }
}