const { test, expect } = require('@playwright/test');
const RegisterPage = require("../Pages/registerPage.spec")
const OtpPage = require("../Pages/otpPage.spec")

const mobilePhone = "0857182256021"
const email = "candra@gmail.com"
const firstname = "candra"
const lastname = "dwi kusuma"

test.describe("Register Cermati", () => {
  test('with valid credential should be success', async ({ page }) => {
    const registerPage = new RegisterPage(page)
    await page.goto('https://www.cermati.com/gabung')
    await expect(registerPage.headerTitle).toBeVisible()
    await registerPage.fillFormRegister(mobilePhone, email, firstname, lastname)
    await expect(registerPage.buttonRegister).toBeEnabled()

    //because get recaptcha should be get error waiting time then i commend this code

    // await registerPage.buttonRegister.click()
    // const otpPage = new OtpPage(page)
    // await expect(otpPage.titleOtp).toBeVisible()
    // await expect(otpPage.titleOtp).toContainText("Kode OTP Terkirim")
  });
})




