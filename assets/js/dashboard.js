
const medListDiv = document.getElementById("card-div"); 


let medList = [

    {
        medName: "Aspirin", 
        medPurpose: "Pain reliver, Clot prevention",
        frequency: "Every 12 hours",
        dosage: "81 mg" 
        
    },

    {
        medName: "Oxycodone w/Acetaminophen", 
        medPurpose: "Pain reliever",
        frequency: "Every 4 hours",
        dosage: "325 mg"
        
    },

    {
        medName: "Zofran", 
        medPurpose: "Antinausea",
        frequency: "Every 8 hours",
        dosage: "40 mg"
        
    },

]


function createMedCards() {

    // cardCounter = 1;

    // console.log(medList[0]);

    // for ( let i = 0; i < medList.length; i++) {

    //     let newMedCard = $("<h3>");
    //     let newMedName = medList[i].medName;

    //     newMedCard.text(newMedName);
    //     newMedCard.appendTo(medListDiv);
    // }

    $(medList).each(function(i, med) {

        template =`
        <div class="card col-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${med.medName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${med.medPurpose}</h6>
                <p class="card-text">${med.frequency}</p>
                <p class="card-text">${med.dosage}</p>
            </div>
        </div>
        `
        console.log(template);

        medListDiv.insertAdjacentHTML("beforeend", template);
    })

};

createMedCards();