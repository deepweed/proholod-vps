-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,
    "brand" TEXT NOT NULL,
    "image_path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "is_inventor" BOOLEAN,
    "cooling_kw" TEXT NOT NULL,
    "warming_kw" TEXT NOT NULL,
    "max_trace" INTEGER NOT NULL,
    "max_height" INTEGER NOT NULL,
    "min_temp_cooling" INTEGER NOT NULL,
    "max_temp_cooling" INTEGER NOT NULL,
    "min_temp_warm" INTEGER NOT NULL,
    "max_temp_warm" INTEGER NOT NULL,
    "width" TEXT,
    "width_pack" TEXT,
    "weight" TEXT,
    "weight_pack" TEXT,
    "productId" INTEGER,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stats_productId_key" ON "stats"("productId");

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
