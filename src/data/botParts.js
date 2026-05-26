import robot1 from '../assets/images/robot-1.png'
import robot2 from '../assets/images/robot-2.png'
import robot3 from '../assets/images/robot-3.png'

export const botParts = [
  {
    id: 1,
    title: 'Mobile Platform',
    subtitle: 'Built for the Field',
    icon: '🚜',
    description:
      'AgroBot is mounted on a rugged steel frame with heavy-duty all-terrain wheels, designed to navigate through agricultural fields with ease.',
    image: robot2,
    highlight: { x: 60, y: 65, size: 65 },
    color: 'from-orange-500 to-amber-500',
    position: { x: 15, y: 25 },
    cardSide: 'right',
  },
  {
    id: 2,
    title: 'AI Vision System',
    subtitle: 'Smart Plant Detection',
    icon: '👁️',
    description:
      'Equipped with a high-resolution camera and AI, AgroBot scans and analyzes every plant — instantly identifying if it is healthy or damaged.',
    image: robot2,
    highlight: { x:60, y: 50, size: 30 },
    color: 'from-cyan-500 to-blue-500',
    position: { x: 75, y: 20 },
    cardSide: 'left',
  },
  {
    id: 3,
    title: 'Precision Movement',
    subtitle: 'Linear Guide + Stepper Motor',
    icon: '⚙️',
    description:
      'A stepper motor drives a linear guide system that precisely positions the laser above the target — accuracy down to the millimeter.',
    image: robot2,
    highlight: { x: 45, y: 50, size: 25 },
    color: 'from-purple-500 to-pink-500',
    position: { x: 20, y: 55 },
    cardSide: 'right',
  },
  {
    id: 4,
    title: 'CO₂ Laser System',
    subtitle: 'Targeted Laser Treatment',
    icon: '🎯',
    description:
      'A powerful CO₂ laser beam, guided through precision mirrors, burns the damaged plant root cleanly — chemical-free farming.',
    image: robot2,
    highlight: { x: 45, y: 45, size: 55 },
    color: 'from-red-500 to-rose-500',
    position: { x: 80, y: 60 },
    cardSide: 'left',
  },
  {
    id: 5,
    title: 'Fire Safety System',
    subtitle: 'Built-in Fire Protection',
    icon: '🔥',
    description:
      'An integrated fire extinguishing system with a servo-controlled water pump activates instantly if any spark is detected during operation.',
    image: robot3,
    highlight: { x: 65, y: 75, size: 60 },
    color: 'from-yellow-500 to-orange-500',
    position: { x: 50, y: 88 },
    cardSide: 'right',
  },
  {
  id: 6,
  title: 'Meet AgroBot',
  subtitle: 'The Complete Picture',
  icon: '🤖',
  description:
    'AgroBot combines AI, precision robotics, and safety systems into one autonomous machine. It revolutionizes agriculture by eliminating harmful pesticides, reducing manual labor, and protecting crops with unmatched accuracy. Smarter farming. Healthier crops. A greener future. 🌱',
  isFinal: true, // flag special
  images: [robot1, robot2, robot3], // l 3 swar lal slideshow
  color: 'from-green-400 via-emerald-500 to-cyan-400',
  position: { x: 50, y: 50 },
  cardSide: 'right',
},
]
