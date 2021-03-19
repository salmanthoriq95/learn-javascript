//fungsi menambahkan data nasabah
function tbhNasabah() { 

		//pengisian data nasabah 
		var noRek = prompt ("masukkan no no rekening baru : ");
		var nama = prompt ("masukkan nama nasabah : ");
		var alamat = prompt ("masukkan alamat nasabah :");
		var saldo = prompt ("masukkan jumlah saldo nasabah "+nama+" : ");
		nasabah.push(new DataNasabah(noRek,nama,alamat,saldo));
		//konfirmasi pengulangan data nasabah
		var lagi = prompt("nasabah "+nama+" berhasil ditambahkan.\nmasukkan data lagi? (Y/N)");

		if (lagi=="n"||lagi=="N"){ /*kembali ke program utama*/
			mainProgram();
		} else if (lagi=="y"||lagi=="Y"){ /*rekursif*/
			tbhNasabah();
		} else {
			lagi = prompt("Masukkan pilihan yang benar! (Y/N)")
		}
}
//fungsi mengurangi data nasabah
function hpsNasabah(){
	var noRek = prompt ("masukkan no rekening nasabah :");
	console.log(noRek);
	//pencarian index data nasabah
	for (var i=0; i<nasabah.length; i++){
		if (nasabah[i].noRek==noRek){ /*jika no rek ditemukan*/
			//melakukan konfirmasi penghapusan
			var konfirmasi = confirm ("apa anda yakin menghapus data nasabah "+nasabah[i].nama);
			if (konfirmasi==true){ 
				nasabah.splice(i,1);/*penghapusan data nasabah*/
				alert ("berhasil menghapus!");
				mainProgram(); /*kembali ke program utama*/;
			} else { /*jika penghapusan tidak jadi*/
				alert ("data "+nasabah[i].nama+" tidak terhapus!")
				mainProgram(); /*kembali ke program utama*/;
			}
		}
	}
	//jika data tidak ditemukan
	alert ("data nasabah tidak ditemukan!");
	mainProgram(); /*kembali ke program utama*/
}
//menampilkan data dengan popup box
function alertData(i) {
	alert ( 
		"nama : "+nasabah[i].nama+"\n"+
		"no rekening : "+nasabah[i].noRek+"\n"+
		"alamat : "+nasabah[i].alamat+"\n"+
		"saldo :"+nasabah[i].saldo+"\n\n"
	)
}
//fungsi menampilkan data nasabah
function showData() {
	for (var i=0; i<nasabah.length; i++) {//menampilkan data sebanyak index
		alertData(i);
	}
	mainProgram();
}
//fungsi program utama
function mainProgram(){
	var pil = prompt ("masukan pilihan anda : \n 1. Data Nasabah \n 2. Menambah data nasabah \n 3. menghapus data nasabah \n 0. keluar");
	switch (pil){
		case "1" : showData();break;
		case "2" : tbhNasabah(); break;
		case "3" : hpsNasabah(); break;
		case "0" : return;
		default : alert ("masukan pilihan yang benar!"); mainProgram();
	}
}
//konstruksi object nasabah
function DataNasabah(noRek,nama,alamat,saldo){
	this.noRek = noRek,
	this.nama = nama,
	this.alamat = alamat,
	this.saldo = saldo
}
//penyimpanan data nasabah di dalam array
var nasabah = [new DataNasabah(1234,"salman","kuningan",0),new DataNasabah(0000,"thoriq","alam kubur",0)];
//main program
mainProgram();