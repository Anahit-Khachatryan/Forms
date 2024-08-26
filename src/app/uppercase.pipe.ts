import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myuppercase',
    standalone: true,
    pure: false
})
export class MyUpperCasePipe implements PipeTransform {
    transform(value: string, prefix: string, spaceCount: number) {
        return `${prefix}${'-'.repeat(spaceCount)} ${value.toUpperCase()}`;
    }
}

//pipe ashxatum objeci depkum referenca, primitive depkum el valuenery
//isk pure false-i depkum amenViewInit-ic heto erb angulary valunery poxancum e templatein stugum e valuenery poxvela te che, AfterViewChecked - formi verjin dasi verum e asum