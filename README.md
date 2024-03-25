# RabbitMQ Worker

Aplikasi ini adalah sebuah worker yang mengonsumsi pesan dari RabbitMQ dan melakukan pengolahan data sesuai kebutuhan.

## Deskripsi

Aplikasi ini dikembangkan menggunakan Node.js dan mengambil data dari antrian RabbitMQ untuk diproses. Worker ini dapat digunakan untuk berbagai tujuan, seperti pengolahan pesan sensor, pemrosesan antrian pesan, dan lain sebagainya.

## Instalasi

1. Clone repositori ini ke dalam sistem lokal Anda:

    ```bash
    git clone <URL repositori>
    ```

2. Masuk ke dalam direktori aplikasi:

    ```bash
    cd rabbitmq-worker
    ```

3. Install dependensi yang diperlukan dengan menggunakan npm:

    ```bash
    npm install
    ```

## Setup .env

Pastikan untuk membuat file .env di dalam direktori aplikasi dan mengisi variabel lingkungan yang diperlukan. Berikut adalah contoh isi dari file .env:
GUID=
DATABASE=

RMQ_HOST=
RMQ_USER=
RMQ_PASS=
RMQ_PORT=
RMQ_VHOST=

QUE=
QUEUE_NAME=


