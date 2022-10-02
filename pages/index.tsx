import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title="Monitoring" description="Make developer's life easy" />
      <div className="flex justify-center p-5">
        <div className="text-xl underline decoration-sky-500 underline-offset-4">
          If you see this page, you probably typed <b>Hello World!</b>
        </div>
      </div>
    </>
  );
}
