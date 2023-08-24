import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-32 flex flex-col gap-5">
        <div className="flex justify-between items-center">
            <h3 className="text-3xl max-sm:text-xl text-white">
            hendrix<span className="font-semibold text-my-green">thecoder</span>
            </h3>
            <div className="flex gap-6 text-my-gray">
                <a href="https://www.github.com/hendrixthecoder" target='_blank' rel='noreferrer'>
                    <FaGithub size={30} className='hover:text-my-green transition-all duration-500'/>
                </a>
                <a href="https://www.linkedin.com/in/johnbull-biobele/" target='_blank' rel='noreferrer'>
                    <FaLinkedin size={30} className='hover:text-my-green transition-all duration-500 '/>
                </a>
                <a href="https://twitter.com/hendrixthecoder?s=21&t=e5iYLwxIhjgZyMYU6W_-rQ" target='_blank' rel='noreferrer'>
                    <FaTwitter size={30} className='hover:text-my-green transition-all duration-500 '/>
                </a>
            </div>
        </div>
        <div className="border-b border-my-gray"></div>
        <h3 className='text-center text-sm text-white mb-10'>© {new Date().getFullYear()} hendrix<span className='text-my-green font-medium'>thecoder</span>. All rights reserved.</h3>
    </footer>
  )
}

export default Footer