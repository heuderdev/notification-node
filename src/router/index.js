const express = require("express");
const {
  ViewEquipesController,
} = require("../controllers/ViewEquipesController");
const { EquipesController } = require("../controllers/EquipesController");
const {
  ViewFuncionariosController,
} = require("../controllers/ViewFuncionariosController");
const {
  FuncionariosController,
} = require("../controllers/FuncionariosController");
const {
  ViewTarefasController,
} = require("../controllers/ViewTarefasController");
const { TarefasController } = require("../controllers/TarefasController");
const {
  ViewHorariosController,
} = require("../controllers/ViewHorariosController");
const { HorariosController } = require("../controllers/HorariosController");
const {
  ViewTarefasColaboradoresController,
} = require("../controllers/ViewTarefasColaboradoresController");
const {
  TarefasColaboradoresController,
} = require("../controllers/TarefasColaboradoresController");
const {
  ViewTarefasHorariosController,
} = require("../controllers/ViewTarefasHorariosController");
const {
  TarefasHorariosController,
} = require("../controllers/TarefasHorariosController");
const { viewHomeController } = require("../controllers/viewHomeController");
const { GerenciamentoControler } = require("../controllers/GerenciamentoControler");
const { LoginController } = require("../controllers/LoginController");

const router = express.Router();

router.get("/view/equipes", ViewEquipesController.index);
router.get("/view/funcionarios", ViewFuncionariosController.index);
router.get("/view/tarefas", ViewTarefasController.index);
router.get("/view/horarios", ViewHorariosController.index);
router.get(
  "/view/tarefas-colaboradores",
  ViewTarefasColaboradoresController.index
);
router.get("/view/tarefas-horarios", ViewTarefasHorariosController.index);

router.get("/", viewHomeController.index)
router.get("/sicoob/:id", GerenciamentoControler.view)
// API
router.post("/api/equipes/create", EquipesController.create);
router.post("/api/funcionarios/create", FuncionariosController.create);
router.post("/api/tarefas/create", TarefasController.create);
router.post("/api/horarios/create", HorariosController.create);
router.post(
  "/api/tarefas-colabradores/create",
  TarefasColaboradoresController.create
);
router.post("/api/tarefas-horarios/create", TarefasHorariosController.create);

router.get("/login", LoginController.index)

module.exports = { router };
