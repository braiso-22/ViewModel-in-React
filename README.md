# ViewModel in React

## Main problem

Web UI is very messy because we don't usually follow clean architecture, modularization/separation of concerns,

so in the end we got 3000 line-long files with useEffect, useState, html and API calls all mixed

## Solution

Add a viewModel to your Page/Component, it will handle the UI state/events and the api logic

No more undescifrable useEffects

## Extructure

```txt
- feature*/
    - components/
        - comp*.tsx
        - index.css
    - state/
        - UiState*.tsx
    - events/
        - events*.tsx

    - Screen*.tsx
    - ScreenViewModel*.tsx
    - index.css
```
