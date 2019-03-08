import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-havmor',
  templateUrl: './havmor.component.html',
  styleUrls: ['./havmor.component.scss']
})
export class HavmorComponent implements OnInit {

  department: any[] = [
    { name: 'Asset', icon: 'fa fa-cubes', show: true },
    { name: 'Finance', icon: 'fa fa-rupee', show: true },
    { name: 'Reseller', icon: 'fa fa-thumbs-up', show: true },
    { name: 'OEM', icon: 'fa fa-universal-access', show: true },
    { name: 'Purchase', icon: 'fa fa-tags', show: true },
    { name: 'All', icon: 'fa fa-database' },
  ];
  source: any[] = [
    { 
      'SRNO': '1',
      'EQUIPMENTN0': '147852369','ASSETNO': '1236548', 'BARCODENO': '2012651',
              'VENDOR_MANUFACTURING_SERIALNO': 'NA','ASSET_DESCRIPTION': 'Blue Star 400 F Glass(Model No.GT400-A)',
              'ASSET_CAPACITY': '400 L','ASSET_TYPE': 'GLASS TOP','ATOS_GENERATED_NO': 'NS_01307931_1521010558247', 
        
      'PLANT': '1013', 'COSTCENTER': '718013',
      'ASSET_CAP_DATE': '42842', 'ASSET_VALUE': '21200',
      'TBASE_DEPOSIT_AMOUNT': '15000', 'AMOUNT_PAID_DATE': '43189', 'CHEQUENO': '56888', 
      'REFUND_AMOUNT_PAID': '0', 'REFUND_AMOUNT_PAID_DATE': '0', 'REMARKS': '0', 
      'SERVICE_CHARGE_AMOUNT_PAID_DATE': '43189', 'SERVICE_CHARGE_AMOUNT': '0', 
      'SERVICE_CHARGE_DUE_DATE': '0',   

      'RESELLER_CODE': '90071564', 'RESELLER_NAME': 'SAI SUDHA SUPER MARKET',
      'RESELLER_ADDRESS': 'OPP AN UNIVERSITY,RAIN TREE PARK,TEAK BLOCK,VIJAYAWADA', 
      'AREA': 'Vijayawada', 'STATE': 'Andhra Pradesh', 'PINCODE': '560011', 
      'CONTACT_PERSON': 'Mr.Lalit', 'TELNO': '9505523233', 'SALES_DISTRICT': 'Andhra Pradesh', 
      'DIST_STORAGE_LOCATION': 'AP-Vijayawada(Datta)', 'CATEGORY': 'D- Base',


      'VENDOR_NAME': 'Blue Star Ltd',

      'GRN_NO': '5000501227', 'GRN_DATE': '42899',
      'MATERIAL_CODE': 'DFBL131','PURCHASE_ORDER_NO': '2100011129',
      'SALES_ORDER_NO': '0000029195','ORDER_TYPE': 'ZDFI','ORDER_DATE': '43190',
      'DELIVERY_DATE': '43221', 'VENDOR_BILL_NO': '123', 

      'CHANNEL': 'Retail',
      'ASSET_CATEGORY': 'New'     
    },
    { 
      'SRNO': '2',

     'EQUIPMENTN0': '3652148525','ASSETNO': '6598523', 'BARCODENO': '2012651',
              'VENDOR_MANUFACTURING_SERIALNO': 'NA','ASSET_DESCRIPTION': 'Blue Star 400 F Glass(Model No.GT400-A)',
              'ASSET_CAPACITY': '400 L','ASSET_TYPE': 'GLASS TOP','ATOS_GENERATED_NO': 'NS_01307931_1521010558247', 
          

    'PLANT': '1013', 'COSTCENTER': '718013',
      'ASSET_CAP_DATE': '42842', 'ASSET_VALUE': '21200',
      'TBASE_DEPOSIT_AMOUNT': '15000', 'AMOUNT_PAID_DATE': '43189', 'CHEQUENO': '56888', 
      'REFUND_AMOUNT_PAID': '0', 'REFUND_AMOUNT_PAID_DATE': '0', 'REMARKS': '0', 
      'SERVICE_CHARGE_AMOUNT_PAID_DATE': '43189', 'SERVICE_CHARGE_AMOUNT': '0', 
      'SERVICE_CHARGE_DUE_DATE': '0',   

     'RESELLER_CODE': '90071564', 'RESELLER_NAME': 'SAI SUDHA SUPER MARKET',
      'RESELLER_ADDRESS': 'OPP AN UNIVERSITY,RAIN TREE PARK,TEAK BLOCK,VIJAYAWADA', 
      'AREA': 'Vijayawada', 'STATE': 'Andhra Pradesh', 'PINCODE': '560011', 
      'CONTACT_PERSON': 'Mr.Lalit', 'TELNO': '9505523233', 'SALES_DISTRICT': 'Andhra Pradesh', 
      'DIST_STORAGE_LOCATION': 'AP-Vijayawada(Datta)', 'CATEGORY': 'D- Base',

      'VENDOR_NAME': 'Blue Star Ltd',

      'GRN_NO': '5000501227', 'GRN_DATE': '42899',
      'MATERIAL_CODE': 'DFBL131','PURCHASE_ORDER_NO': '2100011129',
      'SALES_ORDER_NO': '0000029195','ORDER_TYPE': 'ZDFI','ORDER_DATE': '43190',
      'DELIVERY_DATE': '43221', 'VENDOR_BILL_NO': '123',

      'CHANNEL': 'Retail',
      'ASSET_CATEGORY': 'New'     
    },
    { 
      'SRNO': '3',

      'EQUIPMENTN0': '2565365456','ASSETNO': '2724693', 'BARCODENO': '2012651',
              'VENDOR_MANUFACTURING_SERIALNO': 'NA','ASSET_DESCRIPTION': 'Blue Star 400 F Glass(Model No.GT400-A)',
              'ASSET_CAPACITY': '400 L','ASSET_TYPE': 'GLASS TOP','ATOS_GENERATED_NO': 'NS_01307931_1521010558247', 
    

     'PLANT': '1013', 'COSTCENTER': '718013',
      'ASSET_CAP_DATE': '42842', 'ASSET_VALUE': '21200',
      'TBASE_DEPOSIT_AMOUNT': '15000', 'AMOUNT_PAID_DATE': '43189', 'CHEQUENO': '56888', 
      'REFUND_AMOUNT_PAID': '0', 'REFUND_AMOUNT_PAID_DATE': '0', 'REMARKS': '0', 
      'SERVICE_CHARGE_AMOUNT_PAID_DATE': '43189', 'SERVICE_CHARGE_AMOUNT': '0', 
      'SERVICE_CHARGE_DUE_DATE': '0',   

      'RESELLER_CODE': '90071564', 'RESELLER_NAME': 'SAI SUDHA SUPER MARKET',
      'RESELLER_ADDRESS': 'OPP AN UNIVERSITY,RAIN TREE PARK,TEAK BLOCK,VIJAYAWADA', 
      'AREA': 'Vijayawada', 'STATE': 'Andhra Pradesh', 'PINCODE': '560011', 
      'CONTACT_PERSON': 'Mr.Lalit', 'TELNO': '9505523233', 'SALES_DISTRICT': 'Andhra Pradesh', 
      'DIST_STORAGE_LOCATION': 'AP-Vijayawada(Datta)', 'CATEGORY': 'D- Base',

      'VENDOR_NAME': 'Blue Star Ltd',

      'GRN_NO': '5000501227', 'GRN_DATE': '42899',
      'MATERIAL_CODE': 'DFBL131','PURCHASE_ORDER_NO': '2100011129',
      'SALES_ORDER_NO': '0000029195','ORDER_TYPE': 'ZDFI','ORDER_DATE': '43190',
      'DELIVERY_DATE': '43221', 'VENDOR_BILL_NO': '123',

      'CHANNEL': 'Retail',
      'ASSET_CATEGORY': 'New'     
    },
    { 
      'SRNO': '4',

      'EQUIPMENTN0': '2565365456','ASSETNO': '2724693', 'BARCODENO': '2012651',
              'VENDOR_MANUFACTURING_SERIALNO': 'NA','ASSET_DESCRIPTION': 'Blue Star 400 F Glass(Model No.GT400-A)',
              'ASSET_CAPACITY': '400 L','ASSET_TYPE': 'GLASS TOP','ATOS_GENERATED_NO': 'NS_01307931_1521010558247', 


     'PLANT': '1013', 'COSTCENTER': '718013',
      'ASSET_CAP_DATE': '42842', 'ASSET_VALUE': '21200',
      'TBASE_DEPOSIT_AMOUNT': '15000', 'AMOUNT_PAID_DATE': '43189', 'CHEQUENO': '56888', 
      'REFUND_AMOUNT_PAID': '0', 'REFUND_AMOUNT_PAID_DATE': '0', 'REMARKS': '0', 
      'SERVICE_CHARGE_AMOUNT_PAID_DATE': '43189', 'SERVICE_CHARGE_AMOUNT': '0', 
      'SERVICE_CHARGE_DUE_DATE': '0',   

      'RESELLER_CODE': '90071564', 'RESELLER_NAME': 'SAI SUDHA SUPER MARKET',
      'RESELLER_ADDRESS': 'OPP AN UNIVERSITY,RAIN TREE PARK,TEAK BLOCK,VIJAYAWADA', 
      'AREA': 'Vijayawada', 'STATE': 'Andhra Pradesh', 'PINCODE': '560011', 
      'CONTACT_PERSON': 'Mr.Lalit', 'TELNO': '9505523233', 'SALES_DISTRICT': 'Andhra Pradesh', 
      'DIST_STORAGE_LOCATION': 'AP-Vijayawada(Datta)', 'CATEGORY': 'D- Base',

      'VENDOR_NAME': 'Blue Star Ltd',

      'GRN_NO': '5000501227', 'GRN_DATE': '42899',
      'MATERIAL_CODE': 'DFBL131','PURCHASE_ORDER_NO': '2100011129',
      'SALES_ORDER_NO': '0000029195','ORDER_TYPE': 'ZDFI','ORDER_DATE': '43190',
      'DELIVERY_DATE': '43221', 'VENDOR_BILL_NO': '123',

      'CHANNEL': 'Retail',
      'ASSET_CATEGORY': 'New'     
    },
    { 
      'SRNO': '5',

     'EQUIPMENTN0': '2565365456','ASSETNO': '2724693', 'BARCODENO': '2012651',
              'VENDOR_MANUFACTURING_SERIALNO': 'NA','ASSET_DESCRIPTION': 'Blue Star 400 F Glass(Model No.GT400-A)',
              'ASSET_CAPACITY': '400 L','ASSET_TYPE': 'GLASS TOP','ATOS_GENERATED_NO': 'NS_01307931_1521010558247', 

      'PLANT': '1013', 'COSTCENTER': '718013',
      'ASSET_CAP_DATE': '42842', 'ASSET_VALUE': '21200',
      'TBASE_DEPOSIT_AMOUNT': '15000', 'AMOUNT_PAID_DATE': '43189', 'CHEQUENO': '56888', 
      'REFUND_AMOUNT_PAID': '0', 'REFUND_AMOUNT_PAID_DATE': '0', 'REMARKS': '0', 
      'SERVICE_CHARGE_AMOUNT_PAID_DATE': '43189', 'SERVICE_CHARGE_AMOUNT': '0', 
      'SERVICE_CHARGE_DUE_DATE': '0',   

      'RESELLER_CODE': '90071564', 'RESELLER_NAME': 'SAI SUDHA SUPER MARKET',
      'RESELLER_ADDRESS': 'OPP AN UNIVERSITY,RAIN TREE PARK,TEAK BLOCK,VIJAYAWADA', 
      'AREA': 'Vijayawada', 'STATE': 'Andhra Pradesh', 'PINCODE': '560011', 
      'CONTACT_PERSON': 'Mr.Lalit', 'TELNO': '9505523233', 'SALES_DISTRICT': 'Andhra Pradesh', 
      'DIST_STORAGE_LOCATION': 'AP-Vijayawada(Datta)', 'CATEGORY': 'D- Base',

      'VENDOR_NAME': 'Blue Star Ltd',

      'GRN_NO': '5000501227', 'GRN_DATE': '42899',
      'MATERIAL_CODE': 'DFBL131','PURCHASE_ORDER_NO': '2100011129',
      'SALES_ORDER_NO': '0000029195','ORDER_TYPE': 'ZDFI','ORDER_DATE': '43190',
      'DELIVERY_DATE': '43221', 'VENDOR_BILL_NO': '123',

      'CHANNEL': 'Retail',

      'ASSET_CATEGORY': 'New'     
    },
    { 
      'SRNO': '6',

      'EQUIPMENTN0': '2565365456','ASSETNO': '2724693', 'BARCODENO': '2012651',
              'VENDOR_MANUFACTURING_SERIALNO': 'NA','ASSET_DESCRIPTION': 'Blue Star 400 F Glass(Model No.GT400-A)',
              'ASSET_CAPACITY': '400 L','ASSET_TYPE': 'GLASS TOP','ATOS_GENERATED_NO': 'NS_01307931_1521010558247', 
            
      'PLANT': '1013', 'COSTCENTER': '718013',
      'ASSET_CAP_DATE': '42842', 'ASSET_VALUE': '21200',
      'TBASE_DEPOSIT_AMOUNT': '15000', 'AMOUNT_PAID_DATE': '43189', 'CHEQUENO': '56888', 
      'REFUND_AMOUNT_PAID': '0', 'REFUND_AMOUNT_PAID_DATE': '0', 'REMARKS': '0', 
      'SERVICE_CHARGE_AMOUNT_PAID_DATE': '43189', 'SERVICE_CHARGE_AMOUNT': '0', 
      'SERVICE_CHARGE_DUE_DATE': '0', 

      'RESELLER_CODE': '90071564', 'RESELLER_NAME': 'SAI SUDHA SUPER MARKET',
      'RESELLER_ADDRESS': 'OPP AN UNIVERSITY,RAIN TREE PARK,TEAK BLOCK,VIJAYAWADA', 
      'AREA': 'Vijayawada', 'STATE': 'Andhra Pradesh', 'PINCODE': '560011', 
      'CONTACT_PERSON': 'Mr.Lalit', 'TELNO': '9505523233', 'SALES_DISTRICT': 'Andhra Pradesh', 
      'DIST_STORAGE_LOCATION': 'AP-Vijayawada(Datta)', 'CATEGORY': 'D- Base',

      'VENDOR_NAME': 'Blue Star Ltd',

      'GRN_NO': '5000501227', 'GRN_DATE': '42899',
      'MATERIAL_CODE': 'DFBL131','PURCHASE_ORDER_NO': '2100011129',
      'SALES_ORDER_NO': '0000029195','ORDER_TYPE': 'ZDFI','ORDER_DATE': '43190',
      'DELIVERY_DATE': '43221', 'VENDOR_BILL_NO': '123', 

      'CHANNEL': 'Retail',
      'ASSET_CATEGORY': 'New'     
    },
    { 
      'SRNO': '7',

      'EQUIPMENTN0': '2565365456','ASSETNO': '2724693', 'BARCODENO': '2012651',
              'VENDOR_MANUFACTURING_SERIALNO': 'NA','ASSET_DESCRIPTION': 'Blue Star 400 F Glass(Model No.GT400-A)',
              'ASSET_CAPACITY': '400 L','ASSET_TYPE': 'GLASS TOP','ATOS_GENERATED_NO': 'NS_01307931_1521010558247', 
    

      'PLANT': '1013', 'COSTCENTER': '718013',
      'ASSET_CAP_DATE': '42842', 'ASSET_VALUE': '21200',
      'TBASE_DEPOSIT_AMOUNT': '15000', 'AMOUNT_PAID_DATE': '43189', 'CHEQUENO': '56888', 
      'REFUND_AMOUNT_PAID': '0', 'REFUND_AMOUNT_PAID_DATE': '0', 'REMARKS': '0', 
      'SERVICE_CHARGE_AMOUNT_PAID_DATE': '43189', 'SERVICE_CHARGE_AMOUNT': '0', 
      'SERVICE_CHARGE_DUE_DATE': '0',   

      'RESELLER_CODE': '90071564', 'RESELLER_NAME': 'SAI SUDHA SUPER MARKET',
      'RESELLER_ADDRESS': 'OPP AN UNIVERSITY,RAIN TREE PARK,TEAK BLOCK,VIJAYAWADA', 
      'AREA': 'Vijayawada', 'STATE': 'Andhra Pradesh', 'PINCODE': '560011', 
      'CONTACT_PERSON': 'Mr.Lalit', 'TELNO': '9505523233', 'SALES_DISTRICT': 'Andhra Pradesh', 
      'DIST_STORAGE_LOCATION': 'AP-Vijayawada(Datta)', 'CATEGORY': 'D- Base',

      'VENDOR_NAME': 'Blue Star Ltd',

      'GRN_NO': '5000501227', 'GRN_DATE': '42899',
      'MATERIAL_CODE': 'DFBL131','PURCHASE_ORDER_NO': '2100011129',
      'SALES_ORDER_NO': '0000029195','ORDER_TYPE': 'ZDFI','ORDER_DATE': '43190',
      'DELIVERY_DATE': '43221', 'VENDOR_BILL_NO': '123',

      'CHANNEL': 'Retail',
      'ASSET_CATEGORY': 'New'     
    }
  ];
  columns = [
    { name: 'SRNO', prop: 'SRNO' },
    { name: 'EQUIPMENTN0', prop: 'EQUIPMENTN0' },
    { name: 'PLANT', prop: 'PLANT' },
    { name: 'COSTCENTER', prop: 'COSTCENTER' },
    { name: 'ASSETNO', prop: 'ASSETNO' },
    { name: 'BARCODENO', prop: 'BARCODENO' },
    { name: 'VENDOR_MANUFACTURING_SERIALNO', prop: 'VENDOR_MANUFACTURING_SERIALNO' },
    { name: 'RESELLER_CODE', prop: 'RESELLER_CODE' },
    { name: 'RESELLER_NAME', prop: 'RESELLER_NAME' },
    { name: 'ASSET_DESCRIPTION', prop: 'ASSET_DESCRIPTION' },
    { name: 'VENDOR_NAME', prop: 'VENDOR_NAME' },
    { name: 'CHANNEL', prop: 'CHANNEL' },
    { name: 'ASSET_CAPACITY', prop: 'ASSET_CAPACITY' },
    { name: 'ASSET_TYPE', prop: 'ASSET_TYPE' },
    { name: 'ASSET_CAP_DATE', prop: 'ASSET_CAP_DATE' },
    { name: 'ASSET_VALUE', prop: 'ASSET_VALUE' },
    { name: 'GRN_NO', prop: 'GRN_NO' },
    { name: 'GRN_DATE', prop: 'GRN_DATE' },
    { name: 'MATERIAL_CODE', prop: 'MATERIAL_CODE' },
    { name: 'PURCHASE_ORDER_NO', prop: 'PURCHASE_ORDER_NO' },
    { name: 'SALES_ORDER_NO', prop: 'SALES_ORDER_NO' },
    { name: 'ORDER_TYPE', prop: 'ORDER_TYPE' },
    { name: 'ORDER_DATE', prop: 'ORDER_DATE' },
    { name: 'DELIVERY_DATE', prop: 'DELIVERY_DATE' },
    { name: 'VENDOR_BILL_NO', prop: 'VENDOR_BILL_NO' },
    { name: 'RESELLER_ADDRESS', prop: 'RESELLER_ADDRESS' },
    { name: 'AREA', prop: 'AREA' },
    { name: 'STATE', prop: 'STATE' },
    { name: 'PINCODE', prop: 'PINCODE' },
    { name: 'CONTACT_PERSON', prop: 'CONTACT_PERSON' },
    { name: 'TELNO', prop: 'TELNO' },
    { name: 'SALES_DISTRICT', prop: 'SALES_DISTRICT' },
    { name: 'DIST_STORAGE_LOCATION', prop: 'DIST_STORAGE_LOCATION' },
    { name: 'CATEGORY', prop: 'CATEGORY' },
    { name: 'ASSET_CATEGORY', prop: 'ASSET_CATEGORY' },
    { name: 'ATOS_GENERATED_NO', prop: 'ATOS_GENERATED_NO' },
    { name: 'TBASE_DEPOSIT_AMOUNT', prop: 'TBASE_DEPOSIT_AMOUNT' },
    { name: 'AMOUNT_PAID_DATE', prop: 'AMOUNT_PAID_DATE' },
    { name: 'CHEQUENO', prop: 'CHEQUENO' },
    { name: 'REFUND_AMOUNT_PAID', prop: 'REFUND_AMOUNT_PAID' },
    { name: 'REFUND_AMOUNT_PAID_DATE', prop: 'REFUND_AMOUNT_PAID_DATE' },
    { name: 'REMARKS', prop: 'REMARKS' },
    { name: 'SERVICE_CHARGE_AMOUNT_PAID_DATE', prop: 'SERVICE_CHARGE_AMOUNT_PAID_DATE' },
    { name: 'SERVICE_CHARGE_AMOUNT', prop: 'SERVICE_CHARGE_AMOUNT' },
    { name: 'SERVICE_CHARGE_DUE_DATE', prop: 'SERVICE_CHARGE_DUE_DATE' },
  ];
  selected: any[] = [];
  searchVal = '';
  sideNavOpened = true;


