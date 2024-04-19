Synthesis Workshop Problem Sets Automated Tests
by Landon Parris

For this project I created tests to check the functionality of the Problem Sets Page, header, and footer on the Synthesis Workshop Website at http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/
I used Playwright and JavaScript to write the test scripts which can be ran with Playwright installed using the command npx playwright test.

tests/downloadProblemSets.spec.js
- This test checks the functionality of the Problem Sets page "Download Problem Set" buttons, 
verifies the file is downloaded, and asserts the name of the file is correct.

tests/downloadSolutions.spec.js
- This test checks the functionality of the Problem Sets page "Download Solution" buttons, 
verifies the file is downloaded, and asserts the name of the file is correct.

tests/episodeLinks.spec.js
- This test checks the functionality of the Problem Sets page "Episode Link ↗" hyperlinks, 
verifies new tab opens, and asserts the opened URL is correct.

tests/footer.spec.js
- This test checks the footer functionality and asserts the links lead to the correct page.

tests/header.spec.js
- This test checks the header functionality and asserts the links lead to the correct page.

tests/problemSetsPage.spec.js
- This test checks the Problem Sets Page Heading and Sub-heading is displayed while navigating to the page.
