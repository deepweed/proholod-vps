-- CreateTable
CREATE TABLE "Sales" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "card_description" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);
