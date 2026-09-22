import { con } from "./connection.js";

export async function savecliente(cliente) {
    const command = `
        insert into clientes
        (nome, email, telefone)
        values (?, ?, ?)
    `;

    const [result] = await con.query(command, [
        cliente.nome,
        cliente.email,
        cliente.telefone
    ]);

    return result.insertId;
}

export async function getcliente(id) {
    const command = `
        select id,
               nome,
               email,
               telefone
        from clientes
        where id = ?
    `;

    const [linhas] = await con.query(command, [id]);
    return linhas[0];
}

export async function listClientes() {
    const command = `
        select id,
               nome,
               email,
               telefone
        from clientes
    `;

    const [linhas] = await con.query(command, []);
    return linhas;
}

export async function updateCliente(id, cliente) {
    const command = `
        update clientes
           set nome = ?,
               email = ?,
               telefone = ?
         where id = ?
    `;

    const [result] = await con.query(command, [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        id
    ]);

    return result.affectedRows;
}

export async function deleteCliente(id) {
    const command = `
        delete from clientes
        where id = ?
    `;

    const [result] = await con.query(command, [id]);
    return result.affectedRows;
}