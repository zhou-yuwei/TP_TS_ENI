"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oeuvre = void 0;
var Oeuvre = /** @class */ (function () {
    function Oeuvre(annee, titre, acheteur, meilleureEnchere) {
        this.auteurs = [];
        this.annee = annee;
        this.titre = titre;
        this.acheteur = acheteur;
        this.meilleureEnchere = meilleureEnchere;
    }
    Oeuvre.prototype.encherir = function (nouvelleEnchere, acheteur) {
        if (nouvelleEnchere >= this.meilleureEnchere) {
            this.meilleureEnchere = nouvelleEnchere;
            this.acheteur = acheteur;
        }
        if (isNaN(this.meilleureEnchere))
            console.log("%d est encheré par %s", this.meilleureEnchere, this.acheteur);
    };
    Oeuvre.prototype.ajouterAuteur = function (auteur) {
        this.auteurs.push(auteur);
    };
    Oeuvre.prototype.afficher = function () {
        return this.annee.toString() + " " + this.titre;
    };
    return Oeuvre;
}());
exports.Oeuvre = Oeuvre;
