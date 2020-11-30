Implement :
    Search and sort of a feed, with pagination. 
    Search: should search in fields `title` and `description`
    By default (i.e. for no search term) all posts should match the query.
    Support exact match when the query contains a phrase within double quotes (like Google does)


Sort: 
    Allow sorting by `title` and `dateLastEdited`

Pagination:
    Use 'page numbers' style of pagination
    Include total count in the response matching the current query result 

Backend:
    You can implement with Node.js (Typescript or ES2019+) or any JVM language, with or without an application framework.
    Search can be implemented through a relational database like PostgreSQL or MySQL, or it can be in-memory.
    Use the attached `mock_data.json` as seed data
    Write meaningful unit and integration tests where appropriate

Frontend
    The layout is responsive such that:
    The grid has 3 columns on Desktop screens, 2 columns on Tablet screens, and 1 column on Mobile screens.
    The section with the table can be considered to always have 1 layout column, with the entire table in that single layout column.
    Search terms entered in the input box are passed to call to the web service implemented on the backend and display the results in the grid and table
    Selecting the Sort option from the dropdown will call the web service accordingly to update the results.
    Included pagination links to control which part of the search result should be displayed.
    The states of the grid and table data should match.
    Using a component-oriented view library for implementation preferably Angular 7+
