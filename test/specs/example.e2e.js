import LoginPage from  '../pageobjects/login.page';
import ProfilePage  from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('vladimir@gmail.com');
        LoginPage.setPassword('ntcnbhjdfybt');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });
});


