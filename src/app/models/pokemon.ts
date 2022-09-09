import { Stat } from "./stat";
import { Type } from "./type";

export type Pokemon = {
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
    types: Type[];
    weight: number;
}