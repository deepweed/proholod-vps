-- CreateTable
CREATE TABLE "belluna" (
    "id" SERIAL NOT NULL,
    "image_path" TEXT NOT NULL,
    "temperature_in_camera" TEXT NOT NULL,
    "cool_room_value" TEXT NOT NULL,
    "cool_warming" TEXT NOT NULL,
    "power_consumption" TEXT NOT NULL,
    "nominal_power" TEXT NOT NULL,
    "noise_lvl" TEXT NOT NULL,
    "winter_set" TEXT NOT NULL,
    "track_lenght" TEXT NOT NULL,
    "max_track_lenght" TEXT NOT NULL,
    "diametr_pipes" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "widthBlock" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "weightBlock" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "belluna_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "belluna_productId_key" ON "belluna"("productId");

-- AddForeignKey
ALTER TABLE "belluna" ADD CONSTRAINT "belluna_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
