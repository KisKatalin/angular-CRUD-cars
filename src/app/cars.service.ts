import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()

export class CarService {
  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<any>('http://localhost:3000/cars')
      .map((response: Response) => {
        return response
      });
  }

  addCar(carName: string, carColor: string) {
    const data = {
      name: carName,
      color: carColor,
    }
    return this.http.post('http://localhost:3000/cars', data)
    // .map((response : Response) => {
    //   return response.json();
    // });
  }
  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
    // .map((response : Response) => response.json());
  }
  deleteOneCar(car : any){
return this.http.delete(`http://localhost:3000/cars/${car.id}`)
  }

}