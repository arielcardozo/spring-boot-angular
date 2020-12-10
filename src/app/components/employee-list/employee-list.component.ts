import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;
  title = 'my-app';
  defaultColDef = {
    sortable: true,
    filter: true
  };


  columnDefs = [
    { field: 'name', sortable: true, filter: true, checkboxSelection: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'DOB' },
    { field: 'position.name' },
    { field: 'sex' }
  ];


  rowData: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.rowData = this.http.get('http://localhost:8090/api/employees');
  }

  /* getSelectedRows() {
     const selectedNodes = this.agGrid.api.getSelectedNodes();
     const selectedData = selectedNodes.map(node => {
       if (node.groupData) {
         return { make: node.key, model: 'Group' };
       }
       return node.data;
     });
     const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

     alert(`Selected nodes: ${selectedDataStringPresentation}`);
   }*/
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    const selectedDataStringPresentation = selectedData.map(node => node.name + ' ' + node.age).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }


}
