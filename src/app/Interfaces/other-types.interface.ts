export interface ImageFileInterface {
    base64?: string;
    imageURL?: string;
    mimeType?: string;
    fileSize?: string;
}

export enum DepartmentEnum {
    Engineering = '0',
    Quality_Assurance = '1',
    Management = '2',
    Human_Resources = '3'
}

export enum UserTypeEnum {
    Staff = '0',
    HOD = '1',
    Admin = '2'
}

export interface LeaveDetailsInterface {
    startDate: Date | string;
    endDate : Date | string;
    reason: string;
    numberOfDays: number;
    leaveStatus: LeaveStatusEnum
}

export enum LeaveStatusEnum {
    Pending = 'Pending',
    Approved = 'Approved',
    Declined = 'Declined'
}