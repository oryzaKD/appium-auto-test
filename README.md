Link Recording 
https://drive.google.com/file/d/1xeKuTlBVK7CbLniQmleH65OdaANfz5-j/view?usp=sharing

HOW TO RUNNING THE AUTOMATION TEST CODE WITH CYPRESS:

1. **Buka CMD (Command Prompt), lalu jalankan perintah dibawah. Digunakan untuk membuka port appium nya**
   
   ```bash
   appium -p 4723

2. **Buka aplikasi Android Studio, lalu jalankan salah satu Device Android yang telah dibuat dan disesuaikan dengan capabilities pada file wdio.conf.js nya**

3. **Lalu buka VSCODE untuk membuka project automation script android nya**

4. **Lalu untuk running automation script nya, jalankan perintah dibawah**
   
   ```bash
   npx wdio run ./wdio.conf.js
   
5. **Ketika sudah running perintah diatas, sambil dibuka device Android yang tadi sudah kita jalankan, agar dapat melihat proses automation test androidnya nya secara langsung**
