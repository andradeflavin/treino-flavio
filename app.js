
// Dados embutidos da planilha
const DATA = [
  {
    "Treino": "A+Core",
    "Grupo Muscular": "Peito",
    "Exercício": "Supino reto barra",
    "Séries": 4.0,
    "Reps": "6-10",
    "Carga (kg)": "",
    "Execução / Técnica": "Banco plano; escápulas retraídas; pés firmes; descer controlado; usar spotter em cargas altas.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Priorizar progressão de carga; alternar inclinado/barbell semanalmente.",
    "Descanso (s)": 150.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "Peito",
    "Exercício": "Supino inclinado halter",
    "Séries": 4.0,
    "Reps": "6-10",
    "Carga (kg)": "",
    "Execução / Técnica": "Banco plano; escápulas retraídas; pés firmes; descer controlado; usar spotter em cargas altas.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Priorizar progressão de carga; alternar inclinado/barbell semanalmente.",
    "Descanso (s)": 150.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "Peito",
    "Exercício": "Crucifixo crossover",
    "Séries": 3.0,
    "Reps": "10-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Braços semi-flexionados; amplitude controlada; evitar hiperextensão do ombro.",
    "Tempo Sob Tensão": "3s exc / 1s contração",
    "Observações": "Isolador; não usar cargas excessivas.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abd supra declinado",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "Tríceps",
    "Exercício": "Tríceps pulley corda",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Cotovelo fixo; movimentar apenas antebraço; estabilizar ombro.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Usar técnicas excêntricas para aumentar estímulo.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abd infra paralela + prancha",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "A+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Costas",
    "Exercício": "Puxada frente triângulo",
    "Séries": 4.0,
    "Reps": "6-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Amplitude total; controlar o movimento; evitar balanço.",
    "Tempo Sob Tensão": "1-2s conc / 2-3s exc",
    "Observações": "Substituir por variação assistida caso necessário.",
    "Descanso (s)": 150.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Costas",
    "Exercício": "Remada curvada barra pronada",
    "Séries": 4.0,
    "Reps": "6-10",
    "Carga (kg)": "",
    "Execução / Técnica": "Costas neutras; puxar com cotovelos; controlar retorno.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Focar em conexão e evitar balanço.",
    "Descanso (s)": 150.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Costas",
    "Exercício": "Remada baixa triângulo",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Costas neutras; puxar com cotovelos; controlar retorno.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Focar em conexão e evitar balanço.",
    "Descanso (s)": 120.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Costas",
    "Exercício": "Remada unilateral máquina",
    "Séries": 4.0,
    "Reps": "6-10",
    "Carga (kg)": "",
    "Execução / Técnica": "Costas neutras; puxar com cotovelos; controlar retorno.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Focar em conexão e evitar balanço.",
    "Descanso (s)": 90.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Costas",
    "Exercício": "Extensão lombar banco romano",
    "Séries": 3.0,
    "Reps": "12-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Banco romano; movimento controlado; sem hiperextensão.",
    "Tempo Sob Tensão": "2s conc / 2s exc",
    "Observações": "Fortalecer lombar para estabilidade.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Bíceps",
    "Exercício": "Rosca martelo halter",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Cotovelo fixo; movimento controlado; evitar impuslo.",
    "Tempo Sob Tensão": "3s exc / 1s conc",
    "Observações": "Aumentar frequência se necessário.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Bíceps",
    "Exercício": "Rosca invertida barra reta",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Cotovelo fixo; movimento controlado; evitar impuslo.",
    "Tempo Sob Tensão": "3s exc / 1s conc",
    "Observações": "Aumentar frequência se necessário.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abdominal cruzado",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abdominal obliquo",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Ombros/Posterior",
    "Exercício": "Face pull (cabo)",
    "Séries": 3.0,
    "Reps": "12-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Pegar corda; puxar em direção ao rosto com cotovelos altos; manter escápulas retraídas e ombros baixos.",
    "Tempo Sob Tensão": "2s conc / 3s exc",
    "Observações": "Priorizar proteção do ombro; incluir 2-3x/sem como manutenção.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "B+Core",
    "Grupo Muscular": "Tríceps/Peito",
    "Exercício": "Supino pegada fechada (Close-grip bench)",
    "Séries": 4.0,
    "Reps": "6-10",
    "Carga (kg)": "",
    "Execução / Técnica": "Pegada ~shoulder width; descer controlado até o esterno; cotovelos próximos ao corpo; empurrar com tríceps.",
    "Tempo Sob Tensão": "3s exc / 1s conc",
    "Observações": "Bom exercício para transfer de força para o supino e tríceps.",
    "Descanso (s)": 150.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Agachamento smith",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 120.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Leg 45",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Cadeira extensora",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Mesa flexora",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Elevação pélvica",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 120.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Extensão de quadril (coice)",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Cadeira abdutora",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Panturrilha angular em pé",
    "Séries": 4.0,
    "Reps": "12-20",
    "Carga (kg)": "",
    "Execução / Técnica": "Amplitude completa; pausar 1s no topo; controle excêntrico.",
    "Tempo Sob Tensão": "2s conc / 3s exc",
    "Observações": "Combine em pé + sentado; use FST-7 1x/sem.",
    "Descanso (s)": 25.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "Pernas",
    "Exercício": "Panturrilha na maquina ou no leg",
    "Séries": 4.0,
    "Reps": "12-20",
    "Carga (kg)": "",
    "Execução / Técnica": "Amplitude completa; pausar 1s no topo; controle excêntrico.",
    "Tempo Sob Tensão": "2s conc / 3s exc",
    "Observações": "Combine em pé + sentado; use FST-7 1x/sem.",
    "Descanso (s)": 25.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Ombros",
    "Exercício": "Desenvolvimento halter",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Ombros",
    "Exercício": "Elevação lateral sentado",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Ombros",
    "Exercício": "Elevação frontal halter",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Ombros",
    "Exercício": "Crucifixo invertido polia",
    "Séries": 3.0,
    "Reps": "10-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Braços semi-flexionados; amplitude controlada; evitar hiperextensão do ombro.",
    "Tempo Sob Tensão": "3s exc / 1s contração",
    "Observações": "Isolador; não usar cargas excessivas.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Trapézio",
    "Exercício": "Remada alta polia",
    "Séries": 4.0,
    "Reps": "6-10",
    "Carga (kg)": "",
    "Execução / Técnica": "Costas neutras; puxar com cotovelos; controlar retorno.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Focar em conexão e evitar balanço.",
    "Descanso (s)": 120.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Trapézio",
    "Exercício": "Encolhimento",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Execução controlada; estabilizar articulações; foco técnica.",
    "Tempo Sob Tensão": "2-3s exc / 1s iso / 1s conc",
    "Observações": "Progredir carga gradualmente.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abd supra declinado",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abd infra paralela + prancha",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Cardio",
    "Exercício": "Bicicleta ergometrica",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "Cardio leve de baixo impacto; controlar FC.",
    "Tempo Sob Tensão": "",
    "Observações": "Evitar impacto; usar para condicionamento.",
    "Descanso (s)": ""
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "",
    "Exercício": "",
    "Séries": "",
    "Reps": "",
    "Carga (kg)": "",
    "Execução / Técnica": "",
    "Tempo Sob Tensão": "",
    "Observações": "",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "D+Core",
    "Grupo Muscular": "Ombros/Posterior",
    "Exercício": "Face pull (cabo)",
    "Séries": 3.0,
    "Reps": "12-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Pegar corda; puxar em direção ao rosto com cotovelos altos; manter escápulas retraídas e ombros baixos.",
    "Tempo Sob Tensão": "2s conc / 3s exc",
    "Observações": "Priorizar proteção do ombro; incluir 2-3x/sem como manutenção.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Bíceps",
    "Exercício": "Rosca direta barra",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "20kg",
    "Execução / Técnica": "Cotovelo fixo; movimento controlado; evitar impuslo.",
    "Tempo Sob Tensão": "3s exc / 1s conc",
    "Observações": "Aumentar frequência se necessário.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Bíceps",
    "Exercício": "Rosca scott",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "20kg",
    "Execução / Técnica": "Cotovelo fixo; movimento controlado; evitar impuslo.",
    "Tempo Sob Tensão": "3s exc / 1s conc",
    "Observações": "Aumentar frequência se necessário.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Bíceps",
    "Exercício": "Bi-Set Rosca alternada banco inclinado + em pé",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "8kg+7kg",
    "Execução / Técnica": "Cotovelo fixo; movimento controlado; evitar impuslo.",
    "Tempo Sob Tensão": "3s exc / 1s conc",
    "Observações": "Aumentar frequência se necessário.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Bíceps",
    "Exercício": "Rosca francesa sentado",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "14kg",
    "Execução / Técnica": "Cotovelo fixo; movimento controlado; evitar impuslo.",
    "Tempo Sob Tensão": "3s exc / 1s conc",
    "Observações": "Aumentar frequência se necessário.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Tríceps",
    "Exercício": "Tríceps pulley corda",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": 17.5,
    "Execução / Técnica": "Cotovelo fixo; movimentar apenas antebraço; estabilizar ombro.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Usar técnicas excêntricas para aumentar estímulo.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Tríceps",
    "Exercício": "Tríceps testa polia corda",
    "Séries": 3.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Cotovelo fixo; movimentar apenas antebraço; estabilizar ombro.",
    "Tempo Sob Tensão": "3s exc / 1s iso / 1s conc",
    "Observações": "Usar técnicas excêntricas para aumentar estímulo.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abdominal cruzado",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Abdominal obliquo",
    "Séries": 3.0,
    "Reps": "8-15",
    "Carga (kg)": "",
    "Execução / Técnica": "Controle respiratório; evitar embalo; progredir com carga.",
    "Tempo Sob Tensão": "2-3s conc / 2-3s exc",
    "Observações": "Use carga progresiva nas máquinas/cabo ou weighted leg raises.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "E+Core",
    "Grupo Muscular": "Core",
    "Exercício": "Hanging weighted leg raises (abdominal infra com carga)",
    "Séries": 4.0,
    "Reps": "8-12",
    "Carga (kg)": "",
    "Execução / Técnica": "Suspenso; elevar pernas até 90°; adicionar carga se dominar; evitar balanço.",
    "Tempo Sob Tensão": "2s conc / 2-3s exc",
    "Observações": "Abdome infra com carga – progresso para hipertrofia.",
    "Descanso (s)": 60.0
  },
  {
    "Treino": "C+Core",
    "Grupo Muscular": "Pernas",
    "Exercício": "Bulgarian split squat (unilateral)",
    "Séries": 4.0,
    "Reps": "6-10/unilateral",
    "Carga (kg)": "",
    "Execução / Técnica": "Apoio posterior elevado; foco em empurrar com calcanhar da perna de apoio; tronco ligeiramente inclinado se necessário; manter joelho alinhado.",
    "Tempo Sob Tensão": "3-4s excêntrico / 1s concêntrico",
    "Observações": "Ótimo para corrigir assimetrias; aumentar carga progressiva no lado mais fraco.",
    "Descanso (s)": 90.0
  }
];

