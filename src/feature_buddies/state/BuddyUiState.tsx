export interface BuddyUiState {
    currentUser: string;
    buddies: Buddy[];
    errorMessage: string;
    isError: Boolean;
}

export interface Buddy {
    CrewmemberID: number;
    LC: string;
    Name: string;
}