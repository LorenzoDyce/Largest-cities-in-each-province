import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';



class Manitoba extends Component {
 constructor(props) {
     super(props);
     this.state = {
        manitobaData: {
            labels: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie', 'Winkler'],
            datasets: [
              {
                label: 'Population',
                data: [705244, 48859, 15829, 13678, 13304, 12591],
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
              data={this.state.manitobaData}
              options={{
                title: {
                  display: true,
                  text: 'Largest Cities In Manitoba',
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
          </div>)
     }
 }
    
  
 
export default Manitoba;