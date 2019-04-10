import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class Alberta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albertaData: {
                labels: ['Calgary', 'Edmonton', 'Red Deer', 'LethBridge', 'Wood Buffalo', 'St Albert'],
                datasets: [
                  {
                    label: 'Population',
                    data: [ 1200000, 930000, 100000, 93000, 72000, 66000],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)'
                    ],
                  }
                ]
              }    
        }
    }
    render() { 
        return ( <div className="chart">
        <Bar
          data={this.state.albertaData}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In Alberta',
              fontSize: 30
            },
            legend: {
              display: false,
              position: 'bottom',
              labels: {
                fontColor: '#000'
              }
            },
            layout: {
              padding: {
                left: 100,
                right: 100,
                bottom: 40,
                top: 110
              }
            },
            tooltips: {
              enabled: true
            }
          }}
        />
      </div> );
    }
}
 
export default Alberta;