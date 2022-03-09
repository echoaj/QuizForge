
function getCard(title, a, b, c, d, num) {
    return `<div>
                <div class="card m-3 border-0" id="quiz-card" style="width: 20rem; min-height: 20rem;">
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
];


// Jquery
$(document).ready(function () {

    // Populate 
    // $.each(quiz, function (i, obj) {
    //     const newCard = getCard(...obj);
    //     $("#card-input-form").before(newCard);
    // });

    // Submit new quiz questions
    $("#form").submit(function (event) {
        event.preventDefault();
        const title = $("#title").val();
        const a = $("#a").val();
        const b = $("#b").val();
        const c = $("#c").val();
        const d = $("#d").val();
        const data = [title, a, b, c, d, quiz.length+1]
        quiz.push(data);
        const newCard = getCard(...data);
        $("#card-input-form").before(newCard);
        $("#card-input-form").css("display", "none");
        $("#add-button").css("display", "block");
    });

    // Add Button Pressed
    $("#add-button").click(function () {
        $("#card-input-form").css("display", "block");
        $("#add-button").css("display", "none");
    })
});