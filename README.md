# Car leasing calculator

## Table of Contents

- [About](#about)

## About <a name = "about"></a>

- Redux as storage
- Thunk for submitting data and tracking status
- Loose coupled input sliders parts which allows customization (such as text area input over another one)
- Debounce for input
- All breakpoints responsiveness (for current resolution check top left corner)
- Container > component structure for logic/styling splitting (except positioning props for bootstrap sections)
- Core > access-layer > logic structure for cross project universal modules (errors, pub-sub, services, loggers, etc...)
- Rewired for webpack tweaking (for now just including core node modules since auto-polyfilling have been removed with react-scripts 5+)
- Structured customizable scss base
- Router for extending project into multipage (not required, just convenience)
- Configured eslint config  