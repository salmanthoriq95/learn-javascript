//deklarasi konstruktor object mhs
function mhs(nm,almt,data)//inisialisasi parameter untuk mengisi value dari setiap porperti
{
  this.nama = nm; //pengisian propeti nama dengan parameter nm
	this.alamat = almt; //pengisian properti alamat dengan parameter almt
	if (data != undefined){ //pengecekan array apakah ada isinya atau tidak
		data.map (a=>this[a[0]] = a[1]);//looping dengan fungsi map(), kemudian di tiap array parent nya (data) di isi dengan array childnya (isi dari array data) index 0 sebagai properti dan index 1 sebagai value
	}
}
const arr = [['npm',3209876],['jurusan','tik'],['ipk',3.2]]; //deklarasi array untuk mengisi parameter dan value baru
const mhs1 = new mhs('salman', 'kuningan',arr); //pengisian mhs1 dengan object mhs dengan value yang baru
console.log(mhs1); // mencetak object mhs1

// const mhs = {};
// let arr = [['nama', 'salman'],['alamat','kuningan']];
// const result = arr.map(a => mhs[a[0]] = a[1]);
// console.log (result);
// console.log (mhs);
