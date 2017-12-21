import React from "react";


/*
#538893
#ee742a
#9ca4b6
#1c6878
#e4e8ea
#545455
*/

export default ( ) => (
    <style jsx global>{ `
        .button {
            margin: 20px;
            border-style: solid;
            border-width: 3px;
            padding: 10px 30px;
            font-size: 1.5rem;
            transition: all 0.35s ease-in-out;
            cursor: pointer;
        }

        .button.light {
            background-color: transparent;
            color: #eee;
            border-color: #eee;
        }

        .button.light:hover {
            background-color: #ee742a;
            color: #545455;
            border-color: #545455;
            border-radius: 8px;
        }

        .button.dark {
            background-color: transparent;
            color: #e4e8ea;
            border-color: #e4e8ea;
        }

        .button.dark:hover {
            background-color: #e4e8ea;
            color: #eee;
            border-color: #e4e8ea;
        }

        .container {
            width: 1024px;
            margin: auto;
        }

        .header {
            position: fixed;
            width: 100%;
            z-index: 10;
        }

        .main {
            padding-top: 59px;
        }

        .button.page {
            padding: 10px 20px;
            color: #eee;
            text-decoration: none;
            background-color: #545455;
            transition: all 0.7s ease-out;
            cursor: pointer;
            margin: 20px 40px;
        }

        .button.page:hover {
            background-color: #1c6878
            transition: all 0.35s ease-out;
            color: #eee;
        }


        .button.page.dark {
            padding: 10px 20px;
            color: #545455;
            text-decoration: none;
            background-color: #eee;
            transition: all 0.7s ease-out;
            cursor: pointer;
            border-color: #545455;
        }

        .button.page.dark:hover {
            background-color: #1c6878
            transition: all 0.35s ease-out;
            color: #eee;
            border-color: #eee;
        }

        .navlink {
            padding: 20px 30px;
            color: #eee;
            text-decoration: none;
            background-color: #545455;
            transition: all 0.7s ease-out;
            cursor: pointer;
        }

        .navlink.highlight {
            color: #ee742a;
        }

        .navlink:hover {
            background-color: #1c6878
            transition: all 0.35s ease-out;
            color: #eee;
        }

        .section {
            padding: 20px;
        }

        .section.dark {
            background-color: #545455;
            color: #eee;
        }

        .section.color {
            background-color: #9ca4b6;
            color: #545455;
        }

        .section.light {
            background-color: #eee;
            color: #545455;
        }

        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            text-align: center;
        }

        h1, h2, h3, h4 {
            margin: 0;
        }

        p {
            font-weight: 300;
            font-size: 1.2rem;
        }
    ` }</style>
);
