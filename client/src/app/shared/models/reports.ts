import { DatePipe } from "@angular/common";

export interface Report {
    id: number;
    name: string;
    description: string;
    content: string;
    type: string;
    createdDate: DatePipe; // Date type could be used with Angular's DatePipe for formatting
    language: string;
    checkListId: number;
    checkList: CheckList;
    reportControlDataId: number;
    reportControlData: ReportControlData;
    clientId: number;
    client: Client;
    reportCheckListItems: ReportCheckListItem[];
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
  
  export interface ReportControlData {
    id: number;
    reviewDate: string; // Date type could be used with Angular's DatePipe for formatting
    createdBy: string;
    validatedBy: string;
    reviewedBy: string;
    documentCode: string;
    department: string;
    reportId: number;
  }
  
  export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    companyName: string;
    area: string;
    contactEmail: string;
    contactPhone: string;
  }
  
  export interface ReportCheckListItemOption {
    id: number;
    reportCheckListItemId: number;
    checkListItemOptionId: number;
    checkListItemOption: CheckListItemOption;
    isSelected: boolean;
  }
  
  export interface ReportCheckListItem {
    id: number;
    reportId: number;
    checkListItemId: number;
    checkListItemContent: string;
    reportCheckListItemOptions: ReportCheckListItemOption[];
  }
  
 
  