  data: any;
  constructor() { 

  }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
  updateFilter() {
    console.log(this.searchVal);
  }
  toggleButton(name){

    this.department[0].data = this.source[0].Asset; 
    this.department[1].data = this.source[0].Finance;
    this.department[2].data = this.source[0].Reseller; 
    this.department[3].data = this.source[0].OEM; 
    this.department[4].data = this.source[0].Purchase; 

    if(name == 'Asset'){
       this.department[0].show = true;
       this.department[1].show = false;
       this.department[2].show = false;
       this.department[3].show = false;
       this.department[4].show = false;
    }else if(name == 'Finance'){
      this.department[0].show = false;
       this.department[1].show = true;
       this.department[2].show = false;
       this.department[3].show = false;
       this.department[4].show = false;
    }else if(name == 'Reseller'){
      this.department[0].show = false;
       this.department[1].show = false;
       this.department[2].show = true;
       this.department[3].show = false;
       this.department[4].show = false;
    }else if(name == 'OEM'){
      this.department[0].show = false;
       this.department[1].show = false;
       this.department[2].show = false;
       this.department[3].show = true;
       this.department[4].show = false;
    }else if(name == 'Purchase'){
      this.department[0].show = false;
       this.department[1].show = false;
       this.department[2].show = false;
       this.department[3].show = false;
       this.department[4].show = true;
    }else if(name == 'All'){
      this.department[0].show = true;
       this.department[1].show = true;
       this.department[2].show = true;
       this.department[3].show = true;
       this.department[4].show = true;
    }else{

    }


  }
}
