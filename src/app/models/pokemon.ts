import { Stat } from "./stat";
import { IType } from "./type";

export interface IPokemon {
    id: number;
    name: string;
    sprites: {
        back_default: string;        
        versions: {
            'generation-v': {
                'black-white': {
                    animated: {
                        front_default: string;
                    }
                }
            };
            'generation-viii': {
                icons: {
                    front_default: string;
                }
            }
        }
    };
    stats: Stat[];
    types: IType[];
    weight: number;
}