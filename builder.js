
function getCard(title, a, b, c, d, num) {
    return `<div>
                <div class="card m-3 border-0 quiz-card" style="width: 20rem; min-height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <ol type="A">
                            <li>${a}</li>
                            <li>${b}</li>
                            <li>${c}</li>
                            <li>${d}</li>
                        </ol>
                    </div>
                    <div class="text-center bg-info text-white rounded-bottom">${num}</div>
                </div>
            </div>`;
}


quiz = [
    ["Which programming language runs in the web browser?", "Java", "Python", "C++", "JavaScript", "1"],
    ["Which one of the following is not a programming language?", "Rust", "Node.js", "Java", "Ruby", "2"],
    ["In JavaScript, what data structure would you use for storing key-value pairs?", "Object", "Array", "Set", "String", "3"],
    ["Which one of the following is not a CSS Selector?", "id", "class", "item", ":root", "4"],
];

// quiz = [];


// Jquery
$(document).ready(function () {

    // Populate 
    $.each(quiz, function (i, obj) {
        const newCard = getCard(...obj);
        $("#card-input-form").before(newCard);
        $("#publish-button").prop('disabled', false);
    });

    // Submit new quiz questions
    $("#form").submit(function (event) {
        event.preventDefault();
        const title = $("#title").val();
        const a = $("#a").val();
        const b = $("#b").val();
        const c = $("#c").val();
        const d = $("#d").val();
        const data = [title, a, b, c, d, quiz.length + 1];
        quiz.push(data);
        const newCard = getCard(...data);
        $("#card-input-form").before(newCard);
        $("#card-input-form").css("display", "none");
        $("#add-button").css("display", "block");
        $("#publish-button").prop('disabled', false);
    });

    // Add Button Pressed
    $("#add-button").click(function () {
        $("#card-input-form").css("display", "block");
        $("#form").trigger('reset');
        $("#add-button").css("display", "none");
    });

    // Cancel Button Pressed
    $("#cancel-button").click(function () {
        $("#card-input-form").css("display", "none");
        $("#add-button").css("display", "block");
    });

    // Publish Button
    $("#publish-button").click(function () {
        $("#card-input-form").css("display", "none");
        $("#add-button").css("display", "none");
        $("#publish-button-div").css("display", "none");
        const page = $("#body")
        page.removeClass("m-5");
        page.find("#dashboard").removeClass("d-flex flex-wrap").addClass("d-block pt-5");
        page.find(".quiz-card").removeClass("m-3").addClass("mx-auto mt-5");
        const allCards = page[0];       // Jquery Object[0] => HTML DOM Object

        var opt = {
            margin: 0,
            pagebreak: { mode: 'avoid-all', after: ".quiz-card", avoid: ['#add-button', '#card-input-form', '#card-input-form'] },
            filename: 'quiz.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(allCards).set(opt).save();
    });
});