// Utilitários
function q(sel, el=document){return el.querySelector(sel);}
function qAll(sel, el=document){return Array.from(el.querySelectorAll(sel));}

function createCard(item, idx){
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-idx', idx);

  const header = document.createElement('div');
  header.className = 'card-header';
  header.innerHTML = `<div class="title">${item['Exercício']}</div><div class="meta">${item['Treino']} · ${item['Grupo Muscular']}</div>`;

  const body = document.createElement('div');
  body.className = 'card-body';
  body.innerHTML = `
    <div><strong>Séries:</strong> ${item['Séries']}</div>
    <div><strong>Reps:</strong> ${item['Reps']}</div>
    <div><strong>Carga (kg):</strong> ${item['Carga (kg)']}</div>
    <div><strong>Descanso (s):</strong> ${item['Descanso (s)']}</div>
    <div><strong>Tempo sob tensão:</strong> ${item['Tempo Sob Tensão']}</div>
    <div class="tech"><strong>Técnica:</strong> ${item['Execução / Técnica']}</div>
    <div class="obs"><strong>Observações:</strong> ${item['Observações']}</div>
  `;

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  const btn = document.createElement('button');
  btn.className = 'btn-complete';
  btn.textContent = isCompleted(idx) ? 'Concluído ✓' : 'Marcar concluído';
  btn.onclick = () => {
    toggleCompleted(idx);
    btn.textContent = isCompleted(idx) ? 'Concluído ✓' : 'Marcar concluído';
    card.classList.toggle('completed', isCompleted(idx));
  };

  footer.appendChild(btn);
  card.appendChild(header);
  card.appendChild(body);
  card.appendChild(footer);

  if(isCompleted(idx)) card.classList.add('completed');

  return card;
}

