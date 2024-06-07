import { UiEvent } from "../../dsl/UiEventDLS";

export class SetName implements UiEvent{
    public constructor(public readonly username: string) {}
}
export class SetPassword implements UiEvent{
    public constructor(public readonly password: string) {}
}
export class ClickSubmit implements UiEvent{
    public constructor(){}
}
