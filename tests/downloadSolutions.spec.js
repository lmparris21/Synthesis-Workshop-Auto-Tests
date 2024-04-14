import { test, expect } from '@playwright/test'

/* This test checks the functionality of the Problem Sets page "Download Solution" buttons, 
verifies the file is downloaded, and asserts the name of the file is correct  */

test('Advanced Organic Chemistry: Protecting... Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(1) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Solution-set-PGs-S-z7AS1TzLfZ.pdf')
});

test('Asymmetric Catalytic Friedel-Crafts Reactions of... Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(2) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Solution-asymmetric-FC-SI5koH5jXs4r.pdf')
});

test('6π Electrocyclizations Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(3) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('6pi-electrocyclisation-solutions-U7x1S1b-82os.pdf')
});

test('Reactivity of Arynes Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(4) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Aryne-solutions-set-MHfvIvt8IkVl.pdf')
});

test('Advanced Organic Chemistry: Carbonyl... Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(5) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Solutions-carbonyl-reactivity-iS_EztNQllfb.pdf')
});

test('Borylation of Tertiary C-H Bonds in BCPs and BCHs Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(6) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Episode-23-09-30--Answers-e-lrMuPtGU-3.pdf')
});

test('Total Synthesis of Prorocentin Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(7) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Solution-Prorocentin-jMTitZwc6geR.pdf')
});

test('Kabachnik-Fields Reaction Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(8) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Kabachnik-Fields-Reaction-Problem-Set-solutions-9NF6XkdhR9E9.pdf')
});

test('Tishchenko Reaction Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(9) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Tishchenko-Solution-Set-2-kTJRE9gKN0p0.pdf')
});

test('Total Synthesis of (+)-Ineleganolide Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(10) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Episode-Aug-19-2023-Answers-K_3fN62xYoz0.pdf')
});

test('[3 + 2] Cycloadditions of Tertiary Amine N-oxides Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(11) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('3plus2-solutions-xNqmf88qjqpQ.pdf')
});

test('Total Synthesis of Atrachinenin Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(12) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Solutions-Atrachinenin-W2Dgi2FQV1xr.pdf')
});

test('Advanced Organic Chemistry: Retrosynthesis Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(13) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Retrosynthesis-solutions-r8PpFlGR4LTQ.pdf')
});

test('Advanced Organic Chemistry: Acids and Bases Download Solution Button', async ({page}) => {
    // navigate to synthesis workshop problem sets page
    await page.goto('http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/problem-sets')
    // promise for download, click download button
    const downloadPromise = page.waitForEvent('download')
    await page.locator('article:nth-of-type(14) > .flex.flex-col.gap-3 > a:nth-of-type(2)').click()
    const download = await downloadPromise
    // save file to /test-data/"file name"
    await download.saveAs('test-data/'+download.suggestedFilename());
    //assert that the file downloaded matches the correct file name
    expect(download.suggestedFilename()).toBe('Solutions-ACIDBASE-a4knvWjqhQa2.pdf')
});