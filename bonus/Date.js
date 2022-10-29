/* o objeto date como o proprio nome sugere ele cuida da data 
  você pode utilizar ele de diversas formas como
  new Date('2022-9-28 21:15:20'); nesse caso é string
  new Date(2022, 9, 28, 21, 15, 20, 100); ano mes dia hora minuto segundo miliSegundo
*/
const data = new Date();

console.log('Dia ', data.getDate()); // pega dia
console.log('Mes', data.getMonth()); // pega mes
console.log('Ano', data.getFullYear()); // pega ano
console.log('Hora', data.getHours()); // pega hora
console.log('Minuto', data.getMinutes()); // pega minuto
console.log('Segundo', data.getSeconds()); // pega segundo
console.log('MiliSec', data.getMilliseconds()); // pega milesimos de segundos
console.log('Dia da Semana', data.getDay()); // pega o dia da semana
console.log(data.toString()); // pega a data em string

console.log(Data.now()); // pega o horario atual em milesimos de segundos desde o marco 0