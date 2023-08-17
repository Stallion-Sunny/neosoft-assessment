import { DepartmentEnum, ImageFileInterface, LeaveDetailsInterface, UserTypeEnum } from "./other-types.interface";

export interface HeadOfDepartmentInterface extends BasicProfileDetailsInterface{
    appliedLeaves: LeaveDetailsInterface[];
}

export interface LoginCredentialsInterface {
    username: string;
    password: string;
}

export interface BasicProfileDetailsInterface extends LoginCredentialsInterface {
    profileImage?: ImageFileInterface;
    name : string;
    email: string;
    contactNumber: string;
    department: DepartmentEnum;
    userType: UserTypeEnum;
    isActive: boolean;
}

export interface StaffInterface extends BasicProfileDetailsInterface {
    appliedLeaves: LeaveDetailsInterface[];
}

export interface AdminInterface extends BasicProfileDetailsInterface{

}
