

# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**

We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:

- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it _Jugaad_
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:

- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰

The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:

- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [x] My code's working just fine! 🥳
- [x] I have recorded a video showing it working and embedded it in the README ▶️
- [x] I have tested all the normal working cases 😎
- [x] I have even solved some edge cases (brownie points) 💪
- [x] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓

Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section

_Add your video here, and your approach to the problem (optional). Leave some comments for us here if you want, we will be reading this :)_

### From my side

## STEPS IN CREATING THE APPLICATION:

**1. Set up your React.js project:**

- Create a new React.js project if you haven't already using tools like Create React App.
- Set up any necessary dependencies such as `react-dropzone` for drag-and-drop functionality.

**2. Create a component for the CSV importer:**

- Create a React component that will serve as the CSV importer.
- Implement the drag-and-drop functionality using the `react-dropzone` or similar library.
- Handle the dropped file in your component's state.

**3. Parse the CSV file:**

- Use a CSV parsing library `papaparse` to parse the uploaded CSV file.
- Store the parsed data in your component's state.

**4. Display CSV data and column selection:**

- Create a user interface that displays the parsed CSV data in a tabular format.
- Allow users to select which columns they want to import by adding checkboxes or a column selection UI.

**5. Interact with Google Sheets API:**

- Set up authentication for Google Sheets API. You can use OAuth 2.0 for this.
- Use the Google Sheets API to create a new Google Sheet or select an existing one.

**6. Map and import data into Google Sheets:**

- Map the selected columns from the parsed CSV data to the corresponding columns in the Google Sheet.
- Use the Google Sheets API to insert the data into the Google Sheet.

**7. Handle errors and edge cases:**

- Implement error handling to provide feedback to the user in case of any issues during the import process.
- Handle scenarios such as duplicate data, invalid column selections, or data format issues.

**8. Testing and validation:**

- Thoroughly test your CSV importer with various types of CSV files.
- Validate that the imported data matches the user's selections.

## VIDEO EXPLANATION

[![CLICK TO WATCH VIDEO](https://drive.google.com/file/d/1rTMWj-XO0CbUHtIlB7YqgDfTztjICOXR/view?usp=drive_link)](https://drive.google.com/file/d/1rTMWj-XO0CbUHtIlB7YqgDfTztjICOXR/view?usp=drive_link)

I couldn't able to talk about the blockers I faced as it has to be in 120 seconds and since the video above is around 4 minutes 🙃
