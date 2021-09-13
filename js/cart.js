$(document).ready(function() {
    $(".amount-minus").click(
            function() {
                var item_amout = new Number($('input[name="amout"]').val());
                var price = new Number($(".one-price").attr('value'));
                var first_price = new Number($(".first-price").attr('value'));
                if (item_amout == 1) {
                    window.alert("再减下去就没了~")
                } else {
                    price -= first_price;
                    item_amout = item_amout - 1;
                    $('input[name="amout"]').val(item_amout);
                    $(".one-price").text("￥" + price.toFixed(2));
                    $(".one-price").attr('value', price.toFixed(2));
                }
            }
        ),
        $(".amount-plus").click(
            function() {
                var item_amout = $('input[name="amout"]').val();
                var price = new Number($(".one-price").attr('value'));
                var first_price = new Number($(".first-price").attr('value'));
                if (item_amout > 99999) {
                    window.alert("爆仓啦~")
                } else {
                    var i = item_amout;
                    price += first_price;
                    i++;
                    $('input[name="amout"]').val(i);
                    $(".one-price").text("￥" + price.toFixed(2));
                    $(".one-price").attr('value', price.toFixed(2));
                }

            }
        )
})