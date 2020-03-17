import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor() { }
  title='Thông tin dịch COVID-19 tại 1 số bệnh viện';

  ngOnInit(): void {
  }
  hospitalList = [
    {
      id: 1,
      name: 'BV Bạch Mai',
      img: 'https://lh3.googleusercontent.com/proxy/0zL-UytSiu_9wsucSNyJGAmzkIeI-HrAUCxCz4NErP7sN-Y8iWf5Y4AVP0GodYAvZb62Fz8yyCh7QBXwsE1Ce3s3C5cVQ6ZDO4ObWKGlZjK9d37qodp1ZnV40SqFaJIls7D_R-LbiqT7aOPLvHElQSJqBgrQ9MCQwYLq5g6Rsg',
      tengd: 'Lê Đức Quyền',
      diachi: 'Hưng Yên',
      socanhiem: 200,
      socachuakhoi: 10,
      socatuvong: 10
    },
    {
      id: 2,
      name: 'BV Truyền Nhiễm',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSthto-9cRlWeLbcY_xOnHNFZGN70-ByuyO09lyOr4mdsAt-EHt',
      tengd: 'Quyền Lê Đức',
      diachi: 'Hà Nội',
      socanhiem: 199,
      socachuakhoi: 2,
      socatuvong: 23
    },
    {
      id: 3,
      name: 'BV Thanh Nhàn',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSt_YgwnvT3ijIQ4-mFSNsS3wt9c638_thQCIsuSzJSseTV1qNe',
      tengd: 'Lê Đức Quyền',
      diachi: 'Việt Nam',
      socanhiem: 1994,
      socachuakhoi: 10,
      socatuvong: 1
    }
  ];
  customHospital = {
    id: null,
    name: null,
    img: '',
    tengd:null,
    diachi: null,
    socanhiem:null,
    socachuakhoi: null,
    socatuvong:null
  }
  cancel(){
    this.customHospital = {
      id: null,
      name: null,
      img: '',
      tengd:null,
      diachi: null,
      socanhiem:null,
      socachuakhoi: null,
      socatuvong:null
    }
  }
  saveHospital(){
    if(this.customHospital.id==null){
      let maxId=0;
      this.hospitalList.forEach(function(item){
        if(item.id>=maxId){
          item.id=maxId;
        }
      });
      this.customHospital.id=++maxId;
      this.hospitalList.push(this.customHospital);
      this.cancel();
    }
  }
  editHospital(hospital){
    this.customHospital=hospital;
  }
  removeHospital(hospital){
    this.hospitalList=this.hospitalList.filter(function(item){
     return item !=hospital;
    });
  }
}
