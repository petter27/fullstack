sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        Note right of browser: The browser update the list with the notes.
    activate server
    servidor-->>browser: Response 201 Created
    deactivate servidor