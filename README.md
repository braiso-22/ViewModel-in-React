# ViewModel in React

## Main problem

Web UI is very messy because we don't usually follow clean architecture, modularization/separation of concerns,

so in the end we got 3000 line-long files with useEffect, useState, html and API calls all mixed

## Solution

Add a viewModel to your Page/Component, it will handle the UI state/events and the api logic

No more undescifrable useEffects

## Extructure

```text
${feature}/
│
├── components/ ----------------------------> page-specific components, if any
│   │
│   ├── ${component}/
│   │   │
│   │   ├── state/
│   │   │   └── ${component}UIState.ts
│   │   │
│   │   ├── events/
│   │   │   └── {component}Events.ts
│   │   │
│   │   ├── ${component}.css
│   │   ├── ${component}Presenter.ts
│   │   └── ${component}.tsx
│   │
│   └── .../ -------------------------------> same structure, repeat for n number of components
│
├── state/
│   │
│   └── ${page}UIState.ts ------------------> state of the UI definition
│
├── events/
│   │
│   └── ${page}Events.ts -------------------> view events definitions
│
├── ${page}Style.css
├── ${page}Presenter.ts --------------------> page logic
└── ${page}.tsx ----------------------------> page view
```
