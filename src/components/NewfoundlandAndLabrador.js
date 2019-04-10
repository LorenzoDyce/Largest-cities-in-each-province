import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';





class NewfoundlandAndLabrador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newfoundlandAndLabradorData: {
                labels: ["St. John's", 'Conception Bay South', 'Mount Pearl', 'Paradise', 'Corner Brook', 'Grand Falls - Windsor'],
                datasets: [
                  {
                    label: 'Population',
                    data: [108860, 26199, 22957, 21389, 19806, 14171],
                    backgroundColor: [
                      'rgba(0,250,154, 0.6)',
                      'rgba(100,149,237, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(148,0,211, 0.6)'
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
                  data={this.state.newfoundlandAndLabradorData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Cities In Newfoundland And Labrador',
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
 
export default NewfoundlandAndLabrador;