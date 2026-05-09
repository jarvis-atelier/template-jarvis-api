<!--
  ============================================================================
   👋 Recién bajaste de template-jarvis-api.

   Este README es UN ESQUELETO. Reemplazá el contenido con la info real
   de tu proyecto antes de mergear el primer PR contra main.

   El stack ya viene precargado (NestJS + Prisma + Postgres). Adaptá la
   estructura al dominio de tu proyecto agregando módulos en src/modules/.

   Guía completa de los templates del atelier:
   https://github.com/jarvis-atelier/docs/blob/main/starter-templates.md

   Borrá este bloque de comentarios cuando termines de adaptar el README.
  ============================================================================
-->

# `<nombre-del-proyecto-api>`

> Una línea describiendo qué hace este backend y para quién.

---

## Stack

- **Lenguaje:** TypeScript
- **Framework:** NestJS 10
- **DB:** PostgreSQL 16 (vía Prisma 5)
- **Tests:** Jest + Supertest (e2e)
- **Lint/format:** ESLint 9 (flat config) + Prettier 3
- **Package manager:** pnpm
- **Node:** 20+

## Quickstart

### 1. Levantar Postgres local

```sh
docker compose up -d
# El servicio queda en localhost:5432, db: template_jarvis_api, user/pass: postgres/postgres
```

### 2. Configurar env vars

```sh
cp .env.example .env
# Ajustar DATABASE_URL si tu Postgres local usa otras credenciales
```

### 3. Instalar deps y generar el cliente de Prisma

```sh
pnpm install
pnpm db:generate
```

### 4. Aplicar migrations y seed

```sh
pnpm db:migrate     # crea las tablas a partir de prisma/schema.prisma
pnpm db:seed        # carga datos iniciales (editar prisma/seed.ts)
```

### 5. Levantar el server

```sh
pnpm dev            # http://localhost:3000
curl http://localhost:3000/health
# → { "status": "ok", "uptime": ..., "timestamp": "..." }
```

### Comandos útiles

```sh
pnpm test           # unit tests (jest)
pnpm test:cov       # con coverage
pnpm test:e2e       # e2e tests contra Postgres real
pnpm lint           # eslint
pnpm format         # prettier --write
pnpm typecheck      # tsc --noEmit

pnpm db:studio      # UI de Prisma Studio en localhost:5555
pnpm db:reset       # CUIDADO — drop + reapply migrations + seed
pnpm db:migrate:deploy  # producción (no crea migrations nuevas)

pnpm build          # producción → dist/
pnpm start:prod     # corre el dist/main.js
```

## Estructura

```
src/
├── main.ts                    # bootstrap: helmet + CORS + ValidationPipe
├── app.module.ts              # root module
├── app.controller.ts          # endpoint /health
├── app.controller.spec.ts     # unit test del health
├── app.service.ts             # health logic
└── common/
    └── prisma/
        ├── prisma.module.ts   # @Global() export del PrismaService
        └── prisma.service.ts  # PrismaClient con onInit/onDestroy

prisma/
├── schema.prisma              # schema de la DB
└── seed.ts                    # script de seed (corre con tsx)

test/
├── jest-e2e.json              # config jest para e2e
└── app.e2e-spec.ts            # e2e del health
```

A medida que crezca el proyecto, agregá módulos en `src/modules/<feature>/`.

## Tests

Cobertura mínima requerida por convención del atelier: **80%** (configurada como threshold en `package.json` → `jest.coverageThreshold`). El CI falla si baja de eso.

Los e2e tests corren contra una DB real (la del CI o la de Docker compose local). No mockeamos Prisma — testeamos contra Postgres porque las migraciones y triggers reales fallan distinto que los mocks.

## Deploy

Describir cómo se deploya este proyecto:
- Plataforma destino (ej: Railway, Render, Fly.io)
- Build command (`pnpm build`) y start command (`pnpm start:prod`)
- Variables de entorno requeridas en producción (`DATABASE_URL`, `PORT`, `CORS_ORIGIN`, etc.)
- Cómo se aplican migraciones en producción (`pnpm db:migrate:deploy` antes del start)
- Cómo se hace rollback

## Owners

- **Owner principal:** @<usuario-github>
- **Backup:** @<usuario-github>
- **Cliente / producto:** _(nombre del cliente, o "producto propio del atelier")_

Para ver dónde encaja este proyecto en el portfolio del atelier, ver el [catálogo central](https://github.com/jarvis-atelier/.github/blob/main/projects/README.md).

## Estado

`active` · `maintenance` · `archived` — _(elegir uno y mantenerlo sincronizado con el topic `status-*` del repo en GitHub)_

## Convenciones

- Issues, PRs, conventional commits, branch protection → ver [CONTRIBUTING.md](CONTRIBUTING.md) (apunta al org-level).
- Reportar problemas de seguridad → ver [SECURITY.md](SECURITY.md).
- Code owners → ver [.github/CODEOWNERS](.github/CODEOWNERS).

## Licencia

Este template trae **MIT** por default. Adaptá el archivo `LICENSE` si tu proyecto requiere otra cosa (proprietary para clientes, etc.).
