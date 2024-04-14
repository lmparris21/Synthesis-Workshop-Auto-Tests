import { test, expect } from '@playwright/test'

test('Page has a title', async ({page}) => {
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    await expect(page.locator('.font-title')).toContainText('Problem Sets')
});

test('Page has a sub-title', async ({page}) => {
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    await expect(page.locator('.font-text.mb-8.text-lg')).toContainText('Problem sets are small tasks in PDF format that will help you to practice and understand concepts of our episodes')
});

test('Advanced Organic Chemistry: Protecting... Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(1) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Problem-set-PGs-ppib-_9sBkCa.pdf')
});

test('Asymmetric Catalytic Friedel-Crafts Reactions of... Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(2) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Problem-asymmetric-FC-Nr4hrhnuq9lB.pdf')
});

test('6π Electrocyclizations Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(3) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('6pi-electrocyclisation-problem-set-YRN_Ec5aQTq8.pdf')
});

test('Reactivity of Arynes Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(4) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Aryne-problems-ucVhsKwV-A9-.pdf')
});

test('Advanced Organic Chemistry: Carbonyl... Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(5) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Problem-carbonyl-reactivity-Q-P8I1pyxZ5w.pdf')
});

test('Borylation of Tertiary C-H Bonds in BCPs and BCHs Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(6) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Episode-23-09-30--Problems--1--42zES-4zA4c0.pdf')
});

test('Total Synthesis of Prorocentin Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(7) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Problem-Prorocentin-mMZPxVEYolKi.pdf')
});

test('Kabachnik-Fields Reaction Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(8) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Kabachnik-Fields--Reaction-Problem-Set-questions-I-MLI9s3Kg94.pdf')
});

test('Tishchenko Reaction Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(9) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Tishchenko-Problem-Set-HsdCVDdDYBE2.pdf')
});

test('Total Synthesis of (+)-Ineleganolide Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(10) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Episode-Aug-19-2023-Problems-wkyUK9a2RIap.pdf')
});

test('[3 + 2] Cycloadditions of Tertiary Amine N-oxides Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(11) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('3plus2-problems-cjrbfwmfutvF.pdf')
});

test('Total Synthesis of Atrachinenin Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(12) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Problem-Atrachinenin-c-gde9bo-9xsxJ.pdf')
});

test('Advanced Organic Chemistry: Retrosynthesis Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(13) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Retrosynthesis-problems-c-Ox_Wr33lnxyL.pdf')
});

test('Advanced Organic Chemistry: Acids and Bases Download Problem Set Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(14) > .flex.flex-col.gap-3 > a:nth-of-type(1)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Problems-ACIDBASE-A50q4i-6sf35.pdf')
});