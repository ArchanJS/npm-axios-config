# axios-config

## A npm package for Reactjs, to handle config variables while making any request using axios.

## About axios-config:
    This function takes two arguments. The first one is the type of the
    config variable user wants. If user wants to pass a "bearer token", then
    he or she must have to pass "privBearerConfig" as the first argument
    and the "token" as the second argument. If user wants to upload any file 
    without token, user have to pass only "pubMultConfig" as argument.
    Else if user wants to upload any file with token, user must have to pass 
    "privMultConfig" as the first argument, and the "token" as the second argument.
    Else the user will get a simple config variable that can be used for 
    login or registration.

## How to install?
    Open the terminal. Just type "npm i axios-config" and hit enter.