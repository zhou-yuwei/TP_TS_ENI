import {Acheteur} from "./Acheteur";

export interface Vendable {
    meilleureEnchere: number;
    nouvelleEnchere: number;
    acheteur?: Acheteur;
    encherir(nouvelleEnchere, acheteur): void;


}