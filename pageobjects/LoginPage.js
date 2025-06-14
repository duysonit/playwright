class LoginPage {

constructor(page)
{
    this.page = page;
    this.loginMenu = page.getByRole('link', { name: 'Login' });
    this.userName = page.getByRole('textbox', { name: 'Username or E-mail' })
    this.password = page.getByRole('textbox', { name: 'Password' })
    this.loginBtn = page.getByRole('button', { name: 'Login' })

}

async goTo()
{
    await this.page.goto("https://sonvu.blog");
}

async clickLoginMenu()
{
    await this.loginMenu.click();
}

async validLogin(username,password)
{
    await  this.userName.fill(username);
     await this.password.fill(password);
     await this.loginBtn.click();
     await this.page.waitForLoadState('networkidle');

}

}
module.exports = {LoginPage};