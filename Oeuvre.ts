import {Vendable} from "./Vendable";
import {Affichable} from "./Affichable";
import {Acheteur} from "./Acheteur";
import {Auteur} from "./Auteur";

export class Oeuvre implements Vendable, Affichable{
    private auteurs : Auteur[];
    public annee: number;
    public titre: String;
    public acheteur: Acheteur;
    public meilleureEnchere: number;
    public nouvelleEnchere: number;


    constructor(annee: number, titre: String, acheteur: Acheteur, meilleureEnchere: number) {
        this.auteurs = [];
        this.annee = annee;
        this.titre = titre;
        this.acheteur = acheteur;
        this.meilleureEnchere = meilleureEnchere;
    }

    encherir(nouvelleEnchere, acheteur){
        if (nouvelleEnchere >= this.meilleureEnchere)
        {
            this.meilleureEnchere = nouvelleEnchere;
            this.acheteur = acheteur;
        }

        if(isNaN(this.meilleureEnchere))
            console.log("%d est encheré par %s", this.meilleureEnchere, this.acheteur);
    }

    public ajouterAuteur(auteur: Auteur){
            this.auteurs.push(auteur);
    }

    afficher(): String{

        return this.annee.toString() +" "+ this.titre;

    }



}