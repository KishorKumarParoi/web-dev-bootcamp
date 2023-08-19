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

    console.log(typeof milestones.childNodes);
    const arr = Array.prototype.slice.call(milestones.childNodes, 0);
    const eachElementId = arr.map((element) => {
      return parseInt(element.id);
    });
    console.log(eachElementId);

    let sortedEachElementId = eachElementId.sort(function (a, b) {
      return a - b;
    });

    console.log(sortedEachElementId);
    let length = sortedEachElementId.length;
    // console.log(milestonesData);
    // console.log(typeof milestonesData);
    // console.log(milestonesData[2]);
    let copyMilestonesData = [...milestonesData];
    // console.log(copyMilestonesData);
    // console.log(typeof copyMilestonesData);
    // console.log(copyMilestonesData[2]);

    let k = 0;
    for (let i = 0; i < length; i++) {
      console.log(milestonesData[i]);
      milestonesData[i] = copyMilestonesData[sortedEachElementId[k]];
      console.log(copyMilestonesData[sortedEachElementId[k]]);
      k++;
    }

    // const array = [...milestones.childNodes];

    // for (let i = 1; i <= milestonesData.length; i++) {
    //     const children = milestones.childNodes;
    //     const array = [...children];
    //     const eachElementId = array.map((element) => parseInt(element.id));

    //     if (eachElementId.includes(no + i)) {
    //         const nextDiv = array.find((node) => node.id - i == no);
    //         milestones.insertBefore(
    //             item,
    //             milestones.childNodes[array.indexOf(nextDiv)]
    //         );
    //         break;
    //     } else if (i !== 14 && !eachElementId.includes(no + i)) {
    //         continue;
    //     } else if (i === 14 && !eachElementId.includes(no + i)) {
    //         milestones.appendChild(item);
    //     }
    // }
  }

  //   reload();
}

function reload() {
  const doneList = document.querySelector(".doneList");
  const milestones = document.querySelector(".milestones");
  // const doneListArray = Array.prototype.slice.call(doneList, 0);
  const milestonesArray = Array.prototype.slice.call(milestones, 0);

  console.log(doneList);
  console.log(milestones);
  // console.log(doneListArray);
  // console.log(milestonesArray);
}

loadMilestones();
