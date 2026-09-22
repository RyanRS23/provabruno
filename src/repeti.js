import {Router} from 'express';
const router = Router();

router.get('/repeti', (req, res) => {
const a = Number(req.query.a);
const b = Number(req.query.b);
const op = req.query.operacao;

if (op === 'soma') return res.json({ resultado: a + b });
if (op === 'subtracao') return res.json({ resultado: a - b });
if (op === 'multiplicacao') return res.json({ resultado: a * b });
if (op === 'divisao') return res.json({ resultado: b === 0 ? 'Erro: divisão por zero' : a / b });

res.status(400).json({ erro: 'Operação inválida' });
});

export default router;