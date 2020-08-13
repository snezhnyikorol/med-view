export interface ReceptionModel {
    id: number;
    idCustomer: number;
    idEmployee: number;
    receptionCode: string
    startDate: string;          //Date in ISO format
    endDate: string;
    status: string;
    payment: {
      
    }
    paymentStatus: string;
    cost: string;
    diagnosis: string;
    treatment: string;
    prescription: string;
    note: string;
}
