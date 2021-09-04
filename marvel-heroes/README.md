
Marvel Heroes Team
Create an application that will allow users to search and bookmark their favorite Marvel characters. You should query the Marvel API to search for characters (https://developer.marvel.com/).

P.S. - Use this URL format http://gateway.marvel.com/v1/public/characters?apikey=____
P.P.S - Don't forget to authorize local domain (localhost / 127.0.0.1) by putting * as referrer value (this option is available on same page where key is generated)



Be aware that API has limit of 3000 request per day
You should limit result from the API to 20 results displayed in a  grid
Each item in the grid should display the image. Name and bookmark state (button) of the character.
The image size may vary, but make sure the grid accommodates any image size and displays consistently, still keeping it responsive. Avoid stretching or squeezing the image instead scale and align it in the center. No white space should appear on the sides but the image can be cropped.
Application should have responsive design for desktop, tablet and phone
Ensure that the elements work and display correctly in the latest versions of all modern browsers
You can use Materialized for styling or react-materialized, it’s your choice.


Tasks
1 - Use CRA to bootstrap project and create page skeleton components (Header, Footer and Main Page).

2 - Create UI cards component (without data fetching) and show them on main page 

3 - Use API to fetch 20 characters from `/characters`  endpoint and print API response to console when page is mounted

3.1. - Use characters data fetch from API and show it in on character chards on homepage

4 - Create a search bar component and show it on the main page. Use this component to search for characters via Marvel API. Show result in cards.

5 - Create “My Team” section and UI components required for that

6 - When user click “Add” button character should be added to “My Team” list (you cannot add same character two times)

7 - Add feature for deleting characters from “My Team” list

8 - Extend functionality of “My Team” list so it can be preserved even when page is reloaded

9 - When user click “Info” button new page should be shown containing more detailed info for selected character (Character image, name and description)



10 - On “Single Hero Page” when user clicks on hero image it should be presented as fullscreen image (without leaving the page)

11 - On “Single Hero Page” add a switch with the label “Show Comics”. When the switch is in “ON” position show hero comics. When the switch is in “OFF” position don’t show any comics underneath.

12 - When user clicks on any of the listed comics modal should appear on the screen showing details about concrete comic (image, name, price, date of print, list of creatore, list of characters)

