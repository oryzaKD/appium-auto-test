Link Recording 
https://drive.google.com/file/d/1OC3Sv2Nnde-vR-C5vEAfWOlsbopvEgZS/view?usp=sharing

HOW TO RUNNING THE AUTOMATION TEST CODE WITH APPIUM (ANDROID):

1. **Open CMD (Command Prompt), then run the command below. It's used to open the Appium port.**
   
   ```bash
   appium -p 4723

2. **Open Android Studio, then run one of the Android emulators that you’ve created and make sure its configuration matches the capabilities in the wdio.conf.js file.**
   
   <img width="1512" height="945" alt="Screenshot 2025-09-18 at 10 42 32 AM" src="https://github.com/user-attachments/assets/f2bf3cc3-88bc-47d8-b478-45861aa9b6e8" />

3. **Open Appium Inspector, then click "Start Session" to start a session alongside the emulator running in Android Studio.**

   ![image](https://github.com/user-attachments/assets/54e0aeeb-2dfe-4cc3-9548-650894b8b9fc)

4. **Open VS Code to access your Android automation script project.**

5. **To run the automation script, execute the command below in the terminal:**
   
   ```bash
   npx wdio run ./wdio.conf.js
   
6. **While the command is running, keep the Android emulator open so you can see the automation test running live on the device.**
