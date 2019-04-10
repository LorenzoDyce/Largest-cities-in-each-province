import React, { Component } from 'react';
import { Bar} from 'react-chartjs-2';



class NewBrunswick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBrunswickData: {
                labels: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Riverview', 'Quispamsis'],
                datasets: [
                  {
                    label: 'Population',
                    data: [71889, 67575, 58220, 25384, 19667, 18245],
                    backgroundColor: [
                      'rgba(0,100,0, 0.6)',
                      'rgba(240,128,128, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(186,85,211, 0.6)',
                      'rgba(127,255,212, 0.6)',
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
                  data={this.state.newBrunswickData}
                  options={{
                    title: {
                      display: true,
                      text: 'Largest Cities In New Brunswick',
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
export default NewBrunswick;