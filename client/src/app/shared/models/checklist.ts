export interface Checklist{
    id?: number;
    creator?: string;
    creationDate?: Date;
    checklistTitle: string;
    checklistDescription: string;
    language?: string;

}


export interface NewChecklistData{

        name: string,
        description: string,
        language:  string,
        createdDate: string,
        checkListItems: NewChecklistItemData[],
      };

export interface NewChecklistItemData{

    content: string, 
    checkListItemOptions: NewCheckListItemOptionData[],  
}

export interface NewCheckListItemOptionData{
 content: string, 
 isPositive: boolean,

}

export interface CheckListItemOption {
    checkListItemOptionId: number;
    content: string;
    isPositive: boolean;
    checkListItemId: number;
  }
  
  export interface CheckListItem {
    checkListItemId: number;
    content: string;
    checkListId: number;
    checkListItemOptions: CheckListItemOption[];
  }
  
  export interface CheckList {
    checkListId: number;
    name: string;
    description: string;
    language: string;
    createdDate: string; // Date type could be used with Angular's DatePipe for formatting
    checkListItems: CheckListItem[];
  } 