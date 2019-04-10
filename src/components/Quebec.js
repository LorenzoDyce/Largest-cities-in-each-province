import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';





class Quebec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quebecData: {
                labels: ['Montréal', 'Québec', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke'],
                datasets: [
                  {
                    label: 'Population',
                    data: [1782844, 542706, 432858, 282596, 243778, 166863],
                    backgroundColor: [
                      'rgba(105,105,105, 0.6)',
                      'rgba(255,105,180, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(205,133,63, 0.6)'
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
                  data={this.state.quebecData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Cities In Quebec',
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
 
export default Quebec;