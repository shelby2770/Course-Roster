Project features:
* Can make a list of courses that user wants to select.
* A user can take highest 20 credit hour worth courses. If it exceeds, then a warning will be shown using toast.
* Total price of selected courses can calculate.
* Remaining credit hour and total credit hour are updated dynamically.


State management:

=> App.jsx: 3 states are used here. One for pushing course object in an array, and rest twos are used to calculate remaining credit hour of the user and total cost. These values are modified by an Event-Handler “handleAddCourses” which is initialized on clicking select button.
=> Contents.jsx: useEffect() is used to cooperate setContents state by fetching fake_data.
