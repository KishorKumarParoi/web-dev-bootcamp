const milestonesData = JSON.parse(data).data;

function loadMilestones() {
    const milestones = document.querySelector(".milestones");
    milestones.innerHTML = `${milestonesData
        .map(function (milestone) {
            return `<div class="milestone border-b" id="${milestone._id}" >
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this,${milestone._id
                })" /></div>
                        <div onclick="openMilestone(this, ${milestone._id})">
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hidden_panel" id="${milestone._id}">
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

    // opactity zero
    milestoneImage.style.opacity = 0;

    milestoneImage.src = milestonesData[id].image;
    name.innerText = milestonesData[id].name;
    details.innerText = milestonesData[id].description;
}

// liten for hero image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.addEventListener("load", function () {
    milestoneImage.style.opacity = 1;
});

function markMileStone(checkbox, id) {
    // const checkBox = document.querySelector(".checkbox");
    const item = document.getElementById(id);
    const doneList = document.querySelector(".doneList");
    const milestones = document.querySelector(".milestones");

    // console.log(checkbox);
    // console.log(checkBox);
    // console.log(item);
    // console.log(doneList);
    // console.log(milestones);

    if (checkbox.checked) {
        milestones.removeChild(item);
        doneList.appendChild(item);
    } else {
        doneList.removeChild(item);
        milestones.appendChild(item);
    }

    reload();
}

function reload() {
    const doneList = document.querySelector(".doneList").childNodes;
    const milestones = document.querySelector(".milestones").childNodes;
    const doneListArray = Array.prototype.slice.call(doneList, 0);
    const milestonesArray = Array.prototype.slice.call(milestones, 0);

    console.log(doneList);
    console.log(doneListArray);
    console.log(milestones);
    console.log(milestonesArray);
}

loadMilestones();
