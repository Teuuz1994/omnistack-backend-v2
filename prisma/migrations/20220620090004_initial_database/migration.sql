-- CreateTable
CREATE TABLE "ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" VARCHAR(2) NOT NULL,

    CONSTRAINT "ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "ong_id" TEXT NOT NULL,

    CONSTRAINT "incident_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ong_id_idx" ON "ong"("id");

-- CreateIndex
CREATE INDEX "incident_id_ong_id_idx" ON "incident"("id", "ong_id");

-- AddForeignKey
ALTER TABLE "incident" ADD CONSTRAINT "incident_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "ong"("id") ON DELETE CASCADE ON UPDATE CASCADE;
