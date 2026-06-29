create table mahasiswa(
    nim INT(10) PRIMARY KEY,
    nama CHAR(255) NOT NULL,
    prodi CHAR(255) NOT NULL,
    jenisKelamin ENUM('laki-laki','perempuan'),
    alamat TEXT NOT NULL,
    noHp CHAR(25)
),

INSERT INTO mahasiswa(nim, nama, prodi, jenisKelamin, alamat, noHp)
VALUES(16131828, "Na Jaemin", "KIMIA", "laki-laki", "seoul,korea", "0813162008");

INSERT INTO mahasiswa()
VALUES(12345, "Zahra", "KEDOKTERAN", "perempuan", "samarinda", "081296375777");

UPDATE mahasiswa
SET prodi = "Teknik Metalurgi"
WHERE nim=16130128;

DELETE FROM mahasiswa
WHERE nim=12345