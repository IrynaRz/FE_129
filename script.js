// Note --> описывает 1 заметку
// Notes --> описывает логику создания заметок
// NotesUI --> управление заметками

function Note(data) {
    if (!data.title) return;
    this.data = data;
    this.edit = function(data) {
        // this.data = {
        //    ...this.data, 
        //    ...data
        //};
        Object.assign(this.data, data);
    }

    /*Object.defineProperty(this, 'setData', {
        enumerable: true, 
        configurable:true,
        writable: true,
        get: () => this['setData'],
        set: (data) => this['setData'] = data,
    });*/
}

function Notes (){
    this.notes = [];

    this.add = (obj) => {
        if (!obj.title) return;

        let note = new Note(obj);
        let id = this.getRandomId()
        note.edit({id});

        this.notes.push(note);
    }

    this.edit = (id, data) => {
        this.notes.forEach(note => {
            if (note.data.id === id){
                note.edit(data);
            }
        });
    }
}

Notes.prototype.getRandomId = function () {
    let id = Math.floor(Math.random() * 100);
    if (this.notes.length === 0) return id;

    let flag = this.notes.some(note => note.data.id === id);
    if(flag) {
        return this.getRandomId; 
    }else{
        return id;
    }
}

Notes.prototype.removeNote = function (id) {
    this.notes = this.notes.filter(note => note.data.id !== id);
}

/*let notes = new Notes();
notes.add({title:'title 1', content: 'content 1'});
notes.add({title:'title 2', content: 'content 2'});
notes.add({title:'title 3', content: 'content 3'});*/

/*forEach --> методы массивов повторить!!
*map
*find
*filter
*reduce*/
/*методы ООП: наследование, инкапсуляция, полиморфизм(функция ведет себя по-разному, в зависимости от типа данных) */

function NoteUI(){
    Notes.apply(this);
    this.container = null;
    this.noteContainer = null;

    this.init = function(selector){
        this.container  = this.search(null, selector);

        let formContainer = document.createElement('form');
        formContainer.classList.add('form');

        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Введите название заметки');

        let contentInput = document.createElement('input');
        contentInput.setAttribute('type', 'text');
        contentInput.setAttribute('placeholder', 'Введите текст заметки');

        let buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('type', 'submit');
        buttonAdd.innerText = 'Добавить заметку';

        this.noteContainer = document.createElement('div');
        this.noteContainer.classList.add('note__container');

        formContainer.addEventListener('submit', event => {
            event.preventDefault();

            let title = titleInput.value;
            let content = contentInput.value;

            this.add({title, content});

            titleInput.value = '';
            contentInput.value = '';
            console.log(this.notes);
            this.render();
        });

        formContainer.append(titleInput, contentInput, buttonAdd);
        this.container.append(formContainer, this.noteContainer);
    }

    this.search = function(element, selector){
        element = element || document;
        return element.querySelector(selector);
    }

    this.render = function(){
        this.noteContainer.innerHTML = ''; 
        this.notes.forEach(note => {
            let noteContainer = document.createElement('div');
            noteContainer.classList.add('note__element');

            let h2 = document.createElement('h2');
            h2.classList.add('title');
            h2.innerText = note.data.title;

            let p = document.createElement('p');
            p.classList.add('content');
            p.innerText = note.data.content; 

            let del = document.createElement('button');
            del.classList.add('del');
            del.innerText = 'Удалить заметку';
            del.addEventListener('click', () => {
                this.removeNote(note.data.id);
                this.render();
            });

            noteContainer.append(h2, p, del);
            this.noteContainer.append(noteContainer);
        });
    }

    this.removeNote = function(id) {
        Notes.prototype.removeNote.call(this, id);
        this.render();
    }
}

NoteUI.prototype = Object.create(Notes.prototype);
new NoteUI().init('.container'); 