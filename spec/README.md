# spec/ - Spec Driven Development

Documentación viva del proyecto, organizada para desarrollo dirigido por especificación: Primero se escribe la spec, luego el plan, luego las tareas, y solo entonces se toca el código

## Estructura
```
spec/
├── constitution/ <- reglas estables del proyecto
│   ├── mission.md <- qué construimos y para quién
│   └── roadmap.md <- orden de las features
└── features/ <- una carpeta por feature
```

## Flujo para una feature nueva o ajustar una ya existente
1. crear 'spec/features/NNN-nombre' (siguiente número libre) para una nueva o utilizar una ya existente
2. escribir 'spec.md': qué hace, por qué y criterios de aceptación medibles
3. escribir 'plan.md': enfoque técnico y decisiones
4. desglosar en 'tasks.md' y marcar el progreso