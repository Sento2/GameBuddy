document.getElementById('form-pesan').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const tipe = document.getElementById('tipe').value;
  const durasi = parseInt(document.getElementById('durasi').value);

  let harga;
  if (tipe === 'PS 2') {
    harga = 5000;
  } else if (tipe === 'PS 3') {
    harga = 10000;
  } else if (tipe === 'PS 4') {
    harga = 20000;
  } else if (tipe === 'PS 5') {
    harga = 30000;
  } else {
    harga = 0; 
  }

  let total = harga * durasi;

  const output = document.getElementById('output');
  output.innerHTML = `<p>Terima kasih, <strong>${nama}</strong>!<br>
  Kamu telah memesan <strong>${tipe}</strong> selama <strong>${durasi}</strong> jam.<br>
  Total biaya: <strong>Rp ${total.toLocaleString()}</strong>.</p>`;
});