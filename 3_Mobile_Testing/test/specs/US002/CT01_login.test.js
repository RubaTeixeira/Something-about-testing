import { expect, driver } from "@wdio/globals";

import loginPage from "../../pageobjects/login.page.js";

describe("Login test in the app", () => {
  it("Successful login with e-mail", async () => {
    await $("id:tab-profile").click();
    //Calling the fill function from PageObjects
    await loginPage.login("asdrubas_tromb1@gmail.com", "Senha@2024!");
    await $("id:tab-profile").click();
    //Result validation
    expect(
      await $("//android.widget.TextView[@text='Trombini Asdrubal']")
    ).toBeDisplayed();
    //Command to exit the app for a new entry
    await $('//android.widget.TextView[@text="Logout"]').click();
    await $("id:confirm").click();
  });

  it("Invalid e-mail attempt", async () => {
    await loginPage.login("thewrongemail@testfail.com", "Senha@2024!");
    //Result validation
    expect(
      await $("//android.widget.TextView[@text='Email is incorrect']")
    ).toBeDisplayed();
  });

  it("Incorrect password attempt", async () => {
    await loginPage.login("asdrubas_tromb1@gmail.com", "Not@Password!");
    //Result validation
    expect(
      await $("//android.widget.TextView[@text='Password is incorrect']")
    ).toBeDisplayed();
  });
});
