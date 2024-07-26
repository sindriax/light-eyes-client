export interface Report {
    reportId?: number;
    name: string;
    description?: string;
    language: string;
    creationDate: Date;
    content: string;
}