import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import './css/styles.css'

class Experience extends Component {

  render() {
    return (
      <div class="experience block" id="experience-section">
        <div class="section">
          <h1 class="header"> The Journey So Far. </h1>
          <Timeline lineColor={'#ddd'}>
            <TimelineItem
              key="001"
              dateComponent={(
              <div
                style={{
                  display: 'block',
                  float: 'left',
                  margin: '-5% 0px 0px 0px',
                  padding: '6% 10% 6% 10%',
                  background: '#8551a8',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
              Apr 2020 – Present
              </div>
              )}
              style={{ color: '#8551a8' }}
              dateInnerStyle={{ background: '#8551a8', color: '#fff' }}
              bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              >
              <h3>Software Engineer, Twitch</h3>
              <h4>San Francisco, California</h4>
              <p>
                I'm currently working on a couple of services that help provide recommended streams to users
                at Twitch!
              </p>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateComponent={(
              <div
                style={{
                  display: 'block',
                  float: 'left',
                  margin: '-5% 0px 0px 0px',
                  padding: '6% 10% 6% 10%',
                  background: '#c47923',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
              Sept 2018 – Mar 2020
              </div>
              )}
              style={{ color: '#c47923' }}
              dateInnerStyle={{ background: '#c47923', color: '#fff' }}
              bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              >
              <h3>Software Engineer, Amazon.com Inc.</h3>
              <h4>Seattle, Washington</h4>
              <p>
                I worked on a service that provides expected delivery dates to customers.
                We vend all the ways we can ship a product to your doorstep. Our team also plays a part 
                in managing the transportation network at Amazon!
              </p>
              <p>
                One of my contributions includes creating the capability for customers in India to have orders
                be shipped through pallets, reducing operational load in their warehouses. I also handled preparing
                our service for Prime Day 2019!
              </p>
            </TimelineItem>
           <TimelineItem
              key="003"
              style={{ color: '#61b8ff' }}
              dateComponent={(
              <div
                style={{
                  display: 'block',
                  float: 'left',
                  margin: '-5% 0px 0px 0px',
                  padding: '6% 10% 6% 10%',
                  background: '#61b8ff',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
              Jun 2017 – Sept 2017
              </div>
              )}
              bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              >
              <h3 style={{ color: '#111111' }}>Software Engineer Intern, Amazon.com Inc.</h3>
              <h4 style={{ color: '#111111' }}>Seattle, Washington</h4>
              <p>
              I created a new service in Java that transformed product inventory plans
              from one format to another format. This helped with a migration to a new
              inventory plan model and aided in reducing the time needed for upstream
              clients to create new plans using this model.
              </p>
              <p>
              I streamlined multiple AWS services (Lambda, Dynamo DB, API Gateway) to allow for
              the creation and storage of these business rules. I also wrote comprehensive 
              documentation to allow my team to build on top of it if necessary.
              </p>
           </TimelineItem>
          <TimelineItem
            key="004"
            style={{ color: '#59ab94' }}
            dateComponent={(
            <div
              style={{
                display: 'block',
                float: 'left',
                margin: '-5% 0px 0px 0px',
                padding: '6% 10% 6% 10%',
                background: '#59ab94',
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
            April 2016 – April 2017
            </div>
            )}

            bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
            >
            <h3>Software Engineer, UCR Brain Game Center</h3>
            <h4>Riverside, California</h4>
            <p>
              I received an opportunity back in my university to help develop a 3D simulation in C#
              with the goal to improve hearing for people with audio deficiencies. The game plays
              similar to an endless runner except you need to listen to audio cues to avoid obstacles!
            </p>
            <p>
                My contributions included refactoring how levels and their components
                (obstacles, sound effects) are generated in the game. I also added new 
                features to improve the player's experience by adding a reward system and achievements.
            </p>
           </TimelineItem>
          </Timeline>
        </div>
      </div>

    )
  }
}

export default Experience