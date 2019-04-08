import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';



class BritishColumbia extends Component {
  constructor(props) {
      super(props);
      this.state = {
        britishColumbiaData: {
            labels: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Langley', 'Abbotsford'],
            datasets: [
              {
                label: 'Population',
                data: [672963, 569065, 248476, 216300, 154867, 151923],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ],
              }
            ]
          }
        }
      }
      render() {
        return (
          <div className="chart">
            <Bar
              data={this.state.britishColumbiaData}
              options={{
                title: {
                  display: true,
                  text: 'Largest Cities In British Columbia',
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
                    left: 90,
                    right: 90,
                    bottom: 40,
                    top: 40
                  }
                },
                tooltips: {
                  enabled: true
                }
              }}
            />
          </div>);    
      }
  }
    
 
export default BritishColumbia;