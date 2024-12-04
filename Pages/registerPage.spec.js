class RegisterPage {
  constructor(page) {
    this.page = page
    this.mobilePhoneField = page.locator("#mobilePhone")
    this.emailField = page.locator("#email")
    this.firstNameField = page.locator("#firstName")
    this.lastNameField = page.locator("#lastName")
    this.headerTitle = page.locator(".AppHeader_card__header-title__dkKfh")
    this.buttonRegister = page.locator("[data-button-name='register-new']")
  }

  async fillFormRegister(mobilePhone, email, firstname, lastname) {
    await this.mobilePhoneField.fill(mobilePhone)
    await this.emailField.fill(email)
    await this.firstNameField.fill(firstname)
    await this.lastNameField.fill(lastname)
  }

}

module.exports = RegisterPage