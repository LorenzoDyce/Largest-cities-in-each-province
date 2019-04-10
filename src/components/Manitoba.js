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
                  'rgba(86, 187, 255, 0.6)',
                  'rgba(105, 244, 123, 0.6)',
                  'rgba(255, 97, 86, 0.6)',
                  'rgba(255, 246, 5, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'
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
          </div>)
     }
 }
    
  
 
export default Manitoba;