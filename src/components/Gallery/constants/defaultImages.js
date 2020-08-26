import full01 from '../../../assets/images/fulls/01.png'
import full02 from '../../../assets/images/fulls/02.png'
import full03 from '../../../assets/images/fulls/03.png'
import full04 from '../../../assets/images/fulls/04.png'
import thumb02 from '../../../assets/images/thumbs/fantasy.gif'
import thumb01 from '../../../assets/images/thumbs/mario.gif'
import thumb03 from '../../../assets/images/thumbs/covid.gif'
import thumb04 from '../../../assets/images/thumbs/charity.gif'

const link1 = "https://charity-tasker.netlify.app/"
const link2 = "https://yonimar87.github.io/project0-Tic-Tac-Toe/"
const link3 = "http://drinking-game-663f5.web.app/"
const link4 = "https://fantasyfootballyoni.herokuapp.com/"

export const DEFAULT_IMAGES = [

    {
      id: '4',
      source: full04,
      thumbnail: thumb04,
      caption: 'Charity Tasker',
      description: 'Charity Tasker - Users create a task that will be picked up and completed by another user once the donation goal has been met.',
      link: link1
    },
    {
      id: '2',
      source: full02,
      thumbnail: thumb02,
      caption: 'Fantasy Football',
      description: 'Created with Ruby - A Premier League fantasy football.',
      link: link4

    },
    {
      id: '1',
      source: full01,
      thumbnail: thumb01,
      caption: 'Mario Tic Tac Toe',
      description: 'My first project: a Mario Tic Tac Toe created with jQuery. ',
      link: link2

    },
    {
      id: '3',
      source: full03,
      thumbnail: thumb03,
      caption: 'COVID-19 Social',
      description: 'A group project using React.js and Firebase for deployment.',
      link: link3

    },

]
