
describe("My Login Demo", () => {

  it("should not login with invalid credentials", async () => {
    const eraspaceElement = await $('//android.widget.TextView[@content-desc="Predicted app: Eraspace"]');

    if (await eraspaceElement.isDisplayed()) {
      await eraspaceElement.click();
      console.log('Eraspace element clicked!');
      await driver.pause(3000)

      //Click button masuk
      await $('//android.widget.Button[@resource-id="com.eraspace.app.home:id/btnLogin"]').click()
      await driver.pause(3000)

      //Login with wrong username
      await $('//android.widget.EditText[@resource-id="com.eraspace.app.membership:id/edtPhoneOrEmail"]').setValue("wrong_username@gmail.com");

      await expect(
        $(
          '//android.widget.TextView[@resource-id="com.eraspace.app:id/textinput_error"]'
        )
      ).toHaveText("Email belum terdaftar");

      await driver.pause(3000)

      //Login with wrong password
      await $('//android.widget.EditText[@resource-id="com.eraspace.app.membership:id/edtPhoneOrEmail"]').setValue("oryza.audrey@gmail.com");
      await $('//android.widget.EditText[@resource-id="com.eraspace.app.membership:id/edtPassword"]').setValue("wrongPassword");

      await $('//android.widget.Button[@resource-id="com.eraspace.app.membership:id/btnLogin"]').click()

      await expect(
        $(
          '//android.widget.TextView[@resource-id="com.eraspace.app.membership:id/tvError"]'
        )
      ).toHaveText("Email/no. handphone/password salah atau belum terverifikasi. Yuk dicek kembali");

    } else {
      console.log('Eraspace element is not visible!');
    }
  });

  it("should login with valid credentials", async () => {
    await driver.pause(3000)

    //Fill the field
    await $('//android.widget.EditText[@resource-id="com.eraspace.app.membership:id/edtPhoneOrEmail"]').setValue("oryza.audrey@gmail.com");
    await $('//android.widget.EditText[@resource-id="com.eraspace.app.membership:id/edtPassword"]').setValue("Ozrn8mhg!$");

    await $('//android.widget.Button[@resource-id="com.eraspace.app.membership:id/btnLogin"]').click()

    //Menampilkan Homepage
    await expect($('//android.widget.ImageButton[@resource-id="com.eraspace.app:id/btnIconSecondary"]'))

    await driver.pause(3000)

    //Menampilkan List Menu dan Kategori
    await $('//android.widget.TextView[@resource-id="com.eraspace.app:id/navigation_bar_item_small_label_view" and @text="Kategori"]').click()

    //Menampilkan Nama Akun
    await $('//android.widget.TextView[@resource-id="com.eraspace.app:id/navigation_bar_item_small_label_view" and @text="Akun"]').click()

    //Menampilkan List Point    
    await $('//android.widget.TextView[@resource-id="com.eraspace.app:id/tvMyPoint"]').click()
    await $('//android.widget.ImageButton[@content-desc="Navigate up"]').click()

  });

  it("Logout from application", async () => {

    await $('//android.widget.ImageView[@resource-id="com.eraspace.app:id/imgBackground"]').click()

    await $('//android.widget.ImageButton[@resource-id="com.eraspace.app:id/btnSettings"]').click()

    await $('//android.widget.Button[@resource-id="com.eraspace.app.membership:id/btnLogout"]').click()

    await $('//android.widget.Button[@resource-id="com.eraspace.app:id/btnNegative"]').click()

    await driver.pause(5000)
  });

});

