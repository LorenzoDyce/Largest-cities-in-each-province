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
                  'rgba(150, 180, 0, 0.6)',
                  'rgba(90, 262, 235, 0.6)',
                  'rgba(600, 206, 1, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(13, 102, 255, 0.6)',
                  'rgba(245, 119, 64, 0.6)'
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
          </div>);    
      }
  }
    
 
export default BritishColumbia;