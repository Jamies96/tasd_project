function addItem() {
    const newItem = $("#insert-new input").val();
    $("#insert-new input").val("");
    if (newItem) {
        const newLi = `<li>${newItem}</li>`;

        $("#todolist").append(newLi);
    }
}

$(document).ready(function() {
    //il click su uno dei list item applica un toggle sulla classe "done"
    $("#todolist").on("click", "li", function() {
        $(this).toggleClass("done");
    });

    //il click sul bottone "aggiungi" esegue la funzione "addItem"
    $("#insert-new button").on("click", function() {
        addItem();
    });

    //il click sul bottone "archivia completati" sposta gli elementi ".done" dalla #todolist alla lista nell'archivio
    $("#archive-completed").on("click", function() {
        $("#todolist li.done").each(function() {
            $(this).appendTo("#archive");
            let newText = $(this).text();
            $(this).html("<del>" + newText + "</del>");
        });
    });
    // per ciascuno sostituisci il text wrappandolo dentro al tag html <del></del>
    //tips: usa un ciclo per iterare sugli elementi (each), sposta l'elemento corrente(appendTo) ed infine assegna come html() il text() esistente con l'aggiunta del tag specificato



    //il click sul bottone "rimuovi completati" applica un'animazione che porta l'opacità a 0 e sposta l'elemento verso destra di 300px (opacity: 0, left: "300px")
    // al termine dell'animazione l'elemento viene rimosso (callback)
    /* $("#remove-completed").on("click", function(){
       $("#archive li").each(function(){
         $(this).animate({
           opacity: "0",
           left: "300px"
         },        
           1000, function(){
             $(this).remove();
         }
         );
       }
     })*/

    $("#remove-completed").on("click", function() {
        $("#archive li").animate({
            opacity: "0",
            left: "300px"
        }, 1000, function() {
            $(this).remove();
        });
    })


});