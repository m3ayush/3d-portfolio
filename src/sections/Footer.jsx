const Footer = () => {
    return (
      <footer id="socials" className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/m3ayush" target="blank">
            <div className="social-icon">
              <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/ayushman-bhatnagar-022b6b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">
            <div className="social-icon">
              <img src="/assets/Lin.png" alt="linkedIn" className="w-1/2 h-1/2" />
            </div>
          </a>

          <a href="https://x.com/m3ayush?t=JKxhUXrYLi0LQPe_cr_iEg&s=08" target="blank">
            <div className="social-icon">
              <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
            </div>     
          </a>
          
          <a href="https://www.instagram.com/m3ayush?igsh=MTV2ZzdyZDQ1cjdrYg==" target="blank">
            <div className="social-icon">
              <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </div>
          </a>


        </div>
        
  
        <p className="text-white-500">© 2024 Ayushman Bhatnagar. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;