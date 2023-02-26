import { openDb } from '../configDb.js'

export async function createTable() {                     //Criação da tabela/entidade Vacina.
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Vacina (id INTEGER PRIMARY KEY, nome TEXT, tipo TEXT)')
    })
}


export async function selectVacinas(req, res) {           //Busca e lista todas as vacinas.
    openDb().then(db => {
        db.all('SELECT * FROM Vacina')
            .then(vacinas => res.json(vacinas))
    });
}

export async function selectVacina(req, res) {          //Busca uma vacina específica por id no body.
    const id = req.body.id;
    openDb().then(db => {   
        db.get('SELECT * FROM Vacina WHERE id=?', [id])
            .then(vacina => res.json(vacina));
    });
}



export async function insertVacina(req, res) {          //Insere uma vacina.
    const vacina = req.body; 
    openDb().then(db => {
        db.run('INSERT INTO Vacina (nome, tipo) VALUES (?,?)', [vacina.nome, vacina.tipo]);
    })
    res.json({ vacina })
};

export async function updateVacina(req, res) {        //Atualiza os dados das vacinas.
    const vacina = req.body;
    openDb().then(db => {
        db.run('UPDATE Vacina  SET nome=? , tipo=? WHERE id=?', [vacina.nome, vacina.tipo, vacina.id]);
    });
    res.json({ vacina })
}

export async function deleteVacina(req, res) {      //Deleta a vacina.
    const id = req.body.id;
    openDb().then(db => {
        db.get('DELETE  FROM Vacina WHERE id=?', [id])
            .then(res => res)
    });
    res.json({ "statusCode": 200 })
}