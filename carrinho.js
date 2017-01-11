




function atualizaDados() {
    var carrinhos = $('.carrinho');
    carrinhos.each(function () {

      var carrinho = $(this);
      var total =0;
      var  valorContent =0;
      var itens  = carrinho.find(".item-total:visible");
      for (var i = 0; i < itens.length; i++) {
        var item = $(itens[i]).text(); //pega o valor
        valorContent = parseFloat(item);
        total += valorContent;
        var quantidadeItens = itens.length;

        carrinho.find('.valor-total').text(total); // seta o valor
        carrinho.find('.quantidade-de-itens').text(quantidadeItens);
    };
    });


 };



      function  removerItem(event){
        event.preventDefault();
        var self= $(this);
        self.closest('tr').hide();  //.remove();  /closest pega o mais proximo no caso tr + prox
          atualizaDados(); // quando chamamos atualizar, soma todos dados novamente so q s/o removido...y

        // var quantidadeAtual = parseInt($("#quantidade-de-itens ").text());
        // var novaQuantidade = quantidadeAtual - 1 ;
        // $('#quantidade-de-itens').text(novaQuantidade);
        //
        //  var valorAtual = parseFloat($("#valor-total").text());
        //   var valorItem = parseFloat(self.closest("tr").find(".item-total").text());     // pegar o valor do item total
        //    var valorFinal = valorAtual - valorItem ;	//  diminuir o valor  do item do toatal
        // 							$("#valor-total").text(valorFinal);		//  setar novo valor

      }
      var undo = function() {
       var carrinho =$(this).closest('.carrinho'); // $('tr:visible');
            carrinho.find('tr:visible').remove('.undoRecuperado');
        trs =  carrinho.find("tr:hidden");
         trs.addClass('undoRecuperado');
       trs.show();
       atualizaDados();

     };

      function aposInicializacao() {
              atualizaDados();
            $('.undo').click(undo);
        $('.remove-item').click(removerItem);
      }

      $(aposInicializacao);
