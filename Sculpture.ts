import {Oeuvre} from "./Oeuvre";

class Sculpture extends Oeuvre{
    private _matiere: String;

    constructor(annee: number, titre: String, matiere: String) {
        super(annee, titre);
        this._matiere = matiere;
    }

    get matiere(): String {
        return this._matiere;
    }
}