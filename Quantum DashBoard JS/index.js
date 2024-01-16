const alerts_container = document.getElementById("alerts_container")
const alert_content = document.getElementById("alert_content")
const alert_btn = document.getElementById("alert_btn")
const announcement_container = document.getElementById("announcements_container")
const annoucements_content = document.getElementById("announcements_content")
const annoucements_btn = document.getElementById("announcements_btn")
const collapse_btn = document.getElementById("collapse_btn")
const collapse_nav_container = document.getElementById("collapse_nav_container")
const course_grid = document.getElementById("course_card_grid");


announcement_container.style.display = "none"
alerts_container.style.display = "none"
collapse_nav_container.style.display = "none"

const alerts_data = [

    {
        checked: false,
        content: "License for Introduction to Algebra has been assigned to your school",
        timestamp: "15-Sep-2018 at 07:21 pm",
        sub_content: null
    },
    {
        checked: true,
        content: "Lesson 3 Practical Worksheet overdue for Amy Santiago",
        timestamp: "15-sep-2018 at 05:21 pm",
        sub_content: {
            title: "Course:",
            content: "Advanced Mathematics"
        }
    },
    {
        checked: false,
        content: "23 new students created",
        timestamp: "14-Sept-2018 at 01:21 pm",
        sub_content: null
    },
    {
        checked: false,
        content: "15 submissions ready for evaluation",
        timestamp: "13-Sep-2018 at 01:15 pm",
        sub_content: {
            title: "Class:",
            content: "Basics of Algebra"
        }
    },
    {
        checked: false,
        content: "License for Basic Concepts in Geometry has been assigned to your teacher",
        timestamp: "15-Sep-2018 at 07:21 pm",
        sub_content: null
    },
    {
        checked: true,
        content: "Lesson 3 Practice Worksheet overdue for Sam Diego",
        timestamp: "14-Sept-2018 at 03:45 pm",
        sub_content: {
            title: "Couse:",
            content: "Advanced Mathematics"
        }
    }


]

const announcement_data = [

    {
        user: "Wilson Kumar",
        checked: true,
        content: "No classes will be held on 21st Nov",
        timestamp: "15-Sep-2018 at 07:21 pm",
        files: 2,
        sub_content: null
    },
    {
        user: "Samson White",
        checked: false,
        content: "Guest lecture on Geometry on 20th September",
        timestamp: "15-sep-2018 at 07:21 pm",
        files: 2,
        sub_content: null
    },
    {
        user: "Wilson Kumar",
        checked: true,
        content: "Additional course materials available on request",
        timestamp: "15-Sept-2018 at 07:21 pm",
        files: null,
        sub_content: {
            title: "Course: ",
            content: "Mathematics 101"
        }
    },
    {
        user: "Wilson Kumar",
        checked: false,
        content: "No classes will be held on 25th Dec",
        timestamp: "13-Sep-2018 at 01:15 pm",
        files: 4,
        sub_content: {
            title: "Class:",
            content: "Basics of Algebra"
        }
    },
    {
        user: "Wilson Kumar",
        checked: false,
        content: "Additional course materials available on request",
        timestamp: "15-Sep-2018 at 07:21 pm",
        files: 4,
        sub_content: {
            title: "Course: ",
            content: "Mathematics 101"
        }
    },



]

const course_card_data = [

    {
        lessonTitle: "Acceleration",
        subject: "physics",
        img: "assets/images/imageMask-1.svg",
        grade: 7,
        bonus: 2,
        favourite: true,
        expired: false,
        contents: {
            units: 4,
            lessons: 18,
            topics: 24
        },
        class: "Mr. Frank's Class B",
        stats: {
            students: 50,
            duration: "21-Jan-2020 - 21-Aug-2020"
        }
    },
    {
        lessonTitle: "Displacement, Velocity and Speed",
        subject: "physics",
        img: "assets/images/imageMask-2.svg",
        grade: 6,
        bonus: 3,
        favourite: true,
        expired: false,
        contents: {
            units: 2,
            lessons: 15,
            topics: 20
        },
        class: null,
        stats: null
    },
    {
        lessonTitle: "Introduction to Biology: Micro organisms and how they affec...",
        subject: "Biology",
        img: "assets/images/imageMask.svg",
        grade: 4,
        bonus: 1,
        favourite: true,
        expired: false,
        contents: {
            units: 5,
            lessons: 16,
            topics: 22
        },
        class: "All Classes",
        stats: {
            students: 300,
        }
    },
    {
        lessonTitle: "Introduction to High School Mathematics",
        subject: "Mathematics",
        img: "assets/images/imageMask-3.svg",
        grade: 8,
        bonus: 3,
        favourite: false,
        expired: true,
        contents: {
            units: 5,
            lessons: 16,
            topics: 22
        },
        class: "Mr. Frank's Class A",
        stats: {
            students: 44,
            duration: "14-Oct-2019 - 20-Oct-2020"
        }
    },

]


