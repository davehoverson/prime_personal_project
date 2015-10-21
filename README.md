“Budget App”    
Project #0041    
Dave Hoverson
October 19, 2015 / SOW Version #1.0.0
DOCUMENT OBJECTIVE
The purpose of this document is to provide detailed documentation that clearly defines the base goals, intermediary goals and stretch goals in relation to the “Budget App”(working title) based on the limited development time of two weeks.  Each goal that is not met during the two week development cycle will be considered for implementation during the initial build so that they may be seamlessly added once time permits.
Scope of Work Details
Currently, Dave Hoverson uses a simple spreadsheet to track personal monthly budgets, expenditures and savings accounts.  The “Budget App” will allow all relevant individuals to access such data through a secure website, grant selected users rights to make changes where permitted and automate many of the functions currently being handled manually.  Historical data will be stored to allow for easy implementation of future budgets; scalable to not only work for home use but for a simple way to supplement small business accounting where customizable cash flow reporting may benefit.
The primary objective of this application is to demonstrate portions of programming languages developed during the first 14 weeks of Prime Digital Academy and giving the designer not only a portfolio piece but something that can be utilized and further developed beyond the limited two week development.
Layout
Pages after Login
Header
Main Navigation (Home/Dashboard, Current Month Budget, Savings Accounts, Archives)
User Profile Link (Basic User Info)
Footer
Customizable Links to Pertinent Institutions (Banks, Credit Card Companies, etc.)
Copyright
Sidebar
Calculator
          
