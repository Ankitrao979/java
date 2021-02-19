export interface RegisterUserRequest {
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailId: string;
    address: Address;
    password: string;
}

export interface Address {
    addressLane1: string;
    addressLane2: string;
    city: string;
    state: string;
    zipCode: string;
}
