import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rma',
  templateUrl: './rma.component.html',
  styleUrls: ['./rma.component.scss']
})
export class RMAComponent implements OnInit {
  public options = {
    spinable: true,
    buttonWidth: 40,
};

public wings = [
    {
        'title': 'iPad',
        'color': '#ea2a29',
        'icon': {'name': 'fa fa-tablet'}
    }, {
        'title': 'iMac',
        'color': '#f16729',
        'icon': {'name': 'fa fa-laptop'}
    }, {
        'title': 'iPhone',
        'color': '#f89322',
        'icon': {'name': 'fa fa-mobile'}
    }, {
        'title': 'iWatch',
        'color': '#ffcf14',
        'icon': {'name': 'fa fa-clock-o'}
    }
];

public gutter = {
    top: 30,
};

public startAngles = {
    topLeft: -20,
}

  assetno: any = '';
  rows = [
    {
      'SrNo': '1',
      'Particular': 'Vadilal Industries ltd',
      'Gatepass': 'MC 3190',
      'GatepassDate': '08-05-14',
      'Device_Problem': [
        { 'SrNo': '1', 'Device': 'Battery charging slot problame and batery door damage', 'Problem': 'Problem 1', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '2', 'Device': 'Battery charging slot problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '3', 'Device': 'Battery door damage', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '4', 'Device': 'Charging problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '5', 'Device': 'Battery problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '6', 'Device': 'Screen Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '7', 'Device': 'Touch Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '8', 'Device': 'Broken', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' }
      ],
      'ServiceCenter': 'SEND TO PARTY',
      'DCNo': '',
      'SendToServiceCenterDate': '08-08-14',
      'ReceivedFromServiceCenterDate': '08-20-14',
      'ReturnedToPartyDate': '08-23-14',
      'CourierDate': '',
      'Status': 'open'
    },
    {
      'SrNo': '2',
      'Particular': 'JBF Industries ltd',
      'Gatepass': 'MC 2180',
      'GatepassDate': '07-17-14',
      'Device_Problem': [
        { 'SrNo': '1', 'Device': 'Battery charging slot problame and batery door damage', 'Problem': 'Problem 1', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '2', 'Device': 'Battery charging slot problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '3', 'Device': 'Battery door damage', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' }
      ],
      'ServiceCenter': 'SEND TO PARTY',
      'DCNo': '',
      'SendToServiceCenterDate': '08-11-14',
      'ReceivedFromServiceCenterDate': '08-23-14',
      'ReturnedToPartyDate': '08-23-14',
      'CourierDate': '',
      'Status': 'Done'
    },
    {
      'SrNo': '3',
      'Particular': 'Raj Barcode',
      'Gatepass': 'MC 45',
      'GatepassDate': '',
      'Device_Problem': [
        { 'SrNo': '1', 'Device': 'Battery charging slot problame and batery door damage', 'Problem': 'Problem 1', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '2', 'Device': 'Battery charging slot problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '3', 'Device': 'Battery door damage', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '4', 'Device': 'Charging problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '5', 'Device': 'Battery problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '6', 'Device': 'Screen Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '7', 'Device': 'Touch Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' }
      ],
      'ServiceCenter': 'Bangalore',
      'DCNo': '',
      'SendToServiceCenterDate': '08-06-14',
      'ReceivedFromServiceCenterDate': '09-10-14',
      'ReturnedToPartyDate': '11-17-14',
      'CourierDate': '',
      'Status': 'wip'
    },
    {
      'SrNo': '4',
      'Particular': 'cera ',
      'Gatepass': 'mc 2180',
      'GatepassDate': '',
      'Device_Problem': [
        { 'SrNo': '1', 'Device': 'Battery charging slot problame and batery door damage', 'Problem': 'Problem 1', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '2', 'Device': 'Battery charging slot problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '3', 'Device': 'Battery door damage', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '4', 'Device': 'Charging problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '5', 'Device': 'Battery problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '6', 'Device': 'Screen Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '7', 'Device': 'Touch Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '8', 'Device': 'Broken', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' }
      ],
      'ServiceCenter': 'Bangalore',
      'DCNo': '',
      'SendToServiceCenterDate': '',
      'ReceivedFromServiceCenterDate': '',
      'ReturnedToPartyDate': 'Office',
      'CourierDate': '',
      'Status': 'Done'
    },
    {
      'SrNo': '5',
      'Particular': 'Raj Barcode',
      'Gatepass': 'AP 6521',
      'GatepassDate': '',
      'Device_Problem': [
        { 'SrNo': '1', 'Device': 'Battery charging slot problame and batery door damage', 'Problem': 'Problem 1', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '2', 'Device': 'Battery charging slot problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '3', 'Device': 'Battery door damage', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '4', 'Device': 'Charging problame', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '5', 'Device': 'Battery problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '6', 'Device': 'Screen Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '7', 'Device': 'Touch Problem', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' },
        { 'SrNo': '8', 'Device': 'Broken', 'Problem': 'Problem', 'SerialNo': '', 'RMANo': '85836901' }
      ],
      'ServiceCenter': 'SEND TO PARTY',
      'DCNo': '',
      'SendToServiceCenterDate': '08-13-14',
      'ReceivedFromServiceCenterDate': '08-23-14',
      'ReturnedToPartyDate': 'Office',
      'CourierDate': '',
      'Status': 'wip'
    }
  ];
  columns = [
    { name: 'SrNo', prop: 'SrNo' },
    { name: 'Particular', prop: 'Particular' },
    { name: 'Gatepass', prop: 'Gatepass' },
    { name: 'GatepassDate', prop: 'GatepassDate' },
    { name: 'Device & Problem', prop: 'Device_Problem' },
    { name: 'ServiceCenter', prop: 'ServiceCenter' },
    { name: 'Problem', prop: 'Problem' },
    { name: 'SerialNo', prop: 'SerialNo' },
    { name: 'RMANo', prop: 'RMANo' },
    { name: 'DCNo', prop: 'DCNo' },
    { name: 'SendToServiceCenterDate', prop: 'SendToServiceCenterDate' },
    { name: 'ReceivedFromServiceCenterDate', prop: 'ReceivedFromServiceCenterDate' },
    { name: 'ReturnedToPartyDate', prop: 'ReturnedToPartyDate' },
    { name: 'CourierDate', prop: 'CourierDate' },
    { name: 'Status', prop: 'Status' }
  ];

  constructor() { }

  ngOnInit() {

  }

}
