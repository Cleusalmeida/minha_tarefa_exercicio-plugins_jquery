$(document).ready(function() {  
    $('#telefone').mask('(00)00000-0000', { 
        placeholder: '(00)00000-0000'
    });
    $('#cpf').mask('000000000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });
    $('form').validate({
        rules: {
            nome: {
                required: true //diz que o campo é obrigatório (required:true)
            },
            telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            endereço: {
                required: true,
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids(); //diz quantos campos estão incorretos
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)//alerta de de que tem campos errados
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({ //quando clica no botão de interesse, roladireto até o formulário
            scrollTop: destino.offset().top
        }, 1000)
    })
})
