import { Component } from "@angular/core"
import { HostListener } from "@angular/core"
/**
 * 
 * @param selectedUhrada {element na kterem se vypíná/zapíná výběr uživatele}
 */
function prebarvi(selectedUhrada) {
    if(selectedUhrada.classList.contains("notSelected-uhrada")){
        selectedUhrada.classList.remove("notSelected-uhrada")
        selectedUhrada.classList.add("selected-uhrada")
    } else if(selectedUhrada.classList.contains("selected-uhrada")){
        selectedUhrada.classList.remove("selected-uhrada");
        selectedUhrada.classList.add("notSelected-uhrada")
    }
}
function zobrazObrazek(id){
    const typPojisteni = document.getElementById(id);
    if(typPojisteni.classList.contains("notSelected-uhrada-image") == true){
        typPojisteni.classList.add("selected-uhrada-image");
        typPojisteni.classList.remove("notSelected-uhrada-image");
    } else if(typPojisteni.classList.contains("selected-uhrada-image") == true){
        typPojisteni.classList.remove("selected-uhrada-image");
        typPojisteni.classList.add("notSelected-uhrada-image");
    }
    if(typPojisteni.classList.contains("invisible") == true){
        typPojisteni.classList.remove("invisible")
    } else if(!typPojisteni.classList.contains("invisible")){
        typPojisteni.classList.add("invisible");
    }
}

@Component ({
    selector: "typUhrady",
    styleUrls: ["typUhrady.component.scss"],
    templateUrl: "./typUhrady.component.html"
})

export class typUhrady {
    @HostListener("click", ['$event.target.id']) 
    onClick(targetElement: string){
        const selectedUhrada = document.getElementById(targetElement);
        const predchoziVyberObrazek = document.querySelector(".selected-uhrada-image")
        const predchoziVyber = document.querySelector(".selected-uhrada");
        if(predchoziVyber && predchoziVyberObrazek){
            predchoziVyberObrazek.classList.add("invisible");
            predchoziVyberObrazek.classList.add("notSelected-uhrada-image");
            predchoziVyberObrazek.classList.remove("selected-uhrada-image");
            predchoziVyber.classList.remove("selected-uhrada");
            predchoziVyber.classList.add("notSelected-uhrada");
        }
        const dobaSplatky = document.getElementById(targetElement).getAttribute("dobaSplatky");
        zobrazObrazek(dobaSplatky);
        prebarvi(selectedUhrada);
    }
}