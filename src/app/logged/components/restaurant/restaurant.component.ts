import { Cities } from './../../../interfaces/Cites';
import { RestaurantService } from './../../../ServiceGeneral/restaurant/restaurant.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
interface Food {
  value: string;
  viewValue: string;
}
export interface DialogData {
  item: []
}
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  foods: Cities;
  citiesSelect = [];
  restaurants = [];
  titleRestaurnd: string;
  constructor(public restauraService: RestaurantService, public dialog: MatDialog) { }

  ngOnInit() {
    this.titleRestaurnd = "Restauran daniel";
    this.getCitiesComponent();
    this.getRestaurantComponent();
  }
  async changeRatio(event) {
    console.log(event.value);
    this.restauraService.getResturantByFilter(event.value).subscribe((restaurantApi) => {
      this.restaurants = restaurantApi.restaurants
      console.log(this.restaurants);
    }, (err: any) => {
      console.log(err)
    })
  }
  async getCitiesComponent() {

    this.restauraService.getCities().subscribe((citiesApi) => {
      const cities = citiesApi.cities;
      this.pushCities(cities);
      console.log(this.foods);
    }, (err: any) => {
      console.log(err)
    })

  }
  pushCities(cities) {
    cities.forEach(element => {
      this.citiesSelect.push({
        name: element
      })
    });
  }

  getRestaurantComponent() {
    this.restauraService.getRestaurant().subscribe((restaurantApi) => {
      this.restaurants = restaurantApi.restaurants
    }, (err: any) => {
      console.log(err)
    })
  }
  openDialog(item) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '650px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.restauraService.setResevartion(result);
    });
    console.log("show" + item.name);
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: [], public restaurantS: RestaurantService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  reselva() {
    this.restaurantS.setResevartion(this.data);
    this.dialogRef.close();
  }

}
