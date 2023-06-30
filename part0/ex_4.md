sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: URL redirection
    deactivate server
    Note left of the server: The server executes app.post on the backend to update the notes list.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: notes
    server-->>browser: main.css
    server-->>browser: main.js
    server-->>browser: data.json
    deactivate server

    Note right of the browser: The browser executes the callback function that renders the notes