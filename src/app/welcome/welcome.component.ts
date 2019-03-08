import { Component, OnInit } from '@angular/core';

import { testmodule } from "../../testfile";


import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpParameterCodec
} from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  rows = [
    {
      "Area": "Ahmedabad",
      "State": "Gujarat",
      "Pincode": "380001",
      "ContactPerson": "Nobita",
      "ContactNo": "9787952020",
      "SalesDistrict": "Gujarat",
      "DistStorageLocation": "G-Guj",
      "Category": "A- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "10000",
      "AmountPaidDate": "30/01/2017",
      "ChequeNo": "654564",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/01/2017",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2020"
    },
    {
      "Area": "Dhuliya",
      "State": "Maharastra",
      "Pincode": "420001",
      "ContactPerson": "John",
      "ContactNo": "8123654789",
      "SalesDistrict": "Gujarat",
      "DistStorageLocation": "VB-(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "12000",
      "AmountPaidDate": "20/01/2016",
      "ChequeNo": "474568",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2016",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Patna",
      "State": "Bihar",
      "Pincode": "380202",
      "ContactPerson": "Govinda",
      "ContactNo": "9505523233",
      "SalesDistrict": "Bihar",
      "DistStorageLocation": "BA-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Chandigarh",
      "State": "Haryana ",
      "Pincode": "423321",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "7236548632",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "HP-Haryana (Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Avinash",
      "ContactNo": "8302564789",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Ranchi",
      "State": "Jharkhand",
      "Pincode": "321540",
      "ContactPerson": "Manish",
      "ContactNo": "7123205698",
      "SalesDistrict": "Jharkhand",
      "DistStorageLocation": "JH-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Bhopal",
      "State": "Madhya Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Pannalal",
      "ContactNo": "9765458238",
      "SalesDistrict": "Madhya Pradesh",
      "DistStorageLocation": "MP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "",
      "RefundAmountPaidDate": "",
      "Remarks": "",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    },
    {
      "Area": "Vijayawada",
      "State": "Andhra Pradesh",
      "Pincode": "560011",
      "ContactPerson": "Mr.Lalit",
      "ContactNo": "9505523233",
      "SalesDistrict": "Andhra Pradesh",
      "DistStorageLocation": "AP-Vijayawada(Datta)",
      "Category": "D- Base",
      "AssetCondition": "New",
      "AtosGEnerateNo": "NS_01307931_1521010558247",
      "Tbase_DepositAmt": "15000",
      "AmountPaidDate": "30/03/2018",
      "ChequeNo": "56888",
      "RefundAmount": "Nil",
      "RefundAmountPaidDate": "N/A",
      "Remarks": "N/A",
      "ServiceChargeAmountPaidDate": "30/03/2018",
      "ServiceChargeAmount": "NA",
      "ServiceChargeDueDate": "29/03/2019"
    }];

  /* columns = [
     { prop: 'name' },
     { name: 'Gender' },
     { name: 'Company' }
   ];*/

  columns = [
    { prop: "Area" },
    { prop: "State" },
    { prop: "Pincode" },
    { prop: "ContactPerson" },
    { prop: "ContactNo" },
    { prop: "SalesDistrict" },
    { prop: "DistStorageLocation" },
    { prop: "Category" },
    { prop: "AssetCondition" },
    { prop: "AtosGEnerateNo" },
    { prop: "State" },
    { prop: "Tbase_DepositAmt" },
    { prop: "AmountPaidDate" },
    { prop: "ChequeNo" },
    { prop: "RefundAmount" },
    { prop: "RefundAmountPaidDate" },
    { prop: "Remarks" },
    { prop: "ServiceChargeAmountPaidDate" },
    { prop: "ServiceChargeAmount" },
    { prop: "ServiceChargeDueDate" }];

  value = '';
  temp: any[] = [];


  public checkModel: any = { left: true, middle: false, right: false };
  showDock: boolean = true;
  map: any = { lat: 23.036406, lng: 72.561066 };
  origin = { lat: 24.799448, lng: 120.979021 };
  destination = { lat: 24.799524, lng: 120.975017 };

   _opened: boolean = false;
   _modeNum: number = 0;
   _positionNum: number = 0;
   _dock: boolean = false;
   _closeOnClickOutside: boolean = false;
   _closeOnClickBackdrop: boolean = false;
   _showBackdrop: boolean = false;
   _animate: boolean = true;
   _trapFocus: boolean = true;
   _autoFocus: boolean = true;
   _keyClose: boolean = false;
   _autoCollapseHeight: number = null;
   _autoCollapseWidth: number = null;
   _MODES: Array<string> = ['over', 'push', 'slide'];
   _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  constructor(private httpC: HttpClient) {
    //testmodule.testMethod();
    // this.httpC.get('http://localhost:8080/dowork').toPromise().then(res=>{
    //   console.log("---- Data Receive -----",res);
    // }).catch(err=>{
    //    console.log("---- Error -----",err)
    // });
  //   exec('node --version', code => {
  //     console.log('"=========  Exit code: ==============', code);
  //  });

   this.temp = [
      {
        "Area": "Ahmedabad",
        "State": "Gujarat",
        "Pincode": "380001",
        "ContactPerson": "Nobita",
        "ContactNo": "9787952020",
        "SalesDistrict": "Gujarat",
        "DistStorageLocation": "G-Guj",
        "Category": "A- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "10000",
        "AmountPaidDate": "30/01/2017",
        "ChequeNo": "654564",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/01/2017",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2020"
      },
      {
        "Area": "Dhuliya",
        "State": "Maharastra",
        "Pincode": "420001",
        "ContactPerson": "John",
        "ContactNo": "8123654789",
        "SalesDistrict": "Gujarat",
        "DistStorageLocation": "VB-(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "12000",
        "AmountPaidDate": "20/01/2016",
        "ChequeNo": "474568",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2016",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Patna",
        "State": "Bihar",
        "Pincode": "380202",
        "ContactPerson": "Govinda",
        "ContactNo": "9505523233",
        "SalesDistrict": "Bihar",
        "DistStorageLocation": "BA-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Chandigarh",
        "State": "Haryana ",
        "Pincode": "423321",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "7236548632",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "HP-Haryana (Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Avinash",
        "ContactNo": "8302564789",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Ranchi",
        "State": "Jharkhand",
        "Pincode": "321540",
        "ContactPerson": "Manish",
        "ContactNo": "7123205698",
        "SalesDistrict": "Jharkhand",
        "DistStorageLocation": "JH-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Bhopal",
        "State": "Madhya Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Pannalal",
        "ContactNo": "9765458238",
        "SalesDistrict": "Madhya Pradesh",
        "DistStorageLocation": "MP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "",
        "RefundAmountPaidDate": "",
        "Remarks": "",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      },
      {
        "Area": "Vijayawada",
        "State": "Andhra Pradesh",
        "Pincode": "560011",
        "ContactPerson": "Mr.Lalit",
        "ContactNo": "9505523233",
        "SalesDistrict": "Andhra Pradesh",
        "DistStorageLocation": "AP-Vijayawada(Datta)",
        "Category": "D- Base",
        "AssetCondition": "New",
        "AtosGEnerateNo": "NS_01307931_1521010558247",
        "Tbase_DepositAmt": "15000",
        "AmountPaidDate": "30/03/2018",
        "ChequeNo": "56888",
        "RefundAmount": "Nil",
        "RefundAmountPaidDate": "N/A",
        "Remarks": "N/A",
        "ServiceChargeAmountPaidDate": "30/03/2018",
        "ServiceChargeAmount": "NA",
        "ServiceChargeDueDate": "29/03/2019"
      }];


 }

  ngOnInit() {
    this.initLocalClocks();
    this.setUpMinuteHands();
    //this.moveMinuteHands()
  }



  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  private _onOpened(): void {
    this.showDock = false;
  }

  private _onCloseStart(): void {
    //console.info('Sidebar closing');
  }

  private _onClosed(): void {
    this.showDock = true;
  }

  private _onTransitionEnd(): void {
    console.info('Transition ended');
  }

  private _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }

  updateFilter() {

    console.log("---updateFilter---" + this.value);
    const val = this.value.toLowerCase();
    console.log("---updateFilter---" + val)
    if (val != "") {
      this.rows = this.temp.filter(function (item) {

        if (item.Area.toLowerCase().indexOf(val) !== -1 || null) {
          return true;
        }
        else {
          return false;
        }
      });
    }
    else {
      this.rows = this.temp;
    }

  }

  initLocalClocks() {
    // Get the local time using JS
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    console.log("==== date ===",date+"===="+seconds+"-----"+minutes+"----"+hours)
    // Create an object with each hand and it's angle in degrees
    let hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ];
    // Loop through each of these hands to set their angle
    for (var j = 0; j < hands.length; j++) {
      var elements = <HTMLScriptElement[]><any>document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {

        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';

          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'minutes') {
            elements[k].setAttribute('data-second-angle', ''+hands[j + 1].angle);
          }
      }
    }
  }

  setUpMinuteHands() {
    // Find out how far into the minute we are
    let containers = document.querySelectorAll('.minutes-container');
    let secondAngle = containers[0].getAttribute("data-second-angle");
    if (Number(secondAngle) > 0) {
      // Set a timeout until the end of the current minute, to move the hand
      var delay = (((360 - Number(secondAngle)) / 6) + 0.1) * 1000;
      setTimeout(function() {
        this.moveMinuteHands(containers);
      }, delay);
    }
  }

  /*
   * Do the first minute's rotation
   */
   moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.webkitTransform = 'rotateZ(6deg)';
      containers[i].style.transform = 'rotateZ(6deg)';
    }
    // Then continue with a 60 second interval
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 12;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 60000);
  }


}
