import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] px-6 py-12 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-4">
          This platform is built for creators, by Aditya Kumar. Whether you're an artist, writer, developer, or educator—
          we believe in empowering you to share your work and connect with your supporters directly.
        </p>
        <p className="text-lg mb-4">
          Inspired by the spirit of independence and community, our mission is to help creators build sustainable
          income streams while staying true to their craft. No algorithms. No gatekeepers. Just you and your audience.
        </p>
        <p className="text-lg">
          Built with ❤️ using Next.js, Tailwind CSS, and MongoDB. This clone is a tribute to open-source learning,
          project-based growth, and the power of solo sprints.
        </p>
      </div>
    </div>
  )
}

export default About
export const metadata = {
  title: 'About get me a chai',
  description: '...',
}
 