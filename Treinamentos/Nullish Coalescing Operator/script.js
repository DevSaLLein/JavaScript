user = {
    name: 'Isaac',
    idade:null,
    address:  {
        street: 'Imperatriz',
        num: 166,
    },
};

document.body.innerHTML = "sua idade: " +  (user.idade ?? 'não informado');