const load_course_cards = () => {

    course_card_data.forEach((cardData) => {
        const courseCard = document.createElement("div")
        courseCard.className = "course_card"
        courseCard.innerHTML =

            ` 
           ${cardData.expired === true ?
                ` <div class="expired">EXPIRED</div>` :
                ""

            }

            <div class="course_card_header">
    <img src=${cardData.img} alt="">
    <div class="card_header_content">
        <div class="card_title">
            ${cardData.lessonTitle}
            <div class="favourite_btn">
                <img src=${cardData.favourite === true ? "assets/icons/favourite.svg" : "assets/icons/unfavourite.svg"} alt="">
            </div>
        </div>
        <div class="subject_grade">
            <div class="subject">
                ${cardData.subject}
            </div>
            <div class="sub_divide"></div>
            <div class="grade">
                Grade ${cardData.grade} <span>+${cardData.bonus}</span>
            </div>
        </div>

        <div class="course_content_container">
            <div class="course_content">
                <div class="course_content_no">${cardData.contents.units}</div>
                <div class="course_material">Units</div>
            </div>

            <div class="course_content">
                <div class="course_content_no">${cardData.contents.lessons}</div>
                <div class="course_material">Lessons</div>
            </div>

            <div class="course_content">
                <div class="course_content_no">${cardData.contents.topics}</div>
                <div class="course_material">Topics</div>
            </div>

        </div>

        <div class="dropdown_sort">
            <div class="dropdown">
                <div class=${cardData.class === null ? "class_name_null" : ""}>
                ${cardData.class === null ? "No Classes" : cardData.class}
                    <hr class="dropdown_hr">
                </div>
                <img class="drop_icon" src="assets/icons/arrow-down.svg" alt="">
                ${cardData.class === null ? "" : `<div class="dropdown-content">
                    <a href="#">Item 1</a>
                    <a href="#">Item 2</a>
                    <a href="#">Item 3</a>
                </div>`}
            </div>

        </div>

       
       ${cardData.stats === null ? "" :
                `<div class="class_stats">
            <div class="student">
                ${cardData.stats.students} Students
            </div>
            ${cardData.stats.duration === null ? "" :
                    `<div class="sub_divide"></div>

            <div class="date">
                ${cardData.stats.duration}
            </div>`
                }
        </div>`
            }


    </div>


</div>

<hr class="card_divider">

<div class="card_footer">
    <div class="card_footer_button">
        <img src="assets/icons/preview.svg" alt="">
    </div>
    <div class="card_footer_button">
        <img src="assets/icons/manage course.svg" alt="">
    </div>
    <div class="card_footer_button">
        <img src="assets/icons/grade submissions.svg" alt="">
    </div>
    <div class="card_footer_button">
        <img src="assets/icons/reports.svg" alt="">
    </div>
</div>`

        console.log(courseCard)

        course_grid.appendChild(courseCard)
    })

}



