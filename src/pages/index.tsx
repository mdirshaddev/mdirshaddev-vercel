import Head from 'next/head';

const LandingPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Md Irshad / ServiceNow Developer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Personal Portfolio built using Next.js and Supabase an alternative of Firebase'
        />
      </Head>
      <div>Landing page</div>
    </div>
  );
};

export default LandingPage;
