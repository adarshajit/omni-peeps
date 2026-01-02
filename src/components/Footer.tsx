import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="p-14 md:py-8 mt-36">
      <img src="https://assets.website-files.com/5e51b3b0337309d672efd94c/5e51cc5933d368febc351897_footer-img.svg" alt="footer-img" className="h-32 mb-4 flex items-center justify-center w-full"/>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-0">
        <p className="text-center text-sm text-balance leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href="https://www.linkedin.com/in/adarshajit/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            adarshajit
          </a>
          . The source code is available on{' '}
          <a
            href="https://github.com/adarshajit/omni-peeps"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
