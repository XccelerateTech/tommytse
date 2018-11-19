var notesTemplate = Handlebars.compile(`
    {{#each notes}}
    <div class="note">
        <span class="input"><textarea data-id="{{ @index }}">{{ this }}</textarea></span>

        <button class="remove btn btn-xs" data-id="{{ @index }}"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </div>
    {{/each}}
`);

function reloadNotes(notes) {
    $('#notes').html(notesTemplate({notes: notes}));
}

function beginSaving(target) {
    $(target).prop('disabled', true);
    $('.saving').show();
}

function endSaving(target) {
    $(target).prop('disabled', false);
    $('.saving').hide();
}

$(function() {
    $('#add').submit(function(e) {//refer to the form submit
        e.preventDefault();
        
        var val = $('textarea[name=note]').val();//read the textarea text
        if (val === '') {//if text area is empty
            return;
        }
        $('textarea[name=note]').val('');//empty the text area
        axios.post('/api/notes/', {
            note: val // note is still stored, since we already assign the text area content in val
        }).then(function(res) {
            reloadNotes(res.data);
        });
    });

    $('#notes').on('blur', 'textarea', function(evt) {
        beginSaving(evt.currentTarget);

        axios.put('/api/notes/' + $(evt.currentTarget).data('id'), {
            note: $(evt.currentTarget).val()
        }).then(function(res) {
            endSaving(evt.currentTarget);
            reloadNotes(res.data);
        }).catch(function(e) {
            endSaving(evt.currentTarget);
            alert(e);
        });
    });

    $('#notes').on('click', '.remove', function(evt) {
        beginSaving(evt.currentTarget);

        axios.delete('/api/notes/' + $(evt.currentTarget).data('id')).then(function(res) {
            endSaving(evt.currentTarget);
            reloadNotes(res.data);
        }).catch(function(e) {
            endSaving(evt.currentTarget);
            alert(e);
        });
    });
});