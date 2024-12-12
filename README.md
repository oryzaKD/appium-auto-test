Link Recording 
https://drive.google.com/file/d/1xeKuTlBVK7CbLniQmleH65OdaANfz5-j/view?usp=sharing

HOW TO RUNNING THE AUTOMATION TEST CODE WITH APPIUM (ANDROID):

1. **Buka CMD (Command Prompt), lalu jalankan perintah dibawah. Digunakan untuk membuka port appium nya**
   
   ```bash
   appium -p 4723

2. **Buka aplikasi Android Studio, lalu jalankan salah satu Device Android yang telah dibuat dan disesuaikan dengan capabilities pada file wdio.conf.js nya**
   
   ![image](https://github.com/user-attachments/assets/d0a2f3c4-6043-4acf-8a98-e4c6ae004747)

3. **Buka aplikasi Appium Inspector, lalu klik Start Session untuk menjalankan session bersamaan dengan emulator di Android Studio nya**

   ![image](https://github.com/user-attachments/assets/54e0aeeb-2dfe-4cc3-9548-650894b8b9fc)

4. **Lalu buka VSCODE untuk membuka project automation script android nya**

5. **Lalu untuk running automation script nya, jalankan perintah dibawah**
   
   ```bash
   npx wdio run ./wdio.conf.js
   
6. **Ketika sudah running perintah diatas, sambil dibuka device Android yang tadi sudah kita jalankan, agar dapat melihat proses automation test androidnya nya secara langsung**
