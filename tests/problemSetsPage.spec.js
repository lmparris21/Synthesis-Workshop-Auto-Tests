import { test, expect } from '@playwright/test'

test('Page has a title', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // Assert page title
    await expect(page.locator('.font-title')).toContainText('Problem Sets')
});

test('Page has a sub-title', async ({page}) => {
    // Navigate to webpage
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // Assert page sub-title
    await expect(page.locator('.font-text.mb-8.text-lg')).toContainText('Problem sets are small tasks in PDF format that will help you to practice and understand concepts of our episodes')
});