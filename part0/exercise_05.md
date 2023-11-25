sequenceDiagram
    participant browser
    participant server

    browser->>servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate browser
    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    deactivate servidor
    activate browser
    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    deactivate servidor
    activate browser
    server->>browser: GET ttps://studies.cs.helsinki.fi/exampleapp/data.json
    deactivate server

  