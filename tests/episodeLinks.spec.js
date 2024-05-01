import { test, expect } from '@playwright/test'

/* This test checks the functionality of the Problem Sets page "Episode Link ↗" hyperlinks, 
verifies new tab opens, and asserts the opened URL is correct  */

test('6π Electrocyclizations Episode Link ↗" hyperlink', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the "Episode Link ↗" hyperlink
    page.locator('article:nth-of-type(3)  .font-text.text-base.text-white').click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.youtube.com/watch?v=TLS74_QcxgQ')
    // close the new tab
    await newPage.close()
});

test('Reactivity of Arynes Episode Link ↗" hyperlink', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the "Episode Link ↗" hyperlink
    page.locator('article:nth-of-type(4)  .font-text.text-base.text-white').click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.youtube.com/watch?v=PvVwTi7ivmA')
    // close the new tab
    await newPage.close()
});

test('Total Synthesis of Prorocentin Episode Link ↗" hyperlink', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the "Episode Link ↗" hyperlink
    page.locator('article:nth-of-type(7)  .font-text.text-base.text-white').click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.youtube.com/watch?v=cZZe0aSNouk')
    // close the new tab
    await newPage.close()
});

test('Tishchenko Reaction Episode Link ↗" hyperlink', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the "Episode Link ↗" hyperlink
    page.locator('article:nth-of-type(9)  .font-text.text-base.text-white').click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.youtube.com/watch?v=XlrewFzAk54')
    // close the new tab
    await newPage.close()
});

test('Total Synthesis of (+)-Ineleganolide Episode Link ↗" hyperlink', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // click on the link and wait for the new tab to get triggered
    const [newPage] = await Promise.all([
    // wait for new popup
    page.waitForEvent('popup'),
    // click the "Episode Link ↗" hyperlink
    page.locator('article:nth-of-type(10)  .font-text.text-base.text-white').click()
    ])
    // wait for the new page to load
    await newPage.waitForLoadState()
    // assert the correct URL has been opened
    await expect(newPage).toHaveURL('https://www.youtube.com/watch?v=76shNLja1uE')
    // close the new tab
    await newPage.close()
});