

## Routes Overview

### 1. Default Route:

- **Path:** `""`
- **Redirect To:** `login`
- **Path Match:** `full`
- **Description:** Redirects to the login page by default.

### 2. Login Route:

- **Path:** `login`
- **Component:** `LoginComponent`
- **Description:** Displays the login page for users to authenticate.

### 3. Signup Route:

- **Path:** `signup`
- **Component:** `SignUpComponent`
- **Description:** Displays the signup page with child routes for providing personal information, qualification information, and reviewing details.

#### Child Routes under Signup:

   a. Personal Information Route:
   
   - **Path:** `signup/personalinfo`
   - **Component:** `PersonInfoComponent`
   - **Description:** Allows users to input their personal information.
   
   b. Qualification Information Route:
   
   - **Path:** `signup/qualificationinfo`
   - **Component:** `QualificationInfoComponent`
   - **Description:** Enables users to input their qualification details.
   
   c. Review Route:
   
   - **Path:** `signup/review`
   - **Component:** `ReviewPageComponent`
   - **Description:** Displays a review page for users to review their provided information.

### 4. Walkin Route:

- **Path:** `walkin`
- **Component:** `WalkinComponent`
- **Description:** Displays the walk-in related options with child routes for different functionalities.

#### Child Routes under Walkin:

   a. Multiple Job Route:
   
   - **Path:** `walkin/multiplejob`
   - **Component:** `WalkinDetailPageComponent`
   - **Description:** Displays details about multiple job openings in a walk-in event.
   
   b. Hall Ticket Route:
   
   - **Path:** `walkin/hallticket`
   - **Component:** `HallticketPageComponent`
   - **Description:** Provides hall ticket details for a walk-in event.
   
   c. All Walkin Route:
   
   - **Path:** `walkin/all`
   - **Component:** `AllWalkinPageComponent`
   - **Description:** Lists all available walk-in events.

### 5. Wildcard Route:

- **Path:** `**`
- **Redirect To:** `login`
- **Description:** Redirects to the login page for any other undefined routes.

## Usage

To utilize the routes:

1. Clone the project repository.
2. Install the necessary dependencies using `npm install`.
3. Run the Angular application using `ng serve`.
4. Access the application through the provided URL.

