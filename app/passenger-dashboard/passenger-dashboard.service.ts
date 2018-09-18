import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService {
    constructor() {}
    getPassengers(): Passenger[] {
        return [
            {
                id: 1,
                fullname: 'Stephen',
                checkedIn: true,
                checkedInDate: 1537285754000,
                children: [{ name: 'Peter', age: 17}, { name: 'Paul', age: 30}],
            }, {
                id: 2,
                fullname: 'Nancy',
                checkedIn: false,
                checkedInDate: null,
                children: null,
            }, {
                id: 3,
                fullname: 'Susan',
                checkedIn: true,
                checkedInDate: 1537285787000,
                children: [{ name: 'Mary', age: 23}],
            }, {
                id: 4,
                fullname: 'Steeve',
                checkedIn: false,
                checkedInDate: null,
                children: null,
            }, {
                id: 5,
                fullname: 'Steffy',
                checkedIn: true,
                checkedInDate: 1537285800000,
                children: [{ name: 'Sophie', age: 5}],
            }];
    }
}