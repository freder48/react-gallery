CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(1000) NOT NULL,
    "description" VARCHAR (500) NOT NULL,
    "likes" INTEGER DEFAULT 0
);

INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/books.jpeg', 'Manta Ray', 'Photo of a manta ray from scuba diving in Indonesia', 0);

