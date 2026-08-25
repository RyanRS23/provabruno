import health from '../src/Controller/healthController.js';
import calculadora from '../src/Controller/calculadoraController.js';

export default function rotear(api) {
    api.use(health);
    api.use(calculadora);
}
