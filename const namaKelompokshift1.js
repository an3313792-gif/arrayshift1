const namaKelompokShift1 = [
  "Anisa istikomah",
  "Dini febtia murni",
  "Bunga sasi kirana",
  "Ashley aurelia momi p",
  "Bunia asyirotul karimah",
  "Dewi afifatul zuhro",
  "Della agustia widiyani",
  "Diandra kayla aramita",
  "Lucky adi irawan",
  "muhammad zainul haqi",
  "inzan gunawan"
];

console.log("==============================");
console.log("  DAFTAR ANGGOTA KELOMPOK SHIFT 1");
console.log("==============================");

namaKelompokShift1.forEach((nama, index) => {
  console.log(`${index + 1}. ${nama}`);
});

console.log("------------------------------");
console.log("Jumlah anggota:", namaKelompokShift1.length);
console.log("Kelompok: Shift 1");
console.log("==============================");