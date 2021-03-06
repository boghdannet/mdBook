window.editors = [];
(function(editors) {
    if (typeof(ace) === 'undefined' || !ace) {
        return;
    }

    Array.from(document.querySelectorAll('.editable')).forEach(function(editable) {
        let editor = ace.edit(editable);
            editor.setOptions({
            highlightActiveLine: false,
            showPrintMargin: false,
            showLineNumbers: false,
            showGutter: false,
            maxLines: Infinity
        });

        editor.$blockScrolling = Infinity;

        editor.getSession().setMode("ace/mode/rust");

        editor.originalCode = editor.getValue();

        editors.push(editor);
    });
})(window.editors);
