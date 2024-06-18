import { UiEvent } from "../../dsl/UiEventDLS";

export class OnClickBuddy implements UiEvent {
    public constructor(public readonly id: number) { }
}
export class OnRefresh implements UiEvent {
    public constructor() { }
}
export class OnUserChange implements UiEvent {
    public constructor(public readonly user: string) { }
}
export class OnSortBuddies implements UiEvent{
    public constructor() { }
}
