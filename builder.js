

// Jquery
$(document).ready(function () {
    $("#form").submit(function () {
        const title = $("#title").val();
        const a = $("#a").val();
        const b = $("#b").val();
        const c = $("#c").val();
        const d = $("#d").val();
        alert(title + c);
    });
});