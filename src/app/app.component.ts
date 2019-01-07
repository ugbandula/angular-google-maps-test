import {Component, OnInit, ViewChild, Inject, NgZone} from '@angular/core';
import { } from 'googlemaps';
// import { } from '@types/googlemaps';
import * as MarkerClusterer from '@google/markerclusterer';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EventDetailsDialogComponent} from './event-details/event-details.component';

declare var google: any;

export interface DialogData {
  eventId: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular Google Maps Test';

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  // public dialog: MatDialog;

  constructor(private zone: NgZone, private dialog: MatDialog) {
    // this.dialog = dialogIn;
    // console.log(this.dialog);
  }

  // openDialog(): void {
  //   console.log(this.dialog);
  //   const dialogRef = this.dialog.open(EventDetailsDialog, {
  //     width: '250px',
  //     data: {eventId: 'TEST'}
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed ' + result);
  //   });
  // }

  ngOnInit(): void {
    let imageMarkerCluster = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
    // let imageMarkerCluster = '../assets/multiple-activities.png';
    let mapProp = {
      center: new google.maps.LatLng(-37.817760, 145.192001),
      zoom: 15,
      mapTypeId:          google.maps.MapTypeId.ROADMAP,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl:     false,
      streetViewControl:  false,
      rotateControl:      false,
      fullscreenControl:  false
    };

    // console.log(this.dialog);
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    let locations = [
      {lat: -37.8826872, lng: 145.1308339},
      {lat: -37.8005201, lng: 145.3043535},
      {lat: -37.8891473, lng: 145.1645347}
    ];

    // let marker = new google.maps.Marker({position: {lat: -37.8005201, lng: 145.3043535}, map: this.map});

    let markers: any;
    // this.zone.run(() => {
    markers = locations.map(function(location, i) {
      let marker = new google.maps.Marker({
        position: location,
        label: ''+i
      });

      google.maps.event.addListener(marker, 'click', function() {
        this.map.setZoom(15);
        this.map.setCenter(marker.getPosition());

        // Display the event details dialog
        // openDialog();

        this.zone.run(() => {
          console.log(this.dialog);
          const dialogRef = this.dialog.open(EventDetailsDialogComponent, {
            width: '250px',
            data: {eventId: 'TEST'}
          });


          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed ' + result);
          });
        });
      });

      // marker.addListener('click', function() {
      //   this.map.setZoom(15);
      //   this.map.setCenter(marker.getPosition());
      //
      //   // Display the event details dialog
      //   // openDialog();
      //
      //     console.log(this.dialog);
      //     const dialogRef = this.dialog.open(EventDetailsDialog, {
      //       width: '250px',
      //       data: {eventId: 'TEST'}
      //     });
      //
      //     dialogRef.afterClosed().subscribe(result => {
      //       console.log('The dialog was closed ' + result);
      //     });
      //
      // });

      return marker;
    });
    // });

    let marketCluster = new MarkerClusterer(this.map, markers, { imagePath: imageMarkerCluster});
  }

}
