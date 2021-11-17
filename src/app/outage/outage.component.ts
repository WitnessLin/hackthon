import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outage',
  templateUrl: './outage.component.html',
  styleUrls: ['./outage.component.css']
})
export class OutageComponent implements OnInit {

  issue = 'highGDAResponseTime';

  issues = [
    {
      issueName: 'High GDA Response Time',
      id: 'highGDAResponseTime',
      time: '3 minutes ago',
      description: "Average GDA response time larger than 0.5s for 1@prd : 0.67s",
      action: [{
        name: 'Create Incident and send Email to Cassandra team',
        star: 5,
        points: 8.5,
        index: 'one',
        steps: ['Create a IT ticket on https://dell.service-now.com/sp , assign it to Cassandra team', 'Send email to Cassandra team with the ticket number.']
      }, {
        name: 'Stop consumer apps',
        star: 4,
        points: 7.8,
        index: 'two',
        steps: ['Go to https://ciqjenkins.lss.emc.com/job/Restricted/job/PRD_App_Mgmt/build?delay=0sec and click TASK stop.']
      }, {
        name: 'Restart GDA instances',
        star: 3,
        points: 6.8,
        index: 'three',
        steps: ['Go to https://ciqjenkins.lss.emc.com/job/Restricted/job/PRD_App_Mgmt/build?delay=0sec and click Restart.']
      }],
      possibleReasons: ['Slow HTTP response time', 'High Cassandra response time', 'High tomcat busy threads'],
      evidence: [
        'assets/img/highgda1.jpg',
        'assets/img/highgda2.jpg',
        'assets/img/highgda3.jpg'
      ],
      log: 'assets/img/highgdalog.jpg'
    },
    {
      issueName: 'AMQP queue no consumer',
      id: 'AmqpQueueNoConsumer',
      time: '7 minutes ago',
      description: "lz-uploader abnormal upload rate. Please check the lz-uploader dashboard in metrics-svc",
      action: [{
        name: 'Restart the application',
        star: 5,
        points: 7.8,
        index: 'one',
        steps: []
      }, {
        name: 'Increase memory',
        star: 4,
        points: 7.5,
        index: 'two',
        steps: ['Go to https://ciqjenkins.lss.emc.com/job/Restricted/job/PRD_App_Mgmt/build?delay=0sec and click configure_app.']
      }, {
        name: 'Email to dev team',
        star: 3,
        points: 6.9,
        index: 'three',
        steps: []
      }],
      possibleReasons: ['Consumer APP crashed', 'Low application instances', 'Maintenance activities'],
      evidence: [
        'assets/img/amqp1.png',
        'assets/img/amqp2.jpg',
        'assets/img/amqp3.png'
      ],
    },
    {
      issueName: 'LZ uploader abnormal upload rate',
      id: 'LzUploaderAbnormalUploadRate',
      time: '30 minutes ago',
      description: "No consumer for email-digest.queue@CIQ_PROD on pcf",
      action: [{
        name: 'Send Email to PH team',
        star: 5,
        points: 8.9,
        index: 'one',
      }, {
        name: 'Create Incident',
        star: 4,
        points: 8.3,
        index: 'two',
      }, {
        name: 'Call MIM',
        star: 3,
        points: 7.5,
        index: 'three',
      }],
      possibleReasons: ['SC/Phone Home issue', 'Abnormal PowerVault performance data', 'High rate of lz-uploader uploaded files'],
      evidence: [
        'assets/img/lz1.jpg',
        'assets/img/lz2.jpg',
        'assets/img/lz3.jpg'
      ],
    }
  ]

  solutionList = [{
    name: 'Create Incident and send Email to Cassandra team',
    star: 5,
    points: 8.5,
    index: 'one',
  }, {
    name: 'Stop consumer apps',
    star: 4,
    points: 7.8,
    index: 'two',
  }, {
    name: 'Restart GDA instances',
    star: 3,
    points: 6.8,
    index: 'three',
  }];

  reasons = ['Slow HTTP response time', 'High Cassandra response time', 'High tomcat busy threads'];

  evidenceList = [
    'assets/img/highgda1.jpg',
    'assets/img/highgda2.jpg',
    'assets/img/highgda3.jpg'
  ];

  log = '';

  constructor() { }

  ngOnInit() {
    this.selectIssue(this.issues[0])
  }

  selectIssue(event: any) {
    console.log('event', event);
    this.solutionList = event.action;
    this.reasons = event.possibleReasons;
    this.evidenceList = event.evidence;
    this.log = event.log;
    this.issue = event.id;
  }

}
