# ProductPlan Candidate Homework
Welcome! The goal of this exercise is to emulate first time use of the ProductPlan web application. In effort to assist a new user, this mimics some drag and drop application behaviors that emulates a simple product roadmap by creating one containing "lane" and three "bars", along with step-by-step instructions to guide new users to successful completion of a rudimentary roadmap. Candidates have seven days to complete this and should time box the effort to no more than ten hours. In addition, we encourage candidates to use any preferred tools. 

## The challenge, should you choose to accept it
1. Clone this repo (or download the zip archive) to get started. This includes both PNGs, fonts, and the original Sketch file.
2. Your page should closely resemble ProductPlan - On Boarding - 02.png on the page load:
    
    <img src="ProductPlan - On Boarding - 02.png" alt="alt text" width="600"/>
    
3. Shortly after initial load, a prompt appears and instructs the the new user to "Add a lane":

    <img src="ProductPlan - On Boarding - 01.png" alt="alt text" width="600"/>
    
2. The "Add lane" button should enable a drag and drop behavior that creates a container, moving right to left:

    <img src="ProductPlan - On Boarding - 03.png" alt="alt text" width="600"/>
    
3. Once the draggable element is released, the lane container should render like this:

    <img src="ProductPlan - On Boarding - 04.png" alt="alt text" width="600"/>
    
4. Shortly after the lane container is placed, a second prompt instructs the new user to add the first bar:

    <img src="ProductPlan - On Boarding - 05.png" alt="alt text" width="600"/>
    
5. The "Add bar" button should enable a drag and drop behavior of the first bar, moving right to left:

    <img src="ProductPlan - On Boarding - 07.png" alt="alt text" width="600"/>
    
6. Shortly after the first bar is placed, a second prompt instructs the new user to add two more bars: 

    <img src="ProductPlan - On Boarding - 08.png" alt="alt text" width="600"/>
    
7. After the prompt is closed, the new user should be able to place two additional bars: 

    <img src="ProductPlan - On Boarding - 09.png" alt="alt text" width="600"/>
    
    <img src="ProductPlan - On Boarding - 10.png" alt="alt text" width="600"/>
    
    <img src="ProductPlan - On Boarding - 11.png" alt="alt text" width="600"/>
    
    <img src="ProductPlan - On Boarding - 12.png" alt="alt text" width="600"/>

Now that we place three bars, that's it! 

8. Please use React.js in completing the task.
9. The peripheral UI element like Search and the Roadmap, Planning Board, and Parking Lot should be inactive for the purpose of this exercise.
10. One example of an isolated test for the public methods of any component
11. Use the following API calls to populate the content areas of the page for an A/B content testing example for the instructional prompts - the hypothetical goal of this test is to validate two content approaches, and we should be able to toggle between the two experiences to preview the A/B test. Assume that the data from these calls is correct.
    - Content_a (GET: https://api.myjson.com/bins/TBD)
    - Content_b (GET: https://api.myjson.com/bins/TBD)
10. When you're finished, send a link to your GitHub repo (preferred) or a .zip archive to your point-of-contact. (Make sure you include your unminified code!) If tooling is required (grunt, rails, yeoman, etc.), your submitted work should also be hosted so it can viewed in a working state.

## What we're looking for
- **Attention to detail**. Can you build a near-identical representation of the pngs provided above? No detail is too small in our assessment.
- **Appropriate use of frameworks and tools**. React.js is our preferred framework. For other tooling, as long as you use your preferred tools in an appropriate way and are able to describe your reasoning if asked, you're good to go.

## Bonus Points
- You may choose to make the application responsive.
- You may choose to make the bars drag & droppable into different positions within the timeline.
- You may choose to make the underlying timeline horizontally scrollable.
- You may choose to make the Lane container expandable and collapsable.

## Help!
Should you stumble into any questions during your quest, feel free tor reach out to your contact. There are no stupid questions!
