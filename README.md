# Excursão BTS — estrutura do projeto

## Stack
- **Backend**: Node/Express + TypeScript, Postgres, Mercado Pago (Checkout Pro)
- **Frontend**: React + TypeScript, Vite

## Arquitetura do backend (em camadas)
```
routes → controllers → services → repositories → banco
```
- **routes**: só define os endpoints e liga ao controller
- **controllers**: recebe request/response, não tem regra de negócio
- **services**: onde mora a regra de negócio (ex: retry de pagamento, controle de vaga)
- **repositories**: só sabe conversar com o Postgres via SQL puro
- **integrations/mercadoPago**: isola tudo que fala com a API do Mercado Pago
- **jobs**: tarefa agendada que libera vagas de reservas expiradas

## Como rodar (backend)
```
cd backend
cp .env.example .env   # preencher com as credenciais reais
npm install
npm run dev
```

## Como rodar (frontend)
```
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Próximos passos
- Rodar as migrations em `backend/src/db/migrations` no Postgres
- Preencher os inputs controlados das páginas do frontend, seguindo o mockup do Figma
- Trocar credenciais de teste do Mercado Pago pelas de produção quando a conta do cliente estiver verificada
