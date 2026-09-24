export default function Contact() {
  return (
    <div className="min-h-screen bg-[#111] text-[#FAFAF7] pt-40 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2">
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-8">Say Hello.</h1>
          <p className="text-gray-400 leading-loose mb-12 text-sm tracking-[0.05em]">
            We would love to hear about your upcoming event, your vision, and how we can collaborate to create timeless, cinematic memories. 
          </p>
          <div className="space-y-6 text-xs uppercase tracking-[0.2em]">
            <div>
              <p className="text-gray-600 mb-1">Email</p>
              <a href="mailto:hello@thotzphotography.co.nz" className="hover:text-white transition-colors">hello@thotzphotography.co.nz</a>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Location</p>
              <p>Auckland, New Zealand</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <form className="space-y-8 text-sm">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Name</label>
              <input type="text" id="name" className="w-full bg-transparent border-b border-gray-700 pb-3 focus:outline-none focus:border-[#FAFAF7] transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Email</label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-gray-700 pb-3 focus:outline-none focus:border-[#FAFAF7] transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Inquiry Type</label>
              <input type="text" id="subject" className="w-full bg-transparent border-b border-gray-700 pb-3 focus:outline-none focus:border-[#FAFAF7] transition-colors" placeholder="e.g. Wedding, Portrait" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Message</label>
              <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-700 pb-3 focus:outline-none focus:border-[#FAFAF7] transition-colors resize-none" placeholder="Tell us more..."></textarea>
            </div>
            <button type="button" className="w-full border border-[#FAFAF7] text-[#FAFAF7] text-xs font-semibold uppercase tracking-[0.2em] py-5 hover:bg-[#FAFAF7] hover:text-[#111] transition-colors duration-500">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
