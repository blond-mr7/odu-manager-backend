-- CreateTable
CREATE TABLE "consultas" (
    "id" UUID NOT NULL,
    "data" TIMESTAMPTZ NOT NULL,
    "observacao" STRING,
    "origemId" UUID NOT NULL,
    "classificacaoId" UUID NOT NULL,
    "consulenteId" UUID NOT NULL,
    "versoId" UUID NOT NULL,
    "tipoConsultaId" UUID NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos_consulta" (
    "id" UUID NOT NULL,
    "descricao" STRING NOT NULL,

    CONSTRAINT "tipos_consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulentes" (
    "id" UUID NOT NULL,
    "nome" STRING NOT NULL,

    CONSTRAINT "consulentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "odus_ifa" (
    "id" UUID NOT NULL,
    "descricao" STRING NOT NULL,

    CONSTRAINT "odus_ifa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "versos" (
    "id" UUID NOT NULL,
    "numero" STRING NOT NULL,
    "descricao" STRING NOT NULL,
    "oduIfaId" UUID NOT NULL,

    CONSTRAINT "versos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos_classificacao" (
    "id" UUID NOT NULL,
    "descricao" STRING NOT NULL,

    CONSTRAINT "tipos_classificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classificacoes" (
    "id" UUID NOT NULL,
    "nome" STRING NOT NULL,
    "descricao" STRING NOT NULL,
    "tipoClassificacaoId" UUID NOT NULL,

    CONSTRAINT "classificacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "origens" (
    "id" UUID NOT NULL,
    "descricao" STRING NOT NULL,

    CONSTRAINT "origens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_origemId_fkey" FOREIGN KEY ("origemId") REFERENCES "origens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_classificacaoId_fkey" FOREIGN KEY ("classificacaoId") REFERENCES "classificacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_consulenteId_fkey" FOREIGN KEY ("consulenteId") REFERENCES "consulentes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_versoId_fkey" FOREIGN KEY ("versoId") REFERENCES "versos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_tipoConsultaId_fkey" FOREIGN KEY ("tipoConsultaId") REFERENCES "tipos_consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "versos" ADD CONSTRAINT "versos_oduIfaId_fkey" FOREIGN KEY ("oduIfaId") REFERENCES "odus_ifa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classificacoes" ADD CONSTRAINT "classificacoes_tipoClassificacaoId_fkey" FOREIGN KEY ("tipoClassificacaoId") REFERENCES "tipos_classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
