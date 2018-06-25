# Calendar

#### [Live Link via Heroku](https://splendar.herokuapp.com/)

#### Notes:
- added title to Event table

### Must Have Specs
1. [X] The UI should have one month hard coded view (Pick any month)
1. [X] Ignore users/login, just have one hardcoded user
1. [X] Click on a day box, and be able to create a new event on that day which gets sent to the backend on clicking submit.
   1. [X] The form should have start time, end time, description and submit.
   1. [X] Once submit is clicked the form should disappear.
   1. [X] Event should now appear in that day’s box.
   1. [X] Events cannot span multiple days. Must start and end the same day.
1. [X] Show all events the user has on their calendar.
1. [X] The UI should have 4 rows of 7 boxes (simple case of a 28 day month).
1. [X] The application should communicate with an API backend using JSON. Don’t spend a lot of time on the UI making it look beautiful; just make it functional.

### Optional Specs (Not required; bonus points available for inclusion of one or more features)
1. [X] Switch between months
1. [ ] Week or day view
1. [ ] Handle events spanning multiple days
1. [X] Handle too many events to fit in your box UI on a given day.
1. [X] You should be able to update/delete events. How you implement this UX is up to you.
1. [X] The UI should have 5 rows of 7 boxes with the correct date on the correct days.


### BACK END
Build the backend of the calendar application. The API for the calendar should be the following:

Events (Minimum Required API)
1. [X] POST /events
    - Should create an event
1. [X] GET /events
    - Should return all events

Events (Optional API. Not required; bonus points available)
1. [X] DELETE /events/:id
    - Should delete an event
1. [X] PUT /events/:id
    - Should update an existing event
