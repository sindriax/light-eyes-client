export interface Checklist {
    checkListId?: number;
    name?: string;
    description: string;
    language?: string;
    creationDate?: Date;
    // checkListItems: ChecklistItem[]
}

export interface BasicCheckList {
    checkListId: number;
    name: string;
    description: string;
    language: string;
    createdDate: string;
}