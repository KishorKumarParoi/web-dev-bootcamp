const milestonesData = JSON.parse(data).data;

function loadMilestones() {
    const milestones = document.querySelector(".milestones");
    milestones.innerHTML = `${milestonesData
        .map(function (milestone) {
            return `<div class="milestone border-b" >
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" /></div>
                        <div onclick="openMilestone(this, ${milestone._id})">
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hidden_panel">
                    ${milestone.modules
                    .map(function (module) {
                        return `<div class="module border-b">
                            <p>${module.name}</p>
                        </div>`;
                    })
                    .join("")} 
                    </div>
                </div>`;
        })
        .join("")}`;
}

function openMilestone(milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    // console.log(shownPanel);

    // first remove previous active class
    const active = document.querySelector(".active");
    if (active && !milestoneElement.classList.contains("active"))
        active.classList.remove("active");

    // toggle current clicked one
    milestoneElement.classList.toggle("active");

    // first hide previous panel if open other than clicked one
    if (shownPanel && !currentPanel.classList.contains("show")) {
        shownPanel.classList.remove("show");
    }

    // toggle current element
    currentPanel.classList.toggle("show");
    showmilestone(id);
}

function showmilestone(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const details = document.querySelector(".details");

    // console.log(name, details);

    milestoneImage.src = milestonesData[id].image;
    name.innerText = milestonesData[id].name;
    details.innerText = milestonesData[id].description;
}

loadMilestones();
