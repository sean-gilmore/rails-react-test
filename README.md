# Rails Docker Example

Docker setup for the application was taken from:
https://betterprogramming.pub/rails-6-development-with-docker-55437314a1ad

## Getting started

To get started run:

`docker-compose build`

Then run:

`docker-compose up`

To connect to the running application container, run:

`docker exec -it rails-react-test_app /bin/sh`

The same command can be run for the databse, and redis containers.

To restart just the app server, run the following:

`docker-compose restart rails-react-test_app`

Running test suite as a one off:

`docker-compose run --rm rails-react-test_test rails test:full_suite`