const load_announcements = () => {
    announcement_data.forEach((annoucement) => {
        const alertElement = document.createElement("div")
        alertElement.className = annoucement.checked === false ? "not_checked_alert" : "checked_alert"

        const annoucementUser = document.createElement("div")
        annoucementUser.className = "annoucement_user"
        const spanElement = document.createElement("span")
        spanElement.innerText = "PA: "
        annoucementUser.appendChild(spanElement)
        annoucementUser.innerHTML += annoucement.user
        alertElement.appendChild(annoucementUser)
        const alert_body = document.createElement("div")
        alert_body.className = "alert_body"
        alertElement.appendChild(alert_body)
        const alert_text = document.createElement("div")
        alert_text.className = "alert_text"
        const alertImg = document.createElement("div")
        alertImg.className = annoucement.checked === false ? "not_done_img" : "done_img"

        alert_text.innerHTML = annoucement.content


        alert_body.appendChild(alert_text)
        alert_body.appendChild(alertImg)


        if (annoucement.sub_content !== null) {


            const alert_sub_body = document.createElement("div")
            alert_sub_body.className = "alert_sub_body"
            const alert_sub_body_title = document.createElement("div")
            alert_sub_body_title.className = "alert_sub_body_title"
            const alert_sub_body_content = document.createElement("div")
            alert_sub_body_content.className = "alert_sub_body_content"

            alertElement.appendChild(alert_sub_body)
            alert_sub_body.appendChild(alert_sub_body_title)
            alert_sub_body_title.innerHTML = annoucement.sub_content.title
            alert_sub_body.appendChild(alert_sub_body_content)
            alert_sub_body_content.innerHTML = annoucement.sub_content.content

        }

        const announcement_footer = document.createElement("div")
        announcement_footer.className = "announcements_footer"

        if (annoucement.files !== null) {
            const annoucement_files = document.createElement("div")
            annoucement_files.className = "announcement_files"
            const file_icon = document.createElement("div")
            file_icon.className = "file_icon"
            annoucement_files.appendChild(file_icon)
            annoucement_files.innerHTML += `${annoucement.files} files are attached`
            announcement_footer.appendChild(annoucement_files)
        }
        else {


            announcement_footer.style.justifyContent = "end"

        }

        const annoucement_timestamp = document.createElement("div")
        annoucement_timestamp.className = "announcement_timestamp"
        annoucement_timestamp.innerHTML = annoucement.timestamp

        announcement_footer.appendChild(annoucement_timestamp)

        alertElement.appendChild(announcement_footer)


        annoucements_content.appendChild(alertElement)

    })
}



const load_alerts = () => {
    alerts_data.forEach((alert) => {

        const alertElement = document.createElement("div")
        alertElement.className = alert.checked === false ? "not_checked_alert" : "checked_alert"
        const alert_body = document.createElement("div")
        alert_body.className = "alert_body"
        alertElement.appendChild(alert_body)
        const alert_text = document.createElement("div")
        alert_text.className = "alert_text"
        const alertImg = document.createElement("div")
        alertImg.className = alert.checked === false ? "not_done_img" : "done_img"

        alert_text.innerHTML = alert.content


        alert_body.appendChild(alert_text)
        alert_body.appendChild(alertImg)


        if (alert.sub_content !== null) {


            const alert_sub_body = document.createElement("div")
            alert_sub_body.className = "alert_sub_body"
            const alert_sub_body_title = document.createElement("div")
            alert_sub_body_title.className = "alert_sub_body_title"
            const alert_sub_body_content = document.createElement("div")
            alert_sub_body_content.className = "alert_sub_body_content"

            alertElement.appendChild(alert_sub_body)
            alert_sub_body.appendChild(alert_sub_body_title)
            alert_sub_body_title.innerHTML = alert.sub_content.title
            alert_sub_body.appendChild(alert_sub_body_content)
            alert_sub_body_content.innerHTML = alert.sub_content.content

        }

        const alert_timestamp = document.createElement("div")
        alert_timestamp.className = "alert_timestamp"

        alert_timestamp.innerHTML = alert.timestamp

        alertElement.appendChild(alert_timestamp)



        alert_content.appendChild(alertElement)


    })
}


load_alerts()
load_announcements()
load_course_cards()

alert_btn.addEventListener("mouseover", () => {
    announcement_container.style.display = "none"
    collapse_nav_container.style.display = "none"
    collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg"
    alerts_container.style.display = alerts_container.style.display === "none" ? "block" : "none";
    annoucements_btn.style.backgroundImage = announcement_container.style.display === "none" ? 'url("assets/icons/announcements.svg")' : 'url("assets/icons/announcements_selected.svg")';
    alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
})



annoucements_btn.addEventListener("mouseover", () => {
    collapse_nav_container.style.display = "none"
    alerts_container.style.display = "none"
    collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg"
    announcement_container.style.display = announcement_container.style.display === "none" ? "block" : "none";
    alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
    annoucements_btn.style.backgroundImage = announcement_container.style.display === "none" ? 'url("assets/icons/announcements.svg")' : 'url("assets/icons/announcements_selected.svg")';
})


collapse_btn.addEventListener("mouseover", () => {
    alerts_container.style.display = "none"
    announcement_container.style.display = "none"
    alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
    annoucements_btn.style.backgroundImage = announcement_container.style.display === "none" ? 'url("assets/icons/announcements.svg")' : 'url("assets/icons/announcements_selected.svg")';
    collapse_nav_container.style.display = collapse_nav_container.style.display === "none" ? "block" : "none"
    collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg"

})