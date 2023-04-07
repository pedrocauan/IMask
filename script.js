IMask(document.querySelector("#cc-cvv"),  { 
    mask: "0000"
 });

 IMask(document.querySelector("#cc-number"), {
    mask: "0000 0000 0000 0000" /* 0000 -> mascara de números*/
 });

 IMask(document.querySelector("#cc-validity"), {
    mask: "MM{/}YY",
    /*Placeholders de MM e YY*/
    blocks:  {
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        },

        YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2), /*Pega o ano atual*/
            to: String(new Date().getFullYear() + 10).slice(2)  /*pega o ano atual + 10 anos que é a validade do cartao*/
        }
    }
 });