function isCompleted(idx){
  const s = localStorage.getItem('completed_exercises') || '[]';
  const arr = JSON.parse(s);
  return arr.includes(idx);
}
function toggleCompleted(idx){
  const s = localStorage.getItem('completed_exercises') || '[]';
  const arr = JSON.parse(s);
  const i = arr.indexOf(idx);
  if(i === -1) arr.push(idx); else arr.splice(i,1);
  localStorage.setItem('completed_exercises', JSON.stringify(arr));
}

function renderList(filterText='', treinoFilter='All', grupoFilter='All'){
  const container = q('#cards');
  container.innerHTML = '';
  const filtered = DATA.map((d,i)=> ({...d, _idx:i}))
    .filter(it => {
      if(treinoFilter !== 'All' && it.Treino !== treinoFilter) return false;
      if(grupoFilter !== 'All' && it['Grupo Muscular'] !== grupoFilter) return false;
      if(filterText){
        const s = (it.Exercício + ' ' + it['Execução / Técnica'] + ' ' + it.Observações).toLowerCase();
        return s.includes(filterText.toLowerCase());
      }
      return true;
    });
  if(filtered.length === 0){
    container.innerHTML = '<p class="empty">Nenhum exercício encontrado para esse filtro.</p>';
    return;
  }
  filtered.forEach(it => container.appendChild(createCard(it, it._idx)));
}

