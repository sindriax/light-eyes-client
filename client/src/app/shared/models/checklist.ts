export interface Checklist {
    checkListId?: number;
    name?: string;
    description: string;
    language?: string;
    creationDate?: Date;
    // checkListItems: ChecklistItem[]
}

// export interface ChecklistBasic {
//     id?: number;
//     creator?: string;
//     creationDate?: Date;
//     checklistTitle: string;
//     checklistDescription: string;
//     language?: string; 
// }


// export interface ChecklistItem{
//     id?: number;
//     content: string;
//     checkListItemOptions: ChecklistItemOption[]
// }

// export interface ChecklistItemOption{
//     id?: number;
//     content: string
// }