sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    servidor-->>browser: Response 302 Redirect
    deactivate servidor
    activate browser
    browser->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate servidor
    activate browser
    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    deactivate servidor
    activate browser
    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    deactivate servidor
    activate browser
    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    deactivate server
