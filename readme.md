# Dental Clinic Frontend

This is the frontend repository for a dental clinic web application built with React, which interacts with the [dental-api](https://github.com/Edkiri/dental-api).

![Home](./assets/home.png)

## Features

- User authentication and authorization as patient, dentist and admin.
- Treatments listing without authentication.

### Patient
- Patient can create and update profile.
- Patient can request appointments.
- Patient can list, update, and cancel appointments.
- Patient can choose dentist and treatment.

![Request appointment](./assets/new-appointment.png)
  
### Dentist
- Schedule their appointments.
- Filter appointments by patient name, datetime, and status.
- Can confirm or cancel appointments.

### Admin
- Can confirm or cancel appointments.
- List all appointments.
- Filter appointments by patient name, dentist name, start-end datetime, and status.
- List all registered users.

![Request appointment](./assets/filters.png)

## Technologies Used

- React.
- React Router.
- React Context.
- Axios.
- CSS.