function populateFilters(){
  const treinos = ['All', ...Array.from(new Set(DATA.map(d=>d.Treino).filter(Boolean)))];
  const grupos = ['All', ...Array.from(new Set(DATA.map(d=>d['Grupo Muscular']).filter(Boolean)))];
  const selT = q('#filter-treino');
  const selG = q('#filter-grupo');
  treinos.forEach(t=> { const o = document.createElement('option'); o.value = t; o.textContent = t; selT.appendChild(o); });
  grupos.forEach(g=> { const o = document.createElement('option'); o.value = g; o.textContent = g; selG.appendChild(o); });
}

document.addEventListener('DOMContentLoaded', ()=>{
  populateFilters();
  renderList();
  q('#search').addEventListener('input', (e)=> renderList(e.target.value, q('#filter-treino').value, q('#filter-grupo').value));
  q('#filter-treino').addEventListener('change', ()=> renderList(q('#search').value, q('#filter-treino').value, q('#filter-grupo').value));
  q('#filter-grupo').addEventListener('change', ()=> renderList(q('#search').value, q('#filter-treino').value, q('#filter-grupo').value));
  q('#clear').addEventListener('click', ()=> { localStorage.removeItem('completed_exercises'); renderList(q('#search').value, q('#filter-treino').value, q('#filter-grupo').value); });
  q('#export').addEventListener('click', ()=> {
    const s = localStorage.getItem('completed_exercises') || '[]';
    const blob = new Blob([s], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'completed_exercises.json';
    a.click();
    URL.revokeObjectURL(url);
  });
});
