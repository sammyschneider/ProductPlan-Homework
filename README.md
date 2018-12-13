# ProductPlan Candidate Homework
Welcome! The goal of this homework exercise is to emulate the first time use of the ProductPlan web application. In effort to assist a new user, this mimics some drag and drop application behaviors that emulates a simple product roadmap by creating one container "lane" and three "bars", along with step-by-step instructions to guide users to successful completion. Candidates have 7 days to complete this and candidates should time box the effort to no more than 10 hours. In addition, we encourage candidates to use any preferred tools. 

## Your challenge, should you choose to accept it
1. Clone this repo (or download the zip archive) to get started. This includes both PNGs and the original Sketch file.
2. Your page should closely resemble ProductPlan - On Boarding - 02.png on the page load:
    
    <img src="ProductPlan - On Boarding - 02.png" alt="alt text" width="500"/>
    
3. Shortly after initial load, a prompt appears and instructs the the new user to "Add a lane":

    <img src="ProductPlan - On Boarding - 01.png" alt="alt text" width="500"/>
    
2. The "Add lane" button should enable a drag and drop behavior that creates a container, moving right to left:

    <img src="ProductPlan - On Boarding - 03.png" alt="alt text" width="500"/>
    
3. Once the draggable element is released, the lane container should render like this:

    <img src="ProductPlan - On Boarding - 04.png" alt="alt text" width="500"/>
    
4. Shortly after the lane container is placed, a second prompt instructs the new user to add the first "bar":

    <img src="ProductPlan - On Boarding - 05.png" alt="alt text" width="500"/>
    
3. Your page should closely resemble [business_overview_expanded.png](business_overview_expanded.png) when the "more" links are clicked:
    
    <img src="business_overview_expanded.png" alt="alt text" width="250"/>
4. The "Add lane" and "Add bar" buttons should change color on hover.
5. The "New Program" button should open a form to add a new program. This is where you get some UX/design freedom, but the form should have the following fields:
    - Program Type (single select)
        + Count Series
        + Time Series
        + Membership
    - Program Name (input)
    - Allow online scheduling (boolean)
    - Default capacity (input)
    - Tabs this program is on (multi-select)
        + Classes
        + Appointments
        + Workshops
        + Outside
        + Inside
        + Gym
6. Please use React.js to complete the task.
7. Use the following API calls to populate any or all parts of page. The data returned may not reflect the amounts in the business_overview.png image.      Assume that the data from these calls is correct.
    - Programs (GET: https://api.myjson.com/bins/5bdb3)
    - Pricing Options (GET: https://api.myjson.com/bins/47axv)
8. When you're finished, send a link to your GitHub repo (preferred) or a .zip archive to your point-of-contact. (Make sure you include your unminified code!) If tooling is required (grunt, rails, yeoman, etc.), your submitted work should also be hosted so that it can viewed in a working state.

## What we're looking for
- **Attention to detail**. Can you build a near-identical representation of the screenshots we provided above? No detail is too small in our assessment.
- **Appropriate use of frameworks and tools**. React.js is our preferred framework. For other tooling, as long as you use your preferred tools in an appropriate way and are able to describe your reasoning if asked, you're good to go.

## Bonus Points
You may choose to make the application responsive.

## Help!
Should you stumble into any questions during your quest, feel free tor reach out to your recruiter or dev contact. There are no stupid questions!
