# SimRa Visualization

This project is part of the SimRa research project which includes the following subprojects:

- [simra-android](https://github.com/simra-project/simra-android/): The SimRa app for Android.
- [simra-ios](https://github.com/simra-project/simra-ios): The SimRa app for iOS.
- [backend](https://github.com/simra-project/backend): The SimRa backend software.
- [dataset](https://github.com/simra-project/dataset): Result data from the SimRa project.
- [screenshots](https://github.com/simra-project/SimRa-Visualization): Screenshots of both the iOS and Android app.
- SimRa-Visualization: Web application for visualizing the dataset([frontend](https://github.com/simra-project/simra-visualization-web), [backend](https://github.com/simra-project/simra-visualizations-server)).

In this project, we collect – with a strong focus on data protection and privacy – data on such near crashes to identify when and where bicyclists are especially at risk. We also aim to identify the main routes of bicycle traffic in Berlin. To obtain such data, we have developed a smartphone app that uses GPS information to track routes of bicyclists and the built-in acceleration sensors to pre-categorize near crashes. After their trip, users are asked to annotate and upload the collected data, pseudonymized per trip. For more information see [our website](https://www.digital-future.berlin/en/research/projects/simra/).

## Project setup

```
cd frontend/
npm install
```

Then you can either execute `npm run server` to compile and provide hot-reloading while developing or run `npm run build` to compile and manifest for production.

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).