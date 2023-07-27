# ESN Germany Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Installation

Clone this repo to a local folder. Navigate to the `src` folder in a command line and install all packages using the `yarn` command. Then, you are ready to develop.

## Development

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Testing

Some basic cypress tests automatically run every Wednesday at 8a.m. via a scheduled GitHub action (and on each push to main). In case of failure, there is a message posted to the [ESN Germany Slack Workspace](https://esn-germany.slack.com/) (#website_monitoring). You can at all times run the tests locally using `yarn cy:run`.

## Build (locally, not needed if you want to publish the website)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration production` flag for a production build.

## Publish a new version of this website

1. Push the new version to the main branch of this repository.
2. Connect to the server of ESN Germany.
3. Start the script to build the new version of the website.
   Everything else will happen automatically within few minutes.


## Add a new section to the section map

### 1) Add the section to Directus

1. Navigate to https://directus.esn-germany.de/admin and login.
2. Find the collection type `National Website Section Map`.
3. Add a new entry by clicking on the pink `+` (Create item) button at the top right of the page.
4. Enter all details and save.

### 2) Add the section to the list of sections

1. Go to `components/sectionmap/sectionmap.component.ts`.
2. Find the region where the new section belongs to and add its section name to the list.

### 3) Add the section to the map

1. Go to `components/sectionmap/sectionmap.component.html`.
2. Add a `<path>` element with the correct id (section name) to below line 37, the respective color to fill, and the position on the map.

|   Region   | ESN Color |
| :--------: | :-------: |
|   North    |  #00aeef  |
|    West    |  #ec008c  |
|    East    |  #f47b20  |
| South West |  #7ac143  |
| South East |  #2e3192  |

Find the correct position on the map by playing around with the values in `translate()`. The value of `d` you can just copy from one of the other section path elements.

If you are not sure what to do here, just copy a `<path>` element from another section, change its color by the `fill` attribute and/or the `translate()` values and see what happens.

### 4) Update the number of sections

In line 3 of `pages/students-page/students-page.component.html` change the number according to the new number of sections.
