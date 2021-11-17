import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outage',
  templateUrl: './outage.component.html',
  styleUrls: ['./outage.component.css']
})
export class OutageComponent implements OnInit {

  issues = [
    {
      issueName: 'High GDA Response Time',
      id: 'highGDAResponseTime',
      time: '3 minutes ago',
      action: [{
        name: 'Create Incident and send Email to Cassandra team',
        star: 5
      }, {
        name: 'Stop consumer apps',
        star: 4
      }, {
        name: 'Restart GDA instances',
        star: 3
      }],
      possibleReasons: 'New APP version pushed. Memory high.'
    },
    {
      issueName: 'AMQP queue no consumer',
      id: 'AmqpQueueNoConsumer',
      time: '7 minutes ago',
      action: [{
        name: 'Restart the application',
        star: 5
      }, {
        name: 'Increase memory',
        star: 4
      }, {
        name: 'Email to dev team',
        star: 3
      }],
      possibleReasons: 'New APP version pushed. Memory high.'
    },
    {
      issueName: 'LZ uploader abnormal upload rate',
      id: 'LzUploaderAbnormalUploadRate',
      time: '30 minutes ago',
      action: [{
        name: 'Send Email to PH team',
        star: 5
      }, {
        name: 'Create Incident',
        star: 4
      }, {
        name: 'Call MIM',
        star: 3
      }],
      possibleReasons: 'New APP version pushed. Memory high.'
    }
  ]

  solutionList = [{
    name: 'Create Incident and send Email to Cassandra team',
    star: 5
  },
  {
    name: 'Stop consumer apps',
    star: 4
  },
   {
    name: 'Restart GDA instances',
    star: 3
  } ];

  reasons = 'New APP version pushed. Memory high.';

  constructor() { }

  ngOnInit() {
  }

  selectIssue(event: any) {
    console.log('event', event);
    this.solutionList = event.action;
    this.reasons = event.possibleReasons;
  }

}
