const User = {
    personalInfor: {
        name: 'Isaac',
        age: 16,
        city: 'New York'
    },
    social: {
        twitter: 'Labrys',
        Face: 'IsaacDev',
        Linkedin: 'Isaac Lima de Andrade',
        Github: 'DevSaLLein'
    }
};
/*

F O R M A  C O N V E N C I O N A L => {

    const name = User.personalInfor.name;
const Github = User.social.Github;

console.log(name);

console.log(Github);
}

*/

const { name , age } = User.personalInfor;

console.log(`${name} <= nome`);
console.log(`${age} <= idade`);

const { Linkedin , Github } = User.social;

console.log( `${Linkedin} <= Linkedin`);
console.log(`${Github} <= Github`);


// M U D A N D O  O  N O M E  D A  V A R 
const {Face: FB} = User.social;

console.log(`${FB} <= Facebook`);

// PODEMOS POR VALORES DEFAULT

const {tel = '98985684'} = User;

console.log(`${tel} <= telefone`);