package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class BookingPage extends BasePage {

    @FindBy(id = "onetrust-accept-btn-handler")
    public WebElement cookies;

    @FindBy(xpath = "//input[@name='ss']")
    public WebElement stay_input;

//    @FindBy(xpath = "//*[text()='Check-in']")
//    public WebElement check;

//    @FindBy(xpath = "(//*[contains(text(),'Check-in')])[2]")
//    public WebElement checkin;

    @FindBy(css = ".sb-date-field__controls.sb-date-field__controls__ie-fix")
    public WebElement checkin;

    @FindBy(xpath = "//td[@data-date='2022-12-25']")
    public WebElement check_in_date;

    @FindBy(xpath = "//td[@data-date='2022-12-28']")
    public WebElement check_out_date;

    @FindBy(css = ".js-sb-submit-text")
    public WebElement search_button;

    @FindBy(xpath = "//h1[@class='e1f827110f d3a14d00da']")
    public WebElement number_of_properties;

    @FindBy(xpath = "//button[@data-testid='date-display-field-start']")
    public WebElement left_side_date1;

    @FindBy(xpath = "//button[@data-testid='date-display-field-end']")
    public WebElement left_side_date2;

    @FindBy(xpath = "//div[@data-testid='title']")
    public List<WebElement> names_of_properties;

}
