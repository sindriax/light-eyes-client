export interface Checklist{
    checkListId?: number;
    name?: string;
    description: string;
    createdDate?: Date;
    language?: string;
    // checkListItems: ChecklistItem[]
}

export interface BasicCheckList {
    checkListId: number;
    name: string;
    description: string;
    language: string;
    createdDate: string;
}