import { test, expect } from '@playwright/test'

// This test check the header functionality and asserts the links lead to the correct page

// Clicks the header logo and asserts the homepage URL and hero page is visible
test('Header logo takes user to homepage', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the header logo
    await page.getByRole('link', { name: 'Synthesis Workshop\'s logo' }).click()
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com')
    await expect(page.getByRole('heading', { name: 'Explore the art of organic' })).toBeVisible();
});

// Clicks the header posters link and asserts the posters URL and heading
test('Header "Posters" link takes user to Posters section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the posters link in header
    await page.getByRole('banner').getByRole('link', { name: 'Posters' }).click();
    // assert the posters URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#posters')
    // assert the posters heading text
    await expect(page.getByRole('heading', { name: 'Organic Chemistry Posters' })).toBeVisible();
});

// Clicks the header courses link and asserts the posters URL and heading
test('Header "Courses" link takes user to Courses section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the courses link in header
    await page.getByRole('banner').getByRole('link', { name: 'Courses' }).click();
    // assert the courses URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/courses')
    // assert the courses heading text
    await expect(page.getByRole('heading', { name: 'Courses on Organic Chemistry' })).toBeVisible();
});

// Clicks the header Episodes link and asserts the Episodes URL and heading
test('Header "Episodes" link takes user to Episodes section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the episodes link in header
    await page.getByRole('banner').getByRole('link', { name: 'Episodes' }).click();
    // assert the episodes URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/episodes')
    // assert the episodes heading text
    await expect(page.getByRole('heading', { name: 'Explore our episodes' })).toBeVisible();
});

// Clicks the header Problem Sets link and asserts the Problem Sets URL and heading
test('Header "Problem Sets" link takes user to Problem Sets section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the problem sets link in header
    await page.getByRole('banner').getByRole('link', { name: 'Problem Sets' }).click();
    // assert the problem sets URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // assert the problem sets heading text
    await expect(page.getByRole('heading', { name: 'Problem Sets' })).toBeVisible();
});

// Clicks the header Publications link and asserts the Publications URL and heading
test('Header "Publications" link takes user to Publications section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the Publications link in header
    await page.getByRole('banner').getByRole('link', { name: 'Publications' }).click();
    // assert the Publications URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/publications')
    // assert the Publications heading text
    await expect(page.getByRole('heading', { name: 'Our Publications' })).toBeVisible();
});

// Clicks the header Downloads link and asserts the Downloads URL and heading
test('Header "Downloads" link takes user to Downloads section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the Downloads link in header
    await page.getByRole('banner').getByRole('link', { name: 'Downloads' }).click();
    // assert the Downloads URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#downloads')
    // assert the Downloads heading text
    await expect(page.getByRole('heading', { name: 'Downloads' })).toBeVisible();
});

// Clicks the header Contact link and asserts the Contact URL and heading
test('Header "Contact" link takes user to Contact section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the Contact link in header
    await page.getByRole('banner').getByRole('link', { name: 'Contact' }).click();
    // assert the Contact URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#contact')
    // assert the Contact heading text
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
});

// Clicks the header About link and asserts the About URL and heading
test('Header "About" link takes user to About section', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/')
    // Click the About link in header
    await page.getByRole('banner').getByRole('link', { name: 'About' }).click();
    // assert the About URL
    await expect(page).toHaveURL('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/#about')
    // assert the About heading text
    await expect(page.getByRole('heading', { name: 'About us' })).toBeVisible();
});