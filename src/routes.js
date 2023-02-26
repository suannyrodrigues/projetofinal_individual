import { Router } from "express";
import { createTable, insertVacina, updateVacina, selectVacinas, selectVacina, deleteVacina } from './controller/vacina.js';

const router = Router();

router.get('/', (req, res) => {
    res, json({
        "statusCode": '200',
        "msg": "Servidor rodando na porta 3000."
    })
});

router.get('/vacinas', selectVacinas); //Busca e lista todas as vacinas.
router.get('/vacina', selectVacina);  //Busca uma vacina específica.
router.post('/vacina', insertVacina); //Insere novas vacinas.
router.put('/vacina', updateVacina); //Atualiza dados das vacinas.
router.delete('/vacina', deleteVacina); //Deleta a vacina.



export default router;