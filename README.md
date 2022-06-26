# ESN Germany Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Installation

Clone this repo to a local folder. Navigate to the `src` folder in a command line and install all packages using `yarn`. Then, you are ready to develop.

## Development

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build (locally, not needed if you want to publish the website)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration production` flag for a production build.

## Publish a new version of this website

1. Push the new version to the main branch of this repository.
2. Connect to the server of ESN Germany.
3. Start the script to build the new version of the website.
   Everything else will happen automatically within few minutes.

## Update National/Audit Board members or Regional Coordinators

You do not need to change anything in the code here.

1. Navigate to https://strapi.esn-germany.de/admin/auth/login and login.
2. Find the collection type `Website Board Members`.
3. Update, remove or add the persons.
   > If you do not upload a photo, the default gray portrait image will be displayed instead.

## Add a new section to the section map

### Add the section to the map

1. Go to `components/sectionmap/sectionmap.component.html`.
2. Add a `<path>` element with the correct id (section name), the respective color to fill, and the position on the map.

|   Region   | ESN Color |
| :--------: | :-------: |
|   North    |  #00aeef  |
|    West    |  #ec008c  |
|    East    |  #f47b20  |
| South West |  #7ac143  |
| South East |  #2e3192  |

Find the correct position on the map by playing around with the values in `translate()`. The value of `d` you can just copy from one of the other section path elements.

If you are not sure what to do here, just copy a `<path>` element from another section, change its color by the `fill` attribute and/or the `translate()` values and see what happens.

### Add the section to the list of sections

1. Go to `components/sectionmap/sectionmap.component.ts`.
2. Find the region where the new section belongs to and add its section name to the list.

### Add the section to strapi

1. Navigate to https://strapi.esn-germany.de/admin/auth/login and login.
2. Find the collection type `Website Section Maps`.
3. Add a new entry by clicking on the blue `+ Add a New Website Section Maps` button at the top of the page.
4. Enter all details and save.

### Update the number of sections

1. In line 10 of `pages/students-page/students-page.component.html` change the number according to the new number of sections.
2. In line 98 of `pages/landing-page/landing-page.component.html` change the number according to the new number of sections.

## Add News, Legal Documents, National Teams and Partners

All this information is handled on Strapi only. No need to change the code :-)
