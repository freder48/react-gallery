CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "path" VARCHAR(1000) NOT NULL,
  "alt" VARCHAR(400) NOT NULL, 
  "description" VARCHAR (500) NOT NULL,
  "likes" INTEGER DEFAULT 0
);


INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/books.jpeg', 'Manta Ray', 'Photo of the stack of books next to my bed', 0);
INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/SanAndres.jpg', 'San Andres Island', 'Photo of San Andres Island near Nicaragua', 0);
INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/Hazel.jpg', 'Hazel the dog', 'Photo of the love of my life', 0);
INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/friends.jpeg', 'Photo of friends', 'Photo of my friends and I camping at Big Bear Lake, CA', 0);
INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/mantaRay.jpg', 'Manta Ray', 'Photo of a manta ray from scuba diving in Indonesia', 0);
INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/garden.jpg', 'Garden', 'Photo of my quarantine gardens', 0);
INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/yoga.JPG', 'Yoga', 'Photo of me doing aerial yoga in Ecuador', 0);
INSERT INTO gallery (path, alt, description, likes)
VALUES ('images/pretzel.jpg', 'Homemade Pretzel', 'Photo of pretzels I made!', 0);
