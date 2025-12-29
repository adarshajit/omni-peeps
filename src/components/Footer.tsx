import React, { useEffect, useState } from 'react';

const Footer = (): JSX.Element => {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/adarshajit/omni-peeps/commits?per_page=1'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0] && data[0].commit && data[0].commit.committer) {
          const date = new Date(data[0].commit.committer.date);
          setLastUpdated(
            date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
          );
        }
      })
      .catch((err) =>
        console.error('Failed to fetch last commit date', err)
      );
  }, []);

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
          {lastUpdated && (
            <span className="ml-2 text-xs text-muted-foreground/60 block sm:inline">
              Last updated on {lastUpdated}
            </span>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
