This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# To run unit testing
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages
assessment-form -> To you see the form assessment;
thank-you -> Page after to submit the form;
leads-list -> Page to see leads, to access this page, do you need to add a cookie "auth" with any value;
In real case, this value is will about the token user logged.
login -> If you try to access leads-list without "token" (I have not implemented this page)


## Learn More
Unfortunately, I had a commitment today and couldn't make much progress on the test, but I implemented the project options, and it should give a clear understanding of how I work, code, and organize things.

The project requires the use of Redux; however, I don't see the need for global state management in this specific test. Implementing Redux or even Context API wouldn't be a problem, as I have been working with both for five years.

I would have liked to work more on the lead listing screen. I ended up using a standard template and a button at the bottom to update the user's status, but I know there could be a more visually appealing way to do it.

I initially started the project using JsonForms, but I found some difficulties with validation reactions. I noticed that, to configure error messages to only appear when the user interacts, I would need to set up specific configurations. Since I didn't have much time, I chose to use react-hook-form, which is a lightweight library to work with.
