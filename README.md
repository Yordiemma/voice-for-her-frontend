# Voice for Her Frontend

Voice for Her is a React frontend for a global awareness and reporting platform focused on abuse against women and children.

The goal of the project is to create a serious, compassionate, and trustworthy public web app where people can:
- raise awareness about abuse against women and children
- submit abuse reports
- view public data and visual insights
- read awareness content and survivor-centered stories
- find trusted organizations for support and donation

## Project Purpose

Voice for Her is designed to make abuse harder to ignore.

The platform brings together reporting, awareness, and data visibility in one public experience. It is meant to support a global mission, not a personal profile site. The homepage highlights abuse-related data, global context, and clear paths for action.

## Main Features

- Router-based page structure
- Public homepage with charts and global data visualization
- World map section for country-level abuse insights
- Abuse report flow with anonymous reporting support
- Awareness and article pages
- Donate page with trusted organizations
- About and Help pages for mission and support guidance

## Homepage Data Sources

The homepage currently uses two data sources:

### 1. Voice for Her backend API

Used for report-based charts and statistics.

- Base URL comes from `REACT_APP_API_BASE_URL`
- Current production value:
  `https://voiceforher-backend.onrender.com`
- Main frontend integration file:
  `src/utils/api.js`

This data powers:
- total reports
- countries or regions represented
- anonymous submission share
- abuse-type chart
- age-group chart
- top countries chart

### 2. Free public World Bank API

Used for the global world map section.

- Base:
  `https://api.worldbank.org/v2/country/all/indicator`
- Main integration file:
  `src/utils/globalAbuseData.js`

Current indicators used:
- `SG.VAW.IPVE.ZS`
- `SP.M18.2024.FE.ZS`

This powers:
- the global abuse map
- country-level detail panel
- summary cards for global indicator coverage

Note: the world map currently uses public global indicators, not direct report counts from the Voice for Her database. If the backend exposes country summary endpoints later, the map can be switched to use platform data instead.

## Project Structure

The app is organized into layout, pages, reusable sections, styles, data helpers, and API utilities.

```text
src/
  assets/
  components/
    sections/
  data/
  layout/
  pages/
  styles/
    globals/
    layout/
    legacy/
  utils/
```

### Important folders

- `src/layout`
  Shared page shell components such as navbar, footer, and route layout.

- `src/pages`
  Route-level page files such as Home, About, Report, Donate, and Help.

- `src/components/sections`
  Reusable homepage sections such as the global map section and report overview section.

- `src/utils`
  API clients and data formatting helpers.

- `src/styles`
  Centralized CSS structure for global styles, layout styles, and older legacy component styles.

## Key Files

- `src/App.js`
  Main route configuration.

- `src/layout/SiteLayout.js`
  Shared layout wrapper using React Router `Outlet`.

- `src/pages/HomePage.js`
  Homepage content and route cards.

- `src/components/GlobalAbuseMapSection.js`
  Interactive world map visualization.

- `src/components/ReportsOverview.js`
  Homepage report statistics and charts.

- `src/utils/api.js`
  Integration for Voice for Her report API.

- `src/utils/globalAbuseData.js`
  Integration and normalization logic for World Bank indicator data.

## Environment Variables

Frontend environment variables should only include safe public values.

Example:

```env
REACT_APP_API_BASE_URL=https://voiceforher-backend.onrender.com
```

Do not place MongoDB secrets or backend-only credentials in the frontend repo.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

### `npm run build`

Builds the app for production.

### `npm test`

Runs the React test runner.

## Design Direction

The UI is intended to feel:
- serious
- compassionate
- global
- trustworthy
- human-centered

The homepage should guide people toward action while making the data visible and understandable.

## Future Improvements

- Replace global public indicator map data with direct Voice for Her backend summary data
- Add a backend country summary endpoint for real platform report counts
- Add authentication flow for article publishing
- Remove remaining legacy components and CSS
- Expand awareness content and article management

## Status

This frontend has been refactored to support:
- cleaner routing
- shared layout structure
- centralized CSS folders
- reusable data visualization components
- global abuse mapping support

The project is ready for further integration with the separate Voice for Her API backend.
