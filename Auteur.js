"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auteur = void 0;
var Auteur = /** @class */ (function () {
    function Auteur(nom, prenom) {
        this._nom = nom;
        this._prenom = prenom;
    }
    Object.defineProperty(Auteur.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auteur.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        enumerable: false,
        configurable: true
    });
    Auteur.prototype.afficher = function () {
        return this.nom + " " + this.prenom;
    };
    return Auteur;
}());
exports.Auteur = Auteur;
