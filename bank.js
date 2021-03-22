//membuat class untuk data nasabah
class DataNasabah {
	//konstruksi data nasabah
	constructor (norek, nama, alamat, saldo){
		this.noRek = norek;
		this.nama = nama;
		this.alamat = alamat;
		this.saldo = Number(saldo);
	}
	tabung(jumlah){ //method menabung
		if (jumlah>0){
			this.saldo += Number(jumlah);
			alert ("saldo "+this.nama+" berhasil ditambah sebesar Rp "+jumlah+". sisa saldo adalah : "+this.saldo);
			mainProgram();
		} else {
			alert("inputan salah");
			mainProgram();
		}
	}
	tarik(jumlah){ //method penarikan
		if (jumlah>0){
			this.saldo += Number(jumlah);
			alert ("saldo "+this.nama+" berhasil ditarik sebesar Rp "+jumlah+". sisa saldo adalah : "+this.saldo);
			mainProgram();
		} else {
			alert("inputan salah");
			mainProgram();
		}
	}
}
//fungsi menambahkan data nasabah
function tbhNasabah() { 

		//pengisian data nasabah 
		var noRek = prompt ("masukkan no no rekening baru : ");
		var nama = prompt ("masukkan nama nasabah : ");
		var alamat = prompt ("masukkan alamat nasabah :");
		var saldo = prompt ("masukkan jumlah saldo nasabah "+nama+" : ");
		nasabah.push(new DataNasabah(noRek,nama,alamat,saldo));
		//konfirmasi pengulangan pengisian data nasabah
		var lagi = prompt("nasabah "+nama+" berhasil ditambahkan.\nmasukkan data lagi? (Y/N)");

		do {
			if (lagi==`n`||lagi==`N`){ /*kembali ke program utama*/
				mainProgram();
			} else if (lagi==`y`||lagi==`Y`){ /*rekursif*/
				tbhNasabah();
			} else { /*jika inputan salah, maka looping*/
				lagi = prompt("Masukkan pilihan yang benar! (Y/N)")
			}
		} while (lagi!=`y`||lagi==`n`||lagi==`Y`||lagi==`N`);
}
//fungsi pencarian data nasabah
function searchNasabah(q) {
	for (var i=0; i<nasabah.length; i++){ //pencarian nomor index array nasabah
		if (nasabah[i].noRek==q || nasabah[i].nama==q){ //jika ketemu kembalikan nilai i
			return i;
		}
	}
	return -1; //jika data tidak diketemukan
}
//fungsi mengurangi data nasabah
function hpsNasabah(){
	var q = prompt ("masukkan no rekening nasabah atau nama nasabah :");
	q = searchNasabah(q);
	if (q>=0){
		var konfirmasi = confirm ("apa anda yakin menghapus data nasabah "+nasabah[q].nama); /*konfirmasi penghapusan*/
		if (konfirmasi==true){ 
		nasabah.splice(q,1);/*penghapusan data nasabah*/
			alert ("berhasil menghapus!");
			mainProgram(); /*kembali ke program utama*/;
		} else { /*jika penghapusan tidak jadi*/
			alert ("data "+nasabah[q].nama+" tidak terhapus!")
			mainProgram(); /*kembali ke program utama*/;
		}
	} else {
		alert(`Data tidak berhasil di temukan`);
		mainProgram();
	}	
}
//fungsi menampilkan data nasabah
function showData() {
	var show = ``;
	for (var i=0; i<nasabah.length; i++) {//menampilkan data sebanyak index
		show += `nama : ${nasabah[i].nama}\nno rekening : ${nasabah[i].noRek}\nalamat : ${nasabah[i].alamat}\nsaldo :${nasabah[i].saldo} \n\n`;
	}
	alert(show);
	mainProgram();
}
//fungsi program utama
function mainProgram(){
	var pil = prompt ("masukan pilihan anda : \n 1. Data Nasabah \n 2. Menambah data nasabah \n 3. menghapus data nasabah \n 4. Nasabah Menabung \n 5. Nasabah menarik uang \n 6. mengganti profil nasabah \n  0. keluar");
	switch (pil){
		case "1" : showData();break;
		case "2" : tbhNasabah(); break;
		case "3" : hpsNasabah(); break;
		case "4" : 
			var q = prompt("masukkan nama atau nomor rekening nasabah :");
			q = searchNasabah(q);
			if (q>=0){
				var jumlah = prompt("masukkan jumlah uang yang akan di tabung nasabah "+nasabah[q].nama);
				nasabah[q].tabung(jumlah);
			} else {
				alert("data tidak ditemukan");
				mainProgram();
			}
			break;
		case "5" :
			var q = prompt("masukkan nama atau nomor rekening nasabah :");
			q = searchNasabah(q);
			if (q>=0){
				var jumlah = prompt("masukkan jumlah uang yang akan di tarik :"+nasabah[q].nama)
				nasabah[q].tarik(jumlah);
			} else {
				alert("data tidak ditemukan");
				mainProgram();
			}
			break;
		case "6" :
			var q = prompt("masukkan nama atau nomor rekening nasabah :");
			q = searchNasabah(q);
			if (q>=0){
				var nama = prompt ("masukkan nama nasabah : ");
				var alamat = prompt ("masukkan alamat nasabah :");
				nasabah[q].nama = nama;
				nasabah[q].alamat = alamat;
				alert("data berhasil diubah!");
				showData();
			} else {
				alert("data tidak ditemukan");
				mainProgram();
			}
			break;
		case "0" : return 0;
		default : alert ("masukan pilihan yang benar!"); mainProgram();
	}
}
//dummy data nasabah di dalam array
var nasabah = [new DataNasabah(1234,"salman","kuningan",0),new DataNasabah(4321,"thoriq","alam kubur",0)];
//main program
mainProgram();
