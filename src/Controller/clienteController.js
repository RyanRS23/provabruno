import { Router } from 'express';
import { 
    savecliente, 
    getcliente, 
    listClientes, 
    updateCliente, 
    deleteCliente 
} from '../repository/clienteRepository.js';

const endpoint = Router();

endpoint.post('/clientes', async (req, resp) => {
    try {
        const cliente = req.body;
        const id = await savecliente(cliente);
        resp.send({ id: id });
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

endpoint.get('/clientes', async (req, resp) => {
    try {
        const clientes = await listClientes();
        resp.send(clientes);
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});


endpoint.get('/clientes/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const cliente = await getcliente(id);
        
        if (!cliente) {
            return resp.status(404).send({ erro: 'Cliente não encontrado.' });
        }
        
        resp.send(cliente);
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

endpoint.put('/clientes/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const cliente = req.body;
        
        const linhasAfetadas = await updateCliente(id, cliente);
        
        if (linhasAfetadas === 0) {
            return resp.status(404).send({ erro: 'Cliente não encontrado para atualizar.' });
        }
        
        resp.send();
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});


endpoint.delete('/clientes/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const linhasAfetadas = await deleteCliente(id);
        
        if (linhasAfetadas === 0) {
            return resp.status(404).send({ erro: 'Cliente não encontrado para remover.' });
        }
        
        resp.send();
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

export default endpoint;