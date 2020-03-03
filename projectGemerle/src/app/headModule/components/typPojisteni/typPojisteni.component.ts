import { Component } from "@angular/core"
import { HostListener } from "@angular/core"

function zmenVyberUsera(pojisteni, targetElement){
    let celePojisteniId = "";
    if(targetElement == "proti-rozbiti-selected"){
        celePojisteniId = "proti-rozbiti";
    } else if(targetElement == "proti-kradezi-selected"){
        celePojisteniId = "proti-kradezi";
    }
    const celePojisteni = document.getElementById(celePojisteniId);
    if(pojisteni.classList.contains("invisible") == true){
        pojisteni.classList.remove("invisible");
        celePojisteni.classList.remove("notSelected-pojisteni");
        celePojisteni.classList.add("selected-pojisteni");
    } else if(pojisteni.classList.contains("invisible") == false){
        pojisteni.classList.add("invisible");
        celePojisteni.classList.remove("selected-pojisteni");
        celePojisteni.classList.add("notSelected-pojisteni");
    }
}
function zmenPoKlikuZvarazneniVolby(targetElement){
    const protiKradezi = document.querySelector("#proti-kradezi");
    const protiRozbiti = document.querySelector("#proti-rozbiti");
    if(protiKradezi.classList.contains("selected-pojisteni") && !protiRozbiti.classList.contains("selected-pojisteni")){
        protiKradezi.classList.remove("selected-pojisteni");
        protiKradezi.classList.add("notSelected-pojisteni");
    }
    if(protiRozbiti.classList.contains("selected-pojisteni") &&  !protiKradezi.classList.contains("selected-pojisteni")){
        protiRozbiti.classList.remove("selected-pojisteni");
        protiRozbiti.classList.add("notSelected-pojisteni");
    }
    if(protiRozbiti.classList.contains("selected-pojisteni") &&  protiKradezi.classList.contains("selected-pojisteni")){
        let selectedPojisteniId = "";
        if(targetElement == "proti-rozbiti-selected"){
            selectedPojisteniId = "proti-rozbiti";
        } else if(targetElement == "proti-kradezi-selected"){
            selectedPojisteniId = "proti-kradezi";
        }
        const selectedPojisteni = document.getElementById(selectedPojisteniId);
        selectedPojisteni.classList.remove("selected-pojisteni");
        selectedPojisteni.classList.add("notSelected-pojisteni");
    }
}

@Component ({
    selector: "typPojisteni",
    styleUrls: ["typPojisteni.component.scss"],
    templateUrl: "./typPojisteni.component.html"
})

export class typPojisteni {
    @HostListener("click", ['$event.target.id']) 
    onClick(targetElement: string){
        const celePojisteni = document.getElementById(targetElement);
        const typPojisteni = celePojisteni.getAttribute("typPojisteni");
        const pojisteni = document.getElementById(typPojisteni);
        if(pojisteni){
            zmenVyberUsera(pojisteni, typPojisteni);
        } else if(targetElement == "proti-rozbiti-selected" || targetElement == "proti-kradezi-selected"){
            zmenPoKlikuZvarazneniVolby(targetElement);
            const pojisteniKlicked = document.getElementById(targetElement);
            zmenVyberUsera(pojisteniKlicked, targetElement);
        }
    }
};