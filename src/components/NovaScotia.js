import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';





class NovaScotia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            novaScotiaData: {
                labels: ["Halifax", 'Cape Breton', 'Truro', 'Amherst', 'New Glasgow', 'Bridgewater'],
                datasets: [
                  {
                    label: 'Population',
                    data: [403131, 29904, 12261, 9413, 9075, 8532],
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
                  data={this.state.novaScotiaData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Cities In Nova Scotia',
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
 
export default NovaScotia;