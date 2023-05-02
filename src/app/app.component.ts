import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  list = [
    {
      id: 'selectAll',
      title: 'Select All',
      checked: false,
    },
    {
      id: 'kosher',
      title: 'Kosher',
      checked: false,
    },
    {
      id: 'celery',
      title: 'No Celery (inc celeriac)',
      checked: false,
    },
    {
      id: 'egg',
      title: 'No Egg',
      checked: false,
    },
  ];

  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
 
  }

  //methods
  onChecked(id: string, checked:boolean){
    if(id === 'selectAll'){
      this.list.forEach((item) => {
        item.checked = checked;
      })
    }else {
      const allChecked = this.list.every(
        (item) => item.id === 'selectAll' || item.checked
      );
      this.list[0].checked = allChecked;

    }
  }

  clearAll(){
    this.list.forEach((item) => {
      item.checked = false;
    })
  }

  get selectedItems(){
    return this.list.filter((item) => item.checked && item.id !== 'selectAll')
  }

}


