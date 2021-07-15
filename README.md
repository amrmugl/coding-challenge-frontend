# Frontend / Javascipt - coding challenge.

## Usage

### --- STEP 1

Download the repo zip file.

### --- STEP 2

Install backend packages by running `cd backend` in you terminal.

After that run `npm install` to install all package.json dependencies.

### --- STEP 3

Move back to the root project directory running `cd ..` in your terminal

Now run `cd frontend` in your terminal to install all package.json dependencies.

### --- STEP 4

Move back to the root project directory running `cd ..` in your terminal

run `npm install` in root project directory because i've installed another package which runs both frontend and backend in parallel.

### --- STEP 5

now from root directory run `npm start`

It will run frontend on `http://localhost:3000/` and backend on `http://localhost:8080/`

## Challenge complete :)

---

## The challenge:

A call center makes tons of calls daily through call center agents and these calls are dumped in JSON files. We need you to handle this large amount of data, and present it in a nice way for the supervisors.

The issue with the data is the structure, it is spread across multiple files. We need your mind to solve this issue and present the data in a useful way.

## Objectives:

### 1. The first part:

Create a simple nodeJS app that can serve the data. You can use any nodeJS framework for that. The data in `json-data` folder should not be changed.

### 2. The second part:

Create an app which uses a modern JS frontend framework _(e.g. Vue, React, etc...)_. The frontend app should have these routes:

- `/` a home page to show an aggregated table for the calls, for ex:

  | Phone number | Number of calls | Last call details  |
  | ------------ | --------------- | ------------------ |
  | +49151484522 | 3 calls         | Agent name / 11:46 |
  | +49158544147 | 1 call          | Agent name / 14:46 |
  | +49151783331 | 2 calls         | Agent name / 16:46 |

  by clicking on the agent name it would go to the agent log

  by clicking on the **Phone number** it would go to that number log

- `/agent/${ID}` to show an agent specific call log, for ex:

  | Phone number | Call date and time | Resolution      |
  | ------------ | ------------------ | --------------- |
  | +49151484522 | 22/1/2020 14:20:22 | need reschedule |
  | +49158544147 | 22/1/2020 16:54:12 | no response     |
  | +49158544147 | 22/1/2020 17:54:12 | no response     |

- `/call/${number}` to show call logs of a specific number

  | Agent Name | Call date and time | Resolution      |
  | ---------- | ------------------ | --------------- |
  | John Bob   | 22/1/2020 14:20:22 | need reschedule |
  | Chris Toms | 22/1/2020 17:54:12 | no response     |
  | John Bob   | 22/1/2020 17:54:12 | no response     |

## Important notes:

- app should run with no errors nor hiccups.
- the data in `json-data` folder should not be changed!.
- representing the data using charts is a plus.
- unit testing of the code is a plus.
