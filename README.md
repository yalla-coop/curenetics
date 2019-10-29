# Curenetics
![Build Status](https://travis-ci.com/yalla-coop/curenetics.svg?branch=master)

[View on Netlify](https://curenetics-app.netlify.com/)

A platform enabling medical professionals to more quickly find relevant clinical trials for their patients


## From Tech for Better to initial funding
[Tech for Better](https://www.foundersandcoders.com/techforbetter/) is a pro-bono programme for nonprofits to design, test and build new digital service ideas using developers in London and Gaza.

Curenetics was awarded funding to continue to develop the App from the Tech for Better version.

![](https://i.imgur.com/txEWAKr.jpg)


## About the client
Dr Sola Adeleke (MRCP, MBA Oncology Research), the founder of Curenetics, is an oncologist with extensive experience in clinical trials, a clinical research fellow at UCL and is actively involved in cancer research. Sola is devoted to making clinical trials more accessible to both patients and clinicians.

## The background
Although over 70% of patients say they would like to be offered the opportunity to be involved in a clinical trial, only 4% of patients in the UK, end up being recruited to clinical trials. Two thirds of clinical trials still fail in the UK despite best efforts. We are determined to turn around this trend by improving patient access and engagement with trials.

## About the MVP

This app automates the process of matching patients to suitable clinical trials. It narrows the selection, making the final choice a simpler and quicker task.

From a batch of uploaded pdf files, the app extracts text and identifies medical entities. These keywords are matched, along with the basic patient info, to select clinical trials. A list of potentially suitable trials is output for each patient. The resulting list of trials can then be downloaded as a pdf. The app also provides a form to enter the required patient information manually.

The app was shown in a presentation to the National Institute for Health Research (NIHR), Oxford, October 2019.

#### Note:
This current version of the app is a Minimum Viable Product (MVP), focussing on the most relevant features and needs. Working in agile software development, it is important to constantly test products with users. MVPs can be taken out as proof-of-concepts, challenging assumptions and to eventually improve digitalised ideas and needs.




## The Team

[Othman ](https://github.com/othman-shamla) | [ Mohammed ](https://github.com/MohammedYehia) | [Charmaine ](https://github.com/wright1)|[ Susan ](https://github.com/susanx)|[ Martin ](https://github.com/orgs/fac-15/people/mr-bagglesworth) |  [ Joe](https://github.com/thejoefriel)

Original team Tech for Better
[Martin](https://github.com/orgs/fac-15/people/mr-bagglesworth) | [Susan](https://github.com/susanx) | [Hanna](https://github.com/HStewart23) | [Michal](https://github.com/zurda)

## Tech Stack
| Core | Testing | Other |
| - | -------- | -------- |
|Node.js|ESLint|Babel
|React|nodemon|axios
|HTML|Travis CL|react-pdf|
|CSS||antd|
|styled-components||clone-deep
|react-router-dom||


## Getting Started
How to get a copy of the project up and running on your local machine.

*Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp.*
> **Node.js**
> React

### Setup

#### 1. Clone the repo:
```
$ git clone https://github.com/yalla-coop/curenetics
```
#### 2. Install Dependencies
```
$ cd curenetics
$ npm i
```

#### 8. Run the Server
```
$ npm start
```
Wait for a `compiled successfully` message.

#### 9. Start a search for clinical trials
The webapp should now be running on
```http://localhost:3000```

#### To begin a search
From the start screen select either the button 'Upload PDF files of patient data' or click the icon 'Or type in patient details'.

##### Note:
As stated above, what has been built to date is a MVP that will enable the product owner to do further user testing.

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.

