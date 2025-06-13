const hargaPS = {
    'PS 2': 5000,
    'PS 3': 10000,
    'PS 4': 20000,
    'PS 5': 30000
};


function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
  }
function hitungTotal() {
    const tipe = document.getElementById('tipe').value;
    const durasi = parseInt(document.getElementById('durasi').value) || 0;
    
    if (tipe && durasi > 0) {
        const total = hargaPS[tipe] * durasi;
        return total;
    }
    return 0;

}

document.getElementById('tipe').addEventListener('change', updateTotal);
document.getElementById('durasi').addEventListener('input', updateTotal);
function updateTotal() {
    const total = hitungTotal();
    if (total > 0) {
        const output = document.getElementById('output');
        output.innerHTML = `
            <h3>💰 Estimasi Total Biaya</h3>
            <p style="font-size: 1.2rem; font-weight: bold;">${formatRupiah(total)}</p>
        `;
        output.style.display = 'block';
        output.className = '';
    }
}
        
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    console.log('Form submitted!');

    const nama = document.getElementById('nama').value;
    const telepon = document.getElementById('telepon').value;
    const tipe = document.getElementById('tipe').value;
    const durasi = document.getElementById('durasi').value;
    const tanggal = document.getElementById('tanggal').value;
    const waktu = document.getElementById('waktu').value;
    const catatan = document.getElementById('catatan').value;
    
    console.log('Form data:', {nama, telepon, tipe, durasi, tanggal, waktu, catatan});
    
    const totalBiaya = hitungTotal();
    console.log('Total biaya: ', totalBiaya);
    
    const tanggalFormat = new Date(tanggal).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    
    const output = document.getElementById('output');
    console.log('Output element:', output);
    output.innerHTML = `
        <h3>✅ Pemesanan Berhasil!</h3>
        <div style="text-align: left; margin-top: 1rem;">
            <strong>Detail Pemesanan:</strong><br>
            📝 Nama: ${nama}<br>
            📞 Telepon: ${telepon}<br>
            🎮 PlayStation: ${tipe}<br>
            ⏰ Durasi: ${durasi} jam<br>
            📅 Tanggal: ${tanggalFormat}<br>
            🕐 Waktu Mulai: ${waktu}<br>
            ${catatan ? `📋 Catatan: ${catatan}<br>` : ''}
            💰 <strong>Total Biaya: ${formatRupiah(totalBiaya)}</strong>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
            Tim kami akan segera menghubungi Anda untuk konfirmasi pemesanan.
        </p>
    `;
    output.style.display = 'block';
    output.className = 'success';
    
    console.log('Output displayed!');
    
    this.reset();
    
    
    output.scrollIntoView({ behavior: 'smooth' });
  })

document.getElementById('tanggal').min = new Date().toISOString().split('T')[0];
