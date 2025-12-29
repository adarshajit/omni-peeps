import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="border-t py-6 md:py-8 mt-auto">
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
