export class Acheteur {
    private _nom: String;
    private _prenom: String;

    constructor(nom: String, prenom: String) {
        this._nom = nom;
        this._prenom = prenom;
    }

    get nom(): String {
        return this._nom;
    }

    get prenom(): String {
        return this._prenom;
    }
}