// Fuction confirmação de exclusão.

document.querySelectorAll('.delete-btn').forEach(
    btn => {
        btn.addEventListener('click', function(e){
            e.preventDefault();

            const delLink = this.getAttribute('href');

            if(delLink && confirm('Quer deletar esta tarefa?')){
                window.location.href = delLink;
            }
        });
    }
);