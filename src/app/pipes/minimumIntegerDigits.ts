import { Pipe, PipeTransform } from "@angular/core";
import { __values } from "tslib";

@Pipe({
    name: 'minimumIntegerDigits'
})

export class MinimumIntegerDigits implements PipeTransform {
    transform(value: number, numberDigits: number): string {
        return value.toLocaleString(undefined, { minimumIntegerDigits: numberDigits })
    }
}