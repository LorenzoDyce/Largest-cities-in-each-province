import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';





class PrinceEdwardIsland extends Component {
    constructor(props) {
        super(props);
        this.state = {
            princeEdwardIslandData: {
                labels: ['Charlottetown', 'Summerside', 'Cornwall', 'Montague', 'Kensington', 'Souris'],
                datasets: [
                  {
                    label: 'Population',
                    data: [2731571, 934243, 721599, 593638, 536917, 383822],
                    backgroundColor: [
                      'rgba(255,0,255, 0.6)',
                      'rgba(255,165,0, 0.6)',
                      'rgba(144,238,144, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(70,130,180, 0.6)'
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
                  data={this.state.princeEdwardIslandData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Centres In Prince Edward Island',
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
 
export default PrinceEdwardIsland;