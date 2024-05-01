import { test, expect } from '@playwright/test'

// This test check the footer functionality and asserts the links lead to the correct page

// Terms of Service link does not work- awaiting fix for test production

// Email test in work

// Courses test will implemented when link is added to the footer


// Clicks the footer Terms of Service link and asserts the Terms of Servoce URL and heading
test('Footer "Terms of Service" link takes user to the Terms of Service page', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the episodes link in footer
    await page.getByRole('contentinfo').getByRole('link', { name: 'Terms of Service' }).click()
    // assert the episodes URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/terms-of-service')
    // assert the episodes heading text
    await expect(page.getByRole('heading', { name: 'Terms of Service' })).toBeVisible()
});

// Clicks the footer Episodes link and asserts the Episodes URL and heading
test('Footer "Episodes" link takes user to Episodes section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the episodes link in footer
    await page.getByRole('contentinfo').getByRole('link', { name: 'Episodes' }).click()
    // assert the episodes URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/episodes')
    // assert the episodes heading text
    await expect(page.getByRole('heading', { name: 'Explore our episodes' })).toBeVisible()
});

// Clicks the footer Problem Sets link and asserts the Problem Sets URL and heading
test('Footer "Problem Sets" link takes user to Problem Sets section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the problem sets link in footer
    await page.getByRole('contentinfo').getByRole('link', { name: 'Problem Sets' }).click()
    // assert the problem sets URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // assert the problem sets heading text
    await expect(page.getByRole('heading', { name: 'Problem Sets' })).toBeVisible()
});

// Clicks the footer posters link and asserts the posters URL and heading
test('Footer "Posters" link takes user to Posters section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the posters link in footer
    await page.getByRole('contentinfo').getByRole('link', { name: 'Posters' }).click()
    // assert the posters URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#posters')
    // assert the posters heading text
    await expect(page.getByRole('heading', { name: 'Organic Chemistry Posters' })).toBeVisible()
});

// Clicks the footer Publications link and asserts the Publications URL and heading
test('Footer "Publications" link takes user to Publications section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the Publications link in footer
    await page.getByRole('contentinfo').getByRole('link', { name: 'Publications' }).click()
    // assert the Publications URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/publications')
    // assert the Publications heading text
    await expect(page.getByRole('heading', { name: 'Our Publications' })).toBeVisible()
});

// Clicks the footer Downloads link and asserts the Downloads URL and heading
test('Footer "Downloads" link takes user to Downloads section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the Downloads link in footer
    await page.getByRole('contentinfo').getByRole('link', { name: 'Downloads' }).click()
    // assert the Downloads URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#downloads')
    // assert the Downloads heading text
    await expect(page.getByRole('heading', { name: 'Downloads' })).toBeVisible()
});

// Clicks the footer Contact link and asserts the Contact URL and heading
test('Footer "Contact" link takes user to Contact section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the Contact link in footer
    await page.getByRole('link', { name: 'Contacts' }).click()
    // assert the Contact URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#contact')
    // assert the Contact heading text
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
});

// Clicks the footer About link and asserts the About URL and heading
test('Footer "About" link takes user to About section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the About link in footer
    await page.getByRole('contentinfo').getByRole('link', { name: 'About' }).click()
    // assert the About URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#about')
    // assert the About heading text
    await expect(page.getByRole('heading', { name: 'About us' })).toBeVisible()
});

// Footer Instagram link opens to correct page and asserts URL
test('Footer Instagram link opens new tab to correct page', async ({page}) => {
    // navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the Footer Instagram link
    page.getByRole('contentinfo').getByRole('link', { name: 'Instagram' }).click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.instagram.com/synthesis.workshop/')
    // close the new tab
    await newPage.close()
});

// Footer LinkedIn link opens to correct page and asserts URL
test('Footer LinkedIn link opens new tab to correct page', async ({page}) => {
    // navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the Footer LinkedIn link
    page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn' }).click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.linkedin.com/company/synthesis-workshop/')
    // close the new tab
    await newPage.close()
});

// Update when new 'X' logo is added
// Footer Twitter link opens to correct page and asserts URL
test('Footer Twitter link opens new tab to correct page', async ({page}) => {
    // navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the Footer Twitter link
    page.getByRole('contentinfo').getByRole('link', { name: 'Twitter' }).click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://twitter.com/MatthewHorwitz1')
    // close the new tab
    await newPage.close()
});

// Footer YouTube link opens to correct page and asserts URL
test('Footer YouTube link opens new tab to correct page', async ({page}) => {
    // navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the Footer YouTube link
    page.getByRole('contentinfo').getByRole('link', { name: 'YouTube' }).click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.youtube.com/@SynthesisWorkshopVideos')
    // close the new tab
    await newPage.close()
});