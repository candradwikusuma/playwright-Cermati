class OtpPage {
  constructor(page) {
    this.page = page
    this.titleOtp = page.locator("h2.OtpHeader_form-header__DSIwC")
  }
}

module.exports = OtpPage