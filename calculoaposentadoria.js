const nome="Evando";
const profissão="professor";
const idade=43;
const contribuição=23;
const tempodecontribuiçãominimoprofessor=30;
const tempodecontribuiçãomedico=25;
const somaMinimaprofessor=95;
const somaMinimamedico=85;

const soma=(idade+contribuição)

if (profissão="professor"){
        if (contribuição >= tempodecontribuiçãominimoprofessor & soma>= somaMinimaprofessor) { 
            console.log(`${nome}, você pode se aposentar!`); 
        } else { 
            console.log(`${nome}, você não pode se aposentar!`);
        }
    } else if (profissão="medico") {
        if (contribuição>=tempodecontribuiçãomedico & soma >=somaMinimamedico) {
            console.log(`${nome}, você pode se aposentar!`);
        } else {
            console.log(`${nome}, você não pode se aposentar!`);
        }
    } else {
        console.log("profissão não reconhecida. Por favor, digite 'professor'  ou 'medico' .");
    }
