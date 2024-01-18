const alerts_container: HTMLElement | null = document.getElementById("alerts_container");
const alert_content: HTMLElement | null = document.getElementById("alert_content");
const alert_btn: HTMLElement | null = document.getElementById("alert_btn");
const announcement_container: HTMLElement | null = document.getElementById("announcements_container");
const annoucements_content: HTMLElement | null = document.getElementById("announcements_content");
const annoucements_btn: HTMLElement | null = document.getElementById("announcements_btn");
const collapse_btn: HTMLImageElement | null = document.getElementById("collapse_btn") as HTMLImageElement;
const collapse_nav_container: HTMLElement | null = document.getElementById("collapse_nav_container");
const course_grid: HTMLElement | null = document.getElementById("course_card_grid");

if (announcement_container && alerts_container && collapse_nav_container) {
    announcement_container.style.display = "none";
    alerts_container.style.display = "none";
    collapse_nav_container.style.display = "none";
}



const alertJsonFilePath: string = "./alertData.json";
const annoucementJsonFilePath: string = "./announcementData.json";
const courseJsonFilePath: string = "./courseData.json";

let alert_data: any[] = [];
let announcement_data: any[] = [];
let course_card_data: any[] = [];

const fetchAlertJson = async (): Promise<void> => {
    try {
        const response = await fetch(alertJsonFilePath);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();

        alert_data = jsonData;
        console.log(alert_data);
        load_alerts();
    } catch (error) {
        console.error('Error fetching JSON:', (error as Error).message);
    }
};

fetchAlertJson();

const fetchAnnouncementJson = async (): Promise<void> => {
    try {
        const response = await fetch(annoucementJsonFilePath);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();

        announcement_data = jsonData;
        load_announcements();
    } catch (error) {
        console.error("Error fetching JSON", (error as Error).message);
    }
};

fetchAnnouncementJson();

const fetchCourseJson = async (): Promise<void> => {
    try {
        const response = await fetch(courseJsonFilePath);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();

        course_card_data = jsonData;
        load_course_cards();
    } catch (error) {
        console.error("Error fetching JSON", (error as Error).message);
    }
};

fetchCourseJson();

const load_course_cards = (): void => {
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

        course_grid?.appendChild(courseCard)
    })};

const load_announcements = (): void => {
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


        annoucements_content?.appendChild(alertElement)

    })};

const load_alerts = (): void => {
    alert_data.forEach((alert) => {

        console.log(alert)

        const alertElement = document.createElement("div")
        alertElement.className = alert["checked"] === false ? "not_checked_alert" : "checked_alert"
        const alert_body = document.createElement("div")
        alert_body.className = "alert_body"
        alertElement.appendChild(alert_body)
        const alert_text = document.createElement("div")
        alert_text.className = "alert_text"
        const alertImg = document.createElement("div")
        alertImg.className = alert["checked"] === false ? "not_done_img" : "done_img"

        alert_text.innerHTML = alert["content"]


        alert_body.appendChild(alert_text)
        alert_body.appendChild(alertImg)


        if (alert["sub_content"] !== null) {


            const alert_sub_body = document.createElement("div")
            alert_sub_body.className = "alert_sub_body"
            const alert_sub_body_title = document.createElement("div")
            alert_sub_body_title.className = "alert_sub_body_title"
            const alert_sub_body_content = document.createElement("div")
            alert_sub_body_content.className = "alert_sub_body_content"

            alertElement.appendChild(alert_sub_body)
            alert_sub_body.appendChild(alert_sub_body_title)
            alert_sub_body_title.innerHTML = alert["sub_content"]["title"]
            alert_sub_body.appendChild(alert_sub_body_content)
            alert_sub_body_content.innerHTML = alert["sub_content"]["content"]

        }

        const alert_timestamp = document.createElement("div")
        alert_timestamp.className = "alert_timestamp"

        alert_timestamp.innerHTML = alert["timestamp"]

        alertElement.appendChild(alert_timestamp)



        alert_content?.appendChild(alertElement)


    })};


    alert_btn?.addEventListener("mouseover",()=>{
        
        if(alerts_container){
            alerts_container.style.display = alerts_container.style.display === "none"? "block":"none";
            if(alert_btn){
                alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
            }
        }
        if(announcement_container){
            announcement_container.style.display = "none"
            if(annoucements_btn){
                annoucements_btn.style.backgroundImage = announcement_container.style.display === "none"  ? 'url("assets/icons/announcements.svg")': 'url("assets/icons/announcements_selected.svg")';
            }

        }
        if(collapse_nav_container){
            collapse_nav_container.style.display = "none"
            collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";

        }
    })


    annoucements_btn?.addEventListener("mouseover",()=>{

        console.log("hello")

        if(announcement_container){
            announcement_container.style.display = announcement_container.style.display==="none"? "block": "none";
            if(annoucements_btn){
                annoucements_btn.style.backgroundImage = announcement_container.style.display === "none"
                 ? 'url("assets/icons/announcements.svg")'
                : 'url("assets/icons/announcements_selected.svg")';
            }
        }
        if(collapse_nav_container){
            collapse_nav_container.style.display = "none"
            collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";

        }
        if(alerts_container){
            alerts_container.style.display = "none"
            if(alert_btn){
                alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
            }
        }
    })


    collapse_btn.addEventListener("mouseover",()=>{
        if(announcement_container){
            announcement_container.style.display = "none"
            if(annoucements_btn){
                annoucements_btn.style.backgroundImage = announcement_container.style.display === "none"
                 ? 'url("assets/icons/announcements.svg")'
                : 'url("assets/icons/announcements_selected.svg")';
            }
        }
        if(collapse_nav_container){
            collapse_nav_container.style.display = collapse_nav_container.style.display === "none"? "block" : "none"
            collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";

        }
        if(alerts_container){
            alerts_container.style.display = "none"
            if(alert_btn){
                alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
            }
        }
    })


    alerts_container?.addEventListener("mouseleave",()=>{
        if(alerts_container){
            alerts_container.style.display = "none"
            if(alert_btn){
                alert_btn.style.backgroundImage = alerts_container.style.display === "none" ? 'url("assets/icons/alerts.svg")' : 'url("assets/icons/alerts_selected.svg")';
            }
        }
    })

    announcement_container?.addEventListener("mouseleave",()=>{
        if(announcement_container){
            announcement_container.style.display = "none"
            if(annoucements_btn){
                annoucements_btn.style.backgroundImage = announcement_container.style.display === "none"
                 ? 'url("assets/icons/announcements.svg")'
                : 'url("assets/icons/announcements_selected.svg")';
            }
        }
    })


    collapse_nav_container?.addEventListener("mouseleave",()=>{
        if(collapse_nav_container){
            collapse_nav_container.style.display = "none"
            collapse_btn.src = collapse_nav_container.style.display === "none" ? "assets/icons/hamburger.svg" : "assets/icons/hamburgerSelected.svg";

        }
    })