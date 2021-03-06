import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';





class Saskatchewan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saskatchewanData: {
                labels: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current', 'Yorkton'],
                datasets: [
                  {
                    label: 'Population',
                    data: [246376, 215106, 35926, 33890, 16604, 16343],
                    backgroundColor: [
                      'rgba(75,0,130, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(128,0,0, 0.6)',
                      'rgba(255,215,0, 0.6)',
                      'rgba(0,191,255, 0.6)',
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
                  data={this.state.saskatchewanData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Cities In Saskatchewan',
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
 
export default Saskatchewan;