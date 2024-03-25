
require("dotenv").config();
const config = require("./src/config");
const worker = require("./src");
const logger = require("./src/util/logger");

/**
 * Fungsi utama yang menjalankan worker.
 */
async function main() {
  try {
    logger.info("Starting Worker..");

    // Menginisialisasi koneksi ke MongoDB dan RabbitMQ
    await config.connectToMongoDB();
    const connectionRMQ = await config.RabbitMConnection();

    // Memulai konsumsi pesan dari RabbitMQ
    await worker.workerConsumer(connectionRMQ);

    // Menjadwalkan penerbitan data setiap 10 detik menggunakan setInterval
    setInterval(async () => {
      await worker.workerPublisher(connectionRMQ);
    }, 10000); // 10000 milliseconds = 10 detik
  } catch (error) {
    // Menangani kesalahan yang mungkin terjadi selama proses
    logger.error(error);
  }
}

main();