Main Content
Priority #1 - Current Monthly Budget
Priority #2 - Login/Registration Page
Priority #3 - Savings Accounts Page (Stretch Goal)
Priority #4 - Archives (Stretch Goal)
Priority #5 - Home/Dashboard (Stretch Goal) containing:
Graphs
Charts
Equity/Assets
Selected Snapshots of Data (total savings/checking/etc)
Priority #1 - Current Monthly Budget
Part 1 of the Minimum Viable Product, the CMB will start as the primary landing page after login and will provide the user with their customized budget taking raw data located in the database (see Figure #1) and presenting it in a more user friendly format.  The user will be able to add/delete/modify each row of data by selecting from a pre-determined list of common categories as well as the ability to add categories of their own.  The user will manually input data from their financial institutions (with the ability to customize links to their institutions of relevance in the footer) at a minimum with a stretch goal of being able to import and categorize CSV data to more easily update.
Additional stretch goals include the ability to archive budgets and access the archives, automatic creation of data for the next month using trends from prior months and the eventual move to another location than the landing page after login (more on that in Priority #5 description).
Figure #1 • Spreadsheet Raw Data
Priority #2 - Login/Registration Page
Part 2 (of 2) of the Minimum Viable Product, the L/R Page will be the first thing users see when navigating to the main site.  Once logged the user can create a budget (if one has yet to be created) or access their exiting budget, edit their information (password, email, etc) and grant access for other users to their created budgets.  This is the primary way to access individuals saved database information.

Priority #3 - Savings Accounts Page (Stretch Goal)
The vision of this page is to provide the user with a place to track individual savings accounts such as a vacation fund, new car fund, medical fund, etc.  This will be tied into respective accounts located on the CMB page and updated automatically as each month’s budget is created.  The data contained on this page will be presented with the overall savings total loudly located at the top and center of the page and each savings fund will contain the total for that fund PLUS the last three transactions that used that fund (see Figure #2).  Each fund will also be able to be linked to a page containing the entire transaction history of that fund which will be limited to the past 12 months but can be expanded upon and searched for the entirety.


Figure #2 • Savings Fund Page Basic        
Priority #4 - Archives (Stretch Goal)
Similar to the Savings Fund historical data there would be an overall, searchable way to find old monthly budgets. Stretch goals for this section include a customizable option to sort specific data and provide reports on each item using time periods and advanced search parameters with options to save searches should they meet the needs of the user.

Priority #5 - Home/Dashboard (Stretch Goal)
Once basic functionality is seamless with priorities #1 through #4 the stretch goal vision is to replace the CMB landing page with one that links to the CMB and contains relevant data from throughout the system using charts/graphs/etc. (see Figures #3 and #4). These data points have yet to be defined and further documentation will be needed should the project advance to include Priority #5.


Figure #3 • Dashboard VERY rough vision

                        Figure #4 • Final Framework
Deployment Plan
The application will be created using the MEAN stack (MongoDB, Express, Angular, Node) with design accomplished with Bootstrap, CSS3 and HTML5  elements.
MongoDB 3.0.7
Express 4.13.3
Angular 1.4.7
Node 4.2.1

All files backed-up to both iCloud and version controlled using Git; pushed regularly  to github.com/tongtonk.

Minimal Viable Product will be deployed to Heroku per the timeline defined in Project Milestones.  Advanced functions outlined in Priorities #3, #4 and #5 will be deployed as accomplished.
Project MILESTONES

PROJECT MILESTONE
RESPONSIBLE
ESTIMATE
ACTUAL
SOW Approved
Prime Instructor
10/20/2015


Build App Framework and Database
Dave Hoverson
10/21/2015


Finalize Login Page and Main App Functionality
Dave Hoverson
10/23/2015


Design and Deployment of MVP
Dave Hoverson
10/26/2015


Development of Stretch Goals
Dave Hoverson
NA/


Final Decision on Stretch Goals
Dave Hoverson
10/28/2015


QA Testing
Dave Hoverson & Others
10/29/2015


QA Review
Dave Hoverson & Others
10/30/2015


Deployment
Dave Hoverson
10/30/2015



QA Testing
Testing will occur once stretch goal objectives have been determined.  Multiple resources will assist to ensure the final functionalities are operating as intended.
QA Corrections
Errors and omissions found during QA testing are documented and assigned to developers for repair. Once a defect has been fixed, it is retested, marked as resolved, and is closed in the ticket tracking system. When all known defects have been closed, the project is ready for deployment.
Supported Browsers & Devices
Browsers
Application will fully support only the below listed browsers and QA will test only in the following browsers and versions. All browsers or versions not listed below are considered out of scope.  

BROWSER NAME
VERSION
TYPE
SUPPORT
Google Chrome
Version 46.0.2490.71 (64-bit


Full Support
Mozilla Firefox
41.0.1


Full Support
Safari
Version9.0 (10601.1.56.2)


Full Support

Full support is defined as “All scoped and designed features will function as defined”
Progressive support is defined as “The product will be compatible with this browser, but certain features based on the browser's limitations may not be fully functional. Unless covered by the scope, the site/app will also not be pixel perfect to the original designs.”
Supported browsers are assumed to be the versions listed without any add-ons, plug ins, or customizations.
Chrome and Firefox browsers update on release channels frequently and automatically. Versions to be tested will be at the time of writing of this scope of work. Defects or functionality changes introduced due to updates to these browsers during the development of this project may not be tested or supported, and may require a scope change to address.
Devices 
“Budget App” is designed for desktop browser only.  It was determined that a separate mobile app would be necessary to function as intended on mobile devices.
Technology Requirements
“Budget App” will be optimized with the fixed width web interface for a target screen resolution of 1024 x 768 unless otherwise directed.
“Budget App” will be developed to be compatible only with the browsers listed in the table above. Compatibility with other legacy or beta web browsers is not included as part of this project.
The website will not be optimized specifically for mobile phones, mobile browsers or mobile devices of any kind such as iPhones, iPad, Android, Blackberry and Windows Phone operating systems.
Interactions with Third Parties
Due to the sensitive nature of securing personal or business financial information there are no plans to incorporate third party software with “Budget App” and the data contained within is strictly used for tracking purposes by the user.
Deployment
This project has been giving a set deployment date of October 30, 2015.  The MVP plus any of the realized stretch goals will be tested prior to and deployed on that date.

