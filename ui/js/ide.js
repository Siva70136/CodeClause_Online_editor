let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/php");
}

function changeLanguage() {

    let language = $("#languages").val();

    
    if(language == 'php')editor.session.setMode("ace/mode/php");
    
    else if(language == 'node')editor.session.setMode("ace/mode/javascript");
}

function executeCode() {

    $.ajax({

        url: "/online-editor/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}