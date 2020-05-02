
var fabrics = document.getElementsByClassName('product-container');

for (var i = 0; i < fabrics.length; i++) {
    var fabric = fabrics[i];
    var anchor = fabric.childNodes[5];
    var uri = anchor.href;
    
    fetch(uri)
        .then((response) => {
            var response_uri = response.url;
            response.text().then((text) => {
                if (text.includes("desktop-product_out_of_stock_sign_up")) {
                    console.log(response_uri + ": out of stock");
                    var out_of_stock_anchor = Array.from(document.getElementsByTagName("a")).find(a => a.href === response_uri);
                    var out_of_stock_container = out_of_stock_anchor.parentElement;
                    var out_of_stock_image = out_of_stock_container.childNodes[1].childNodes[1];
                    out_of_stock_image.style.opacity = 0.3;
                    var out_of_stock_text_anchor = out_of_stock_container.childNodes[5];
                    out_of_stock_text_anchor.innerText = "OUT OF STOCK - " + out_of_stock_text_anchor.innerText;
                }
            });
        });
        
}
