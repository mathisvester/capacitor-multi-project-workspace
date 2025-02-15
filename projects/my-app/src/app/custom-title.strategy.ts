import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRouteSnapshot, DefaultTitleStrategy, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class CustomTitleStrategy extends DefaultTitleStrategy {
    constructor(title: Title) {
        super(title);
    }

    override buildTitle(snapshot: RouterStateSnapshot): string | undefined {
        return super.buildTitle(snapshot);
    }

    override getResolvedTitleForRoute(snapshot: ActivatedRouteSnapshot) {
        const appendParentTitle: boolean | undefined = snapshot.data['appendParentTitle'];
        if (appendParentTitle) {
            const parentTitle: string | undefined = snapshot.parent?.title;
    
            return parentTitle ? `${super.getResolvedTitleForRoute(snapshot)} - ${parentTitle}` : super.getResolvedTitleForRoute(snapshot);
        } else {
            return super.getResolvedTitleForRoute(snapshot);
        }
    }
}